
export class Monitor {
    underruns: number = 0
    maxUnder: number

    constructor() {

    }

    spareTime(t: number) {
        let f = false
        if (t < 0) {
            this.underruns++
            f = true
        }

        if (this.maxUnder === undefined || t < this.maxUnder) {
            this.maxUnder = +t.toFixed(3)
            f = true
        }
    }

    reset() {
        this.maxUnder=undefined
        this.underruns=0
    }

    

}