# twbot

USING DOCKER

git clone https://github.com/stevanstetzvanin/twbot.git
docker run -it -d --rm --name chatbot -v "$PWD":/usr/src/app -w /usr/src/app node node bot.js
