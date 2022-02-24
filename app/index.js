const express = require ('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const path = require('path');
app.use('/public', express.static(path.join(__dirname,'public')));
const port = new SerialPort('COM4', { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
const httpServer = http.Server(app);
const io = socketIo(httpServer);

let proc_open =true;
let opens = function(){
  port.on("open", () => {
    console.log('serial port open');
});}

  function dummy_write(){
    port.write('000000000000000', (err) => {
      if (err) {
        console.log(err.message)
      }
  
})}

/* ===========================================
*
*  Socket.io stuff
*
=========================================== */

io.on("connection", (socket) => {
    //Socket is a Link to the Client 
    console.log("New Client is Connected!");
    //Here the client is connected and we can exchanged 
    //Send Message 
    //We need to use the Socket (the link between the server and the connected user(s)).
    socket.emit("welcome", "Hello and Welcome to the Server");
    socket.on('ma-up-send', (val)=>{
     
    switch (val.chest) {
    case '4444':
    port.write('4444', (err) => {
    if (err) {
    return console.log('Error on write:', err.message);}

     console.log('message written');
          })
          break; }})});

httpServer.listen(3001, function () {
    console.log('Server listening on port 3001')
    });

/* 
===========================================
*
* Serialport stuff
*
=========================================== */
    
port.on("open", () => {
  console.log('serial port open');
})
//dummy_write();

parser.on('data', datas =>{

 console.log('got word from arduino:',datas);
 //console.log('something came');
 //io.sockets.emit( 'mes_received', datas);
 });

port.on('close', () => {
console.log('Serial port disconnected.');
});