const pingPongCommandHandler = require('./pingpong/pingpong-commands.js');

const COMMAND_SLASH = '/';

const COMMANDS = {
    'ping': pingPongCommandHandler,
}

module.exports = commandHandler = (message) => {
    if (message.body[0] != COMMAND_SLASH) return;

    const commandSplitted = message.body.replace(COMMAND_SLASH, '').split(' ');
    const command = commandSplitted[0];

    if (!COMMANDS.hasOwnProperty(command)) {
        message.reply(`The command "${COMMAND_SLASH + command}" does not exist`);
        return;
    }

    COMMANDS[command](message);
}