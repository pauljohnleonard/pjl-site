/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/music-app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../app/services/db.service';
import * as import9 from '@angular/material/button/button';
import * as import10 from '../node_modules/@angular/material/button/button.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/material/card/card';
import * as import16 from '../node_modules/@angular/material/card/card.ngfactory';
import * as import17 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../app/music/music.component';
import * as import19 from './music/music.component.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_MusicAppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MusicAppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.MusicAppComponent(p0);
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
var renderType_MusicAppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_MusicAppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.MusicAppComponent>;
  _MusicAppComponent_0_3:Wrapper_MusicAppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MusicAppComponent_Host0,renderType_MusicAppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'musicApp',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_MusicAppComponent0(this.viewUtils,this,0,this._el_0);
    this._MusicAppComponent_0_3 = new Wrapper_MusicAppComponent(this.injectorGet(import8.DBService,this.parentIndex));
    this.compView_0.create(this._MusicAppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._MusicAppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MusicAppComponent) && (0 === requestNodeIndex))) { return this._MusicAppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MusicAppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MusicAppComponentNgFactory:import7.ComponentFactory<import0.MusicAppComponent> = new import7.ComponentFactory<import0.MusicAppComponent>('musicApp',View_MusicAppComponent_Host0,import0.MusicAppComponent);
const styles_MusicAppComponent:any[] = ([] as any[]);
class View_MusicAppComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import9.MdButton>;
  _MdButton_0_3:import10.Wrapper_MdButton;
  _text_1:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_MusicAppComponent1,renderType_MusicAppComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'id','pause_but','md-raised-button',''),(null as any));
    this.compView_0 = new import10.View_MdButton0(this.viewUtils,this,0,this._el_0);
    this._MdButton_0_3 = new import10.Wrapper_MdButton(new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this.compView_0.create(this._MdButton_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButton_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdButton_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._MdButton_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_4:any = import3.inlineInterpolate(1,'',this.parentView.context.pause_text,'');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) { cb(this._text_1,ctx); }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.pause()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_MusicAppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_MusicAppComponent,{});
export class View_MusicAppComponent0 extends import1.AppView<import0.MusicAppComponent> {
  _viewQuery_MusicComponent_0:import14.QueryList<any>;
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import15.MdCard>;
  _MdCard_1_3:import16.Wrapper_MdCard;
  _text_2:any;
  _el_3:any;
  _MdCardContent_3_3:import16.Wrapper_MdCardContent;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import9.MdButton>;
  _MdButton_11_3:import10.Wrapper_MdButton;
  _text_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import11.ViewContainer;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import17.Wrapper_NgIf;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  compView_19:import1.AppView<import18.MusicComponent>;
  _MusicComponent_19_3:import19.Wrapper_MusicComponent;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_35:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MusicAppComponent0,renderType_MusicAppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_35 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_MusicComponent_0 = new import14.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import16.View_MdCard0(this.viewUtils,this,1,this._el_1);
    this._MdCard_1_3 = new import16.Wrapper_MdCard();
    this._text_2 = this.renderer.createText((null as any),'             \n        ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'md-card-content',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdCardContent_3_3 = new import16.Wrapper_MdCardContent();
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'style','width: 100%'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n  			',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','button-row'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'div',new import3.InlineArray2(2,'class','btn-group'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'button',new import3.InlineArray4(4,'id','play_but','md-raised-button',''),(null as any));
    this.compView_11 = new import10.View_MdButton0(this.viewUtils,this,11,this._el_11);
    this._MdButton_11_3 = new import10.Wrapper_MdButton(new import13.ElementRef(this._el_11),this.renderer);
    this._text_12 = this.renderer.createText((null as any),'',(null as any));
    this.compView_11.create(this._MdButton_11_3.context);
    this._text_13 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_9,(null as any));
    this._vc_14 = new import11.ViewContainer(14,9,this,this._anchor_14);
    this._TemplateRef_14_5 = new import20.TemplateRef_(this,14,this._anchor_14);
    this._NgIf_14_6 = new import17.Wrapper_NgIf(this._vc_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._text_16 = this.renderer.createText(this._el_7,'\n         	',(null as any));
    this._text_17 = this.renderer.createText(this._el_5,'\n     	',(null as any));
    this._text_18 = this.renderer.createText(this._el_3,'\n\n     	',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_3,'music',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_19 = new import19.View_MusicComponent0(this.viewUtils,this,19,this._el_19);
    this._MusicComponent_19_3 = new import19.Wrapper_MusicComponent(this.parentView.injectorGet(import8.DBService,this.parentIndex));
    this._text_20 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_19.create(this._MusicComponent_19_3.context);
    this._text_21 = this.renderer.createText(this._el_3,'\n     	',(null as any));
    this._text_22 = this.renderer.createText((null as any),'        \n        ',(null as any));
    this.compView_1.create(this._MdCard_1_3.context);
    this._text_23 = this.renderer.createText(parentRenderNode,'\n     	\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_11));
    this._viewQuery_MusicComponent_0.reset([this._MusicComponent_19_3.context]);
    this.context.music = this._viewQuery_MusicComponent_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.MdButton) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._MdButton_11_3.context; }
    if (((token === import20.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import21.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6.context; }
    if (((token === import18.MusicComponent) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MusicComponent_19_3.context; }
    if (((token === import15.MdCardContent) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._MdCardContent_3_3.context; }
    if (((token === import15.MdCard) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdCard_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this._MdCardContent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    if (this._MdButton_11_3.ngDoCheck(this,this._el_11,throwOnChange)) { this.compView_11.markAsCheckOnce(); }
    const currVal_14_0_0:any = this.context.pauseable;
    this._NgIf_14_6.check_ngIf(currVal_14_0_0,throwOnChange,false);
    this._NgIf_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    this._MusicComponent_19_3.ngDoCheck(this,this._el_19,throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
    this._MdButton_11_3.checkHost(this,this.compView_11,this._el_11,throwOnChange);
    const currVal_35:any = import3.inlineInterpolate(1,' ',this.context.play_stop_text,'');
    if (import3.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setText(this._text_12,currVal_35);
      this._expr_35 = currVal_35;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_19.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._MusicComponent_19_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_14.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_11.destroy();
    this.compView_19.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_22,ctx);
    }
    if (((nodeIndex == 11) && (ngContentIndex == 0))) { cb(this._text_12,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 14)) { return new View_MusicAppComponent1(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    return (null as any);
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.compView_11.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_11_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.play()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}