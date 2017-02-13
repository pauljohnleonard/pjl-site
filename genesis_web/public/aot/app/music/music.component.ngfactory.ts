/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/music/music.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/db.service';
import * as import9 from '../../../app/services/samples.service';
import * as import10 from '../../../app/services/net.service';
import * as import11 from '@angular/material/menu/menu-item';
import * as import12 from '../../node_modules/@angular/material/menu/menu-item.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '../../../app/music/player-detail.component';
import * as import17 from './player-detail.component.ngfactory';
import * as import18 from '@angular/material/card/card';
import * as import19 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import20 from '@angular/material/button/button';
import * as import21 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import22 from '../../node_modules/@angular/material/menu/menu-trigger.ngfactory';
import * as import23 from '@angular/material/icon/icon';
import * as import24 from '../../node_modules/@angular/material/icon/icon.ngfactory';
import * as import25 from '@angular/material/menu/menu-directive';
import * as import26 from '../../node_modules/@angular/material/menu/menu-directive.ngfactory';
import * as import27 from '@angular/core/src/linker/query_list';
import * as import28 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import29 from '@angular/material/core/overlay/overlay';
import * as import30 from '@angular/material/core/rtl/dir';
import * as import31 from '@angular/material/icon/icon-registry';
import * as import32 from '@angular/core/src/linker/template_ref';
import * as import33 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import34 from '@angular/material/menu/menu-trigger';
import * as import35 from '@angular/common/src/directives/ng_for';
export class Wrapper_MusicComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MusicComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.MusicComponent(p0,p1,p2);
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
var renderType_MusicComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_MusicComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.MusicComponent>;
  _MusicComponent_0_3:Wrapper_MusicComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MusicComponent_Host0,renderType_MusicComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'music',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_MusicComponent0(this.viewUtils,this,0,this._el_0);
    this._MusicComponent_0_3 = new Wrapper_MusicComponent(this.injectorGet(import8.DBService,this.parentIndex),this.injectorGet(import9.SamplesService,this.parentIndex),this.injectorGet(import10.NetService,this.parentIndex));
    this.compView_0.create(this._MusicComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._MusicComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MusicComponent) && (0 === requestNodeIndex))) { return this._MusicComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MusicComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MusicComponentNgFactory:import7.ComponentFactory<import0.MusicComponent> = new import7.ComponentFactory<import0.MusicComponent>('music',View_MusicComponent_Host0,import0.MusicComponent);
const styles_MusicComponent:any[] = ([] as any[]);
class View_MusicComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import11.MdMenuItem>;
  _MdMenuItem_0_3:import12.Wrapper_MdMenuItem;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_MusicComponent1,renderType_MusicComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import14.UNINITIALIZED;
    this._expr_5 = import14.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'md-menu-item','','role','menuitem'),(null as any));
    this.compView_0 = new import12.View_MdMenuItem0(this.viewUtils,this,0,this._el_0);
    this._MdMenuItem_0_3 = new import12.Wrapper_MdMenuItem(this.renderer,new import15.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this.compView_0.create(this._MdMenuItem_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.MdMenuItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdMenuItem_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MdMenuItem_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_4:any = this.parentView.context.playerType;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_0,'value',currVal_4);
      this._expr_4 = currVal_4;
    }
    this._MdMenuItem_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_5:any = import3.inlineInterpolate(1,'\n                          ',this.context.$implicit,'\n                         ');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_1,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_MusicComponent0>this.parentView)._query_MdMenuItem_12_0.setDirty();
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
    result = (this._MdMenuItem_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.addPlayerType(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_MusicComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import16.PlayerDetailComponent>;
  _PlayerDetailComponent_2_3:import17.Wrapper_PlayerDetailComponent;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_MusicComponent2,renderType_MusicComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                   ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'player-detail',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import17.View_PlayerDetailComponent0(this.viewUtils,this,2,this._el_2);
    this._PlayerDetailComponent_2_3 = new import17.Wrapper_PlayerDetailComponent();
    this._text_3 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_2.create(this._PlayerDetailComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'playerSelected',(null as any)),this.eventHandler(this.handleEvent_2));
    this._PlayerDetailComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.PlayerDetailComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._PlayerDetailComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit;
    this._PlayerDetailComponent_2_3.check_player(currVal_2_0_0,throwOnChange,false);
    this._PlayerDetailComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._PlayerDetailComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'playerSelected')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.slectedPlayer = this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_MusicComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_MusicComponent,{});
