/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from '@angular/material/core/compatibility/default-mode';
import * as import9 from '@angular/material/core/ripple/ripple';
import * as import10 from '@angular/material/button/button';
import * as import11 from '@angular/material/card/card';
import * as import12 from '@angular/material/chips/chip-list';
import * as import13 from '@angular/material/checkbox/checkbox';
import * as import14 from '@angular/material/core/line/line';
import * as import15 from '@angular/material/grid-list/grid-list';
import * as import16 from '@angular/material/core/platform/index';
import * as import17 from '@angular/material/input/input';
import * as import18 from '@angular/material/list/list';
import * as import19 from '@angular/material/progress-bar/progress-bar';
import * as import20 from '@angular/material/progress-spinner/progress-spinner';
import * as import21 from '@angular/material/core/portal/portal-directives';
import * as import22 from '@angular/material/core/overlay/overlay-directives';
import * as import23 from '@angular/material/select/index';
import * as import24 from '@angular/material/core/a11y/index';
import * as import25 from '@angular/material/sidenav/sidenav';
import * as import26 from '@angular/material/core/observe-content/observe-content';
import * as import27 from '@angular/material/tabs/tab-group';
import * as import28 from '@angular/material/toolbar/toolbar';
import * as import29 from '@angular/material/core/projection/projection';
import * as import30 from '@angular/material/core/rtl/dir';
import * as import31 from '@angular/material/button-toggle/button-toggle';
import * as import32 from '@angular/material/dialog/index';
import * as import33 from '@angular/material/icon/icon';
import * as import34 from '@angular/material/menu/menu';
import * as import35 from '@angular/material/radio/radio';
import * as import36 from '@angular/material/slider/slider';
import * as import37 from '@angular/material/slide-toggle/slide-toggle';
import * as import38 from '@angular/material/snack-bar/snack-bar';
import * as import39 from '@angular/material/tooltip/tooltip';
import * as import40 from '@angular/material/module';
import * as import41 from '@angular/common/src/localization';
import * as import42 from '@angular/core/src/application_init';
import * as import43 from '@angular/core/src/testability/testability';
import * as import44 from '@angular/core/src/application_ref';
import * as import45 from '@angular/core/src/linker/compiler';
import * as import46 from '@angular/material/core/gestures/gesture-config';
import * as import47 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import48 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import49 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import50 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import51 from '@angular/core/src/animation/animation_queue';
import * as import52 from '@angular/core/src/linker/view_utils';
import * as import53 from '@angular/platform-browser/src/browser/title';
import * as import54 from '@angular/http/src/backends/browser_xhr';
import * as import55 from '@angular/http/src/base_response_options';
import * as import56 from '@angular/http/src/backends/xhr_backend';
import * as import57 from '@angular/http/src/base_request_options';
import * as import58 from '@angular/http/src/backends/browser_jsonp';
import * as import59 from '@angular/http/src/backends/jsonp_backend';
import * as import60 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import61 from '@angular/material/core/overlay/position/viewport-ruler';
import * as import62 from '@angular/material/core/platform/platform';
import * as import63 from '@angular/material/core/overlay/position/overlay-position-builder';
import * as import64 from '@angular/material/core/overlay/overlay-container';
import * as import65 from '@angular/material/core/overlay/overlay';
import * as import66 from '@angular/material/core/overlay/scroll/scroll-dispatcher';
import * as import67 from '@angular/material/core/a11y/interactivity-checker';
import * as import68 from '@angular/material/core/a11y/live-announcer';
import * as import69 from '@angular/material/core/coordination/unique-selection-dispatcher';
import * as import70 from '@angular/material/dialog/dialog';
import * as import71 from '@angular/material/icon/icon-registry';
import * as import72 from '@angular/core/src/di/injector';
import * as import73 from '../node_modules/@angular/material/dialog/dialog-container.ngfactory';
import * as import74 from '../node_modules/@angular/material/snack-bar/snack-bar-container.ngfactory';
import * as import75 from '../node_modules/@angular/material/snack-bar/simple-snack-bar.ngfactory';
import * as import76 from '../node_modules/@angular/material/tooltip/tooltip.ngfactory';
import * as import77 from './app.component.ngfactory';
import * as import78 from '@angular/core/src/i18n/tokens';
import * as import79 from '@angular/core/src/application_tokens';
import * as import80 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import81 from '@angular/platform-browser/src/dom/events/key_events';
import * as import82 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import83 from '@angular/core/src/zone/ng_zone';
import * as import84 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import85 from '@angular/core/src/console';
import * as import86 from '@angular/core/src/error_handler';
import * as import87 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import88 from '@angular/platform-browser/src/dom/animation_driver';
import * as import89 from '@angular/core/src/render/api';
import * as import90 from '@angular/core/src/security';
import * as import91 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import92 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import93 from '@angular/http/src/interfaces';
import * as import94 from '@angular/http/src/http';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _JsonpModule_4:import5.JsonpModule;
  _InternalFormsSharedModule_5:import6.InternalFormsSharedModule;
  _FormsModule_6:import7.FormsModule;
  _DefaultStyleCompatibilityModeModule_7:import8.DefaultStyleCompatibilityModeModule;
  _MdRippleModule_8:import9.MdRippleModule;
  _MdButtonModule_9:import10.MdButtonModule;
  _MdCardModule_10:import11.MdCardModule;
  _MdChipsModule_11:import12.MdChipsModule;
  _MdCheckboxModule_12:import13.MdCheckboxModule;
  _MdLineModule_13:import14.MdLineModule;
  _MdGridListModule_14:import15.MdGridListModule;
  _PlatformModule_15:import16.PlatformModule;
  _MdInputModule_16:import17.MdInputModule;
  _MdListModule_17:import18.MdListModule;
  _MdProgressBarModule_18:import19.MdProgressBarModule;
  _MdProgressSpinnerModule_19:import20.MdProgressSpinnerModule;
  _PortalModule_20:import21.PortalModule;
  _OverlayModule_21:import22.OverlayModule;
  _MdSelectModule_22:import23.MdSelectModule;
  _A11yModule_23:import24.A11yModule;
  _MdSidenavModule_24:import25.MdSidenavModule;
  _ObserveContentModule_25:import26.ObserveContentModule;
  _MdTabsModule_26:import27.MdTabsModule;
  _MdToolbarModule_27:import28.MdToolbarModule;
  _ProjectionModule_28:import29.ProjectionModule;
  _RtlModule_29:import30.RtlModule;
  _MdButtonToggleModule_30:import31.MdButtonToggleModule;
  _MdDialogModule_31:import32.MdDialogModule;
  _MdIconModule_32:import33.MdIconModule;
  _MdMenuModule_33:import34.MdMenuModule;
  _MdRadioModule_34:import35.MdRadioModule;
  _MdSliderModule_35:import36.MdSliderModule;
  _MdSlideToggleModule_36:import37.MdSlideToggleModule;
  _MdSnackBarModule_37:import38.MdSnackBarModule;
  _MdTooltipModule_38:import39.MdTooltipModule;
  _MaterialRootModule_39:import40.MaterialRootModule;
  _AppModule_40:import1.AppModule;
  __LOCALE_ID_41:any;
  __NgLocalization_42:import41.NgLocaleLocalization;
  _ErrorHandler_43:any;
  _ApplicationInitStatus_44:import42.ApplicationInitStatus;
  _Testability_45:import43.Testability;
  _ApplicationRef__46:import44.ApplicationRef_;
  __ApplicationRef_47:any;
  __Compiler_48:import45.Compiler;
  __APP_ID_49:any;
  __DOCUMENT_50:any;
  __HAMMER_GESTURE_CONFIG_51:import46.GestureConfig;
  __EVENT_MANAGER_PLUGINS_52:any[];
  __EventManager_53:import47.EventManager;
  _DomSharedStylesHost_54:import48.DomSharedStylesHost;
  __AnimationDriver_55:any;
  __DomRootRenderer_56:import49.DomRootRenderer_;
  __RootRenderer_57:any;
  __DomSanitizer_58:import50.DomSanitizerImpl;
  __Sanitizer_59:any;
  __AnimationQueue_60:import51.AnimationQueue;
  __ViewUtils_61:import52.ViewUtils;
  __IterableDiffers_62:any;
  __KeyValueDiffers_63:any;
  __SharedStylesHost_64:any;
  __Title_65:import53.Title;
  __BrowserXhr_66:import54.BrowserXhr;
  __ResponseOptions_67:import55.BaseResponseOptions;
  __XSRFStrategy_68:any;
  __XHRBackend_69:import56.XHRBackend;
  __RequestOptions_70:import57.BaseRequestOptions;
  __Http_71:any;
  __BrowserJsonp_72:import58.BrowserJsonp;
  __JSONPBackend_73:import59.JSONPBackend_;
  __Jsonp_74:any;
  __RadioControlRegistry_75:import60.RadioControlRegistry;
  __MATERIAL_COMPATIBILITY_MODE_76:any;
  __ViewportRuler_77:import61.ViewportRuler;
  __Platform_78:import62.Platform;
  __OverlayPositionBuilder_79:import63.OverlayPositionBuilder;
  __OverlayContainer_80:import64.OverlayContainer;
  __Overlay_81:import65.Overlay;
  __ScrollDispatcher_82:import66.ScrollDispatcher;
  __InteractivityChecker_83:import67.InteractivityChecker;
  __DomProjection_84:import29.DomProjection;
  __LiveAnnouncer_85:import68.LiveAnnouncer;
  __UniqueSelectionDispatcher_86:import69.UniqueSelectionDispatcher;
  __MdDialog_87:import70.MdDialog;
  __MdIconRegistry_88:import71.MdIconRegistry;
  __MdSnackBar_89:import38.MdSnackBar;
  constructor(parent:import72.Injector) {
    super(parent,[
      import73.MdDialogContainerNgFactory,
      import74.MdSnackBarContainerNgFactory,
      import75.SimpleSnackBarNgFactory,
      import76.TooltipComponentNgFactory,
      import77.AppComponentNgFactory
    ]
    ,[import77.AppComponentNgFactory]);
  }
  get _LOCALE_ID_41():any {
    if ((this.__LOCALE_ID_41 == null)) { (this.__LOCALE_ID_41 = import3._localeFactory(this.parent.get(import78.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_41;
  }
  get _NgLocalization_42():import41.NgLocaleLocalization {
    if ((this.__NgLocalization_42 == null)) { (this.__NgLocalization_42 = new import41.NgLocaleLocalization(this._LOCALE_ID_41)); }
    return this.__NgLocalization_42;
  }
  get _ApplicationRef_47():any {
    if ((this.__ApplicationRef_47 == null)) { (this.__ApplicationRef_47 = this._ApplicationRef__46); }
    return this.__ApplicationRef_47;
  }
  get _Compiler_48():import45.Compiler {
    if ((this.__Compiler_48 == null)) { (this.__Compiler_48 = new import45.Compiler()); }
    return this.__Compiler_48;
  }
  get _APP_ID_49():any {
    if ((this.__APP_ID_49 == null)) { (this.__APP_ID_49 = import79._appIdRandomProviderFactory()); }
    return this.__APP_ID_49;
  }
  get _DOCUMENT_50():any {
    if ((this.__DOCUMENT_50 == null)) { (this.__DOCUMENT_50 = import4._document()); }
    return this.__DOCUMENT_50;
  }
  get _HAMMER_GESTURE_CONFIG_51():import46.GestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_51 == null)) { (this.__HAMMER_GESTURE_CONFIG_51 = new import46.GestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_51;
  }
  get _EVENT_MANAGER_PLUGINS_52():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_52 == null)) { (this.__EVENT_MANAGER_PLUGINS_52 = [
      new import80.DomEventsPlugin(),
      new import81.KeyEventsPlugin(),
      new import82.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_51)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_52;
  }
  get _EventManager_53():import47.EventManager {
    if ((this.__EventManager_53 == null)) { (this.__EventManager_53 = new import47.EventManager(this._EVENT_MANAGER_PLUGINS_52,this.parent.get(import83.NgZone))); }
    return this.__EventManager_53;
  }
  get _AnimationDriver_55():any {
    if ((this.__AnimationDriver_55 == null)) { (this.__AnimationDriver_55 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_55;
  }
  get _DomRootRenderer_56():import49.DomRootRenderer_ {
    if ((this.__DomRootRenderer_56 == null)) { (this.__DomRootRenderer_56 = new import49.DomRootRenderer_(this._DOCUMENT_50,this._EventManager_53,this._DomSharedStylesHost_54,this._AnimationDriver_55,this._APP_ID_49)); }
    return this.__DomRootRenderer_56;
  }
  get _RootRenderer_57():any {
    if ((this.__RootRenderer_57 == null)) { (this.__RootRenderer_57 = import84._createConditionalRootRenderer(this._DomRootRenderer_56,this.parent.get(import84.NgProbeToken,(null as any)),this.parent.get(import44.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_57;
  }
  get _DomSanitizer_58():import50.DomSanitizerImpl {
    if ((this.__DomSanitizer_58 == null)) { (this.__DomSanitizer_58 = new import50.DomSanitizerImpl()); }
    return this.__DomSanitizer_58;
  }
  get _Sanitizer_59():any {
    if ((this.__Sanitizer_59 == null)) { (this.__Sanitizer_59 = this._DomSanitizer_58); }
    return this.__Sanitizer_59;
  }
  get _AnimationQueue_60():import51.AnimationQueue {
    if ((this.__AnimationQueue_60 == null)) { (this.__AnimationQueue_60 = new import51.AnimationQueue(this.parent.get(import83.NgZone))); }
    return this.__AnimationQueue_60;
  }
  get _ViewUtils_61():import52.ViewUtils {
    if ((this.__ViewUtils_61 == null)) { (this.__ViewUtils_61 = new import52.ViewUtils(this._RootRenderer_57,this._Sanitizer_59,this._AnimationQueue_60)); }
    return this.__ViewUtils_61;
  }
  get _IterableDiffers_62():any {
    if ((this.__IterableDiffers_62 == null)) { (this.__IterableDiffers_62 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_62;
  }
  get _KeyValueDiffers_63():any {
    if ((this.__KeyValueDiffers_63 == null)) { (this.__KeyValueDiffers_63 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_63;
  }
  get _SharedStylesHost_64():any {
    if ((this.__SharedStylesHost_64 == null)) { (this.__SharedStylesHost_64 = this._DomSharedStylesHost_54); }
    return this.__SharedStylesHost_64;
  }
  get _Title_65():import53.Title {
    if ((this.__Title_65 == null)) { (this.__Title_65 = new import53.Title()); }
    return this.__Title_65;
  }
  get _BrowserXhr_66():import54.BrowserXhr {
    if ((this.__BrowserXhr_66 == null)) { (this.__BrowserXhr_66 = new import54.BrowserXhr()); }
    return this.__BrowserXhr_66;
  }
  get _ResponseOptions_67():import55.BaseResponseOptions {
    if ((this.__ResponseOptions_67 == null)) { (this.__ResponseOptions_67 = new import55.BaseResponseOptions()); }
    return this.__ResponseOptions_67;
  }
  get _XSRFStrategy_68():any {
    if ((this.__XSRFStrategy_68 == null)) { (this.__XSRFStrategy_68 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_68;
  }
  get _XHRBackend_69():import56.XHRBackend {
    if ((this.__XHRBackend_69 == null)) { (this.__XHRBackend_69 = new import56.XHRBackend(this._BrowserXhr_66,this._ResponseOptions_67,this._XSRFStrategy_68)); }
    return this.__XHRBackend_69;
  }
  get _RequestOptions_70():import57.BaseRequestOptions {
    if ((this.__RequestOptions_70 == null)) { (this.__RequestOptions_70 = new import57.BaseRequestOptions()); }
    return this.__RequestOptions_70;
  }
  get _Http_71():any {
    if ((this.__Http_71 == null)) { (this.__Http_71 = import5.httpFactory(this._XHRBackend_69,this._RequestOptions_70)); }
    return this.__Http_71;
  }
  get _BrowserJsonp_72():import58.BrowserJsonp {
    if ((this.__BrowserJsonp_72 == null)) { (this.__BrowserJsonp_72 = new import58.BrowserJsonp()); }
    return this.__BrowserJsonp_72;
  }
  get _JSONPBackend_73():import59.JSONPBackend_ {
    if ((this.__JSONPBackend_73 == null)) { (this.__JSONPBackend_73 = new import59.JSONPBackend_(this._BrowserJsonp_72,this._ResponseOptions_67)); }
    return this.__JSONPBackend_73;
  }
  get _Jsonp_74():any {
    if ((this.__Jsonp_74 == null)) { (this.__Jsonp_74 = import5.jsonpFactory(this._JSONPBackend_73,this._RequestOptions_70)); }
    return this.__Jsonp_74;
  }
  get _RadioControlRegistry_75():import60.RadioControlRegistry {
    if ((this.__RadioControlRegistry_75 == null)) { (this.__RadioControlRegistry_75 = new import60.RadioControlRegistry()); }
    return this.__RadioControlRegistry_75;
  }
  get _MATERIAL_COMPATIBILITY_MODE_76():any {
    if ((this.__MATERIAL_COMPATIBILITY_MODE_76 == null)) { (this.__MATERIAL_COMPATIBILITY_MODE_76 = false); }
    return this.__MATERIAL_COMPATIBILITY_MODE_76;
  }
  get _ViewportRuler_77():import61.ViewportRuler {
    if ((this.__ViewportRuler_77 == null)) { (this.__ViewportRuler_77 = new import61.ViewportRuler()); }
    return this.__ViewportRuler_77;
  }
  get _Platform_78():import62.Platform {
    if ((this.__Platform_78 == null)) { (this.__Platform_78 = new import62.Platform()); }
    return this.__Platform_78;
  }
  get _OverlayPositionBuilder_79():import63.OverlayPositionBuilder {
    if ((this.__OverlayPositionBuilder_79 == null)) { (this.__OverlayPositionBuilder_79 = new import63.OverlayPositionBuilder(this._ViewportRuler_77)); }
    return this.__OverlayPositionBuilder_79;
  }
  get _OverlayContainer_80():import64.OverlayContainer {
    if ((this.__OverlayContainer_80 == null)) { (this.__OverlayContainer_80 = new import64.OverlayContainer()); }
    return this.__OverlayContainer_80;
  }
  get _Overlay_81():import65.Overlay {
    if ((this.__Overlay_81 == null)) { (this.__Overlay_81 = new import65.Overlay(this._OverlayContainer_80,this,this._OverlayPositionBuilder_79,this._ApplicationRef_47,this,this.parent.get(import83.NgZone))); }
    return this.__Overlay_81;
  }
  get _ScrollDispatcher_82():import66.ScrollDispatcher {
    if ((this.__ScrollDispatcher_82 == null)) { (this.__ScrollDispatcher_82 = new import66.ScrollDispatcher()); }
    return this.__ScrollDispatcher_82;
  }
  get _InteractivityChecker_83():import67.InteractivityChecker {
    if ((this.__InteractivityChecker_83 == null)) { (this.__InteractivityChecker_83 = new import67.InteractivityChecker(this._Platform_78)); }
    return this.__InteractivityChecker_83;
  }
  get _DomProjection_84():import29.DomProjection {
    if ((this.__DomProjection_84 == null)) { (this.__DomProjection_84 = new import29.DomProjection()); }
    return this.__DomProjection_84;
  }
  get _LiveAnnouncer_85():import68.LiveAnnouncer {
    if ((this.__LiveAnnouncer_85 == null)) { (this.__LiveAnnouncer_85 = new import68.LiveAnnouncer(this.parent.get(import68.LIVE_ANNOUNCER_ELEMENT_TOKEN,(null as any)))); }
    return this.__LiveAnnouncer_85;
  }
  get _UniqueSelectionDispatcher_86():import69.UniqueSelectionDispatcher {
    if ((this.__UniqueSelectionDispatcher_86 == null)) { (this.__UniqueSelectionDispatcher_86 = new import69.UniqueSelectionDispatcher()); }
    return this.__UniqueSelectionDispatcher_86;
  }
  get _MdDialog_87():import70.MdDialog {
    if ((this.__MdDialog_87 == null)) { (this.__MdDialog_87 = new import70.MdDialog(this._Overlay_81,this)); }
    return this.__MdDialog_87;
  }
  get _MdIconRegistry_88():import71.MdIconRegistry {
    if ((this.__MdIconRegistry_88 == null)) { (this.__MdIconRegistry_88 = new import71.MdIconRegistry(this._Http_71,this._DomSanitizer_58)); }
    return this.__MdIconRegistry_88;
  }
  get _MdSnackBar_89():import38.MdSnackBar {
    if ((this.__MdSnackBar_89 == null)) { (this.__MdSnackBar_89 = new import38.MdSnackBar(this._Overlay_81,this._LiveAnnouncer_85)); }
    return this.__MdSnackBar_89;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._JsonpModule_4 = new import5.JsonpModule();
    this._InternalFormsSharedModule_5 = new import6.InternalFormsSharedModule();
    this._FormsModule_6 = new import7.FormsModule();
    this._DefaultStyleCompatibilityModeModule_7 = new import8.DefaultStyleCompatibilityModeModule();
    this._MdRippleModule_8 = new import9.MdRippleModule();
    this._MdButtonModule_9 = new import10.MdButtonModule();
    this._MdCardModule_10 = new import11.MdCardModule();
    this._MdChipsModule_11 = new import12.MdChipsModule();
    this._MdCheckboxModule_12 = new import13.MdCheckboxModule();
    this._MdLineModule_13 = new import14.MdLineModule();
    this._MdGridListModule_14 = new import15.MdGridListModule();
    this._PlatformModule_15 = new import16.PlatformModule();
    this._MdInputModule_16 = new import17.MdInputModule();
    this._MdListModule_17 = new import18.MdListModule();
    this._MdProgressBarModule_18 = new import19.MdProgressBarModule();
    this._MdProgressSpinnerModule_19 = new import20.MdProgressSpinnerModule();
    this._PortalModule_20 = new import21.PortalModule();
    this._OverlayModule_21 = new import22.OverlayModule();
    this._MdSelectModule_22 = new import23.MdSelectModule();
    this._A11yModule_23 = new import24.A11yModule();
    this._MdSidenavModule_24 = new import25.MdSidenavModule();
    this._ObserveContentModule_25 = new import26.ObserveContentModule();
    this._MdTabsModule_26 = new import27.MdTabsModule();
    this._MdToolbarModule_27 = new import28.MdToolbarModule();
    this._ProjectionModule_28 = new import29.ProjectionModule();
    this._RtlModule_29 = new import30.RtlModule();
    this._MdButtonToggleModule_30 = new import31.MdButtonToggleModule();
    this._MdDialogModule_31 = new import32.MdDialogModule();
    this._MdIconModule_32 = new import33.MdIconModule();
    this._MdMenuModule_33 = new import34.MdMenuModule();
    this._MdRadioModule_34 = new import35.MdRadioModule();
    this._MdSliderModule_35 = new import36.MdSliderModule();
    this._MdSlideToggleModule_36 = new import37.MdSlideToggleModule();
    this._MdSnackBarModule_37 = new import38.MdSnackBarModule();
    this._MdTooltipModule_38 = new import39.MdTooltipModule();
    this._MaterialRootModule_39 = new import40.MaterialRootModule();
    this._AppModule_40 = new import1.AppModule();
    this._ErrorHandler_43 = import4.errorHandler();
    this._ApplicationInitStatus_44 = new import42.ApplicationInitStatus(this.parent.get(import42.APP_INITIALIZER,(null as any)));
    this._Testability_45 = new import43.Testability(this.parent.get(import83.NgZone));
    this._ApplicationRef__46 = new import44.ApplicationRef_(this.parent.get(import83.NgZone),this.parent.get(import85.Console),this,this._ErrorHandler_43,this,this._ApplicationInitStatus_44,this.parent.get(import43.TestabilityRegistry,(null as any)),this._Testability_45);
    this._DomSharedStylesHost_54 = new import48.DomSharedStylesHost(this._DOCUMENT_50);
    return this._AppModule_40;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import5.JsonpModule)) { return this._JsonpModule_4; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_5; }
    if ((token === import7.FormsModule)) { return this._FormsModule_6; }
    if ((token === import8.DefaultStyleCompatibilityModeModule)) { return this._DefaultStyleCompatibilityModeModule_7; }
    if ((token === import9.MdRippleModule)) { return this._MdRippleModule_8; }
    if ((token === import10.MdButtonModule)) { return this._MdButtonModule_9; }
    if ((token === import11.MdCardModule)) { return this._MdCardModule_10; }
    if ((token === import12.MdChipsModule)) { return this._MdChipsModule_11; }
    if ((token === import13.MdCheckboxModule)) { return this._MdCheckboxModule_12; }
    if ((token === import14.MdLineModule)) { return this._MdLineModule_13; }
    if ((token === import15.MdGridListModule)) { return this._MdGridListModule_14; }
    if ((token === import16.PlatformModule)) { return this._PlatformModule_15; }
    if ((token === import17.MdInputModule)) { return this._MdInputModule_16; }
    if ((token === import18.MdListModule)) { return this._MdListModule_17; }
    if ((token === import19.MdProgressBarModule)) { return this._MdProgressBarModule_18; }
    if ((token === import20.MdProgressSpinnerModule)) { return this._MdProgressSpinnerModule_19; }
    if ((token === import21.PortalModule)) { return this._PortalModule_20; }
    if ((token === import22.OverlayModule)) { return this._OverlayModule_21; }
    if ((token === import23.MdSelectModule)) { return this._MdSelectModule_22; }
    if ((token === import24.A11yModule)) { return this._A11yModule_23; }
    if ((token === import25.MdSidenavModule)) { return this._MdSidenavModule_24; }
    if ((token === import26.ObserveContentModule)) { return this._ObserveContentModule_25; }
    if ((token === import27.MdTabsModule)) { return this._MdTabsModule_26; }
    if ((token === import28.MdToolbarModule)) { return this._MdToolbarModule_27; }
    if ((token === import29.ProjectionModule)) { return this._ProjectionModule_28; }
    if ((token === import30.RtlModule)) { return this._RtlModule_29; }
    if ((token === import31.MdButtonToggleModule)) { return this._MdButtonToggleModule_30; }
    if ((token === import32.MdDialogModule)) { return this._MdDialogModule_31; }
    if ((token === import33.MdIconModule)) { return this._MdIconModule_32; }
    if ((token === import34.MdMenuModule)) { return this._MdMenuModule_33; }
    if ((token === import35.MdRadioModule)) { return this._MdRadioModule_34; }
    if ((token === import36.MdSliderModule)) { return this._MdSliderModule_35; }
    if ((token === import37.MdSlideToggleModule)) { return this._MdSlideToggleModule_36; }
    if ((token === import38.MdSnackBarModule)) { return this._MdSnackBarModule_37; }
    if ((token === import39.MdTooltipModule)) { return this._MdTooltipModule_38; }
    if ((token === import40.MaterialRootModule)) { return this._MaterialRootModule_39; }
    if ((token === import1.AppModule)) { return this._AppModule_40; }
    if ((token === import78.LOCALE_ID)) { return this._LOCALE_ID_41; }
    if ((token === import41.NgLocalization)) { return this._NgLocalization_42; }
    if ((token === import86.ErrorHandler)) { return this._ErrorHandler_43; }
    if ((token === import42.ApplicationInitStatus)) { return this._ApplicationInitStatus_44; }
    if ((token === import43.Testability)) { return this._Testability_45; }
    if ((token === import44.ApplicationRef_)) { return this._ApplicationRef__46; }
    if ((token === import44.ApplicationRef)) { return this._ApplicationRef_47; }
    if ((token === import45.Compiler)) { return this._Compiler_48; }
    if ((token === import79.APP_ID)) { return this._APP_ID_49; }
    if ((token === import87.DOCUMENT)) { return this._DOCUMENT_50; }
    if ((token === import82.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_51; }
    if ((token === import47.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_52; }
    if ((token === import47.EventManager)) { return this._EventManager_53; }
    if ((token === import48.DomSharedStylesHost)) { return this._DomSharedStylesHost_54; }
    if ((token === import88.AnimationDriver)) { return this._AnimationDriver_55; }
    if ((token === import49.DomRootRenderer)) { return this._DomRootRenderer_56; }
    if ((token === import89.RootRenderer)) { return this._RootRenderer_57; }
    if ((token === import50.DomSanitizer)) { return this._DomSanitizer_58; }
    if ((token === import90.Sanitizer)) { return this._Sanitizer_59; }
    if ((token === import51.AnimationQueue)) { return this._AnimationQueue_60; }
    if ((token === import52.ViewUtils)) { return this._ViewUtils_61; }
    if ((token === import91.IterableDiffers)) { return this._IterableDiffers_62; }
    if ((token === import92.KeyValueDiffers)) { return this._KeyValueDiffers_63; }
    if ((token === import48.SharedStylesHost)) { return this._SharedStylesHost_64; }
    if ((token === import53.Title)) { return this._Title_65; }
    if ((token === import54.BrowserXhr)) { return this._BrowserXhr_66; }
    if ((token === import55.ResponseOptions)) { return this._ResponseOptions_67; }
    if ((token === import93.XSRFStrategy)) { return this._XSRFStrategy_68; }
    if ((token === import56.XHRBackend)) { return this._XHRBackend_69; }
    if ((token === import57.RequestOptions)) { return this._RequestOptions_70; }
    if ((token === import94.Http)) { return this._Http_71; }
    if ((token === import58.BrowserJsonp)) { return this._BrowserJsonp_72; }
    if ((token === import59.JSONPBackend)) { return this._JSONPBackend_73; }
    if ((token === import94.Jsonp)) { return this._Jsonp_74; }
    if ((token === import60.RadioControlRegistry)) { return this._RadioControlRegistry_75; }
    if ((token === import8.MATERIAL_COMPATIBILITY_MODE)) { return this._MATERIAL_COMPATIBILITY_MODE_76; }
    if ((token === import61.ViewportRuler)) { return this._ViewportRuler_77; }
    if ((token === import62.Platform)) { return this._Platform_78; }
    if ((token === import63.OverlayPositionBuilder)) { return this._OverlayPositionBuilder_79; }
    if ((token === import64.OverlayContainer)) { return this._OverlayContainer_80; }
    if ((token === import65.Overlay)) { return this._Overlay_81; }
    if ((token === import66.ScrollDispatcher)) { return this._ScrollDispatcher_82; }
    if ((token === import67.InteractivityChecker)) { return this._InteractivityChecker_83; }
    if ((token === import29.DomProjection)) { return this._DomProjection_84; }
    if ((token === import68.LiveAnnouncer)) { return this._LiveAnnouncer_85; }
    if ((token === import69.UniqueSelectionDispatcher)) { return this._UniqueSelectionDispatcher_86; }
    if ((token === import70.MdDialog)) { return this._MdDialog_87; }
    if ((token === import71.MdIconRegistry)) { return this._MdIconRegistry_88; }
    if ((token === import38.MdSnackBar)) { return this._MdSnackBar_89; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__46.ngOnDestroy();
    this._DomSharedStylesHost_54.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);