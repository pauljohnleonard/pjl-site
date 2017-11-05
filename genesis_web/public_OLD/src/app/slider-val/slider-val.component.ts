import { Component, Input, ViewChild, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: './app/',
    selector: 'slider-val',  // tslint: disable-line
    templateUrl: 'slider-val.html'
})

export class SliderValComponent implements AfterViewInit, OnInit {

    @Input() value = 0.1
    @Input() minVal = 0
    @Input() maxVal = 1
    @Input() fixed = 2
    @Input() title: string
    @Input() unit: string
    @Output() change = new EventEmitter();

    @ViewChild('svgelement') svgElm: any;

    mouseMoveSubject: Subject<any> = new Subject();
    mouseUpSubject: Subject<any> = new Subject();
    viewChangeSubject: Subject<any> = new Subject();

    inited = false

    padLeft = 15
    padRight = 15
    width: number;
    height: number;
    textX: number
    textY: number
    bounds: any
    heightSlide: number
    heightLabel: number


    constructor() {

    }

    public recalculateBounds() {
        this.bounds = this.svgElm.nativeElement.getBoundingClientRect();
        this.width = this.bounds.width;
        this.height = this.bounds.height;


        this.textX = 20
        this.textY = this.height / 2
        this.heightSlide = 2 * this.height / 3
        this.heightLabel = this.height / 3
    }


    ngOnInit() {
        this.recalculateBounds();
        console.log(this.value)
    }

    ngAfterViewInit() {
        new Observable<any>((observer: Subscriber<any>) =>
            window.addEventListener('resize', () =>
                observer.next()
            )
        ).subscribe(() => this.recalculateBounds());

        new Observable<any>((observer: Subscriber<any>) => {
            this.svgElm.nativeElement.addEventListener('mousemove', (evt: any) => {
                evt.preventDefault();
                observer.next({ clientX: evt.clientX, clientY: evt.clientY });
            }
            );
            this.svgElm.nativeElement.addEventListener('touchmove', (evt: any) => {
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
            this.svgElm.nativeElement.addEventListener('mouseup', (evt: any) => {
                evt.preventDefault();
                observer.next(evt);
            });
            this.svgElm.nativeElement.addEventListener('touchend', (evt: any) => {
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
        return '0 0 ' +
            this.width + ' ' +
            this.height;
    }

    public valueToX(): number {
        //   console.log(this.value)
        const val = this.padLeft + (this.width - this.padLeft - this.padRight) *
            (this.value - this.minVal) / (this.maxVal - this.minVal) - 10
        return val
    }


    public dragValue(evt1: Event) {
        evt1.preventDefault();
        const width = this.width - this.padLeft - this.padRight;

        this.bounds = this.svgElm.nativeElement.getBoundingClientRect();
        console.log(this.bounds.left)

        const movesubscription = this.mouseMoveSubject
            .subscribe((evt) => {
                const x1 = evt.clientX - this.padLeft - this.bounds.left
                if (x1 > 0 && x1 < width) {
                    const d = this.minVal + (x1 / width) * (this.maxVal - this.minVal)
                    const newVal = + d.toFixed(this.fixed)
                    if (this.value !== newVal) {
                        this.value = newVal
                        this.change.emit(this.value);
                    }
                }
            });

        const upsubscription = this.mouseUpSubject.subscribe((evt: any) => {
            movesubscription.unsubscribe();
            upsubscription.unsubscribe();
        });
    }
}
