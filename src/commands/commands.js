const pingPongCommandHandler = require('./pingpong/pingpong-commands.js');
const remindCommandHandler = require('./remind/remind-commands.js');

// TODO: This can be automated, scaning the 'commands' folder
module.exports = COMMANDS = {
    'ping': pingPongCommandHandler,
    'remind': remindCommandHandler
}