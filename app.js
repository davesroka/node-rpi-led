var gpio = require('rpi-gpio');

var pins = {
  led1: 18,
  led2: 23,
  button: 21
}

gpio.setup(pins.button, gpio.DIR_IN);
gpio.setup(pins.led1, gpio.DIR_OUT);

gpio.on('change', (channel, value) => {
  switch (channel) {
    case pins.button:
      gpio.write(pins.led1,1);
  }
});

function readButton() {
  gpio.read(pins.button, (err, value) => {
    console.log(`Button pushed value: ${value}`);

  });
}

