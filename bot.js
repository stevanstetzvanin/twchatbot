const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'stev4n',
    password: '7elv8vl7adjfh9bgdjposdcuc6b02a'
  },
  channels: [
	'freljhordan',
	'missleblanc',
	'kiwionline',
	'plutinho',
	'patsferrer',
	'stev4n'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
async function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  console.log(`* ${target} - ${context["display-name"]}: ${commandName}`);
}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
