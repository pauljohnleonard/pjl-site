'use strict'




function Tonality(seed, chord, root, key) {
    this.n = seed.length
    this.noteOfScale = function(i) {
        return root + 12 * Math.floor(i / this.n) + this.seed[i % this.n]
    }
    this.chord = chord
    this.seed = seed
    this.root = root
    //  root of of chord (index into scale)
    this.key = key
    // everything is offset by this
    this.getNoteOfChord = function(i) {
        ii = this.root + this.chord[i]
        return this.key + self.scale[ii]
    }
    this.getNoteOfChordScale = function(i) {
        let ii = this.root + i
        return this.key + this.scale[ii]
    }
    this.getNoteOfScale = function(i) {
        return this.key + self.scale[i]
    }
}
