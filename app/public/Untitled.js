
const Ready = require('@serialport/parser-ready');
const SerialPort = require('serialport');
const ByteLength = require('@serialport/parser-byte-length');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM4', { baudRate: 115200 });
const parser =  port.pipe(new Readline({ delimiter: '\r\n' }))
// Read the port data
let proc_open =true;
let proc_write_read = true;

port.on("open", () => {
  console.log('serial port open');
});




  ex();
  //console.timeEnd('first');
  


function dummy_write(){
  port.write('000000000000000', (err) => {
    if (err) {
      console.log(err.message)
    }

})}


function ex() {
  let myPromise = new Promise(function(resolve, reject) { 
      port.write('hello from node', (err) => {
        if (err) {
          reject("not written");
        }
        mes = "message written";
        resolve(mes);
      })});
  
       myPromise.then((mess) =>{
      console.log(mess);
      parser.on('data', datas =>{
      
       console.log('got word from arduino:', datas);
        //console.log("not received");
       });
      }).catch(err => {
        console.error(err)
      })
    }
  




