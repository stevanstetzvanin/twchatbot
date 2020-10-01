# Twitch ChatBot

USING DOCKER

git clone https://github.com/stevanstetzvanin/twchatbot.git

cd twchatbot
put in bot.js your TOKEN and CHANNELS

docker run -it -d --rm --name chatbot -v "$PWD":/usr/src/app -w /usr/src/app node node bot.js
