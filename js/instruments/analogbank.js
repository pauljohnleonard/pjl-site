let sine1 = () => {
  let osc = audioCtx.createOscillator();
  let env = audioCtx.createGain();

  env.gain.value = 0.0;

  osc.connect(env);
  osc.frequency.value = 440 * Math.pow(2,((noteNumber-69)/12));
  env.connect(audioCtx.destination);
  osc.start(0);

  env.gain.setTargetAtTime(1.0,0,0.02);
  env.gain.setTargetAtTime(0,audioCtx.currentTime+0.1,0.2);
  osc.onended = () => {
    env.disconnect();
  }
  osc.stop(audioCtx.currentTime+0.5);
};

let saw1 = () => {
  let osc = audioCtx.createOscillator();
  let env = audioCtx.createGain();

  env.gain.value = 0.0;

  osc.connect(env);
  osc.frequency.value = 440 * Math.pow(2,((noteNumber-69)/12));
  osc.type = "sawtooth";
  env.connect(audioCtx.destination);
  osc.start(0);

  env.gain.setTargetAtTime(1.0,0,0.001);
  env.gain.setTargetAtTime(0,audioCtx.currentTime+0.05,0.1);
  osc.onended = () => {
    env.disconnect();
  }
  osc.stop(audioCtx.currentTime+0.5);
};

let saw2 = () => {
  let osc = audioCtx.createOscillator();
  let osc2 = audioCtx.createOscillator();
  let osc3 = audioCtx.createOscillator();

  let env = audioCtx.createGain();
  var biquadFilter = audioCtx.createBiquadFilter();
  // Create a stereo panner
  var pan2 = audioCtx.createStereoPanner();
  var pan3 = audioCtx.createStereoPanner();
  pan2.pan.value = -1.0;
  pan3.pan.value = 1.0;

  env.gain.value = 0.0;
  biquadFilter.type = "lowpass";
  biquadFilter.frequency.value = 1000;
  biquadFilter.gain.value = 0;


  osc.connect(env);
  osc.frequency.value = 440 * Math.pow(2,((noteNumber-69)/12));
  osc2.frequency.value = osc.frequency.value*0.995;
  osc3.frequency.value = osc.frequency.value*1.005;
  osc.type = "sawtooth";
  osc2.type = "sawtooth";
  osc3.type = "sawtooth";
  osc2.connect(pan2);
  osc3.connect(pan3);
  pan2.connect(env);
  pan3.connect(env);

  env.connect(biquadFilter);
  biquadFilter.connect(audioCtx.destination);
  osc.start(0);
  osc2.start(0);
  osc3.start(0);

  env.gain.setTargetAtTime(1.0,0,0.001);
  return {
    stop: () => {
      env.gain.setTargetAtTime(0,0,0.1);
      osc.onended = () => {
        env.disconnect();
        biquadFilter.disconnect();
      }
      osc.stop(audioCtx.currentTime+0.2);
      osc2.stop(audioCtx.currentTime+0.2);
      osc3.stop(audioCtx.currentTime+0.2);
    }
  };
};

let saw2withdelay = () => {
  let osc = audioCtx.createOscillator();
  let osc2 = audioCtx.createOscillator();
  let osc3 = audioCtx.createOscillator();

  let env = audioCtx.createGain();
  var biquadFilter = audioCtx.createBiquadFilter();
  // Create a stereo panner
  var pan2 = audioCtx.createStereoPanner();
  var pan3 = audioCtx.createStereoPanner();
  pan2.pan.value = -1.0;
  pan3.pan.value = 1.0;

  env.gain.value = 0.0;
  biquadFilter.type = "lowpass";
  biquadFilter.frequency.value = 2000;
  biquadFilter.gain.value = 0;

  osc.connect(env);
  osc.frequency.value = 440 * Math.pow(2,((noteNumber-69)/12));
  osc2.frequency.value = osc.frequency.value*0.995;
  osc3.frequency.value = osc.frequency.value*1.005;
  osc.type = "sawtooth";
  osc2.type = "sawtooth";
  osc3.type = "sawtooth";
  osc2.connect(pan2);
  osc3.connect(pan3);
  pan2.connect(env);
  pan3.connect(env);

  env.connect(biquadFilter);
  biquadFilter.connect(audioCtx.destination);

  let addDelay = (delayTime,gain,pan) => {
    let delay1 = audioCtx.createDelay(delayTime);
    delay1.delayTime.value = delayTime;
    biquadFilter.connect(delay1);
    let delay1gain = audioCtx.createGain();
    delay1gain.gain.value = gain;
    delay1.connect(delay1gain);
    let delay1pan = audioCtx.createStereoPanner();
    delay1pan.pan.value = pan;
    delay1gain.connect(delay1pan);
    delay1pan.connect(audioCtx.destination);
  }
  addDelay(0.2,0.5,-1.0);
  addDelay(0.4,0.3,1.0);

  osc.start(0);
  osc2.start(0);
  osc3.start(0);

  env.gain.setTargetAtTime(velocityToGainTable[velocity]*1.3,0,0.001);
  return {
    stop: () => {
      env.gain.setTargetAtTime(0,0,0.1);
      osc.onended = () => {
        env.disconnect();
        biquadFilter.disconnect();
      }
      osc.stop(audioCtx.currentTime+1.0);
      osc2.stop(audioCtx.currentTime+1.0);
      osc3.stop(audioCtx.currentTime+1.0);
    }
  };
};

let drumkit = () => {

  let env = audioCtx.createGain();

  env.gain.value = 1.0;
  env.connect(audioCtx.destination);

  let createOsc = () => {
    let osc = audioCtx.createOscillator();
    osc.type = "square";
    osc.connect(env);
    osc.frequency.value = 220;
    osc.start(0);
    osc.frequency.setTargetAtTime(1,0,0.05);
    osc.stop(audioCtx.currentTime+0.5);
  }
  createOsc();

  env.gain.setTargetAtTime(0,audioCtx.currentTime+0.02,0.05);

};
