
import { Component } from '@angular/core';


@Component({
    selector: "drumkit-component",
    template: `


<div id='title'>
        WebAudio Drum Machine <span id='version'>1.0</span>
    </div>
    <section class='container active' id='pad'>
        <div class='buttons_row'>
            <span class='label'>Tom 1</span>
            <img id='Tom1_0' class='btn' src='images/drum/button_off.png'><img id='Tom1_1' class='btn' src='images/drum/button_off.png'><img id='Tom1_2' class='btn' src='images/drum/button_off.png'><img id='Tom1_3' class='btn' src='images/drum/button_off.png'><img id='Tom1_4' class='btn' src='images/drum/button_off.png'><img id='Tom1_5' class='btn' src='images/drum/button_off.png'><img id='Tom1_6' class='btn' src='images/drum/button_off.png'><img id='Tom1_7' class='btn' src='images/drum/button_off.png'><img id='Tom1_8' class='btn' src='images/drum/button_off.png'><img id='Tom1_9' class='btn' src='images/drum/button_off.png'><img id='Tom1_10' class='btn' src='images/drum/button_off.png'><img id='Tom1_11' class='btn' src='images/drum/button_off.png'><img id='Tom1_12' class='btn' src='images/drum/button_off.png'><img id='Tom1_13' class='btn' src='images/drum/button_off.png'><img id='Tom1_14' class='btn' src='images/drum/button_off.png'><img id='Tom1_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row'>
            <span class='label'>Tom 2</span>
            <img id='Tom2_0' class='btn' src='images/drum/button_off.png'><img id='Tom2_1' class='btn' src='images/drum/button_off.png'><img id='Tom2_2' class='btn' src='images/drum/button_off.png'><img id='Tom2_3' class='btn' src='images/drum/button_off.png'><img id='Tom2_4' class='btn' src='images/drum/button_off.png'><img id='Tom2_5' class='btn' src='images/drum/button_off.png'><img id='Tom2_6' class='btn' src='images/drum/button_off.png'><img id='Tom2_7' class='btn' src='images/drum/button_off.png'><img id='Tom2_8' class='btn' src='images/drum/button_off.png'><img id='Tom2_9' class='btn' src='images/drum/button_off.png'><img id='Tom2_10' class='btn' src='images/drum/button_off.png'><img id='Tom2_11' class='btn' src='images/drum/button_off.png'><img id='Tom2_12' class='btn' src='images/drum/button_off.png'><img id='Tom2_13' class='btn' src='images/drum/button_off.png'><img id='Tom2_14' class='btn' src='images/drum/button_off.png'><img id='Tom2_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row'>
            <span class='label'>Tom 3</span>
            <img id='Tom3_0' class='btn' src='images/drum/button_off.png'><img id='Tom3_1' class='btn' src='images/drum/button_off.png'><img id='Tom3_2' class='btn' src='images/drum/button_off.png'><img id='Tom3_3' class='btn' src='images/drum/button_off.png'><img id='Tom3_4' class='btn' src='images/drum/button_off.png'><img id='Tom3_5' class='btn' src='images/drum/button_off.png'><img id='Tom3_6' class='btn' src='images/drum/button_off.png'><img id='Tom3_7' class='btn' src='images/drum/button_off.png'><img id='Tom3_8' class='btn' src='images/drum/button_off.png'><img id='Tom3_9' class='btn' src='images/drum/button_off.png'><img id='Tom3_10' class='btn' src='images/drum/button_off.png'><img id='Tom3_11' class='btn' src='images/drum/button_off.png'><img id='Tom3_12' class='btn' src='images/drum/button_off.png'><img id='Tom3_13' class='btn' src='images/drum/button_off.png'><img id='Tom3_14' class='btn' src='images/drum/button_off.png'><img id='Tom3_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row'>
            <span class='label'>Hi-Hat</span>
            <img id='HiHat_0' class='btn' src='images/drum/button_off.png'><img id='HiHat_1' class='btn' src='images/drum/button_off.png'><img id='HiHat_2' class='btn' src='images/drum/button_off.png'><img id='HiHat_3' class='btn' src='images/drum/button_off.png'><img id='HiHat_4' class='btn' src='images/drum/button_off.png'><img id='HiHat_5' class='btn' src='images/drum/button_off.png'><img id='HiHat_6' class='btn' src='images/drum/button_off.png'><img id='HiHat_7' class='btn' src='images/drum/button_off.png'><img id='HiHat_8' class='btn' src='images/drum/button_off.png'><img id='HiHat_9' class='btn' src='images/drum/button_off.png'><img id='HiHat_10' class='btn' src='images/drum/button_off.png'><img id='HiHat_11' class='btn' src='images/drum/button_off.png'><img id='HiHat_12' class='btn' src='images/drum/button_off.png'><img id='HiHat_13' class='btn' src='images/drum/button_off.png'><img id='HiHat_14' class='btn' src='images/drum/button_off.png'><img id='HiHat_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row'>
            <span class='label'>Snare</span>
            <img id='Snare_0' class='btn' src='images/drum/button_off.png'><img id='Snare_1' class='btn' src='images/drum/button_off.png'><img id='Snare_2' class='btn' src='images/drum/button_off.png'><img id='Snare_3' class='btn' src='images/drum/button_off.png'><img id='Snare_4' class='btn' src='images/drum/button_off.png'><img id='Snare_5' class='btn' src='images/drum/button_off.png'><img id='Snare_6' class='btn' src='images/drum/button_off.png'><img id='Snare_7' class='btn' src='images/drum/button_off.png'><img id='Snare_8' class='btn' src='images/drum/button_off.png'><img id='Snare_9' class='btn' src='images/drum/button_off.png'><img id='Snare_10' class='btn' src='images/drum/button_off.png'><img id='Snare_11' class='btn' src='images/drum/button_off.png'><img id='Snare_12' class='btn' src='images/drum/button_off.png'><img id='Snare_13' class='btn' src='images/drum/button_off.png'><img id='Snare_14' class='btn' src='images/drum/button_off.png'><img id='Snare_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row'>
            <span class='label'>Kick</span>
            <img id='Kick_0' class='btn' src='images/drum/button_off.png'><img id='Kick_1' class='btn' src='images/drum/button_off.png'><img id='Kick_2' class='btn' src='images/drum/button_off.png'><img id='Kick_3' class='btn' src='images/drum/button_off.png'><img id='Kick_4' class='btn' src='images/drum/button_off.png'><img id='Kick_5' class='btn' src='images/drum/button_off.png'><img id='Kick_6' class='btn' src='images/drum/button_off.png'><img id='Kick_7' class='btn' src='images/drum/button_off.png'><img id='Kick_8' class='btn' src='images/drum/button_off.png'><img id='Kick_9' class='btn' src='images/drum/button_off.png'><img id='Kick_10' class='btn' src='images/drum/button_off.png'><img id='Kick_11' class='btn' src='images/drum/button_off.png'><img id='Kick_12' class='btn' src='images/drum/button_off.png'><img id='Kick_13' class='btn' src='images/drum/button_off.png'><img id='Kick_14' class='btn' src='images/drum/button_off.png'><img id='Kick_15' class='btn' src='images/drum/button_off.png'>
        </div>
        <div class='buttons_row' id='LED_row'>
            <span class='label'></span>
            <img id='LED_0' src='images/drum/LED_off.png'><img id='LED_1' src='images/drum/LED_off.png'><img id='LED_2' src='images/drum/LED_off.png'><img id='LED_3' src='images/drum/LED_off.png'><img id='LED_4' src='images/drum/LED_off.png'><img id='LED_5' src='images/drum/LED_off.png'><img id='LED_6' src='images/drum/LED_off.png'><img id='LED_7' src='images/drum/LED_off.png'><img id='LED_8' src='images/drum/LED_off.png'><img id='LED_9' src='images/drum/LED_off.png'><img id='LED_10' src='images/drum/LED_off.png'><img id='LED_11' src='images/drum/LED_off.png'><img id='LED_12' src='images/drum/LED_off.png'><img id='LED_13' src='images/drum/LED_off.png'><img id='LED_14' src='images/drum/LED_off.png'><img id='LED_15' src='images/drum/LED_off.png'>
        </div>
    </section>
    <section class='container active' id='params'>
        <div id='paramsleft_container'>
            <div id='kitcombo_container'>
                <span class='label' id='kitlabel'>Kit</span>
                <div class='combo' id='kitcombo'>
                    <span id='kitname'></span>
                    <img src='images/drum/drop_arrow.png'>
                    <ul class='combolist' id='kitlist'>
                    </ul>
                </div>
            </div>
            <div id='effectcombo_container'>
                <span class='label' id='effectlabel'>Effect</span>
                <div class='combo' id='effectcombo'>
                    <span id='effectname'></span>
                    <img src='images/drum/drop_arrow.png'>
                    <ul class='combolist' id='effectlist'>
                    </ul>
                </div>
            </div>
            <div id='tempo_container'>
                <span class='label' id='tempolabel'>Tempo</span>
                <div id='tempodisplay'>
                <span id='tempo'></span>&nbsp;<span id='bpm'>bpm</span>
                </div>
                <img id='tempodec' src='images/drum/tempo_dec.png'><img id='tempoinc' src='images/drum/tempo_inc.png'>
            </div>
            <div class='slider_container' id='swing_container'>
                <span class='label' id='swinglabel'>Swing</span>
                <div class='slider_groove'>
                    <img class='slider_track' src='images/drum/sliderh_track.png'>
                    <img class='slider_thumb' id='swing_thumb' src='images/drum/sliderh_thumb.png'>
                </div>
            </div>
        </div>
        <div class='vrule'></div>
        <div class='slider_container' id='effect_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='effect_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Effect Level
            </div>
        </div>
        <div class='vrule'></div>
        <div class='slider_container' id='kick_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='kick_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Kick Pitch
            </div>
        </div>
        <div class='slider_container' id='snare_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='snare_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Snare Pitch
            </div>
        </div>
        <div class='slider_container' id='hihat_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='hihat_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Hi-Hat Pitch
            </div>
        </div>
        <div class='slider_container' id='tom1_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='tom1_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Tom 1 Pitch
            </div>
        </div>
        <div class='slider_container' id='tom2_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='tom2_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Tom 2 Pitch
            </div>
        </div>
        <div class='slider_container' id='tom3_container'>
            <div class='slider_groove'>
                <img class='slider_track' src='images/drum/slider_track.png'>
                <img class='slider_thumb' id='tom3_thumb' src='images/drum/slider_thumb.png'>
            </div>
            <div class='slider_label'>
                Tom 3 Pitch
            </div>
        </div>
    </section>
  
    `

})


export class DrumkitComponent {

    constructor() {
    
    }

    tick() {
    
    }

}
