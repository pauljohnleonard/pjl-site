let tracks = {
  song: function() {
    let song = [{ t: 0, p: () => { bpm=480; instr=saw1; }}];
    let pos = 0;
    let track = {data: song, position: 0};

    let baseNote = 69-36-2;
    let addBasePattern = (baseNote) => {
      let pattern = [0,1,0,0,1,0,0,1];

      for(let n=0;n<pattern.length;n++) {
        let bn = baseNote;
        song.push({ t: pos++, p: () => { instr=saw1; playNote(bn+12*pattern[n]); }});
      }
    }
    addBasePattern(baseNote);
    baseNote+=2;
    addBasePattern(baseNote);
    baseNote+=3;
    addBasePattern(baseNote);
    baseNote-=7;
    addBasePattern(baseNote);

    song.push({ t: pos, p: () => { startTime = audioCtx.currentTime; tracks.song.position = -1; }});

    pattern = [1,0,0,1,0,0,1,0];
    pos = 0;
    for(let n=0;n<pattern.length;n++) {
      if(pattern[n]) {
        song.push({ t: pos, p: () => { instr=sine1;g4();b4(); }});
      }
      pos++;
    }
    for(let n=0;n<pattern.length;n++) {
      if(pattern[n]) {
        song.push({ t: pos, p: () => { instr=sine1;a4();c5(); }});
      }
      pos++;
    }
    for(let n=0;n<pattern.length;n++) {
      if(pattern[n]) {
        song.push({ t: pos, p: () => { instr=sine1;c5();e5(); }});
      }
      pos++;
    }
    for(let n=0;n<pattern.length;n++) {
      if(pattern[n]) {
        song.push({ t: pos, p: () => { instr=sine1;f4();a4(); }});
      }
      pos++;
    }

    for(let pos=0;pos<32;pos+=4) {
        song.push({ t: pos, p: () => { instr=drumkit;c4(); }});
    }
    song.sort(function(a,b) {
      return a.t-b.t;
    });

    return track;
  }()
};