export class View_MusicComponent0 extends import1.AppView<import0.MusicComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import18.MdCard>;
  _MdCard_1_3:import19.Wrapper_MdCard;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _vc_5:import13.ViewContainer;
  compView_5:import1.AppView<import20.MdButton>;
  _MdButton_5_5:import21.Wrapper_MdButton;
  _MdMenuTrigger_5_6:import22.Wrapper_MdMenuTrigger;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  compView_8:import1.AppView<import23.MdIcon>;
  _MdIcon_8_3:import24.Wrapper_MdIcon;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  compView_12:import1.AppView<import25.MdMenu>;
  _MdMenu_12_3:import26.Wrapper_MdMenu;
  _query_MdMenuItem_12_0:import27.QueryList<any>;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import13.ViewContainer;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import28.Wrapper_NgFor;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _el_18:any;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _vc_20:import13.ViewContainer;
  _TemplateRef_20_5:any;
  _NgFor_20_6:import28.Wrapper_NgFor;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MusicComponent0,renderType_MusicComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n       ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'md-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import19.View_MdCard0(this.viewUtils,this,1,this._el_1);
    this._MdCard_1_3 = new import19.Wrapper_MdCard();
    this._text_2 = this.renderer.createText((null as any),'             \n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'style','width: 100%'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'button',new import3.InlineArray4(4,'aria-haspopup','true','md-mini-fab',''),(null as any));
    this._vc_5 = new import13.ViewContainer(5,3,this,this._el_5);
    this.compView_5 = new import21.View_MdButton0(this.viewUtils,this,5,this._el_5);
    this._MdButton_5_5 = new import21.Wrapper_MdButton(new import15.ElementRef(this._el_5),this.renderer);
    this._MdMenuTrigger_5_6 = new import22.Wrapper_MdMenuTrigger(this.parentView.injectorGet(import29.Overlay,this.parentIndex),new import15.ElementRef(this._el_5),this._vc_5.vcRef,this.renderer,this.parentView.injectorGet(import30.Dir,this.parentIndex,(null as any)));
    this._text_6 = this.renderer.createText((null as any),' ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n                      ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,(null as any),'md-icon',new import3.InlineArray2(2,'role','img'),(null as any));
    this.compView_8 = new import24.View_MdIcon0(this.viewUtils,this,8,this._el_8);
    this._MdIcon_8_3 = new import24.Wrapper_MdIcon(new import15.ElementRef(this._el_8),this.renderer,this.parentView.injectorGet(import31.MdIconRegistry,this.parentIndex));
    this._text_9 = this.renderer.createText((null as any),'add',(null as any));
    this.compView_8.create(this._MdIcon_8_3.context);
    this._text_10 = this.renderer.createText((null as any),'\n                 ',(null as any));
    this.compView_5.create(this._MdButton_5_5.context);
    this._text_11 = this.renderer.createText(this._el_3,' \n                 ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_3,'md-menu',new import3.InlineArray2(2,'role','menu'),(null as any));
    this.compView_12 = new import26.View_MdMenu0(this.viewUtils,this,12,this._el_12);
    this._MdMenu_12_3 = new import26.Wrapper_MdMenu((null as any),(null as any));
    this._query_MdMenuItem_12_0 = new import27.QueryList<any>();
    this._text_13 = this.renderer.createText((null as any),'\n                         ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_14 = new import13.ViewContainer(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import32.TemplateRef_(this,14,this._anchor_14);
    this._NgFor_14_6 = new import28.Wrapper_NgFor(this._vc_14.vcRef,this._TemplateRef_14_5,this.parentView.injectorGet(import33.IterableDiffers,this.parentIndex),this.ref);
    this._text_15 = this.renderer.createText((null as any),'\n                ',(null as any));
    this.compView_12.create(this._MdMenu_12_3.context);
    this._text_16 = this.renderer.createText(this._el_3,'\n              \n                ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_3,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_3,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_20 = new import13.ViewContainer(20,3,this,this._anchor_20);
    this._TemplateRef_20_5 = new import32.TemplateRef_(this,20,this._anchor_20);
    this._NgFor_20_6 = new import28.Wrapper_NgFor(this._vc_20.vcRef,this._TemplateRef_20_5,this.parentView.injectorGet(import33.IterableDiffers,this.parentIndex),this.ref);
    this._text_21 = this.renderer.createText(this._el_3,'\n               ',(null as any));
    this._text_22 = this.renderer.createText((null as any),'    \n       ',(null as any));
    this.compView_1.create(this._MdCard_1_3.context);
    this._text_23 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray8(8,'mousedown',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_5));
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
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._text_22,
      this._text_23
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.MdIcon) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdIcon_8_3.context; }
    if (((token === import20.MdButton) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdButton_5_5.context; }
    if (((token === import34.MdMenuTrigger) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdMenuTrigger_5_6.context; }
    if (((token === import32.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import35.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6.context; }
    if (((token === import25.MdMenu) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdMenu_12_3.context; }
    if (((token === import32.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import35.NgFor) && (20 === requestNodeIndex))) { return this._NgFor_20_6.context; }
    if (((token === import18.MdCard) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._MdCard_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    if (this._MdButton_5_5.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_5_1_0:any = this._MdMenu_12_3.context;
    this._MdMenuTrigger_5_6.check__deprecatedMenuTriggerFor(currVal_5_1_0,throwOnChange,false);
    this._MdMenuTrigger_5_6.ngDoCheck(this,this._el_5,throwOnChange);
    if (this._MdIcon_8_3.ngDoCheck(this,this._el_8,throwOnChange)) { this.compView_8.markAsCheckOnce(); }
    this._MdMenu_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    const currVal_14_0_0:any = this.context.playerTypes;
    this._NgFor_14_6.check_ngForOf(currVal_14_0_0,throwOnChange,false);
    this._NgFor_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    const currVal_20_0_0:any = this.context.players;
    this._NgFor_20_6.check_ngForOf(currVal_20_0_0,throwOnChange,false);
    this._NgFor_20_6.ngDoCheck(this,this._anchor_20,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
    this._vc_20.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdMenuItem_12_0.dirty) {
          this._query_MdMenuItem_12_0.reset([this._vc_14.mapNestedViews(View_MusicComponent1,(nestedView:View_MusicComponent1):any => {
            return [nestedView._MdMenuItem_0_3.context];
        })]);
        this._MdMenu_12_3.context.items = this._query_MdMenuItem_12_0;
        this._query_MdMenuItem_12_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._MdMenu_12_3.context.ngAfterContentInit(); }
    }
    this._MdButton_5_5.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
    this.compView_8.internalDetectChanges(throwOnChange);
    this.compView_12.internalDetectChanges(throwOnChange);
    if (!throwOnChange) {
      this._MdIcon_8_3.context.ngAfterViewChecked();
      if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_5_6.context.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this._vc_14.destroyNestedViews();
    this._vc_20.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this.compView_8.destroy();
    this.compView_12.destroy();
    this._MdMenuTrigger_5_6.ngOnDestroy();
    this._MdMenu_12_3.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_22,ctx);
    }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._text_7,ctx);
      cb(this._el_8,ctx);
      cb(this._text_10,ctx);
    }
    if (((nodeIndex == 8) && (ngContentIndex == 0))) { cb(this._text_9,ctx); }
    if (((nodeIndex == 12) && (ngContentIndex == 0))) {
      cb(this._text_13,ctx);
      cb(this._vc_14.nativeElement,ctx);
      this._vc_14.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_15,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 14)) { return new View_MusicComponent1(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    if ((nodeIndex == 20)) { return new View_MusicComponent2(this.viewUtils,this,20,this._anchor_20,this._vc_20); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.compView_5.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_5_5.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_5_6.handleEvent(eventName,$event) && result);
    return result;
  }
}