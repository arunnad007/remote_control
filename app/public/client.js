

//First Connect to the Server on the Specific URL (HOST:PORT)
//Now Listen for Events (welcome event).
socket.on("welcome", (data) => {
   /*For the listener we specify the event name and we give the callback to which be called one the 
   event is emitted*/
   //Log the Welcome message 
   console.log("Message: ", data);
});
/*socket.on("mA_up_receive", (mA) =>
       
{ console.log(`${mA} is received client side`); 
     document.getElementById(parameter).value = mA;
    });
 */

function incrementValue(parameter)
{ var value = parseInt(document.getElementById(parameter).value, 10);
        value = isNaN(value) ? 0 : value;
      if(parameter == 'mA')
        {
          
          //document.getElementById('ack').value = 50;
          socket.emit('ma-up-send',{chest :"4444"});
         }
        else{
        value++;
        document.getElementById(parameter).value = value;
    }
}
function decrementValue(parameter)
{
        var value = parseInt(document.getElementById(parameter).value, 10);
        value = isNaN(value) ? 0 : value;
        if(parameter == 'mA' && (value>=1))
        {

        value -=50;
        document.getElementById(parameter).value = value;
        }
        else if (value >=1){
        value--;
        document.getElementById(parameter).value = value;
    }
}


