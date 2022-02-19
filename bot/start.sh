#!/bin/sh
echo "Starting Discord-Wrapped..."
nohup python3 bot.py > data/logs/botlog.txt & 
pyPID=$!

echo "bot.py PID: $pyPID"

echo "kill -9 $pyPID" > stop.sh
chmod u+x stop.sh

echo "Use ./stop.sh to kill the bot background process."