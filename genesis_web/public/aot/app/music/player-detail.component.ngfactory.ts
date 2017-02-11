/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/music/player-detail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/music/ai-detail.component';
import * as import10 from './ai-detail.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../app/services/net.service';
import * as import13 from '@angular/material/card/card';
import * as import14 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import15 from '@angular/material/grid-list/grid-list';
import * as import16 from '../../node_modules/@angular/material/grid-list/grid-list.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '@angular/material/grid-list/grid-tile';
import * as import19 from '../../node_modules/@angular/material/grid-list/grid-tile.ngfactory';
import * as import20 from '@angular/material/button/button';
import * as import21 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import22 from '../../../app/music/instrument-detail.component';
import * as import23 from './instrument-detail.component.ngfactory';
import * as import24 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/material/core/rtl/dir';
import * as import27 from '../../../app/services/sf.service';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/common/src/directives/ng_if';
import * as import30 from '@angular/core/src/security';
export class Wrapper_PlayerDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PlayerDetailComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PlayerDetailComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_player(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.player = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.playerSelected.subscribe(_eventHandler.bind(view,'playerSelected'))); }
  }
}
var renderType_PlayerDetailComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PlayerDetailComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PlayerDetailComponent>;
  _PlayerDetailComponent_0_3:Wrapper_PlayerDetailComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PlayerDetailComponent_Host0,renderType_PlayerDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'player-detail',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PlayerDetailComponent0(this.viewUtils,this,0,this._el_0);
    this._PlayerDetailComponent_0_3 = new Wrapper_PlayerDetailComponent();
    this.compView_0.create(this._PlayerDetailComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PlayerDetailComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PlayerDetailComponent) && (0 === requestNodeIndex))) { return this._PlayerDetailComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PlayerDetailComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PlayerDetailComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PlayerDetailComponentNgFactory:import8.ComponentFactory<import0.PlayerDetailComponent> = new import8.ComponentFactory<import0.PlayerDetailComponent>('player-detail',View_PlayerDetailComponent_Host0,import0.PlayerDetailComponent);
const styles_PlayerDetailComponent:any[] = ([] as any[]);
class View_PlayerDetailComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import9.AIDetailComponent>;
  _AIDetailComponent_2_3:import10.Wrapper_AIDetailComponent;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_PlayerDetailComponent1,renderType_PlayerDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ai-detail',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import10.View_AIDetailComponent0(this.viewUtils,this,2,this._el_2);
    this._AIDetailComponent_2_3 = new import10.Wrapper_AIDetailComponent(this.parentView.parentView.injectorGet(import12.NetService,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_2.create(this._AIDetailComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,' \n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.AIDetailComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._AIDetailComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.player.details.ai;
    this._AIDetailComponent_2_3.check_ai(currVal_2_0_0,throwOnChange,false);
    this._AIDetailComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PlayerDetailComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PlayerDetailComponent,{});
export class View_PlayerDetailComponent0 extends import2.AppView<import0.PlayerDetailComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import13.MdCard>;
  _MdCard_1_3:import14.Wrapper_MdCard;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import2.AppView<import15.MdGridList>;
  _MdGridList_4_3:import16.Wrapper_MdGridList;
  _query_MdGridTile_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  compView_6:import2.AppView<import18.MdGridTile>;
  _MdGridTile_6_3:import19.Wrapper_MdGridTile;
  _text_7:any;
  _el_8:any;
  compView_8:import2.AppView<import20.MdButton>;
  _MdButton_8_3:import21.Wrapper_MdButton;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  compView_12:import2.AppView<import18.MdGridTile>;
  _MdGridTile_12_3:import19.Wrapper_MdGridTile;
  _text_13:any;
  _el_14:any;
  compView_14:import2.AppView<import22.InstrumentDetailComponent>;
  _InstrumentDetailComponent_14_3:import23.Wrapper_InstrumentDetailComponent;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  compView_18:import2.AppView<import18.MdGridTile>;
  _MdGridTile_18_3:import19.Wrapper_MdGridTile;
  _text_19:any;
  _el_20:any;
  compView_20:import2.AppView<import20.MdButton>;
  _MdButton_20_3:import21.Wrapper_MdButton;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  compView_24:import2.AppView<import18.MdGridTile>;
  _MdGridTile_24_3:import19.Wrapper_MdGridTile;
  _text_25:any;
  _el_26:any;
  compView_26:import2.AppView<import20.MdButton>;
  _MdButton_26_3:import21.Wrapper_MdButton;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _anchor_33:any;
  /*private*/ _vc_33:import11.ViewContainer;
  _TemplateRef_33_5:any;
  _NgIf_33_6:import24.Wrapper_NgIf;
  _text_34:any;
  _text_35:any;
  /*private*/ _expr_60:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PlayerDetailComponent0,renderType_PlayerDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_60 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,' \n\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-card',new import3.InlineArray2(2,'style','background:#F0F0FF'),(null as any));
    this.compView_1 = new import14.View_MdCard0(this.viewUtils,this,1,this._el_1);
    this._MdCard_1_3 = new import14.Wrapper_MdCard();
    this._text_2 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n\n    \n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,(null as any),'md-grid-list',new import3.InlineArray4(4,'cols','8','role','list'),(null as any));
    this.compView_4 = new import16.View_MdGridList0(this.viewUtils,this,4,this._el_4);
    this._MdGridList_4_3 = new import16.Wrapper_MdGridList(this.renderer,new import25.ElementRef(this._el_4),this.parentView.injectorGet(import26.Dir,this.parentIndex,(null as any)));
    this._query_MdGridTile_4_0 = new import17.QueryList<any>();
    this._text_5 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_6 = new import19.View_MdGridTile0(this.viewUtils,this,6,this._el_6);
    this._MdGridTile_6_3 = new import19.Wrapper_MdGridTile(this.renderer,new import25.ElementRef(this._el_6));
    this._text_7 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'md-button',''),(null as any));
    this.compView_8 = new import21.View_MdButton0(this.viewUtils,this,8,this._el_8);
    this._MdButton_8_3 = new import21.Wrapper_MdButton(new import25.ElementRef(this._el_8),this.renderer);
    this._el_9 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray4(4,'alt','midiin','style','height: 32px'),(null as any));
    this.compView_8.create(this._MdButton_8_3.context);
    this._text_10 = this.renderer.createText((null as any),'          \n    ',(null as any));
    this.compView_6.create(this._MdGridTile_6_3.context);
    this._text_11 = this.renderer.createText((null as any),'\n \n    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_12 = new import19.View_MdGridTile0(this.viewUtils,this,12,this._el_12);
    this._MdGridTile_12_3 = new import19.Wrapper_MdGridTile(this.renderer,new import25.ElementRef(this._el_12));
    this._text_13 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,(null as any),'instrument-detail',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_14 = new import23.View_InstrumentDetailComponent0(this.viewUtils,this,14,this._el_14);
    this._InstrumentDetailComponent_14_3 = new import23.Wrapper_InstrumentDetailComponent(this.parentView.injectorGet(import27.SFService,this.parentIndex));
    this._text_15 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_14.create(this._InstrumentDetailComponent_14_3.context);
    this._text_16 = this.renderer.createText((null as any),'          \n    ',(null as any));
    this.compView_12.create(this._MdGridTile_12_3.context);
    this._text_17 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_18 = new import19.View_MdGridTile0(this.viewUtils,this,18,this._el_18);
    this._MdGridTile_18_3 = new import19.Wrapper_MdGridTile(this.renderer,new import25.ElementRef(this._el_18));
    this._text_19 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'md-button',''),(null as any));
    this.compView_20 = new import21.View_MdButton0(this.viewUtils,this,20,this._el_20);
    this._MdButton_20_3 = new import21.Wrapper_MdButton(new import25.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText((null as any),'S',(null as any));
    this.compView_20.create(this._MdButton_20_3.context);
    this._text_22 = this.renderer.createText((null as any),'\n     ',(null as any));
    this.compView_18.create(this._MdGridTile_18_3.context);
    this._text_23 = this.renderer.createText((null as any),'\n     \n     ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_24 = new import19.View_MdGridTile0(this.viewUtils,this,24,this._el_24);
    this._MdGridTile_24_3 = new import19.Wrapper_MdGridTile(this.renderer,new import25.ElementRef(this._el_24));
    this._text_25 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'md-button',''),(null as any));
    this.compView_26 = new import21.View_MdButton0(this.viewUtils,this,26,this._el_26);
    this._MdButton_26_3 = new import21.Wrapper_MdButton(new import25.ElementRef(this._el_26),this.renderer);
    this._text_27 = this.renderer.createText((null as any),'M',(null as any));
    this.compView_26.create(this._MdButton_26_3.context);
    this._text_28 = this.renderer.createText((null as any),' \n     ',(null as any));
    this.compView_24.create(this._MdGridTile_24_3.context);
    this._text_29 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this.compView_4.create(this._MdGridList_4_3.context);
    this._text_30 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._text_31 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._text_32 = this.renderer.createText((null as any),' \n\n    ',(null as any));
    this._anchor_33 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_33 = new import11.ViewContainer(33,1,this,this._anchor_33);
    this._TemplateRef_33_5 = new import28.TemplateRef_(this,33,this._anchor_33);
    this._NgIf_33_6 = new import24.Wrapper_NgIf(this._vc_33.vcRef,this._TemplateRef_33_5);
    this._text_34 = this.renderer.createText((null as any),'\n',(null as any));
    this.compView_1.create(this._MdCard_1_3.context);
    this._text_35 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_20,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_20));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_26,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_26));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._anchor_33,
      this._text_34,
      this._text_35
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.MdButton) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdButton_8_3.context; }
    if (((token === import18.MdGridTile) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdGridTile_6_3.context; }
    if (((token === import22.InstrumentDetailComponent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._InstrumentDetailComponent_14_3.context; }
    if (((token === import18.MdGridTile) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdGridTile_12_3.context; }
    if (((token === import20.MdButton) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._MdButton_20_3.context; }
    if (((token === import18.MdGridTile) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdGridTile_18_3.context; }
    if (((token === import20.MdButton) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._MdButton_26_3.context; }
    if (((token === import18.MdGridTile) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._MdGridTile_24_3.context; }
    if (((token === import15.MdGridList) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._MdGridList_4_3.context; }
    if (((token === import28.TemplateRef) && (33 === requestNodeIndex))) { return this._TemplateRef_33_5; }
    if (((token === import29.NgIf) && (33 === requestNodeIndex))) { return this._NgIf_33_6.context; }
    if (((token === import13.MdCard) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._MdCard_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_4_0_0:any = '8';
    this._MdGridList_4_3.check_cols(currVal_4_0_0,throwOnChange,false);
    this._MdGridList_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_6_0_0:any = 1;
    this._MdGridTile_6_3.check_rowspan(currVal_6_0_0,throwOnChange,false);
    const currVal_6_0_1:any = 1;
    this._MdGridTile_6_3.check_colspan(currVal_6_0_1,throwOnChange,false);
    this._MdGridTile_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    if (this._MdButton_8_3.ngDoCheck(this,this._el_8,throwOnChange)) { this.compView_8.markAsCheckOnce(); }
    const currVal_12_0_0:any = 1;
    this._MdGridTile_12_3.check_rowspan(currVal_12_0_0,throwOnChange,false);
    const currVal_12_0_1:any = 5;
    this._MdGridTile_12_3.check_colspan(currVal_12_0_1,throwOnChange,false);
    this._MdGridTile_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    const currVal_14_0_0:any = this.context.player.details.inst;
    this._InstrumentDetailComponent_14_3.check_inst(currVal_14_0_0,throwOnChange,false);
    this._InstrumentDetailComponent_14_3.ngDoCheck(this,this._el_14,throwOnChange);
    const currVal_18_0_0:any = 1;
    this._MdGridTile_18_3.check_rowspan(currVal_18_0_0,throwOnChange,false);
    const currVal_18_0_1:any = 1;
    this._MdGridTile_18_3.check_colspan(currVal_18_0_1,throwOnChange,false);
    this._MdGridTile_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    const currVal_20_0_0:any = this.context.soloColor();
    this._MdButton_20_3.check_color(currVal_20_0_0,throwOnChange,false);
    if (this._MdButton_20_3.ngDoCheck(this,this._el_20,throwOnChange)) { this.compView_20.markAsCheckOnce(); }
    const currVal_24_0_0:any = 1;
    this._MdGridTile_24_3.check_rowspan(currVal_24_0_0,throwOnChange,false);
    const currVal_24_0_1:any = 1;
    this._MdGridTile_24_3.check_colspan(currVal_24_0_1,throwOnChange,false);
    this._MdGridTile_24_3.ngDoCheck(this,this._el_24,throwOnChange);
    const currVal_26_0_0:any = this.context.muteColor();
    this._MdButton_26_3.check_color(currVal_26_0_0,throwOnChange,false);
    if (this._MdButton_26_3.ngDoCheck(this,this._el_26,throwOnChange)) { this.compView_26.markAsCheckOnce(); }
    const currVal_33_0_0:any = this.context.player.details.ai;
    this._NgIf_33_6.check_ngIf(currVal_33_0_0,throwOnChange,false);
    this._NgIf_33_6.ngDoCheck(this,this._anchor_33,throwOnChange);
    this._vc_33.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdGridTile_4_0.dirty) {
        this._query_MdGridTile_4_0.reset([
          this._MdGridTile_6_3.context,
          this._MdGridTile_12_3.context,
          this._MdGridTile_18_3.context,
          this._MdGridTile_24_3.context
        ]
        );
        this._MdGridList_4_3.context._tiles = this._query_MdGridTile_4_0;
        this._query_MdGridTile_4_0.notifyOnChanges();
      }
      this._MdGridList_4_3.context.ngAfterContentChecked();
    }
    this._MdButton_8_3.checkHost(this,this.compView_8,this._el_8,throwOnChange);
    const currVal_60:any = import3.inlineInterpolate(1,'',this.context.pianoButImg,'');
    if (import3.checkBinding(throwOnChange,this._expr_60,currVal_60)) {
      this.renderer.setElementProperty(this._el_9,'src',this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL,currVal_60));
      this._expr_60 = currVal_60;
    }
    this._MdButton_20_3.checkHost(this,this.compView_20,this._el_20,throwOnChange);
    this._MdButton_26_3.checkHost(this,this.compView_26,this._el_26,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_4.internalDetectChanges(throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_8.internalDetectChanges(throwOnChange);
    this.compView_12.internalDetectChanges(throwOnChange);
    this.compView_14.internalDetectChanges(throwOnChange);
    this.compView_18.internalDetectChanges(throwOnChange);
    this.compView_20.internalDetectChanges(throwOnChange);
    this.compView_24.internalDetectChanges(throwOnChange);
    this.compView_26.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_33.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_4.destroy();
    this.compView_6.destroy();
    this.compView_8.destroy();
    this.compView_12.destroy();
    this.compView_14.destroy();
    this.compView_18.destroy();
    this.compView_20.destroy();
    this.compView_24.destroy();
    this.compView_26.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._text_3,ctx);
      cb(this._el_4,ctx);
      cb(this._text_30,ctx);
      cb(this._text_31,ctx);
      cb(this._text_32,ctx);
      cb(this._vc_33.nativeElement,ctx);
      this._vc_33.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_34,ctx);
    }
    if (((nodeIndex == 4) && (ngContentIndex == 0))) {
      cb(this._text_5,ctx);
      cb(this._el_6,ctx);
      cb(this._text_11,ctx);
      cb(this._el_12,ctx);
      cb(this._text_17,ctx);
      cb(this._el_18,ctx);
      cb(this._text_23,ctx);
      cb(this._el_24,ctx);
      cb(this._text_29,ctx);
    }
    if (((nodeIndex == 6) && (ngContentIndex == 0))) {
      cb(this._text_7,ctx);
      cb(this._el_8,ctx);
      cb(this._text_10,ctx);
    }
    if (((nodeIndex == 8) && (ngContentIndex == 0))) { cb(this._el_9,ctx); }
    if (((nodeIndex == 12) && (ngContentIndex == 0))) {
      cb(this._text_13,ctx);
      cb(this._el_14,ctx);
      cb(this._text_16,ctx);
    }
    if (((nodeIndex == 18) && (ngContentIndex == 0))) {
      cb(this._text_19,ctx);
      cb(this._el_20,ctx);
      cb(this._text_22,ctx);
    }
    if (((nodeIndex == 20) && (ngContentIndex == 0))) { cb(this._text_21,ctx); }
    if (((nodeIndex == 24) && (ngContentIndex == 0))) {
      cb(this._text_25,ctx);
      cb(this._el_26,ctx);
      cb(this._text_28,ctx);
    }
    if (((nodeIndex == 26) && (ngContentIndex == 0))) { cb(this._text_27,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 33)) { return new View_PlayerDetailComponent1(this.viewUtils,this,33,this._anchor_33,this._vc_33); }
    return (null as any);
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.compView_8.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_8_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.toggleMidi()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.compView_20.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_20_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.solo()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_26(eventName:string,$event:any):boolean {
    this.compView_26.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_26_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.mute()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}