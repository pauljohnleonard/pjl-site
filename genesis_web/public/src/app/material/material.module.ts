/*
 * @Author: Paul John Leonard
 * @Date: 2017-09-27 17:30:28
 * @Last Modified by: Paul John Leonard
 * @Last Modified time: 2017-11-04 12:54:06
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatIconModule, MatRadioModule, MatSnackBarModule,
    MatButtonModule, MatDialogModule,
    MatListModule, MatCardModule, MatTableModule,
    MatInputModule, MatToolbarModule, MatMenuModule,
    MatSidenavModule, MatProgressBarModule,
    MatButtonToggleModule, MatProgressSpinnerModule,
    MatChipsModule, MatSelectModule, MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';


/**
 *   Container for all the material modules so we just import this and don't have type lots of stuff
 *
 * @export
 * @class FtnMaterialModule
 */
@NgModule({
    imports: [CommonModule, MatProgressBarModule, MatButtonToggleModule, MatProgressSpinnerModule,
        MatIconModule, BrowserAnimationsModule, MatButtonModule, MatRadioModule, MatSnackBarModule,
        MatCardModule, MatListModule, MatIconModule, MatDialogModule, MatButtonModule,
        MatTableModule, MatInputModule, MatMenuModule, MatSidenavModule, MatTooltipModule,
        ReactiveFormsModule, MatToolbarModule, MatChipsModule, MatSelectModule, MatAutocompleteModule
    ],
    exports: [CommonModule, MatProgressBarModule, MatButtonToggleModule, MatProgressSpinnerModule,
        MatIconModule, BrowserAnimationsModule, MatButtonModule, MatRadioModule, MatSnackBarModule,
        MatCardModule, MatListModule, MatIconModule, MatDialogModule, MatButtonModule,
        MatTableModule, MatInputModule, MatMenuModule, MatSidenavModule, MatTooltipModule,
        ReactiveFormsModule, MatToolbarModule, MatChipsModule, MatSelectModule, MatAutocompleteModule
    ],
})

export class MyMaterialModule { }
