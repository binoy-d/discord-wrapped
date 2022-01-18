
"""
Wrapped - A Discord Bot for message data collection
Author: Evan Nguyen 

Contributors: Atul Nair
"""

import os
import time
import pickle
import pandas as pd
from dotenv import load_dotenv

import discord
from discord.ext import commands
from discord_components import Button, Select, SelectOption, ComponentsBot
#LOAD------------------------------------------------------------
botCommands = {}
dPATH = "data/"

def get_prefix(bot, msg):
    with open(dPATH + '.prefix.pkl', "rb") as ppkl:
        prefixes = pickle.load(ppkl)

    return prefixes[str(msg.guild.id)]

def genEmbed(title, description=""):
    embed = discord.Embed(
        colour = 1973790,
        title = title,
        description = description
    )
    return embed

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = commands.Bot(command_prefix = get_prefix)
ComponentsBot(bot) #Enables use of third party components library. Will be removed when discord.py 2.0 releases.
#------------------------------------------------------------------

async def scan(message):
    """ scans channel where this function is called in and
    puts the data from a pandas dataframe into csv

    Args:
        message: discords message class
    """    
    await message.channel.send("Scanning current channel...")

    data = pd.DataFrame(columns=['content', 'time', 'author'])

    start = time.time()

    # goes thru limit number of messages in the discord channel u call it in 
    # and appends it to a pandas dataframe
    async for m in message.channel.history(limit=10000): 
        data = data.append({
            'content': m.content,
            'time': m.created_at,
            'author': m.author.name}, 
            ignore_index=True)
    
    end = time.time()

    # stores our pandas dataframe in a csv (for testing purposes. 
    # will do JSON later :) )
    file_loc = 'data.csv'
    data.to_csv(file_loc)

    await message.channel.send(
        f"Scanning finished in {round(end - start, 2)} seconds"
        )

class Wrapped(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.desc = "Core functions needed for this bot to operate."

    @commands.command(name="prefix", description="Changes the prefix for the server. Accepts up to 3 sequential characters.")
    async def _prefixChange(ctx, message=""):
        if message:
            message = message.replace(" ", "") #trim spaces
            if(len(message) > 3):
                message = message[:3]

            await ctx.send(embed=genEmbed('', f'Would you like to change the server prefix to **{message}**?'), 
            components=[
                Select(
                    placeholder="Select test",
                    options=[
                        SelectOption(label="✔️", style=discord.ButtonStyle.green, value="a"),
                        SelectOption(label="Decline", value="b")
                    ],
                    custom_id="pc1"
                )]
            )

            interaction = await bot.wait_for(
                "selected", check=lambda i: i.custom_id == "pc1"
            )
            await interaction.send(embed=f"{interaction.values[0]} was selected")
        else:
            await ctx.send(embed=genEmbed('', f'{ctx.author.mention}, you did not specify a prefix.'))           

@bot.event
async def on_ready():
    print(f'{bot.user} is now Online.')

#Initializes custom prefixes. 
@bot.event
async def on_guild_join(guild):
    try:
        with open(dPATH + '.prefix.pkl', "rb") as ppkl:
            prefixes = pickle.load(ppkl)
    except:
        print("Unable to load custom prefix file. Creating new one.")
        prefixes = {}

    prefixes[str(guild.id)] = ">>" #Default prefix = >>

    ppkl = open(dPATH + '.prefix.pkl', "wb")
    pickle.dump(prefixes, ppkl)

@bot.event
async def on_message(message):
    #Deprecated for now, don't really need this.
    '''if message.author == client.user:
        return
    elif message.content.startswith('_!'):
        #message body
        msg = message.content.split()

        # gets the command from the message body
        cmd =  msg[0].replace('_!', '')

        # gets params from the message body. Could come in clutch if
        #  we want to pass in specific channels or whatever
        if len(msg) > 1:
            params = msg.split[1:]

        # commands block. Tryna look for a better way than an ugly 
        # if/else block
        if cmd == 'scan':
            await scan(message)
    '''
    try:
        if message.mentions[0] == bot.user:
            with open(dPATH + '.prefix.pkl', "rb") as ppkl:
                prefixes = pickle.load(ppkl)
            
            await message.channel.send(embed=genEmbed('', f'The current prefix for this server is **{prefixes[str(message.guild.id)]}**'))
    except:
        pass

    await bot.process_commands(message)

#Import scrape cog
from scrape import *
bot.add_cog(Scrape(bot))

bot.add_cog(Wrapped(bot)) #Main cog
bot.run(TOKEN)
