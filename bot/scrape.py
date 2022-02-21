'''
Scrape - Discord Cog
Author: Evan Nguyen
'''

import asyncio

import discord
from discord.ext import commands
from discord.ui import Button, View

import datetime

import pickle
import pandas as pd

dPATH = "data/"
SELF_ID = 931459553114083378 #got this through some debug command. don't know, but we need it.

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
        self.desc = "Scrapes message data from available channels. Created as an extension for Discord-Wrapped."

    @commands.command(name="ping")
    async def _ping(self, ctx):
        await ctx.send("Pong!")

    async def _channelCheck(self, ctx):
        setup = loadSetup()
        
        return ctx.message.channel == ctx.guild.get_channel(setup[str(ctx.guild.id)][0])
            
    async def channel_setup(self, ctx):
        setup = loadSetup()

        setup[str(ctx.guild.id)] = [ctx.message.channel.id] #Setup this way in case we need to store any further data. 
                                                            #We would just append to this list.

        ppkl = open(dPATH + '.setup.pkl', "wb")
        pickle.dump(setup, ppkl)

    @commands.command(name="status")
    async def load_template(self, ctx):
        setup = loadSetup()

        try:
            channel = ctx.guild.get_channel(setup[str(ctx.guild.id)][0])
        except:
            channel = None

        if(channel):
            await ctx.send(embed=genEmbed('', f'The bot is currently setup in:```css\n{channel.name}```'))
        else:
            await ctx.send(embed=genEmbed('', f'The bot is not currently setup in any channel.'))

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

            setup = loadSetup()
            try:
                ch = ctx.guild.get_channel(setup[str(ctx.guild.id)][0])
            except:
                ch = None
                pass

            if(ch):
                if(ch == ctx.channel):
                    await ctx.send(embed=genEmbed('', f'The bot is already setup in this channel.'), delete_after=10)
                else:
                    await ctx.send(embed=genEmbed('', f'The bot is currently setup in a different channel.\nRequesting permission to setup in: ```css\n{ctx.message.channel.name}```'), view=view)
            else:
                await ctx.send(embed=genEmbed('', f'Requesting permission to setup in:```css\n{ctx.message.channel.name}```'), view=view)
        else:
            await ctx.send(embed=genEmbed('', f'This command requires an empty channel. Make a new channel or empty this one, {ctx.author.mention}.'), delete_after=10)


    ##--------------------------------------------------------------------------------------------------
    ##DEFINE COMMANDS SPECIFIC TO THE SETUP CHANNEL. ONLY SHOULD BE USED IN THAT CHANNEL.

    #Cleans up excess messages left in the setup channel. 
    #This function is a bit overkill. Kind of wanted a fallback measure in case the bot went offline for an extended period of time.
    async def _cleanup(self, ctx):
        setup = loadSetup()
        if(str(ctx.guild.id) in setup.keys()):
            channel = ctx.guild.get_channel(setup[str(ctx.guild.id)][0])

            if(ctx.channel == channel):
                messages = await channel.history(limit=300).flatten() 
                #Hopefully, the bot isn't offline where >300 messages have occured.
                for x in messages:
                    if(x.author.id != SELF_ID):
                        try:
                            await x.edit(delete_after=10)
                        except:
                            pass
                        await asyncio.sleep(1)

    #This is going to gauge our activity. If this exceeds a threshold, publish an update, and clean up the setup channel (if needed).
    #So far, this is makeshift. I can't figure out a way to monitor when we should update, so for now it'll be manual. 
    #This block basically cleans all messages in the setup channel after 10 seconds.
    @commands.Cog.listener()
    async def on_message(self, ctx):
        await self._cleanup(ctx)

    #Whenever the bot's template is compromised- cleanup.
    async def _cleanupAll(self, ctx):
        setup = loadSetup()
        if(str(ctx.guild.id) in setup.keys()):
            channel = ctx.guild.get_channel(setup[str(ctx.guild.id)][0])

            if(ctx.channel == channel):
                messages = await channel.history(limit=300).flatten() 
                for x in messages:
                    try:
                        await x.edit(delete_after=10)
                    except:
                        pass

    @commands.command(name="debug")
    async def _debug(self, ctx):
        m = ctx.message
        print(m.guild.id, 
        m.id, 
        m.type,
        m.created_at,
        m.edited_at,
        m.pinned,
        m.content,
        m.author.id,
        m.author.bot,
        m.author.avatar,
        m.attachments,
        m.mentions,
        m.reactions)

    @commands.command(name="fullscan")
    async def _process_data(self, ctx):
        setup = loadSetup()

        formatting = ['guild_id', 'message_id', 'type', 'created_at', 'edited_at', 'isPinned', 'content', 
                    'author_id', 'is_bot', 'avatar_url', 'attachments', 'mentions', 'reactions']
        
        data = pd.DataFrame(columns=formatting)

        cache = {}
        total = 0

        now = datetime.datetime.now()
        print("initializing full scan at", now)

        raw = ctx.guild.by_category()
        for categoryList in raw:
            for channels in categoryList[1:]:
                for singleChannel in channels:
                    if isinstance(singleChannel, discord.channel.TextChannel):
                        #cache[str(singleChannel.id)] = 

                        for m in await singleChannel.history(limit=None).flatten():
                            total += 1
                            try:
                                data = data.append({
                                    'guild_id': m.guild.id,
                                    'message_id': m.id,
                                    'type': m.type,
                                    'created_at': m.created_at,
                                    'edited_at': m.edited_at,
                                    'isPinned': m.pinned,
                                    'content': m.content,
                                    'author_id': m.author.id,
                                    'is_bot': m.author.bot,
                                    'avatar_url': m.author.avatar,
                                    'attachments': m.attachments,
                                    'mentions': m.mentions,
                                    'reactions': m.reactions
                                }, ignore_index=True)
                            except:
                                pass
        
        end = datetime.datetime.now()
        print("finished in", end - now)
        data.to_csv(f'data/guilds/{ctx.guild.id}.csv')
                            
    @commands.command(name="dumpch")
    async def _load_channeldata(self, ctx, data=[]):
        bar = "▏▎▍▋▊▉"
        out = ""
        raw = ctx.guild.by_category()
        
        setup = loadSetup()

        for categoryList in raw:
            cat = categoryList[0] #"―"
            out += f"\n{cat}\n{''.ljust(40, '―')}\n"
            for channels in categoryList[1:]:
                for singleChannel in channels:
                    out += f"{''.ljust(2, ' ')}[x] {singleChannel.name}\n"
                    out += f"{''.ljust(2, ' ')};―――― \n"
        
        return out
    

    async def _publish(self, ctx):
        setup = loadSetup()
        if(str(ctx.guild.id) in setup.keys()):
            channel = ctx.guild.get_channel(setup[str(ctx.guild.id)][0])
            with open("data/wrapped.png", "rb") as fi:
                f = discord.File(fi, filename="data/wrapped.png")

            banner = await channel.send(file=f)
            setup[str(ctx.guild.id)][1] = banner.id

            ppkl = open(dPATH + '.setup.pkl', "wb")
            pickle.dump(setup, ppkl)


    #async def _verify(self, ctx):

        