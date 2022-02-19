'''
Scrape - Discord Cog
Author: Evan Nguyen
'''

import discord
from discord.ext import commands
from discord.ui import Button, View

import pickle
dPATH = "data/"

#-----------------------------------------------------------------
def genEmbed(title, description=""):
    embed = discord.Embed(
        colour = 1973790,
        title = title,
        description = description
    )
    return embed

def loadSetup():
    try:
        with open(dPATH + '.setup.pkl', "rb") as ppkl:
            return pickle.load(ppkl)
    except:
        print("Unable to load setup-channel pickle. Creating a new one...")
        return {}

class Scrape(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.voice_states = {}
        self.desc = "Scrapes message data from available channels. Created as an extension for Discord-Wrapped."

    @commands.command(name="ping")
    async def _ping(self, ctx):
        await ctx.send("Pong!")

    async def _channelCheck(self, ctx):
        setup = loadSetup()
        
        return ctx.message.channel == ctx.guild.get_channel(setup[str(ctx.guild.id)])
            
    async def channel_setup(self, ctx):
        setup = loadSetup()

        setup[str(ctx.guild.id)] = ctx.message.channel.id

        ppkl = open(dPATH + '.setup.pkl', "wb")
        pickle.dump(setup, ppkl)

    @commands.command(name="debug")
    async def load_template(self, ctx):
        setup = loadSetup()

        channel = ctx.guild.get_channel(setup[str(ctx.guild.id)])
        if(channel):
            print(channel.name)



    @commands.command(name="setup")
    async def _setup(self, ctx):
        if(len(await ctx.channel.history(limit=2).flatten()) == 1):
            async def button_callback(interact):
                ci = interact.data['custom_id']
                b1.disabled=True
                b2.disabled=True
                if(ci == "0"):
                    await self.channel_setup(ctx)

                    await interact.response.edit_message(embed=genEmbed('', f'Will now setup in ```css\n{ctx.message.channel.name}```'), view=view, delete_after=5)
                    await ctx.message.edit(delete_after=5)
                else:
                    await interact.response.edit_message(embed=genEmbed('', f'Setup was cancelled.'), view=view, delete_after=5)
                    await ctx.message.edit(delete_after=5)

            b1 = Button(label="Yes", style=discord.ButtonStyle.green, custom_id="0")
            b2 = Button(label="Decline", custom_id="1")
            b1.callback = button_callback
            b2.callback = button_callback

            view=View()
            view.add_item(b1)
            view.add_item(b2)

            await ctx.send(embed=genEmbed('', f'Requesting permission to setup in:```css\n{ctx.message.channel.name}```'), view=view)
        else:
            await ctx.send(embed=genEmbed("", f'This command requires an empty channel. Make a new channel or empty this one, {ctx.author.mention}.'), delete_after=10)


    ##DEFINE COMMANDS SPECIFIC TO THE SETUP CHANNEL. ONLY SHOULD BE USED IN THAT CHANNEL.
    

