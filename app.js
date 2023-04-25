const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const commandHandler = require('./src/commands/command-handler.js');

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    console.log('Client authenticated! 🔐');
});

client.on('ready', () => {
    console.log('Client is ready! 🚀');
});

client.on('message', message => {
    commandHandler(message);
});

client.initialize();