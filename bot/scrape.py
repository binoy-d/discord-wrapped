'''
Scrape - Discord Cog
Author: Evan Nguyen
'''

import discord
from discord.ext import commands

#-----------------------------------------------------------------
def embed(title, description=""):
    embed = discord.Embed(
        colour = 1973790,
        title = title,
        description = description
    )
    return embed

class Scrape(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.voice_states = {}
        self.desc = "Scrapes message data from available channels. Created as an extension for Discord-Wrapped."

    @commands.command(name="ping")
    async def _ping(self, ctx):
        await ctx.send("Pong!")