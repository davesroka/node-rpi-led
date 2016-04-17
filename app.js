var gpio = require('onoff').Gpio;
var red = new gpio(16, 'out');
var green = new gpio(12, 'out');
var blue = new gpio(21, 'out');
var button = new gpio(23, 'in', 'both');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.listen(3001, function () {
  console.log('App listening on port 3001!');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/on', function (req, res) {
  res.send('Lights on!');
  red.writeSync(1);
  green.writeSync(1);
  blue.writeSync(1);
});

app.get('/off', function (req, res) {
  res.send('Lights off!');
  red.writeSync(0);
  green.writeSync(0);
  blue.writeSync(0)
})

// define the callback function
function light(err, state) {

  console.log('Button pushed');

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if (state == 1) {
    // turn LED on
    red.writeSync(1);
    gree.writeSync(1);
    blue.writeSync(1);
  } else {
    // turn LED off
    red.writeSync(0);
    gree.writeSync(0);
    blue.writeSync(0);
  }

}

// pass the callback function to the
// as the first argument to watch()
button.watch(light);
