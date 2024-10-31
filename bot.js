const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('El bot está listo');
});

client.on('message', async message => {
    const groupId = '120363324433637937@g.us';

    if (message.from === groupId && message.body.includes('CIRCULAR')) {
        console.log("Group ID:", message.body, "\nfrom:", message.from);
        console.log('identidad confirmada')
        const targetGroupId = '120363215163583445@g.us';
        await client.sendMessage(targetGroupId, message.body);
        console.log("Mensaje reenviado: ${message.body}");
    }
});

client.initialize();
