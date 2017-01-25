'use strict'

var midi = require('midi');

// Set up a new input.
var input = new midi.input();

// Count the available input ports.
var n=input.getPortCount();



// Get the name of a specified input port.

for (let i=0;i<n;i++) { console.log(input.getPortName(i))};

// Configure a callback.
input.on('message', function(deltaTime, message) {
  // The message is an array of numbers corresponding to the MIDI bytes:
  //   [status, data1, data2]
  // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful
  // information interpreting the messages.
  console.log('m:' + message + ' d:' + deltaTime);
});

// Open the first available input port.
input.openPort(3);

// Sysex, timing, and active sensing messages are ignored
// by default. To enable these message types, pass false for
// the appropriate type in the function below.
// Order: (Sysex, Timing, Active Sensing)
// For example if you want to receive only MIDI Clock beats
// you should use
// input.ignoreTypes(true, false, true)
input.ignoreTypes(false, false, false);

// ... receive MIDI messages ...


// Close the port when done.
setTimeout(input.closePort,1000000);