/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/music/instrument-detail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/services/sf.service';
import * as import10 from '@angular/material/select/option';
import * as import11 from '../../node_modules/@angular/material/select/option.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/material/select/select';
import * as import15 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import17 from '../../node_modules/@angular/material/select/select.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import20 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import21 from '@angular/material/core/rtl/dir';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import24 from '@angular/common/src/directives/ng_for';
import * as import25 from '@angular/forms/src/directives/ng_model';
import * as import26 from '@angular/forms/src/directives/ng_control';
import * as import27 from '@angular/forms/src/directives/ng_control_status';
import * as import28 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import29 from '@angular/common/src/directives/ng_if';
export class Wrapper_InstrumentDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.InstrumentDetailComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.InstrumentDetailComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_inst(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.inst = currValue;
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
var renderType_InstrumentDetailComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_InstrumentDetailComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.InstrumentDetailComponent>;
  _InstrumentDetailComponent_0_3:Wrapper_InstrumentDetailComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InstrumentDetailComponent_Host0,renderType_InstrumentDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'instrument-detail',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_InstrumentDetailComponent0(this.viewUtils,this,0,this._el_0);
    this._InstrumentDetailComponent_0_3 = new Wrapper_InstrumentDetailComponent(this.injectorGet(import9.SFService,this.parentIndex));
    this.compView_0.create(this._InstrumentDetailComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._InstrumentDetailComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InstrumentDetailComponent) && (0 === requestNodeIndex))) { return this._InstrumentDetailComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InstrumentDetailComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const InstrumentDetailComponentNgFactory:import8.ComponentFactory<import0.InstrumentDetailComponent> = new import8.ComponentFactory<import0.InstrumentDetailComponent>('instrument-detail',View_InstrumentDetailComponent_Host0,import0.InstrumentDetailComponent);
const styles_InstrumentDetailComponent:any[] = ([] as any[]);
class View_InstrumentDetailComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import10.MdOption>;
  _MdOption_0_3:import11.Wrapper_MdOption;
  _text_1:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_InstrumentDetailComponent2,renderType_InstrumentDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-option',new import3.InlineArray2(2,'role','option'),(null as any));
    this.compView_0 = new import11.View_MdOption0(this.viewUtils,this,0,this._el_0);
    this._MdOption_0_3 = new import11.Wrapper_MdOption(new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this.compView_0.create(this._MdOption_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'click',(null as any),'keydown',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.MdOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdOption_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._MdOption_0_3.check_value(currVal_0_0_0,throwOnChange,false);
    this._MdOption_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._MdOption_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_4:any = import3.inlineInterpolate(1,'\n                   ',this.context.$implicit,'\n            ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<View_InstrumentDetailComponent1>this.parentView)._query_MdOption_2_0.setDirty();
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._MdOption_0_3.ngOnDestroy();
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
    result = (this._MdOption_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_InstrumentDetailComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import14.MdSelect>;
  _NgModel_2_3:import15.Wrapper_NgModel;
  _NgControl_2_4:any;
  _NgControlStatus_2_5:import16.Wrapper_NgControlStatus;
  _MdSelect_2_6:import17.Wrapper_MdSelect;
  _query_MdOption_2_0:import18.QueryList<any>;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import12.ViewContainer;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import19.Wrapper_NgFor;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_InstrumentDetailComponent1,renderType_InstrumentDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'md-select',new import3.InlineArray4(4,'placeholder','Instrument','role','listbox'),(null as any));
    this.compView_2 = new import17.View_MdSelect0(this.viewUtils,this,2,this._el_2);
    this._NgModel_2_3 = new import15.Wrapper_NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_2_4 = this._NgModel_2_3.context;
    this._NgControlStatus_2_5 = new import16.Wrapper_NgControlStatus(this._NgControl_2_4);
    this._MdSelect_2_6 = new import17.Wrapper_MdSelect(new import13.ElementRef(this._el_2),this.renderer,this.parentView.injectorGet(import20.ViewportRuler,this.parentIndex),this.parentView.injectorGet(import21.Dir,this.parentIndex,(null as any)),this._NgControl_2_4);
    this._query_MdOption_2_0 = new import18.QueryList<any>();
    this._text_3 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_4 = new import12.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import22.TemplateRef_(this,4,this._anchor_4);
    this._NgFor_4_6 = new import19.Wrapper_NgFor(this._vc_4.vcRef,this._TemplateRef_4_5,this.parentView.injectorGet(import23.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_5 = this.renderer.createText((null as any),'\n       ',(null as any));
    this.compView_2.create(this._MdSelect_2_6.context);
    this._text_6 = this.renderer.createText(this._el_0,'     \n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(8,'ngModelChange',(null as any),'onClose',(null as any),'keydown',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_2));
    this._NgModel_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this._MdSelect_2_6.subscribe(this,this.eventHandler(this.handleEvent_2),false,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import24.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    if (((token === import25.NgModel) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgModel_2_3.context; }
    if (((token === import26.NgControl) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgControl_2_4; }
    if (((token === import27.NgControlStatus) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgControlStatus_2_5.context; }
    if (((token === import14.MdSelect) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdSelect_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.instname;
    this._NgModel_2_3.check_model(currVal_2_0_0,throwOnChange,false);
    this._NgModel_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatus_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_2_0:any = 'Instrument';
    this._MdSelect_2_6.check_placeholder(currVal_2_2_0,throwOnChange,false);
    this._MdSelect_2_6.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_4_0_0:any = this.parentView.context.sfService.names;
    this._NgFor_4_6.check_ngForOf(currVal_4_0_0,throwOnChange,false);
    this._NgFor_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_MdOption_2_0.dirty) {
          this._query_MdOption_2_0.reset([this._vc_4.mapNestedViews(View_InstrumentDetailComponent2,(nestedView:View_InstrumentDetailComponent2):any => {
            return [nestedView._MdOption_0_3.context];
        })]);
        this._MdSelect_2_6.context.options = this._query_MdOption_2_0;
        this._query_MdOption_2_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._MdSelect_2_6.context.ngAfterContentInit(); }
    }
    this._NgControlStatus_2_5.checkHost(this,this.compView_2,this._el_2,throwOnChange);
    this._MdSelect_2_6.checkHost(this,this.compView_2,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this.compView_2.destroy();
    this._NgModel_2_3.ngOnDestroy();
    this._MdSelect_2_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 2) && (ngContentIndex == 0))) {
      cb(this._text_3,ctx);
      cb(this._vc_4.nativeElement,ctx);
      this._vc_4.visitNestedViewRootNodes(cb,ctx);
      cb(this._text_5,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 4)) { return new View_InstrumentDetailComponent2(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.compView_2.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdSelect_2_6.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.instname = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'onClose')) {
      const pd_sub_1:any = ((<any>this.parentView.context.setInst()) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}
var renderType_InstrumentDetailComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_InstrumentDetailComponent,{});
export class View_InstrumentDetailComponent0 extends import2.AppView<import0.InstrumentDetailComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import28.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InstrumentDetailComponent0,renderType_InstrumentDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n      ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import22.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import28.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'  \n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import29.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.inst;
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_InstrumentDetailComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}