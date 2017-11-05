import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Metro } from '../model/metro'
import { SliderValComponent } from '../slider-val/slider-val.component'


declare var firebase: any


@Component({
    moduleId: 'app/dialogs/',
    selector: 'app-metro-dialog',
    templateUrl: 'metro.html'
})



export class MetroDialogComponent {

    metro: Metro

    constructor(public dialogRef: MdDialogRef<MetroDialogComponent>) {

    }

    done() {
        this.dialogRef.close('LOADED')
    }

}

