const { filterQuotedParams } = require('../command-utils.js');

const REMIND_COMMANDS = ['remind'];

/*
    /pp remind "message" "when" "at"
    - Example: 
*/
module.exports = remindCommandHandler = (message) => {
    console.log('Estoy en el remind! Splitted message body -> ', message.body.split(' '));

    if (!REMIND_COMMANDS.includes(message.body.split(' ')[1])) return;

    const params = filterQuotedParams(message.body);
    console.log('Receive params: ', params);

    message.reply(`WIP: Reminder set: "${params[0]}", the "${params[1]}" at "${params[2]}"`)
}