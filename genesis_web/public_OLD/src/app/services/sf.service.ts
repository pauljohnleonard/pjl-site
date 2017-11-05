import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { findNearest } from '../util/levenshtein'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';

@Injectable()
export class SFService {
    public gmIDToFontName: {};
    public gmNameToID: {};
    public names: Array<string> = []
    public gmnames: Array<string> = []
    constructor(private http: Http) {
        this.getJSON()
    }

    public getNames(): Array<string> {
        return this.names
    }

    public getGMName(index: number) {
        return this.gmnames[index]
    }

    public getGMProg(name: number) {
        return this.gmNameToID[name]
    }

    public getJSON() {


        Observable.forkJoin(
            this.http.get('./assets/sfnames.json')
                .map(res => res.json())
                .map(data => {
                    this.names = data
                }),

            this.http.get('./assets/GMpatchnames.txt')
                .map(
                (data) => {
                    const txt = data.text()
                    const lines = txt.split('\n')
                    lines.forEach((line) => {
                        line = line.trim()
                        if (line.length > 0) {
                            const toks = line.split(':')
                            this.gmnames[+toks[0] - 1] = toks[1].trim().toLowerCase()
                        }
                    })
                }
                ))
            .subscribe(() => {

                this.gmIDToFontName = []
                this.gmNameToID = {}

                console.log(this.names)
                console.log(this.gmnames)


                this.names.forEach((name) => {
                    const gm_id = findNearest(name.toLowerCase(), this.gmnames)
                    this.gmIDToFontName[gm_id] = name
                    this.gmNameToID[name] = gm_id
                    console.log(gm_id + " -> " + name)
                })
            })
    }
}
