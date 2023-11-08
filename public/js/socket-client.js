const lblOn =  document.querySelector('#lblOn ');
const lblOff = document.querySelector('#lblOff');
const txtMsg = document.querySelector('#txtMsg');
const btnSend = document.querySelector('#btnSend');

const socketC = io();

socketC.on('connect', () => {
    console.log('Connected with server');
    lblOn.style.display = '';
    lblOff.style.display = 'none';
});

socketC.on('disconnect', () => {
    console.log('Disconnected by server');
    lblOn.style.display = 'none';
    lblOff.style.display = '';
});

socketC.on('send-msg', (payload) => {
    console.log(payload);
});

btnSend.addEventListener('click', () => {
    const msg = { 'MSG':txtMsg.value, 'User': 'soul23k@hotmail.com', 'DateTime': new Date()};
    socketC.emit('send-msg', msg);
});