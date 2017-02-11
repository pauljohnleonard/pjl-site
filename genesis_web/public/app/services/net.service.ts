
import { Injectable } from '@angular/core';
import { Perceptron,Elman,Jordan } from '../music/net'


@Injectable()
export class NetService {

    types:Array<any>=[Perceptron,Elman,Jordan]
    
    constructor() {

    }
   
}