const COMMANDS = require('./commands.js');

const COMMAND_SLASH = '/';
const COMMAND_PREFIX = 'pp';

module.exports = commandHandler = (message) => {
    if (message.body[0] != COMMAND_SLASH || message.body.slice(1, COMMAND_PREFIX.length + 1) != COMMAND_PREFIX) return;

    const command = message.body.split(' ')[1];

    if (!COMMANDS.hasOwnProperty(command)) {
        message.reply(`The command "${COMMAND_SLASH + COMMAND_PREFIX + ' ' + command}" does not exist`);
        return;
    }

    COMMANDS[command](message);
}