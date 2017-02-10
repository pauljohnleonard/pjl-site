
import { Injectable } from '@angular/core';

declare var audioContext: any



@Injectable()
export class SamplesService {

    samples: Array<any> = []


    constructor() {

    }

    load(url: string):any {
        // Load asynchronously

        var p = new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);

            request.responseType = "arraybuffer";

           
            request.onload = function () {
                audioContext.decodeAudioData(request.response, (buffer: any) => { 
                    resolve(buffer)
                })
            }

            request.send();
        })
        return p;
    }
}



