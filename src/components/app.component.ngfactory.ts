/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './app.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './app.component.css.shim';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/router/src/directives/router_link_active';
import * as import14 from '@angular/router/src/directives/router_outlet';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/router/src/router_outlet_map';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from '@angular/core/src/security';
const nodeDebugInfos_AppComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.AppComponent],import1.AppComponent,{})];
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _AppComponent_0_4:import1.AppComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-app',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new import1.AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import10.ComponentFactory<import1.AppComponent> = new import10.ComponentFactory<import1.AppComponent>('my-app',viewFactory_AppComponent_Host0,import1.AppComponent);
const styles_AppComponent:any[] = [import11.styles];
const nodeDebugInfos_AppComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import12.RouterLinkWithHref,
    import13.RouterLinkActive
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import12.RouterLinkWithHref,
    import13.RouterLinkActive
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import0.StaticNodeDebugInfo([import14.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import3.DebugAppView<import1.AppComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _RouterLinkWithHref_6_3:import12.RouterLinkWithHref;
  _RouterLinkActive_6_4:import13.RouterLinkActive;
  _query_RouterLink_6_0:import15.QueryList<any>;
  _query_RouterLinkWithHref_6_1:import15.QueryList<any>;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _RouterLinkWithHref_9_3:import12.RouterLinkWithHref;
  _RouterLinkActive_9_4:import13.RouterLinkActive;
  _query_RouterLink_9_0:import15.QueryList<any>;
  _query_RouterLinkWithHref_9_1:import15.QueryList<any>;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import4.AppElement;
  _RouterOutlet_13_5:import14.RouterOutlet;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',this.debug(1,1,2));
    this._text_2 = this.renderer.createText(this._el_1,'',this.debug(2,1,6));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(3,1,20));
    this._el_4 = this.renderer.createElement(parentRenderNode,'nav',this.debug(4,2,2));
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',this.debug(5,2,7));
    this._el_6 = this.renderer.createElement(this._el_4,'a',this.debug(6,3,4));
    this.renderer.setElementAttribute(this._el_6,'routerLink','/dashboard');
    this.renderer.setElementAttribute(this._el_6,'routerLinkActive','active');
    this._RouterLinkWithHref_6_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import16.Router),this.parentInjector.get(import17.ActivatedRoute),this.parentInjector.get(import18.LocationStrategy));
    this._RouterLinkActive_6_4 = new import13.RouterLinkActive(this.parentInjector.get(import16.Router),new import19.ElementRef(this._el_6),this.renderer);
    this._query_RouterLink_6_0 = new import15.QueryList<any>();
    this._query_RouterLinkWithHref_6_1 = new import15.QueryList<any>();
    this._text_7 = this.renderer.createText(this._el_6,'Dashboard',this.debug(7,3,57));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',this.debug(8,3,70));
    this._el_9 = this.renderer.createElement(this._el_4,'a',this.debug(9,4,4));
    this.renderer.setElementAttribute(this._el_9,'routerLink','/heroes');
    this.renderer.setElementAttribute(this._el_9,'routerLinkActive','active');
    this._RouterLinkWithHref_9_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import16.Router),this.parentInjector.get(import17.ActivatedRoute),this.parentInjector.get(import18.LocationStrategy));
    this._RouterLinkActive_9_4 = new import13.RouterLinkActive(this.parentInjector.get(import16.Router),new import19.ElementRef(this._el_9),this.renderer);
    this._query_RouterLink_9_0 = new import15.QueryList<any>();
    this._query_RouterLinkWithHref_9_1 = new import15.QueryList<any>();
    this._text_10 = this.renderer.createText(this._el_9,'Heroes',this.debug(10,4,54));
    this._text_11 = this.renderer.createText(this._el_4,'\n  ',this.debug(11,4,64));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(12,5,8));
    this._el_13 = this.renderer.createElement(parentRenderNode,'router-outlet',this.debug(13,6,2));
    this._appEl_13 = new import4.AppElement(13,(null as any),this,this._el_13);
    this._RouterOutlet_13_5 = new import14.RouterOutlet(this.parentInjector.get(import20.RouterOutletMap),this._appEl_13.vcRef,this.parentInjector.get(import21.ComponentFactoryResolver),(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(14,6,33));
    this._expr_0 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_6_3; }
    if (((token === import13.RouterLinkActive) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkActive_6_4; }
    if (((token === import12.RouterLinkWithHref) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLinkWithHref_9_3; }
    if (((token === import13.RouterLinkActive) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLinkActive_9_4; }
    if (((token === import14.RouterOutlet) && (13 === requestNodeIndex))) { return this._RouterOutlet_13_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(6,3,4);
    changes = (null as any);
    this.debug(6,3,7);
    const currVal_2:any = '/dashboard';
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_6_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_6_3.ngOnChanges(changes); }
    this.debug(6,3,4);
    changes = (null as any);
    this.debug(6,3,31);
    const currVal_4:any = 'active';
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkActive_6_4.routerLinkActive = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_6_4.ngOnChanges(changes); }
    this.debug(9,4,4);
    changes = (null as any);
    this.debug(9,4,7);
    const currVal_6:any = '/heroes';
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._RouterLinkWithHref_9_3.routerLink = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_9_3.ngOnChanges(changes); }
    this.debug(9,4,4);
    changes = (null as any);
    this.debug(9,4,28);
    const currVal_8:any = 'active';
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._RouterLinkActive_9_4.routerLinkActive = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import8.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_9_4.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_6_0.dirty) {
        this._query_RouterLink_6_0.reset(([] as any[]));
        this._RouterLinkActive_6_4.links = this._query_RouterLink_6_0;
        this._query_RouterLink_6_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_6_1.dirty) {
        this._query_RouterLinkWithHref_6_1.reset([this._RouterLinkWithHref_6_3]);
        this._RouterLinkActive_6_4.linksWithHrefs = this._query_RouterLinkWithHref_6_1;
        this._query_RouterLinkWithHref_6_1.notifyOnChanges();
      }
      if (this._query_RouterLink_9_0.dirty) {
        this._query_RouterLink_9_0.reset(([] as any[]));
        this._RouterLinkActive_9_4.links = this._query_RouterLink_9_0;
        this._query_RouterLink_9_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_9_1.dirty) {
        this._query_RouterLinkWithHref_9_1.reset([this._RouterLinkWithHref_9_3]);
        this._RouterLinkActive_9_4.linksWithHrefs = this._query_RouterLinkWithHref_9_1;
        this._query_RouterLinkWithHref_9_1.notifyOnChanges();
      }
      this.debug(6,3,4);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_6_4.ngAfterContentInit(); }
      this.debug(9,4,4);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_9_4.ngAfterContentInit(); }
    }
    this.debug(2,1,6);
    const currVal_0:any = import5.interpolate(1,'',this.context.title,'');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_2,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.debug(6,3,4);
    const currVal_3:any = this._RouterLinkWithHref_6_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_6,'href',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.debug(9,4,4);
    const currVal_7:any = this._RouterLinkWithHref_9_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementProperty(this._el_9,'href',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_7));
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(6,3,4);
    this._RouterLinkWithHref_6_3.ngOnDestroy();
    this._RouterLinkActive_6_4.ngOnDestroy();
    this.debug(9,4,4);
    this._RouterLinkWithHref_9_3.ngOnDestroy();
    this._RouterLinkActive_9_4.ngOnDestroy();
    this.debug(13,6,2);
    this._RouterOutlet_13_5.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(6,3,4);
    const pd_0:any = ((<any>this._RouterLinkWithHref_6_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(9,4,4);
    const pd_0:any = ((<any>this._RouterLinkWithHref_9_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Hands-on/HeroEditor/src/components/app.component.ts class AppComponent - inline template',0,import9.ViewEncapsulation.Emulated,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}