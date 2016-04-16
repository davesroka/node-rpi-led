var gpio = require('onoff').Gpio;

var led = new gpio(18, 'out');
var button = new gpio(21, 'in', 'both');

// define the callback function
function light(err, state) {
  
  console.log('Button pushed');
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
  } else {
    // turn LED off
    led.writeSync(0);
  }
  
}
 
// pass the callback function to the
// as the first argument to watch()
button.watch(light);
