#!/bin/bash

git clone https://github.com/Antoides/Antoides-bot.git bot_anto
rm -rf commands
rm -rf handlers
rm -rf node_modules
rm -rf app.json
rm -rf index.js
rm -rf package.json
rm -rf package-lock.json
rm -rf Procfile
rm -rf start.sh
mv bot_anto/commands .
mv bot_anto/handlers .
mv bot_anto/node_modules .
mv bot_anto/app.json .
mv bot_anto/index.js .
mv bot_anto/package.json .
mv bot_anto/package-lock.json .
mv bot_anto/Procfile .
mv bot_anto/start.sh .

node index.js
