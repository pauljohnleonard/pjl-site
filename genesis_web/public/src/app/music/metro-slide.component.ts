  import { Component,Input,ViewChild,OnInit,AfterViewInit ,Output ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: "metro-slide",
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
            style="width: 100%; height: 40px"          
            >                
          

        <line   
            [attr.x1]="padX"
            [attr.x2]="width-padX" 
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
        
    </svg>
    `
})

export class MetroSlideComponent implements AfterViewInit,OnInit {

    @Input() value : number
    @Output() change = new EventEmitter();
    @ViewChild("svgelement") svgElm : any;

    mouseMoveSubject : Subject<any> = new Subject();
    mouseUpSubject : Subject<any> = new Subject();
    viewChangeSubject : Subject<any> = new Subject();

    
    padX : number=10
    width : number;
    height : number;

   
    minVal:number =  10
    maxVal:number = 300
  

    constructor() {

    }

   public recalculateBounds() {
       let bounds : any = this.svgElm.nativeElement.getBoundingClientRect();
       this.width = bounds.width;
       this.height = bounds.height; 
   }


   ngOnInit() {
       this.recalculateBounds();       
   }

   ngAfterViewInit() {
       new Observable<any>((observer : Subscriber<any>) =>
        window.addEventListener("resize",() =>            
           observer.next()
        )
       ).subscribe(() => this.recalculateBounds());

       new Observable<any>((observer : Subscriber<any>) =>
        {
            this.svgElm.nativeElement.addEventListener("mousemove",(evt : any) =>  {  
                    evt.preventDefault();                           
                    observer.next({clientX: evt.clientX,clientY: evt.clientY});                    
                }
            );
            this.svgElm.nativeElement.addEventListener("touchmove",(evt : any) => {
                    evt.preventDefault();
                    observer.next(
                        {clientX: evt.targetTouches[0].clientX,
                        clientY: evt.targetTouches[0].clientY
                            });
                }
            );
        }
       ).subscribe(this.mouseMoveSubject);
       
       new Observable<any>((observer : Subscriber<any>) => {
            this.svgElm.nativeElement.addEventListener("mouseup",(evt : any) => {
                evt.preventDefault();
                observer.next(evt);
            });
            this.svgElm.nativeElement.addEventListener("touchend",(evt : any) => {
                evt.preventDefault();
                observer.next(evt);
            });
        }
       ).subscribe(this.mouseUpSubject);       
   }

   
    /** 
     * Get viewbox based on element width / height
     */
    public getViewbox() : string {           
        return "0 0 "+
            this.width+" "+
            this.height;
    }

   

    public valueToX() : number {
        return this.padX + (this.width-2*this.padX)*(this.value-this.minVal)/(this.maxVal-this.minVal)
    }
   

    public dragValue(evt : Event) {
        evt.preventDefault();
        let width = this.width-2*this.padX;
    
        let movesubscription = this.mouseMoveSubject
            .map((evt) => evt.clientX-this.padX)
            .filter((clientx) => 
            
            clientx > 0
            )
            .filter((clientx) => 
                    clientx < width
                    )
            .map((clientx : number) => 
                this.minVal + (clientx/width)*(this.maxVal-this.minVal)
            )           
            .subscribe((d : number) => {
                    this.value = Math.floor(d) 
                    this.change.emit(this.value);
                });
            
        let upsubscription = this.mouseUpSubject.subscribe((evt : any) => {
            movesubscription.unsubscribe();
            upsubscription.unsubscribe();            
        });
    }

    
} 