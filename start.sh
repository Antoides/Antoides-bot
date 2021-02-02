#!/bin/bash

rm -rf *
git clone https://github.com/Antoides/Antoides-bot.git .
mv bot_anto/Procfile ..
node bot_anto/index.js
