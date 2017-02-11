/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/music/ai-detail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/services/net.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/material/button/button';
import * as import12 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import13 from '../../node_modules/@angular/material/menu/menu-trigger.ngfactory';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/material/core/overlay/overlay';
import * as import16 from '@angular/material/core/rtl/dir';
import * as import17 from '@angular/material/menu/menu-trigger';
import * as import18 from '@angular/material/menu/menu-item';
import * as import19 from '../../node_modules/@angular/material/menu/menu-item.ngfactory';
import * as import20 from '@angular/material/input/input';
import * as import21 from '../../node_modules/@angular/material/input/input.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import23 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import24 from '@angular/core/src/linker/query_list';
import * as import25 from '@angular/forms/src/directives/control_value_accessor';
import * as import26 from '@angular/forms/src/directives/ng_model';
import * as import27 from '@angular/forms/src/directives/ng_control';
import * as import28 from '@angular/forms/src/directives/ng_control_status';
import * as import29 from '@angular/material/card/card';
import * as import30 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import31 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import32 from '@angular/material/menu/menu-directive';
import * as import33 from '../../node_modules/@angular/material/menu/menu-directive.ngfactory';
import * as import34 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import35 from '@angular/material/icon/icon';
import * as import36 from '../../node_modules/@angular/material/icon/icon.ngfactory';
import * as import37 from '@angular/core/src/linker/template_ref';
import * as import38 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import39 from '@angular/material/icon/icon-registry';
import * as import40 from '@angular/common/src/directives/ng_if';
import * as import41 from '@angular/common/src/directives/ng_for';
export class Wrapper_AIDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AIDetailComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AIDetailComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_ai(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.ai = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_AIDetailComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AIDetailComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.AIDetailComponent>;
  _AIDetailComponent_0_3:Wrapper_AIDetailComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AIDetailComponent_Host0,renderType_AIDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ai-detail',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AIDetailComponent0(this.viewUtils,this,0,this._el_0);
    this._AIDetailComponent_0_3 = new Wrapper_AIDetailComponent(this.injectorGet(import9.NetService,this.parentIndex));
    this.compView_0.create(this._AIDetailComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AIDetailComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AIDetailComponent) && (0 === requestNodeIndex))) { return this._AIDetailComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AIDetailComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AIDetailComponentNgFactory:import8.ComponentFactory<import0.AIDetailComponent> = new import8.ComponentFactory<import0.AIDetailComponent>('ai-detail',View_AIDetailComponent_Host0,import0.AIDetailComponent);
const styles_AIDetailComponent:any[] = ([] as any[]);
class View_AIDetailComponent2 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import10.ViewContainer;
  compView_0:import2.AppView<import11.MdButton>;
  _MdButton_0_5:import12.Wrapper_MdButton;
  _MdMenuTrigger_0_6:import13.Wrapper_MdMenuTrigger;
  _text_1:any;
  _el_2:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AIDetailComponent2,renderType_AIDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'aria-haspopup','true','md-button',''),(null as any));
    this._vc_0 = new import10.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import12.View_MdButton0(this.viewUtils,this,0,this._el_0);
    this._MdButton_0_5 = new import12.Wrapper_MdButton(new import14.ElementRef(this._el_0),this.renderer);
    this._MdMenuTrigger_0_6 = new import13.Wrapper_MdMenuTrigger(this.parentView.parentView.injectorGet(import15.Overlay,this.parentView.parentIndex),new import14.ElementRef(this._el_0),this._vc_0.vcRef,this.renderer,this.parentView.parentView.injectorGet(import16.Dir,this.parentView.parentIndex,(null as any)));
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this.compView_0.create(this._MdButton_0_5.context);
    this._el_2 = this.renderer.createTemplateAnchor((null as any),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(8,'mousedown',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_2,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButton_0_5.context; }
    if (((token === import17.MdMenuTrigger) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdMenuTrigger_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdButton_0_5.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    const currVal_0_1_0:any = (<View_AIDetailComponent1>this.parentView)._MdMenu_6_3.context;
    this._MdMenuTrigger_0_6.check__deprecatedMenuTriggerFor(currVal_0_1_0,throwOnChange,false);
    this._MdMenuTrigger_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._MdButton_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_7:any = import3.inlineInterpolate(1,' \n                    ',this.parentView.parentView.context.aiName,'\n                 ');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_1,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._MdMenuTrigger_0_6.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._MdMenuTrigger_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_2,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) { cb(this._text_1,ctx); }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_0_5.handleEvent(eventName,$event) && result);
    result = (this._MdMenuTrigger_0_6.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_AIDetailComponent3 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import18.MdMenuItem>;
  _MdMenuItem_0_3:import19.Wrapper_MdMenuItem;
  _text_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AIDetailComponent3,renderType_AIDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'md-menu-item','','role','menuitem'),(null as any));
    this.compView_0 = new import19.View_MdMenuItem0(this.viewUtils,this,0,this._el_0);
    this._MdMenuItem_0_3 = new import19.Wrapper_MdMenuItem(this.renderer,new import14.ElementRef(this._el_0));
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
    if (((token === import18.MdMenuItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdMenuItem_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MdMenuItem_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_4:any = this.parentView.parentView.context.ai.net.name;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_0,'value',currVal_4);
      this._expr_4 = currVal_4;
    }
    this._MdMenuItem_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_5:any = import3.inlineInterpolate(1,'\n                          ',this.context.$implicit,'\n                   ');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_1,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_AIDetailComponent1>this.parentView)._query_MdMenuItem_6_0.setDirty();
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
      const pd_sub_0:any = ((<any>(this.parentView.parentView.context.aiName = this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_AIDetailComponent4 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import20.MdInput>;
  _MdInput_0_3:import21.Wrapper_MdInput;
  _NG_VALUE_ACCESSOR_0_4:any[];
  _NgModel_0_5:import22.Wrapper_NgModel;
  _NgControl_0_6:any;
  _NgControlStatus_0_7:import23.Wrapper_NgControlStatus;
  _query_MdPlaceholder_0_0:import24.QueryList<any>;
  _query_MdHint_0_1:import24.QueryList<any>;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AIDetailComponent4,renderType_AIDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-input',new import3.InlineArray8(8,'max','30','min','1','type','number','value','20'),(null as any));
    this.compView_0 = new import21.View_MdInput0(this.viewUtils,this,0,this._el_0);
    this._MdInput_0_3 = new import21.Wrapper_MdInput(new import14.ElementRef(this._el_0),this.renderer);
    this._NG_VALUE_ACCESSOR_0_4 = [this._MdInput_0_3.context];
    this._NgModel_0_5 = new import22.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_0_4);
    this._NgControl_0_6 = this._NgModel_0_5.context;
    this._NgControlStatus_0_7 = new import23.Wrapper_NgControlStatus(this._NgControl_0_6);
    this._query_MdPlaceholder_0_0 = new import24.QueryList<any>();
    this._query_MdHint_0_1 = new import24.QueryList<any>();
    this._text_1 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_0.create(this._MdInput_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'ngModelChange',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this._NgModel_0_5.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this._query_MdPlaceholder_0_0.reset(([] as any[]));
    this._MdInput_0_3.context._placeholderChild = this._query_MdPlaceholder_0_0.first;
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.MdInput) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdInput_0_3.context; }
    if (((token === import25.NG_VALUE_ACCESSOR) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NG_VALUE_ACCESSOR_0_4; }
    if (((token === import26.NgModel) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgModel_0_5.context; }
    if (((token === import27.NgControl) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgControl_0_6; }
    if (((token === import28.NgControlStatus) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgControlStatus_0_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = '30';
    this._MdInput_0_3.check_max(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = '1';
    this._MdInput_0_3.check_min(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = 'number';
    this._MdInput_0_3.check_type(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = '20';
    this._MdInput_0_3.check_value(currVal_0_0_3,throwOnChange,false);
    this._MdInput_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.parentView.parentView.context.nHidden[this.context.index];
    this._NgModel_0_5.check_model(currVal_0_1_0,throwOnChange,false);
    this._NgModel_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._NgControlStatus_0_7.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdHint_0_1.dirty) {
        this._query_MdHint_0_1.reset(([] as any[]));
        this._MdInput_0_3.context._hintChildren = this._query_MdHint_0_1;
        this._query_MdHint_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._MdInput_0_3.context.ngAfterContentInit(); }
    }
    this._MdInput_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._NgControlStatus_0_7.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._MdInput_0_3.ngOnDestroy();
    this._NgModel_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 3))) {  }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdInput_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.parentView.context.nHidden[this.context.index] = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_AIDetailComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import29.MdCard>;
  _MdCard_0_3:import30.Wrapper_MdCard;
  _text_1:any;
  _el_2:any;
  _MdCardActions_2_3:import30.Wrapper_MdCardActions;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import10.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import31.Wrapper_NgIf;
  _text_5:any;
  _el_6:any;
  compView_6:import2.AppView<import32.MdMenu>;
  _MdMenu_6_3:import33.Wrapper_MdMenu;
  _query_MdMenuItem_6_0:import24.QueryList<any>;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import10.ViewContainer;
  _TemplateRef_8_5:any;
  _NgFor_8_6:import34.Wrapper_NgFor;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import10.ViewContainer;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import34.Wrapper_NgFor;
  _text_12:any;
  _el_13:any;
  compView_13:import2.AppView<import11.MdButton>;
  _MdButton_13_3:import12.Wrapper_MdButton;
  _el_14:any;
  compView_14:import2.AppView<import35.MdIcon>;
  _MdIcon_14_3:import36.Wrapper_MdIcon;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AIDetailComponent1,renderType_AIDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import30.View_MdCard0(this.viewUtils,this,0,this._el_0);
    this._MdCard_0_3 = new import30.Wrapper_MdCard();
    this._text_1 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'md-card-actions',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdCardActions_2_3 = new import30.Wrapper_MdCardActions();
    this._text_3 = this.renderer.createText(this._el_2,'\n                 ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_4 = new import10.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import37.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import31.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,' \n\n                 ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'md-menu',new import3.InlineArray2(2,'role','menu'),(null as any));
    this.compView_6 = new import33.View_MdMenu0(this.viewUtils,this,6,this._el_6);
    this._MdMenu_6_3 = new import33.Wrapper_MdMenu((null as any),(null as any));
    this._query_MdMenuItem_6_0 = new import24.QueryList<any>();
    this._text_7 = this.renderer.createText((null as any),'\n                        ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_8 = new import10.ViewContainer(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import37.TemplateRef_(this,8,this._anchor_8);
    this._NgFor_8_6 = new import34.Wrapper_NgFor(this._vc_8.vcRef,this._TemplateRef_8_5,this.parentView.injectorGet(import38.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_9 = this.renderer.createText((null as any),'\n                ',(null as any));
    this.compView_6.create(this._MdMenu_6_3.context);
    this._text_10 = this.renderer.createText(this._el_2,'\n   \n       \n                ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_11 = new import10.ViewContainer(11,2,this,this._anchor_11);
    this._TemplateRef_11_5 = new import37.TemplateRef_(this,11,this._anchor_11);
    this._NgFor_11_6 = new import34.Wrapper_NgFor(this._vc_11.vcRef,this._TemplateRef_11_5,this.parentView.injectorGet(import38.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_12 = this.renderer.createText(this._el_2,'\n          \n              ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_2,'button',new import3.InlineArray2(2,'md-icon-button',''),(null as any));
    this.compView_13 = new import12.View_MdButton0(this.viewUtils,this,13,this._el_13);
    this._MdButton_13_3 = new import12.Wrapper_MdButton(new import14.ElementRef(this._el_13),this.renderer);
    this._el_14 = import3.createRenderElement(this.renderer,(null as any),'md-icon',new import3.InlineArray2(2,'role','img'),(null as any));
    this.compView_14 = new import36.View_MdIcon0(this.viewUtils,this,14,this._el_14);
    this._MdIcon_14_3 = new import36.Wrapper_MdIcon(new import14.ElementRef(this._el_14),this.renderer,this.parentView.injectorGet(import39.MdIconRegistry,this.parentIndex));
    this._text_15 = this.renderer.createText((null as any),'system_update_alt',(null as any));
    this.compView_14.create(this._MdIcon_14_3.context);
    this._text_16 = this.renderer.createText((null as any),' ',(null as any));
    this.compView_13.create(this._MdButton_13_3.context);
    this._text_17 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._MdCard_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_13));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._el_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import37.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import40.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import37.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import41.NgFor) && (8 === requestNodeIndex))) { return this._NgFor_8_6.context; }
    if (((token === import32.MdMenu) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MdMenu_6_3.context; }
    if (((token === import37.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import41.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6.context; }
    if (((token === import35.MdIcon) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdIcon_14_3.context; }
    if (((token === import11.MdButton) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._MdButton_13_3.context; }
    if (((token === import29.MdCardActions) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdCardActions_2_3.context; }
    if (((token === import29.MdCard) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._MdCard_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._MdCardActions_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_4_0_0:any = this.parentView.context.aiName;
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._MdMenu_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_8_0_0:any = this.parentView.context.netService.names;
    this._NgFor_8_6.check_ngForOf(currVal_8_0_0,throwOnChange,false);
    this._NgFor_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    const currVal_11_0_0:any = this.parentView.context.nHidden;
    this._NgFor_11_6.check_ngForOf(currVal_11_0_0,throwOnChange,false);
    this._NgFor_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    const currVal_13_0_0:any = false;
    this._MdButton_13_3.check_disabled(currVal_13_0_0,throwOnChange,false);
    if (this._MdButton_13_3.ngDoCheck(this,this._el_13,throwOnChange)) { this.compView_13.markAsCheckOnce(); }
    if (this._MdIcon_14_3.ngDoCheck(this,this._el_14,throwOnChange)) { this.compView_14.markAsCheckOnce(); }
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdMenuItem_6_0.dirty) {
          this._query_MdMenuItem_6_0.reset([this._vc_8.mapNestedViews(View_AIDetailComponent3,(nestedView:View_AIDetailComponent3):any => {
            return [nestedView._MdMenuItem_0_3.context];
        })]);
        this._MdMenu_6_3.context.items = this._query_MdMenuItem_6_0;
        this._query_MdMenuItem_6_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._MdMenu_6_3.context.ngAfterContentInit(); }
    }
    this._MdButton_13_3.checkHost(this,this.compView_13,this._el_13,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_13.internalDetectChanges(throwOnChange);
    this.compView_14.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { this._MdIcon_14_3.context.ngAfterViewChecked(); }
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this._vc_8.destroyNestedViews();
    this._vc_11.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_6.destroy();
    this.compView_13.destroy();
    this.compView_14.destroy();
    this._MdMenu_6_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_18,ctx);
    }
    if (((nodeIndex == 6) && (ngContentIndex == 0))) {
      cb(this._text_7,ctx);
      cb(this._vc_8.nativeElement,ctx);
      this._vc_8.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_9,ctx);
    }
    if (((nodeIndex == 13) && (ngContentIndex == 0))) {
      cb(this._el_14,ctx);
      cb(this._text_16,ctx);
    }
    if (((nodeIndex == 14) && (ngContentIndex == 0))) { cb(this._text_15,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 4)) { return new View_AIDetailComponent2(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 8)) { return new View_AIDetailComponent3(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    if ((nodeIndex == 11)) { return new View_AIDetailComponent4(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    return (null as any);
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.compView_13.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_13_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.implant()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_AIDetailComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_AIDetailComponent,{});
export class View_AIDetailComponent0 extends import2.AppView<import0.AIDetailComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import31.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AIDetailComponent0,renderType_AIDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n      ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import10.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import37.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import31.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import37.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import40.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = (this.context.ai && this.context.ai.net);
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_AIDetailComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}