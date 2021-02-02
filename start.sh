#!/bin/bash

rm -r commands
rm -r handlers
rm -r node_modules
rm app.json
rm index.js
rm package.json
rm package-lock.json
rm -rf bot_anto
git clone https://github.com/Antoides/Antoides-bot.git bot_anto
node bot_anto/index.js
