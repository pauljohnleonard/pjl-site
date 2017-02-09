let loadSoundfonts = () => {
  Soundfont.instrument(audioCtx, 'acoustic_grand_piano',{}).then(function (sfinstr) {
    sf = sfinstr;
  });

  return {
    acoustic_grand_piano: () => {
      let node = sf.start(noteNumber,0,{gain: velocityToGainTable[velocity]});
      return {
        stop: () => {
          node.stop(0);
        }
      };
    }
  };


};
