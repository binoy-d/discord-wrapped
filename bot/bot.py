# bot.py

# Written by Evan Nguyen

import os

import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = discord.Client()

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')


@bot.event
async def on_message(message):
    if message.author == bot.user:
        return
    if message.content == "w! scrape":
        await message.channel.send("you a bitch")

def begin_scraping():
    pass


bot.run(TOKEN)
