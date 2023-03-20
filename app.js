// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

//Instancia//
venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
//Inicializar + conectDigitalflow//
function start(client) {
  client.onMessage((message) => {
   
      client
        .sendText(message.from, message.body)//Esta es la causa de ese retorno//
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    
  });
}
