/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../app/services/db.service';
import * as import9 from '@angular/material/toolbar/toolbar';
import * as import10 from '../node_modules/@angular/material/toolbar/toolbar.ngfactory';
import * as import11 from '@angular/material/button/button';
import * as import12 from '../node_modules/@angular/material/button/button.ngfactory';
import * as import13 from '../../app/music-app.component';
import * as import14 from './music-app.component.ngfactory';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/security';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AppComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'my-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.DBService,this.parentIndex));
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('my-app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import9.MdToolbar>;
  _MdToolbar_1_3:import10.Wrapper_MdToolbar;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  compView_12:import1.AppView<import11.MdButton>;
  _MdButton_12_3:import12.Wrapper_MdButton;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  compView_19:import1.AppView<import13.MusicAppComponent>;
  _MusicAppComponent_19_3:import14.Wrapper_MusicAppComponent;
  _text_20:any;
  /*private*/ _expr_27:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_27 = import15.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n      ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-toolbar',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import10.View_MdToolbar0(this.viewUtils,this,1,this._el_1);
    this._MdToolbar_1_3 = new import10.Wrapper_MdToolbar(new import16.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText((null as any),'\n           ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,' ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'img',new import3.InlineArray8(6,'alt','genesis logo','src','genesis.png','style','height: 36px'),(null as any));
    this._text_6 = this.renderer.createText(this._el_3,'\n            Genesis ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'  \n              ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'style','flex: 1 1 auto'),(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n           ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n          ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'button',new import3.InlineArray8(8,'id','','md-button','','name','','value',''),(null as any));
    this.compView_12 = new import12.View_MdButton0(this.viewUtils,this,12,this._el_12);
    this._MdButton_12_3 = new import12.Wrapper_MdButton(new import16.ElementRef(this._el_12),this.renderer);
    this._text_13 = this.renderer.createText((null as any),'\n             ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'style','height: 36px'),(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n         ',(null as any));
    this.compView_12.create(this._MdButton_12_3.context);
    this._text_16 = this.renderer.createText(this._el_10,'\n          ',(null as any));
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_1.create(this._MdToolbar_1_3.context);
    this._text_18 = this.renderer.createText(parentRenderNode,'\n\n      ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,parentRenderNode,'musicApp',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_19 = new import14.View_MusicAppComponent0(this.viewUtils,this,19,this._el_19);
    this._MusicAppComponent_19_3 = new import14.Wrapper_MusicAppComponent(this.parentView.injectorGet(import8.DBService,this.parentIndex));
    this.compView_19.create(this._MusicAppComponent_19_3.context);
    this._text_20 = this.renderer.createText(parentRenderNode,'   \n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_12,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_12));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.MdButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdButton_12_3.context; }
    if (((token === import9.MdToolbar) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdToolbar_1_3.context; }
    if (((token === import13.MusicAppComponent) && (19 === requestNodeIndex))) { return this._MusicAppComponent_19_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdToolbar_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    if (this._MdButton_12_3.ngDoCheck(this,this._el_12,throwOnChange)) { this.compView_12.markAsCheckOnce(); }
    this._MusicAppComponent_19_3.ngDoCheck(this,this._el_19,throwOnChange);
    this._MdButton_12_3.checkHost(this,this.compView_12,this._el_12,throwOnChange);
    const currVal_27:any = import3.inlineInterpolate(1,'',this.context.button_img,'');
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementProperty(this._el_14,'src',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_27));
      this._expr_27 = currVal_27;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_12.internalDetectChanges(throwOnChange);
    this.compView_19.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_12.destroy();
    this.compView_19.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
      cb(this._el_8,ctx);
      cb(this._text_9,ctx);
      cb(this._el_10,ctx);
      cb(this._text_17,ctx);
    }
    if (((nodeIndex == 1) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 12) && (ngContentIndex == 0))) {
      cb(this._text_13,ctx);
      cb(this._el_14,ctx);
      cb(this._text_15,ctx);
    }
  }
  handleEvent_12(eventName:string,$event:any):boolean {
    this.compView_12.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_12_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.signIn()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}