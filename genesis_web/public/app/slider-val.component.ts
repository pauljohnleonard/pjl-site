import { Component, Input, ViewChild, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: "slider-val",
    template: `
    <style>
        svg text {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: default;
        }
        svg text::selection {
            background: none;
        }
        .dragHandle:hover {
            fill: yellow;
            cursor: pointer;
        } 
    </style>
 

    <svg #svgelement [attr.viewBox]="getViewbox()"  
            preserveAspectRatio="none"
            style="width:220px;height: 40px"          
            >                   
 
        <line   
            [attr.x1]="padLeft"
            [attr.x2]="width-padRight" 
            [attr.y1]="height/2"            
            [attr.y2]="height/2" 
            stroke="#000"
            stroke-width="1"
            ></line>

        <circle [attr.cx]="valueToX()" [attr.cy]="height/2" 
            r="12" 
            stroke="#000"
            stroke-width="1"
            fill="#fff"
            (mousedown)="dragValue($event)"
            (touchstart)="dragValue($event)"
            class="dragHandle"
            >
        </circle>

        <text [attr.x]="textX" [attr.y]="textY" style="align:center"> {{value}}s </text>


    </svg>

    `
})

export class SliderValComponent implements AfterViewInit, OnInit {

    @Input() value: number=0.1
    @Input() minVal: number = 0
    @Input() maxVal: number = 1
    @Input() fixed: number = 2
    @Output() change = new EventEmitter();
    
    @ViewChild("svgelement") svgElm: any;

    mouseMoveSubject: Subject<any> = new Subject();
    mouseUpSubject: Subject<any> = new Subject();
    viewChangeSubject: Subject<any> = new Subject();

    inited:boolean=false

    padLeft: number = 70
    padRight: number = 15
    width: number;
    height: number;
    textX: number
    textY: number
    bounds: any
    
    constructor() {

    }

    public recalculateBounds() {
        this.bounds = this.svgElm.nativeElement.getBoundingClientRect();
        this.width = this.bounds.width;
        this.height = this.bounds.height;
        this.textX = 20
        this.textY = this.height / 2
    }


    ngOnInit() {
        this.recalculateBounds();
        console.log(this.value)
        
    }

    ngAfterViewInit() {
        new Observable<any>((observer: Subscriber<any>) =>
            window.addEventListener("resize", () =>
                observer.next()
            )
        ).subscribe(() => this.recalculateBounds());

        new Observable<any>((observer: Subscriber<any>) => {
            this.svgElm.nativeElement.addEventListener("mousemove", (evt: any) => {
                evt.preventDefault();
                observer.next({ clientX: evt.clientX, clientY: evt.clientY });
            }
            );
            this.svgElm.nativeElement.addEventListener("touchmove", (evt: any) => {
                evt.preventDefault();
                observer.next(
                    {
                        clientX: evt.targetTouches[0].clientX,
                        clientY: evt.targetTouches[0].clientY
                    });
            }
            );
        }
        ).subscribe(this.mouseMoveSubject);

        new Observable<any>((observer: Subscriber<any>) => {
            this.svgElm.nativeElement.addEventListener("mouseup", (evt: any) => {
                evt.preventDefault();
                observer.next(evt);
            });
            this.svgElm.nativeElement.addEventListener("touchend", (evt: any) => {
                evt.preventDefault();
                observer.next(evt);
            });
        }
        ).subscribe(this.mouseUpSubject);
    }


    /** 
     * Get viewbox based on element width / height
     */
    public getViewbox(): string {
        return "0 0 " +
            this.width + " " +
            this.height;
    }

    public valueToX(): number {
     //   console.log(this.value)
        var val = this.padLeft + (this.width - this.padLeft - this.padRight) * (this.value - this.minVal) / (this.maxVal - this.minVal)
        return val
    }


    public dragValue(evt: Event) {
        evt.preventDefault();
        let width = this.width - this.padLeft - this.padRight;

        this.bounds = this.svgElm.nativeElement.getBoundingClientRect();
        console.log(this.bounds.left)

        let movesubscription = this.mouseMoveSubject
            .map((evt) => {
                return evt.clientX - this.padLeft - this.bounds.left
            })
            .filter((clientx) => {
                return clientx > 0
            })
            .filter((clientx) => {
                return clientx < width
            })
            .map((clientx: number) => {
                return this.minVal + (clientx / width) * (this.maxVal - this.minVal)
            })
            .subscribe((d: number) => {
                var newVal = + d.toFixed(this.fixed)
                if (this.value != newVal) {
                    this.value = newVal
                    this.change.emit(this.value);
                }
            });

        let upsubscription = this.mouseUpSubject.subscribe((evt: any) => {
            movesubscription.unsubscribe();
            upsubscription.unsubscribe();
        });
    }


} 