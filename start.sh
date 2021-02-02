#!/bin/bash

rm -rf bot_anto
git clone https://github.com/Antoides/Antoides-bot.git bot_anto
mv bot_anto/Procfile ..
node bot_anto/index.js
