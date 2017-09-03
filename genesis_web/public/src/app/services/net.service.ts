
import { Injectable } from '@angular/core';
import { Perceptron, Elman, Jordan } from '../model/net'


@Injectable()
export class NetService {

    types: Array<any> = []
    names: Array<string> = []

    constructor() {
        this.types['Perceptron'] = Perceptron
        this.types['Elman'] = Elman
        this.types['Jordan'] = Jordan

        for (const n in this.types) {
            if (n) {
            this.names.push(n)
            }
        }
    }


    /*
    type
    nIn
    nOut
    nHidden[]

    */
    createFromConfig(config: any) {

        switch (config.type) {


        }
    }


}

