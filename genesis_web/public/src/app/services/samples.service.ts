/**
 *
 *   Reposible for getting sampl,es given a URL
*/


import { Injectable } from '@angular/core';

declare const audioContext: any



@Injectable()
export class SamplesService {

  //  samples: Array<any> = []

    constructor() {

    }

    /**
     *
     * @param url URL to load
     * returns promise which resolves to an audio buffer
     */
    load(url: string): any {
        // Load asynchronously

        const p = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
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



