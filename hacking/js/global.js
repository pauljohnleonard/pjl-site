var audioContext=new AudioContext()

var logger = {
	log: function (msg) {
		//fs.write(this.logFile, msg + '\n')
		console.log("MES" + msg)
	},

	error: function (msg) {
		if (msg instanceof Error) {
			msg = msg.stack
		}
		//fs.write(this.logFile, msg + '\n')
		console.log("ERROR:" + msg)
	}
}
