var gpio = require('rpi-gpio');

var pins = {
    led1 : 18,
    led2 : 23,
    button : 21
}

var lit = false;

gpio.setup(pins.button, gpio.DIR_IN, readButton);
gpio.setup(pins.led1, gpio.DIR_OUT); 

function readButton(){
    gpio.read(pins.button, (err, value)=>{
        console.log(`Button pushed value: ${value}`);
        
    });
}