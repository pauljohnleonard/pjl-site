'use strict'
var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;




var pool = 1;
var nOut = 20;
var connections = 0;
var gates = 0;
var nHidden = 3
var nIn = 2


function createWeights(nFrom,nTo) {
    var weights=[]

    for(let to=0;to<nTo;to++) {
         let row=[]
           for(let from=0;from<nFrom;from++) {
               let w=Math.random()*2-1
               row.push(w)
           }
        weights.push(row)
    } 
    return weights
}

function MyNet(nIn,nHidden,nOut) {


  nIn = nIn+nOut  
  var inL = new Layer(nIn);
  var hiddenL= new Layer(nHidden)
  var outL = new Layer(nOut);

  var w=createWeights(nIn,nHidden)
  inL.project(hiddenL, Layer.connectionType.ALL_TO_ALL,w);

  w=createWeights(nHidden,nOut)
  hiddenL.project(outL, Layer.connectionType.ALL_TO_ALL,w);
  var lastOut=new Array(nOut)
  lastOut.fill(0)
  
  this.activate = function (x) {
      let input=x.concat(lastOut)
      let x1=inL.activate(input)
      let x2=hiddenL.activate()
      lastOut=outL.activate() 
      return lastOut
  }
}


var net=new MyNet(nIn,nHidden,nOut)

var input=new Array(nIn)
input.fill(0) 

function doit() {    
    input.forEach((v,i,a)=>{a[i]=Math.random()})
    var out=net.activate(input)
    console.log(out)
}

setInterval(doit,300)

