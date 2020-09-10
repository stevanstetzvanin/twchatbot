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
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
 if (commandName.toLowerCase().includes('@stev4n') && commandName.toLowerCase().includes('bot')) {
    client.say(target, `@${context["display-name"]} bot é vc LUL`);
    console.log(`* --> Executed in ${target}: ${commandName} command from @${context["display-name"]}`);
  }
  else if (commandName.toLowerCase().includes('@stev4n')) {
    client.say(target, `@${context["display-name"]} vim pela dinha, a melhor streamer Kappa`);
    console.log(`* --> Executed in ${target}: ${commandName} command from @${context["display-name"]}`);
  }
  else if (commandName === 'OMEGALUL') {
    client.say(target, `OMEGALUL`);
    console.log(`* --> Executed in ${target}: ${commandName} command from @${context["display-name"]}`);
  }
  else if (commandName === 'KEKW') {
    client.say(target, `KEKW`);
    console.log(`* --> Executed in ${target}: ${commandName} command from @${context["display-name"]}`);
  }
  else if (commandName.toLowerCase().includes('eu tu nos')) {
    client.say(target, `sub nelas`);
    console.log(`* --> Executed in ${target}: ${commandName} command from @${context["display-name"]}`);
  } else {
    console.log(`* ${target} - ${context["display-name"]}: ${commandName}`);
  }
}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
