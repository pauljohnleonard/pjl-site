var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

osc.frequency.setValueAtTime(100, 0)
osc.frequency.exponentialRampToValueAtTime(1000, 20)


osc.connect(ac.destination);

osc.start(0);
osc.stop(25);

