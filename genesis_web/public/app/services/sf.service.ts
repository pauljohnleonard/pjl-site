import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';

@Injectable()
export class SFService {

    names:Array<string> = []
    
    constructor(private http: Http) {
        this.getJSON()
    }

    public getNames() :Array<string> {
        return this.names
    }

    public getJSON() {

        this.http.get('./sfnames.json')
            .map(res => res.json())
            .subscribe(
            data => this.names = data,
            err => console.log(err),
            () => console.log('LOad names Completed'));
        
    }

}