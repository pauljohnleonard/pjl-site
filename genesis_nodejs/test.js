'use strict'
var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


const SIZE=10;
var input = SIZE;
var pool = 5*SIZE;
var output = SIZE;
var connections = SIZE*2;
var gates = pool;



Liquid.prototype = Object.create(Network.prototype);

// Liquid State Machine
function Liquid(inputs, hidden, outputs, connections, gates) {

    // create layers
    var inputLayer = new Layer(inputs);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(outputs);

    // make connections and gates randomly among the neurons
    var neurons = hiddenLayer.neurons();
    var connectionList = [];

    for (var i = 0; i < connections; i++) {
      // connect two random neurons
      var from = Math.random() * neurons.length | 0;
      var to = Math.random() * neurons.length | 0;
      var connection = neurons[from].project(neurons[to]);
      connectionList.push(connection);
    }

    for (var j = 0; j < gates; j++) {
      // pick a random gater neuron
      var gater = Math.random() * neurons.length | 0;
      // pick a random connection to gate
      var connection = Math.random() * connectionList.length | 0;
      // let the gater gate the connection
      neurons[gater].gate(connectionList[connection]);
    }

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers of the network
    this.set({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    // trainer
    this.trainer = new Trainer(this);
}




var net = new Liquid(input,pool,output,connections,gates);

//var net = new Architect.LSTM(input,SIZE,output);


const trigProb=.3;

function Sequence() {
  this.vec=new Array(SIZE)
  this.vec.fill(0)


  this.next=function() {
    
    for (let i=SIZE-1;i>0;i--) {
      this.vec[i]=this.vec[i-1];
    }

    if (Math.random() < trigProb) {
      this.vec[0]=1   // Math.random()
    } else {
      this.vec[0]=0
    }
    return this.vec
  }
}


function Sequence() {


  this.vec=new Array(SIZE)
  this.vec.fill(0)

  this.next=function() {



    for (let i=SIZE-1;i>0;i--) {
      this.vec[i]=this.vec[i-1];
    }

    if (Math.random() < trigProb) {
      this.vec[0]=1   // Math.random()
    } else {
      this.vec[0]=0
    }
    return this.vec
  }
}

function Sequence2() {


  this.vec=new Array(SIZE)
  this.vec.fill(0)

  this.next=function() {



    for (let i=SIZE-1;i>0;i--) {
      this.vec[i]=this.vec[i-1];
    }

    if (Math.random() < trigProb) {
      this.vec[0]=1   // Math.random()
    } else {
      this.vec[0]=0
    }
    return this.vec
  }
}





const N_ITER=10000

var tStart=new Date().getTime()
var seq=new Sequence()

function FRMT(x){
  let str="";
  x.forEach((val)=>{
    str+=" "+val.toFixed(3)
  })
  return str;
}


function err(x,y) {
  let sum=0;

  for (let i=0;i<x.length;i++){
    sum+=Math.abs(x[i]-y[i])

  }
  return sum
}
var learningRate=.05
var vec=seq.next();


for (let i=0;i<N_ITER;i++){

    var out=net.activate(vec);
    vec=seq.next();
    net.propagate(learningRate, vec);
    var error=err(vec.slice(1),out.slice(1))

    console.log("------  " + error)
    console.log(FRMT(vec))
    console.log(FRMT(out))  
}

var dt=((new Date().getTime()) - tStart)/N_ITER/1000

console.log(dt)