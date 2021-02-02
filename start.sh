#!/bin/bash

rm -rf *
git clone https://github.com/Antoides/Antoides-bot.git bot_anto
mv bot_anto/Procfile ..
node bot_anto/index.js

git clone https://github.com/Antoides/Antoides-bot.git . && chmod u+x ./bot_anto/start.sh && ./bot_anto/start.sh
