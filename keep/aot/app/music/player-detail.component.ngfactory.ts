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
import * as import9 from '@angular/material/card/card';
import * as import10 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import11 from '@angular/material/grid-list/grid-list';
import * as import12 from '../../node_modules/@angular/material/grid-list/grid-list.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/material/grid-list/grid-tile';
import * as import15 from '../../node_modules/@angular/material/grid-list/grid-tile.ngfactory';
import * as import16 from '@angular/material/button/button';
import * as import17 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import18 from '../../../app/music/instrument-detail.component';
import * as import19 from './instrument-detail.component.ngfactory';
import * as import20 from '../../../app/music/ai-detail.component';
import * as import21 from './ai-detail.component.ngfactory';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/material/core/rtl/dir';
import * as import24 from '../../../app/services/sf.service';
export class Wrapper_PlayerDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PlayerDetailComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.PlayerDetailComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
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
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
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
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PlayerDetailComponentNgFactory:import8.ComponentFactory<import0.PlayerDetailComponent> = new import8.ComponentFactory<import0.PlayerDetailComponent>('player-detail',View_PlayerDetailComponent_Host0,import0.PlayerDetailComponent);
const styles_PlayerDetailComponent:any[] = ([] as any[]);
var renderType_PlayerDetailComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PlayerDetailComponent,{});
export class View_PlayerDetailComponent0 extends import2.AppView<import0.PlayerDetailComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import9.MdCard>;
  _MdCard_1_3:import10.Wrapper_MdCard;
  _text_2:any;
  _el_3:any;
  _MdCardActions_3_3:import10.Wrapper_MdCardActions;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import11.MdGridList>;
  _MdGridList_5_3:import12.Wrapper_MdGridList;
  _query_MdGridTile_5_0:import13.QueryList<any>;
  _text_6:any;
  _el_7:any;
  compView_7:import2.AppView<import14.MdGridTile>;
  _MdGridTile_7_3:import15.Wrapper_MdGridTile;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import2.AppView<import14.MdGridTile>;
  _MdGridTile_11_3:import15.Wrapper_MdGridTile;
  _text_12:any;
  _el_13:any;
  compView_13:import2.AppView<import16.MdButton>;
  _MdButton_13_3:import17.Wrapper_MdButton;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  compView_17:import2.AppView<import14.MdGridTile>;
  _MdGridTile_17_3:import15.Wrapper_MdGridTile;
  _text_18:any;
  _el_19:any;
  compView_19:import2.AppView<import16.MdButton>;
  _MdButton_19_3:import17.Wrapper_MdButton;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  compView_25:import2.AppView<import18.InstrumentDetailComponent>;
  _InstrumentDetailComponent_25_3:import19.Wrapper_InstrumentDetailComponent;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  compView_28:import2.AppView<import20.AIDetailComponent>;
  _AIDetailComponent_28_3:import21.Wrapper_AIDetailComponent;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  /*private*/ _expr_52:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PlayerDetailComponent0,renderType_PlayerDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_52 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,' \n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import10.View_MdCard0(this.viewUtils,this,1,this._el_1);
    this._MdCard_1_3 = new import10.Wrapper_MdCard();
    this._text_2 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'md-card-actions',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdCardActions_3_3 = new import10.Wrapper_MdCardActions();
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'md-grid-list',new import3.InlineArray4(4,'cols','12','role','list'),(null as any));
    this.compView_5 = new import12.View_MdGridList0(this.viewUtils,this,5,this._el_5);
    this._MdGridList_5_3 = new import12.Wrapper_MdGridList(this.renderer,new import22.ElementRef(this._el_5),this.parentView.injectorGet(import23.Dir,this.parentIndex,(null as any)));
    this._query_MdGridTile_5_0 = new import13.QueryList<any>();
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_7 = new import15.View_MdGridTile0(this.viewUtils,this,7,this._el_7);
    this._MdGridTile_7_3 = new import15.Wrapper_MdGridTile(this.renderer,new import22.ElementRef(this._el_7));
    this._text_8 = this.renderer.createText((null as any),'',(null as any));
    this._text_9 = this.renderer.createText((null as any),'           \n    ',(null as any));
    this.compView_7.create(this._MdGridTile_7_3.context);
    this._text_10 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_11 = new import15.View_MdGridTile0(this.viewUtils,this,11,this._el_11);
    this._MdGridTile_11_3 = new import15.Wrapper_MdGridTile(this.renderer,new import22.ElementRef(this._el_11));
    this._text_12 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'md-button',''),(null as any));
    this.compView_13 = new import17.View_MdButton0(this.viewUtils,this,13,this._el_13);
    this._MdButton_13_3 = new import17.Wrapper_MdButton(new import22.ElementRef(this._el_13),this.renderer);
    this._text_14 = this.renderer.createText((null as any),'S',(null as any));
    this.compView_13.create(this._MdButton_13_3.context);
    this._text_15 = this.renderer.createText((null as any),'\n     ',(null as any));
    this.compView_11.create(this._MdGridTile_11_3.context);
    this._text_16 = this.renderer.createText((null as any),'\n     \n     ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,(null as any),'md-grid-tile',new import3.InlineArray2(2,'role','listitem'),(null as any));
    this.compView_17 = new import15.View_MdGridTile0(this.viewUtils,this,17,this._el_17);
    this._MdGridTile_17_3 = new import15.Wrapper_MdGridTile(this.renderer,new import22.ElementRef(this._el_17));
    this._text_18 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray2(2,'md-button',''),(null as any));
    this.compView_19 = new import17.View_MdButton0(this.viewUtils,this,19,this._el_19);
    this._MdButton_19_3 = new import17.Wrapper_MdButton(new import22.ElementRef(this._el_19),this.renderer);
    this._text_20 = this.renderer.createText((null as any),'M',(null as any));
    this.compView_19.create(this._MdButton_19_3.context);
    this._text_21 = this.renderer.createText((null as any),' \n     ',(null as any));
    this.compView_17.create(this._MdGridTile_17_3.context);
    this._text_22 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this.compView_5.create(this._MdGridList_5_3.context);
    this._text_23 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,(null as any),'instrument-detail',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_25 = new import19.View_InstrumentDetailComponent0(this.viewUtils,this,25,this._el_25);
    this._InstrumentDetailComponent_25_3 = new import19.Wrapper_InstrumentDetailComponent(this.parentView.injectorGet(import24.SFService,this.parentIndex));
    this._text_26 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_25.create(this._InstrumentDetailComponent_25_3.context);
    this._text_27 = this.renderer.createText((null as any),' \n    ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,(null as any),'ai-detail',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_28 = new import21.View_AIDetailComponent0(this.viewUtils,this,28,this._el_28);
    this._AIDetailComponent_28_3 = new import21.Wrapper_AIDetailComponent();
    this._text_29 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_28.create(this._AIDetailComponent_28_3.context);
    this._text_30 = this.renderer.createText((null as any),' \n\n',(null as any));
    this.compView_1.create(this._MdCard_1_3.context);
    this._text_31 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_19,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_19));
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
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.MdGridTile) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdGridTile_7_3.context; }
    if (((token === import16.MdButton) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._MdButton_13_3.context; }
    if (((token === import14.MdGridTile) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdGridTile_11_3.context; }
    if (((token === import16.MdButton) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._MdButton_19_3.context; }
    if (((token === import14.MdGridTile) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._MdGridTile_17_3.context; }
    if (((token === import11.MdGridList) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdGridList_5_3.context; }
    if (((token === import9.MdCardActions) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._MdCardActions_3_3.context; }
    if (((token === import18.InstrumentDetailComponent) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._InstrumentDetailComponent_25_3.context; }
    if (((token === import20.AIDetailComponent) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._AIDetailComponent_28_3.context; }
    if (((token === import9.MdCard) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._MdCard_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this._MdCardActions_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    const currVal_5_0_0:any = '12';
    this._MdGridList_5_3.check_cols(currVal_5_0_0,throwOnChange,false);
    this._MdGridList_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_7_0_0:any = 1;
    this._MdGridTile_7_3.check_rowspan(currVal_7_0_0,throwOnChange,false);
    const currVal_7_0_1:any = 10;
    this._MdGridTile_7_3.check_colspan(currVal_7_0_1,throwOnChange,false);
    this._MdGridTile_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_11_0_0:any = 1;
    this._MdGridTile_11_3.check_rowspan(currVal_11_0_0,throwOnChange,false);
    const currVal_11_0_1:any = 1;
    this._MdGridTile_11_3.check_colspan(currVal_11_0_1,throwOnChange,false);
    this._MdGridTile_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    const currVal_13_0_0:any = this.context.soloColor();
    this._MdButton_13_3.check_color(currVal_13_0_0,throwOnChange,false);
    if (this._MdButton_13_3.ngDoCheck(this,this._el_13,throwOnChange)) { this.compView_13.markAsCheckOnce(); }
    const currVal_17_0_0:any = 1;
    this._MdGridTile_17_3.check_rowspan(currVal_17_0_0,throwOnChange,false);
    const currVal_17_0_1:any = 1;
    this._MdGridTile_17_3.check_colspan(currVal_17_0_1,throwOnChange,false);
    this._MdGridTile_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    const currVal_19_0_0:any = this.context.muteColor();
    this._MdButton_19_3.check_color(currVal_19_0_0,throwOnChange,false);
    if (this._MdButton_19_3.ngDoCheck(this,this._el_19,throwOnChange)) { this.compView_19.markAsCheckOnce(); }
    const currVal_25_0_0:any = this.context.player.details.inst;
    this._InstrumentDetailComponent_25_3.check_inst(currVal_25_0_0,throwOnChange,false);
    this._InstrumentDetailComponent_25_3.ngDoCheck(this,this._el_25,throwOnChange);
    const currVal_28_0_0:any = this.context.player.details.ai;
    this._AIDetailComponent_28_3.check_ai(currVal_28_0_0,throwOnChange,false);
    this._AIDetailComponent_28_3.ngDoCheck(this,this._el_28,throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdGridTile_5_0.dirty) {
        this._query_MdGridTile_5_0.reset([
          this._MdGridTile_7_3.context,
          this._MdGridTile_11_3.context,
          this._MdGridTile_17_3.context
        ]
        );
        this._MdGridList_5_3.context._tiles = this._query_MdGridTile_5_0;
        this._query_MdGridTile_5_0.notifyOnChanges();
      }
      this._MdGridList_5_3.context.ngAfterContentChecked();
    }
    const currVal_52:any = import3.inlineInterpolate(1,'\n      ',this.context.player.details.name,'    ');
    if (import3.checkBinding(throwOnChange,this._expr_52,currVal_52)) {
      this.renderer.setText(this._text_8,currVal_52);
      this._expr_52 = currVal_52;
    }
    this._MdButton_13_3.checkHost(this,this.compView_13,this._el_13,throwOnChange);
    this._MdButton_19_3.checkHost(this,this.compView_19,this._el_19,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_7.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_13.internalDetectChanges(throwOnChange);
    this.compView_17.internalDetectChanges(throwOnChange);
    this.compView_19.internalDetectChanges(throwOnChange);
    this.compView_25.internalDetectChanges(throwOnChange);
    this.compView_28.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_5.destroy();
    this.compView_7.destroy();
    this.compView_11.destroy();
    this.compView_13.destroy();
    this.compView_17.destroy();
    this.compView_19.destroy();
    this.compView_25.destroy();
    this.compView_28.destroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_24,ctx);
      cb(this._el_25,ctx);
      cb(this._text_27,ctx);
      cb(this._el_28,ctx);
      cb(this._text_30,ctx);
    }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._el_7,ctx);
      cb(this._text_10,ctx);
      cb(this._el_11,ctx);
      cb(this._text_16,ctx);
      cb(this._el_17,ctx);
      cb(this._text_22,ctx);
    }
    if (((nodeIndex == 7) && (ngContentIndex == 0))) {
      cb(this._text_8,ctx);
      cb(this._text_9,ctx);
    }
    if (((nodeIndex == 11) && (ngContentIndex == 0))) {
      cb(this._text_12,ctx);
      cb(this._el_13,ctx);
      cb(this._text_15,ctx);
    }
    if (((nodeIndex == 13) && (ngContentIndex == 0))) { cb(this._text_14,ctx); }
    if (((nodeIndex == 17) && (ngContentIndex == 0))) {
      cb(this._text_18,ctx);
      cb(this._el_19,ctx);
      cb(this._text_21,ctx);
    }
    if (((nodeIndex == 19) && (ngContentIndex == 0))) { cb(this._text_20,ctx); }
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.compView_13.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_13_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.solo()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_19(eventName:string,$event:any):boolean {
    this.compView_19.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_19_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.mute()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}