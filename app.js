var gpio = require('onoff').Gpio;

var led = new gpio(23, 'out');
var button = new gpio(21, 'in', 'both');

button.watch((err, state)=>{
  console.log('button pushed');
  if (state==1){
    //turn led on
    led.writeSync(1);
  } else{
    //tun led off
    led.writeSync(0);
  }
});
