import{a as Dn,c as ce,d as me,e as pe}from"./chunk-MUYNRPVE.js";import{a as In,b as En}from"./chunk-SSK7R3WM.js";import{a as Cn,b as kn,c as wn}from"./chunk-DFYNLTBJ.js";import{a as mn,b as pn,c as bn,d as un,e as hn,f as _n,g as gn,h as fn,i as xn,j as yn}from"./chunk-4G7W3HKA.js";import{c as tn}from"./chunk-Q2NWI5KD.js";import"./chunk-BWET5UJM.js";import"./chunk-SGI5HU6R.js";import{a as Mn,b as Tn}from"./chunk-RGO2GZUN.js";import"./chunk-RBPCYVGQ.js";import{b as en}from"./chunk-DGNO66F2.js";import{a as Mt}from"./chunk-2BDUWGZ7.js";import"./chunk-QGSWLA7S.js";import"./chunk-ZS4JAWD4.js";import"./chunk-K66EXUFO.js";import{c as vn,d as xt,e as de,j as yt,k as Ct,m as kt,n as wt}from"./chunk-6AN2EZU4.js";import{b as ft,d as B,f as vt,g as Yt,i as nn,j as Xt,k as Ut,l as Jt,m as te,n as an,o as ee,p as ne,q as ae,r as on,s as ie}from"./chunk-S762TZKJ.js";import{a as O,b as Y,c as le,e as V,f as j,g as X,h as G}from"./chunk-OPLKNOPL.js";import{a as rn,b as L,c as N,e as sn,f as ln,k as se,m as dn,n as St,o as cn}from"./chunk-XONMF67N.js";import{d as oe,e as re}from"./chunk-W4PDV4PV.js";import"./chunk-FYDEB2G6.js";import{B as we,C as Ue,D as Qt,G as Je,N as Wt,P as qt,Q as Zt,ea as Me,fa as Kt,ga as Te,h as $t,ha as gt,o as ke,t as _t}from"./chunk-RX5ESBOA.js";import{$b as it,A as dt,Ab as Ye,Ac as zt,B as tt,Bb as P,Ca as At,Cb as g,Da as mt,Db as f,F as ze,Fa as $,Fb as Et,G as $e,Ga as Bt,Gb as M,Gc as rt,Hb as T,Ib as u,Ic as Ce,Jb as s,Kb as r,Lb as A,Mb as Pt,Nb as Ot,Ob as Xe,Pc as ut,R as Qe,Sb as w,T as et,Tc as I,U as We,Uc as ht,V as Dt,Wb as b,Yb as m,Zb as Q,_a as d,_b as F,a as z,ac as ot,bc as C,c as Ve,ca as ct,cc as k,db as Lt,e as lt,ea as R,eb as pt,ga as c,gb as It,gc as Z,hc as Vt,ic as x,jb as Nt,k as Rt,kc as jt,la as h,lc as l,m as je,ma as _,mc as v,na as qe,nb as y,nc as D,ob as bt,oc as xe,pa as ve,pb as H,pc as ye,qa as Ze,sb as W,ta as E,tb as q,ua as nt,ub as Ke,vc as K,y as Ge,ya as at,zc as Gt}from"./chunk-4P2YP4S6.js";import"./chunk-Q7L6LLAK.js";var Yn=["body"],Xn=["bodyWrapper"],Un=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Jn=["mat-expansion-panel-header","*","mat-action-row"];function ta(a,i){}var ea=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],na=["mat-panel-title","mat-panel-description","*"];function aa(a,i){a&1&&(Pt(0,"span",1),qe(),Pt(1,"svg",2),Xe(2,"path",3),Ot()())}var De=new R("MAT_ACCORDION"),Pn=new R("MAT_EXPANSION_PANEL"),ia=(()=>{class a{_template=c(pt);_expansionPanel=c(Pn,{optional:!0});constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),Sn=new R("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Pe=(()=>{class a extends kn{_viewContainerRef=c(Nt);_animationsDisabled=_t();_document=c(Ze);_ngZone=c(nt);_elementRef=c($);_renderer=c(It);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new E;afterCollapse=new E;_inputChanges=new lt;accordion=c(De,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Zt).getId("mat-expansion-panel-header-");constructor(){super();let t=c(Sn,{optional:!0});this._expansionDispatcher=c(en),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(et(null),tt(()=>this.expanded&&!this._portal),$e(1)).subscribe(()=>{this._portal=new se(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:e})=>{t===this._bodyWrapper?.nativeElement&&e==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this._transitionEndListener),t.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,o){if(e&1&&it(o,ia,5),e&2){let p;C(p=k())&&(n._lazyContent=p.first)}},viewQuery:function(e,n){if(e&1&&ot(Yn,5)(Xn,5),e&2){let o;C(o=k())&&(n._body=o.first),C(o=k())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[K([{provide:De,useValue:void 0},{provide:Pn,useExisting:a}]),W,At],ngContentSelectors:Jn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){e&1&&(Q(Un),F(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),F(6,1),q(7,ta,0,0,"ng-template",5),r(),F(8,2),r()()),e&2&&(d(),P("inert",n.expanded?null:""),d(2),u("id",n.id),P("aria-labelledby",n._headerId),d(4),u("cdkPortalOutlet",n._portal))},dependencies:[St],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return a})();var Se=(()=>{class a{panel=c(Pe,{host:!0});_element=c($);_focusMonitor=c(we);_changeDetectorRef=c(ut);_parentChangeSubscription=z.EMPTY;constructor(){c(Qt).load(Kt);let t=this.panel,e=c(Sn,{optional:!0}),n=c(new Ce("tabindex"),{optional:!0}),o=t.accordion?t.accordion._stateChanges.pipe(tt(p=>!!(p.hideToggle||p.togglePosition))):Rt;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=dt(t.opened,t.closed,o,t._inputChanges.pipe(tt(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(tt(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),e&&(this.expandedHeight=e.expandedHeight,this.collapsedHeight=e.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Wt(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,e){t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(e,n){e&1&&b("click",function(){return n._toggle()})("keydown",function(p){return n._keydown(p)}),e&2&&(P("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),Vt("height",n._getHeaderHeight()),x("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:ht(t)]},ngContentSelectors:na,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(e,n){e&1&&(Q(ea),Pt(0,"span",0),F(1),F(2,1),F(3,2),Ot(),g(4,aa,3,0,"span",1)),e&2&&(x("mat-content-hide-toggle",!n._showToggle()),d(4),f(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Hn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),Fn=(()=>{class a extends Cn{_keyManager;_ownHeaders=new Bt;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(et(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new qt(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["mat-accordion"]],contentQueries:function(e,n,o){if(e&1&&it(o,Se,5),e&2){let p;C(p=k())&&(n._headers=p)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,n){e&2&&x("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[K([{provide:De,useExisting:a}]),W]})}return a})(),Rn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[wn,cn,gt]})}return a})();var ra=["*"];var sa=new R("MAT_CARD_CONFIG"),An=(()=>{class a{appearance;constructor(){let t=c(sa,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,n){e&2&&x("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ra,decls:1,vars:0,template:function(e,n){e&1&&(Q(),F(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return a})();var Bn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var Ln=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[gt]})}return a})();var Be=["*"];function da(a,i){a&1&&F(0)}var ca=["tabListContainer"],ma=["tabList"],pa=["tabListInner"],ba=["nextPaginator"],ua=["previousPaginator"],ha=["content"];function _a(a,i){}var ga=["tabBodyWrapper"],fa=["tabHeader"];function va(a,i){}function xa(a,i){if(a&1&&q(0,va,0,0,"ng-template",12),a&2){let t=m().$implicit;u("cdkPortalOutlet",t.templateLabel)}}function ya(a,i){if(a&1&&l(0),a&2){let t=m().$implicit;v(t.textLabel)}}function Ca(a,i){if(a&1){let t=w();s(0,"div",7,2),b("click",function(){let n=h(t),o=n.$implicit,p=n.$index,S=m(),J=Z(1);return _(S._handleClick(o,J,p))})("cdkFocusChange",function(n){let o=h(t).$index,p=m();return _(p._tabFocusChanged(n,o))}),A(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),g(6,xa,1,1,null,12)(7,ya,1,1),r()()()}if(a&2){let t=i.$implicit,e=i.$index,n=Z(1),o=m();jt(t.labelClass),x("mdc-tab--active",o.selectedIndex===e),u("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),P("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),d(3),u("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),d(3),f(t.templateLabel?6:7)}}function ka(a,i){a&1&&F(0)}function wa(a,i){if(a&1){let t=w();s(0,"mat-tab-body",13),b("_onCentered",function(){h(t);let n=m();return _(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){h(t);let o=m();return _(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){h(t);let o=m();return _(o._bodyCentered(n))}),r()}if(a&2){let t=i.$implicit,e=i.$index,n=m();jt(t.bodyClass),u("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),P("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Ma=new R("MatTabContent"),Ta=(()=>{class a{template=c(pt);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["","matTabContent",""]],features:[K([{provide:Ma,useExisting:a}])]})}return a})(),Da=new R("MatTabLabel"),jn=new R("MAT_TAB"),Le=(()=>{class a extends dn{_closestTab=c(jn,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[K([{provide:Da,useExisting:a}]),W]})}return a})(),Gn=new R("MAT_TAB_GROUP"),Ne=(()=>{class a{_viewContainerRef=c(Nt);_closestTabGroup=c(Gn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new lt;position=null;origin=null;isActive=!1;constructor(){c(Qt).load(Kt)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new se(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&it(o,Le,5)(o,Ta,7,pt),e&2){let p;C(p=k())&&(n.templateLabel=p.first),C(p=k())&&(n._explicitContent=p.first)}},viewQuery:function(e,n){if(e&1&&ot(pt,7),e&2){let o;C(o=k())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&P("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[K([{provide:jn,useExisting:a}]),At],ngContentSelectors:Be,decls:1,vars:0,template:function(e,n){e&1&&(Q(),Ke(0,da,1,0,"ng-template"))},encapsulation:2})}return a})(),He="mdc-tab-indicator--active",Nn="mdc-tab-indicator--no-transition",Fe=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(n=>n.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Ia=(()=>{class a{_elementRef=c($);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(He);return}let n=e.getBoundingClientRect(),o=t.width/n.width,p=t.left-n.left;e.classList.add(Nn),this._inkBarContentElement.style.setProperty("transform",`translateX(${p}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(Nn),e.classList.add(He),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(He)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return a})();var zn=(()=>{class a extends Ia{elementRef=c($);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(P("aria-disabled",!!n.disabled),x("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[W]})}return a})(),On={passive:!0},Ea=650,Pa=100,Sa=(()=>{class a{_elementRef=c($);_changeDetectorRef=c(ut);_viewportRuler=c(ln);_dir=c(Te,{optional:!0});_ngZone=c(nt);_platform=c(ke);_sharedResizeObserver=c(vn);_injector=c(ve);_renderer=c(It);_animationsDisabled=_t();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new lt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new lt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new E;indexFocused=new E;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),On),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),On))}ngAfterContentInit(){let t=this._dir?this._dir.change:je("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ze(32),Dt(this._destroyed)),n=this._viewportRuler.change(150).pipe(Dt(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Lt(o,{injector:this._injector}),dt(t,n,e,this._items.changes,this._itemsResized()).pipe(Dt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(p=>{this.indexFocused.emit(p),this._setTabFocus(p)})}_itemsResized(){return typeof ResizeObserver!="function"?Rt:this._items.changes.pipe(et(this._items),We(t=>new Ve(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Qe(1),tt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Wt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:p}=e.elementRef.nativeElement,S,J;this._getLayoutDirection()=="ltr"?(S=o,J=S+p):(J=this._tabListInner.nativeElement.offsetWidth-o,S=J-p);let fe=this.scrollDistance,Oe=this.scrollDistance+n;S<fe?this.scrollDistance-=fe-S:J>Oe&&(this.scrollDistance+=Math.min(J-Oe,S-fe))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ge(Ea,Pa).pipe(Dt(dt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",ht]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),Ha=(()=>{class a extends Sa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Fe(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275cmp=y({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&it(o,zn,4),e&2){let p;C(p=k())&&(n._items=p)}},viewQuery:function(e,n){if(e&1&&ot(ca,7)(ma,7)(pa,7)(ba,5)(ua,5),e&2){let o;C(o=k())&&(n._tabListContainer=o.first),C(o=k())&&(n._tabList=o.first),C(o=k())&&(n._tabListInner=o.first),C(o=k())&&(n._nextPaginator=o.first),C(o=k())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[W],ngContentSelectors:Be,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(Q(),s(0,"div",5,0),b("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(p){return n._handlePaginatorPress("before",p)})("touchend",function(){return n._stopInterval()}),A(2,"div",6),r(),s(3,"div",7,1),b("keydown",function(p){return n._handleKeydown(p)}),s(5,"div",8,2),b("cdkObserveContent",function(){return n._onContentChanges()}),s(7,"div",9,3),F(9),r()()(),s(10,"div",10,4),b("mousedown",function(p){return n._handlePaginatorPress("after",p)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),A(12,"div",6),r()),e&2&&(x("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),u("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),x("_mat-animation-noopable",n._animationsDisabled),d(2),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),x("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),u("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Me,Je],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),Fa=new R("MAT_TABS_CONFIG"),Vn=(()=>{class a extends St{_host=c(Re);_ngZone=c(nt);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(et(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["","matTabBodyHost",""]],features:[W]})}return a})(),Re=(()=>{class a{_elementRef=c($);_dir=c(Te,{optional:!0});_ngZone=c(nt);_injector=c(ve);_renderer=c(It);_diAnimationsDisabled=_t();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new E;_beforeCentering=new E;_afterLeavingCenter=new E;_onCentered=new E(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=c(ut);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Lt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Lt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&ot(Vn,5)(ha,5),e&2){let o;C(o=k())&&(n._portalHost=o.first),C(o=k())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&P("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(s(0,"div",1,0),q(2,_a,0,0,"ng-template",2),r()),e&2&&x("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Vn,sn],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),$n=(()=>{class a{_elementRef=c($);_changeDetectorRef=c(ut);_ngZone=c(nt);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=_t();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Bt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new E;focusChange=new E;animationDone=new E;selectedTabChange=new E(!0);_groupId;_isServer=!c(ke).isBrowser;constructor(){let t=c(Fa,{optional:!0});this._groupId=c(Zt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(et(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Ae;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=dt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&it(o,Ne,5),e&2){let p;C(p=k())&&(n._allTabs=p)}},viewQuery:function(e,n){if(e&1&&ot(ga,5)(fa,5)(Re,5),e&2){let o;C(o=k())&&(n._tabBodyWrapper=o.first),C(o=k())&&(n._tabHeader=o.first),C(o=k())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(P("mat-align-tabs",n.alignTabs),jt("mat-"+(n.color||"primary")),Vt("--mat-tab-animation-duration",n.animationDuration),x("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",ht],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ht],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[K([{provide:Gn,useExisting:a}])],ngContentSelectors:Be,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(Q(),s(0,"mat-tab-header",3,0),b("indexFocused",function(p){return n._focusChanged(p)})("selectFocusedIndex",function(p){return n.selectedIndex=p}),M(2,Ca,8,17,"div",4,Et),r(),g(4,ka,1,0),s(5,"div",5,1),M(7,wa,1,10,"mat-tab-body",6,Et),r()),e&2&&(u("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ye("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),T(n._tabs),d(2),f(n._isServer?4:-1),d(),x("_mat-animation-noopable",n._animationsDisabled()),d(2),T(n._tabs))},dependencies:[Ha,zn,Ue,Me,St,Re],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),Ae=class{index;tab};var Qn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[gt]})}return a})();function Aa(a,i){a&1&&(s(0,"mat-error"),l(1,"Name is required"),r())}var Ht=class a{fb=c(ae);dialogRef=c(O);data=c(Y);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",B.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"h2",0),l(1),r(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),l(6,"Group name"),r(),A(7,"input",3),g(8,Aa,2,0,"mat-error"),r()()(),s(9,"mat-dialog-actions",4)(10,"button",5),b("click",function(){return e.cancel()}),l(11,"Cancel"),r(),s(12,"button",6),b("click",function(){return e.save()}),l(13),r()()),t&2){let n;d(),v(e.isEditMode?"Edit Group":"Add Group"),d(2),u("formGroup",e.form),d(5),f((n=e.form.get("name"))!=null&&n.invalid&&((n=e.form.get("name"))!=null&&n.touched)?8:-1),d(4),u("disabled",e.form.invalid),d(),D(" ",e.isEditMode?"Save":"Add"," ")}},dependencies:[ie,Xt,ft,vt,Yt,ne,te,Jt,G,V,X,j,Ct,yt,xt,de,wt,kt,N,L],encapsulation:2})};var La=(a,i)=>i.id;function Na(a,i){a&1&&(s(0,"mat-error"),l(1,"Name is required"),r())}function Oa(a,i){if(a&1&&(s(0,"mat-option",6),l(1),r()),a&2){let t=i.$implicit;u("value",t.id),d(),v(t.name)}}function Va(a,i){a&1&&(s(0,"mat-error"),l(1,"Must be at least 1"),r())}function ja(a,i){a&1&&(s(0,"mat-error"),l(1,"Enter a value between 1 and 7"),r())}function Ga(a,i){a&1&&(s(0,"mat-error"),l(1,"Must be at least 1"),r())}function za(a,i){if(a&1){let t=w();s(0,"button",16),b("click",function(){h(t);let n=m();return _(n.resetProgress())}),s(1,"mat-icon"),l(2,"restart_alt"),r(),l(3," Reset Progress "),r()}}var Tt=class a{fb=c(ae);dialogRef=c(O);matDialog=c(le);habitsService=c(pe);data=c(Y);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",B.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",B.required],basePoints:[this.data.habit?.basePoints??10,[B.required,B.min(1)]],frequency:[this.data.habit?.frequency??3,[B.required,B.min(1),B.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[B.required,B.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let i=this.form.getRawValue();this.dialogRef.close({name:i.name,emoji:i.emoji||void 0,groupId:i.groupId,basePoints:i.basePoints,frequency:i.frequency,masteryRewardPoints:i.masteryRewardPoints,withCompletionScore:i.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}resetProgress(){this.matDialog.open(Mt,{data:{message:`Reset all progress for "${this.data.habit.name}"? All completions will be deleted.`,confirmLabel:"Reset"}}).afterClosed().subscribe(i=>{i&&this.habitsService.resetProgress(this.data.habit.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habit-form"]],decls:43,vars:9,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","","color","warn",2,"margin-right","auto"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"],["mat-button","","color","warn",2,"margin-right","auto",3,"click"]],template:function(t,e){if(t&1&&(s(0,"h2",0),l(1),r(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),l(6,"Name"),r(),A(7,"input",3),g(8,Na,2,0,"mat-error"),r(),s(9,"mat-form-field",2)(10,"mat-label"),l(11,"Emoji (optional)"),r(),A(12,"input",4),r(),s(13,"mat-form-field",2)(14,"mat-label"),l(15,"Group"),r(),s(16,"mat-select",5),M(17,Oa,2,2,"mat-option",6,La),r()(),s(19,"mat-form-field",2)(20,"mat-label"),l(21,"Base points per completion"),r(),A(22,"input",7),g(23,Va,2,0,"mat-error"),r(),s(24,"div",8)(25,"mat-slide-toggle",9),l(26," With completion score "),r()(),s(27,"mat-form-field",2)(28,"mat-label"),l(29,"Frequency (times per week, 1\u20137)"),r(),A(30,"input",10),g(31,ja,2,0,"mat-error"),r(),s(32,"mat-form-field",2)(33,"mat-label"),l(34,"Mastery reward points"),r(),A(35,"input",11),g(36,Ga,2,0,"mat-error"),r()()(),s(37,"mat-dialog-actions",12),g(38,za,4,0,"button",13),s(39,"button",14),b("click",function(){return e.cancel()}),l(40,"Cancel"),r(),s(41,"button",15),b("click",function(){return e.save()}),l(42),r()()),t&2){let n,o,p,S;d(),v(e.isEditMode?"Edit Habit":"Add Habit"),d(2),u("formGroup",e.form),d(5),f((n=e.form.get("name"))!=null&&n.invalid&&((n=e.form.get("name"))!=null&&n.touched)?8:-1),d(9),T(e.groups),d(6),f((o=e.form.get("basePoints"))!=null&&o.invalid&&((o=e.form.get("basePoints"))!=null&&o.touched)?23:-1),d(8),f((p=e.form.get("frequency"))!=null&&p.invalid&&((p=e.form.get("frequency"))!=null&&p.touched)?31:-1),d(5),f((S=e.form.get("masteryRewardPoints"))!=null&&S.invalid&&((S=e.form.get("masteryRewardPoints"))!=null&&S.touched)?36:-1),d(2),f(e.isEditMode?38:-1),d(3),u("disabled",e.form.invalid),d(),D(" ",e.isEditMode?"Save":"Add"," ")}},dependencies:[ie,Xt,ft,Ut,vt,Yt,ne,ee,an,te,Jt,G,V,X,j,Ct,yt,xt,de,wt,kt,yn,xn,tn,N,L,re,oe,En,In],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function $a(a,i){if(a&1&&(s(0,"p"),l(1," This habit has earned "),s(2,"strong"),l(3),Gt(4,"number"),r(),l(5," in total. What would you like to do with them? "),r()),a&2){let t=m();d(3),D("",zt(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var he=class a{dialogRef=c(O);data=c(Y);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,e){t&1&&(s(0,"h2",0),l(1,"Delete Habit"),r(),s(2,"mat-dialog-content")(3,"p"),l(4," Delete "),s(5,"strong"),l(6),r(),l(7,"? "),r(),g(8,$a,6,4,"p"),r(),s(9,"mat-dialog-actions",1)(10,"button",2),b("click",function(){return e.dialogRef.close()}),l(11,"Cancel"),r(),s(12,"button",2),b("click",function(){return e.dialogRef.close("keep-points")}),l(13,"Keep Points"),r(),s(14,"button",3),b("click",function(){return e.dialogRef.close("remove-points")}),l(15," Delete & Remove Points "),r()()),t&2&&(d(6),v(e.data.habitName),d(2),f(e.data.pointsEarned>0?8:-1))},dependencies:[G,V,X,j,N,L,$t],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var _e=class a{dialogRef=c(O);data=c(Y);amount=at(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,e){t&1&&(s(0,"h2",0),l(1,"\u{1F3C6} Habit Mastered!"),r(),s(2,"mat-dialog-content")(3,"p"),l(4," You've mastered "),s(5,"strong"),l(6),r(),l(7,". Claim your reward points: "),r(),s(8,"mat-form-field",1)(9,"mat-label"),l(10,"Reward points"),r(),s(11,"input",2),b("ngModelChange",function(o){return e.amount.set(+o)}),r()()(),s(12,"mat-dialog-actions",3)(13,"button",4),b("click",function(){return e.dialogRef.close()}),l(14,"Cancel"),r(),s(15,"button",5),b("click",function(){return e.confirm()}),l(16),r()()),t&2&&(d(6),v(e.data.habitName),d(5),u("ngModel",e.amount()),d(4),u("disabled",e.amount()<=0),d(),D(" Claim ",e.amount()," pts "))},dependencies:[on,ft,Ut,vt,ee,nn,G,V,X,j,Ct,yt,xt,wt,kt,N,L],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var Qa=(a,i)=>i.value;function Wa(a,i){if(a&1){let t=w();s(0,"button",3),b("click",function(){let n=h(t).$implicit,o=m();return _(o.select(n.value))}),s(1,"span",4),l(2),r(),s(3,"span",5),l(4),r()()}if(a&2){let t=i.$implicit,e=m();x("selected",e.selected()===t.value),P("aria-label",t.label),d(2),v(t.emoji),d(2),v(t.label)}}var qa=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],ge=class a{dialogRef=c(O);scores=qa;selected=at(3);select(i){this.selected.set(i),this.confirm()}confirm(){this.dialogRef.close(this.selected())}onKey(i){let t=parseInt(i.key,10);t>=1&&t<=5?(this.selected.set(t),this.confirm()):i.key==="Enter"&&(i.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,e){t&1&&b("keydown",function(o){return e.onKey(o)})},decls:6,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,e){t&1&&(s(0,"h2",0),l(1,"Rate your Habit"),r(),s(2,"mat-dialog-content")(3,"div",1),M(4,Wa,5,5,"button",2,Qa),r()()),t&2&&(d(4),T(e.scores))},dependencies:[G,V,j],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var st=(a,i)=>i.id;function Za(a,i){if(a&1){let t=w();s(0,"button",22),b("click",function(){h(t);let n=m(2);return _(n.stopReorder())}),l(1,"Done"),r()}}function Ka(a,i){if(a&1){let t=w();s(0,"button",24),b("click",function(){h(t);let n=m(2).$implicit,o=m();return _(o.deleteGroup(n))}),s(1,"mat-icon"),l(2,"delete"),r(),l(3," Delete group "),r()}}function Ya(a,i){if(a&1){let t=w();s(0,"button",23)(1,"mat-icon"),l(2,"more_vert"),r()(),s(3,"mat-menu",null,0)(5,"button",24),b("click",function(){h(t);let n=m().$implicit,o=m();return _(o.addHabit(n.id))}),s(6,"mat-icon"),l(7,"add"),r(),l(8," Add habit "),r(),s(9,"button",24),b("click",function(){h(t);let n=m().$implicit,o=m();return _(o.editGroup(n))}),s(10,"mat-icon"),l(11,"edit"),r(),l(12," Edit group "),r(),s(13,"button",24),b("click",function(){h(t);let n=m().$implicit,o=m();return _(o.startReorder(n.id))}),s(14,"mat-icon"),l(15,"drag_indicator"),r(),l(16," Reorder "),r(),g(17,Ka,4,0,"button",25),r()}if(a&2){let t=Z(4),e=m().$implicit,n=m();u("matMenuTriggerFor",t),d(17),f(e.id!==n.othersGroupId?17:-1)}}function Xa(a,i){a&1&&(s(0,"p",19),l(1,"No habits yet. Click + to add one."),r())}function Ua(a,i){a&1&&(s(0,"mat-icon",26),l(1,"drag_indicator"),r())}function Ja(a,i){if(a&1&&(s(0,"span",30),l(1),r()),a&2){let t=m().$implicit;d(),v(t.emoji)}}function ti(a,i){if(a&1&&(s(0,"span",36),l(1),r()),a&2){let t=m().$implicit,e=m(2);d(),v(e.scoreEmojiForDate(t.id,e.today()))}}function ei(a,i){if(a&1){let t=w();s(0,"button",39),b("click",function(){let n=h(t).$implicit,o=m().$implicit,p=m(2);return _(p.toggleHabitCompletion(o,n))}),l(1),r()}if(a&2){let t=i.$implicit,e=m().$implicit,n=m(2);x("day-chip-checked",n.habits.isCompleted(e.id,t))("day-chip-scored",e.withCompletionScore&&!n.habits.isCompleted(e.id,t)),u("title",n.dayLabel(t)),d(),v(n.dayInitial(t))}}function ni(a,i){if(a&1){let t=w();s(0,"div",21),g(1,Ua,2,0,"mat-icon",26),s(2,"mat-checkbox",27),b("change",function(){let n=h(t).$implicit,o=m(2);return _(o.toggleHabitCompletion(n,o.today()))}),r(),s(3,"div",28)(4,"div",29),g(5,Ja,2,1,"span",30),s(6,"span",31),l(7),r()(),s(8,"div",32)(9,"span",33),l(10),r(),s(11,"span",34),l(12),r(),s(13,"span",35),l(14),r(),g(15,ti,2,1,"span",36),r()(),s(16,"div",37),M(17,ei,2,6,"button",38,Et),s(19,"button",23)(20,"mat-icon"),l(21,"more_vert"),r()(),s(22,"mat-menu",null,1)(24,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.editHabit(n))}),s(25,"mat-icon"),l(26,"edit"),r(),l(27," Edit "),r(),s(28,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.archiveHabit(n))}),s(29,"mat-icon"),l(30,"archive"),r(),l(31," Archive "),r(),s(32,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.deleteHabit(n))}),s(33,"mat-icon"),l(34,"delete"),r(),l(35," Delete "),r()()()()}if(a&2){let t=i.$implicit,e=Z(23),n=m().$implicit,o=m();u("cdkDragDisabled",o.reorderingGroupId()!==n.id),d(),f(o.reorderingGroupId()===n.id?1:-1),d(),u("checked",o.habits.isCompleted(t.id,o.today())),d(3),f(t.emoji?5:-1),d(),u("title",t.name),d(),v(t.name),d(3),ye(" (",t.basePoints,"pts) ",o.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),u("title","Streak: "+o.habits.getSticks(t.id)+"/7 (+"+o.habits.getSticks(t.id)*10+"%)"),d(),D("\u{1F525} ",o.habits.getSticks(t.id)),d(),x("mastery-low",o.masteryPercent(t)<50)("mastery-mid",o.masteryPercent(t)>=50&&o.masteryPercent(t)<80)("mastery-high",o.masteryPercent(t)>=80),u("title","Mastery: "+o.masteryPercent(t)+"%"),d(),D("",o.masteryPercent(t),"%"),d(),f(o.scoreEmojiForDate(t.id,o.today())?15:-1),d(2),T(o.last7Days()),d(2),u("matMenuTriggerFor",e)}}function ai(a,i){if(a&1){let t=w();s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),l(4),r(),s(5,"span",17),b("click",function(n){return n.stopPropagation()}),g(6,Za,2,0,"button",18)(7,Ya,18,2),r()()(),g(8,Xa,2,0,"p",19),s(9,"div",20),b("cdkDropListDropped",function(n){let o=h(t).$implicit,p=m();return _(p.onDrop(n,o.id))}),M(10,ni,36,21,"div",21,st),r()()}if(a&2){let t=i.$implicit,e=m();d(4),v(t.name),d(2),f(e.reorderingGroupId()===t.id?6:7),d(2),f(e.habitsForGroup(t.id).length===0?8:-1),d(2),T(e.habitsForGroup(t.id))}}function ii(a,i){a&1&&(s(0,"p",19),l(1,"No habits in this group."),r())}function oi(a,i){if(a&1&&(s(0,"span",30),l(1),r()),a&2){let t=m().$implicit;d(),v(t.emoji)}}function ri(a,i){if(a&1&&(s(0,"span",36),l(1),r()),a&2){let t=m().$implicit,e=m(2);d(),v(e.scoreEmojiForDate(t.id,e.yesterday()))}}function si(a,i){if(a&1){let t=w();s(0,"div",40)(1,"mat-checkbox",27),b("change",function(){let n=h(t).$implicit,o=m(2);return _(o.toggleHabitCompletion(n,o.yesterday()))}),r(),s(2,"div",28)(3,"div",29),g(4,oi,2,1,"span",30),s(5,"span",31),l(6),r()(),s(7,"div",32)(8,"span",33),l(9),r(),s(10,"span",34),l(11),r(),s(12,"span",35),l(13),r(),g(14,ri,2,1,"span",36),r()(),s(15,"div",37)(16,"button",23)(17,"mat-icon"),l(18,"more_vert"),r()(),s(19,"mat-menu",null,2)(21,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.editHabit(n))}),s(22,"mat-icon"),l(23,"edit"),r(),l(24," Edit "),r(),s(25,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.archiveHabit(n))}),s(26,"mat-icon"),l(27,"archive"),r(),l(28," Archive "),r(),s(29,"button",24),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.deleteHabit(n))}),s(30,"mat-icon"),l(31,"delete"),r(),l(32," Delete "),r()()()()}if(a&2){let t=i.$implicit,e=Z(20),n=m(2);d(),u("checked",n.habits.isCompleted(t.id,n.yesterday())),d(3),f(t.emoji?4:-1),d(),u("title",t.name),d(),v(t.name),d(3),ye(" (",t.basePoints,"pts) ",n.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),u("title","Streak: "+n.habits.getSticks(t.id)+"/7 (+"+n.habits.getSticks(t.id)*10+"%)"),d(),D("\u{1F525} ",n.habits.getSticks(t.id)),d(),x("mastery-low",n.masteryPercent(t)<50)("mastery-mid",n.masteryPercent(t)>=50&&n.masteryPercent(t)<80)("mastery-high",n.masteryPercent(t)>=80),u("title","Mastery: "+n.masteryPercent(t)+"%"),d(),D("",n.masteryPercent(t),"%"),d(),f(n.scoreEmojiForDate(t.id,n.yesterday())?14:-1),d(2),u("matMenuTriggerFor",e)}}function li(a,i){if(a&1&&(s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),l(4),r()()(),g(5,ii,2,0,"p",19),M(6,si,33,19,"div",40,st),r()),a&2){let t=i.$implicit,e=m();d(4),v(t.name),d(),f(e.habitsForGroup(t.id).length===0?5:-1),d(),T(e.habitsForGroup(t.id))}}function di(a,i){if(a&1&&l(0),a&2){let t=m();D("Mastered (",t.habits.masteredHabits().length,")")}}function ci(a,i){a&1&&(s(0,"p",13),l(1,"No mastered habits yet. Keep going!"),r())}function mi(a,i){if(a&1&&(s(0,"span",42),l(1),r()),a&2){let t=m().$implicit;d(),v(t.emoji)}}function pi(a,i){if(a&1){let t=w();s(0,"button",50),b("click",function(){h(t);let n=m().$implicit,o=m(2);return _(o.claimMastery(n))}),s(1,"mat-icon"),l(2,"redeem"),r(),l(3),Gt(4,"number"),r()}if(a&2){let t=m().$implicit;d(3),D(" Claim ",zt(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function bi(a,i){a&1&&(s(0,"span",49),l(1,"Reward claimed"),r())}function ui(a,i){if(a&1){let t=w();s(0,"mat-card")(1,"mat-card-content",41)(2,"div",32),g(3,mi,2,1,"span",42),s(4,"div",43)(5,"div",44),l(6),r(),s(7,"div",45),l(8),r()(),s(9,"mat-icon",46),l(10,"emoji_events"),r()(),s(11,"div",47),g(12,pi,5,4,"button",48)(13,bi,2,0,"span",49),s(14,"button",22),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.unmaster(n))}),s(15,"mat-icon"),l(16,"undo"),r(),l(17," Un-master "),r(),s(18,"button",22),b("click",function(){let n=h(t).$implicit,o=m(2);return _(o.archiveHabit(n))}),s(19,"mat-icon"),l(20,"archive"),r(),l(21," Archive "),r()()()()}if(a&2){let t=i.$implicit;d(3),f(t.emoji?3:-1),d(3),v(t.name),d(2),xe("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),d(4),f(t.masteryRewardClaimed?13:12)}}function hi(a,i){if(a&1&&(s(0,"div",14),M(1,ui,22,5,"mat-card",null,st),r()),a&2){let t=m();d(),T(t.habits.masteredHabits())}}function _i(a,i){if(a&1&&l(0),a&2){let t=m();D("Archive (",t.habits.archivedHabits().length,")")}}function gi(a,i){a&1&&(s(0,"p",13),l(1,"No archived habits. Archive habits to reduce clutter or plan ahead."),r())}function fi(a,i){if(a&1&&(s(0,"span",30),l(1),r()),a&2){let t=m().$implicit;d(),v(t.emoji)}}function vi(a,i){a&1&&(s(0,"mat-icon",51),l(1,"emoji_events"),r())}function xi(a,i){if(a&1){let t=w();s(0,"div",40)(1,"div",28)(2,"div",29),g(3,fi,2,1,"span",30),s(4,"span",31),l(5),r()(),s(6,"div",32)(7,"span",33),l(8),r(),g(9,vi,2,0,"mat-icon",51),r()(),s(10,"div",37)(11,"button",23)(12,"mat-icon"),l(13,"more_vert"),r()(),s(14,"mat-menu",null,3)(16,"button",24),b("click",function(){let n=h(t).$implicit,o=m(3);return _(o.unarchiveHabit(n))}),s(17,"mat-icon"),l(18,"unarchive"),r(),l(19," Unarchive "),r(),s(20,"button",24),b("click",function(){let n=h(t).$implicit,o=m(3);return _(o.editHabit(n))}),s(21,"mat-icon"),l(22,"edit"),r(),l(23," Edit "),r(),s(24,"button",24),b("click",function(){let n=h(t).$implicit,o=m(3);return _(o.deleteHabit(n))}),s(25,"mat-icon"),l(26,"delete"),r(),l(27," Delete "),r()()()()}if(a&2){let t=i.$implicit,e=Z(15);d(3),f(t.emoji?3:-1),d(),u("title",t.name),d(),v(t.name),d(3),xe(" (",t.basePoints,"pts) ",t.frequency,"\xD7/wk "),d(),f(t.isMastered?9:-1),d(2),u("matMenuTriggerFor",e)}}function yi(a,i){if(a&1&&(s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),l(4),r()()(),M(5,xi,28,7,"div",40,st),r()),a&2){let t=i.$implicit,e=m(2);d(4),v(t.name),d(),T(e.archivedHabitsForGroup(t.id))}}function Ci(a,i){if(a&1&&(s(0,"mat-accordion",7),M(1,yi,7,1,"mat-expansion-panel",8,st),r()),a&2){let t=m();u("multi",!0),d(),T(t.sortedGroupsForArchive())}}var Kn=class a{habits=c(pe);dialog=c(le);othersGroupId=me;reorderingGroupId=at(null);last7Days=rt(()=>ce(new Date,7));today=rt(()=>ce(new Date,1)[0]);yesterday=rt(()=>ce(new Date,2)[0]);sortedGroups=rt(()=>{let i=this.habits.groups();return[...i.filter(t=>t.id!==me),...i.filter(t=>t.id===me)]});sortedGroupsForArchive=rt(()=>this.sortedGroups().filter(i=>(this.habits.archivedHabitsByGroup()[i.id]??[]).length>0));dayLabel(i){let t=new Date(i+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(i){return new Date(i+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(i){return this.habits.habitsByGroup()[i]??[]}archivedHabitsForGroup(i){return this.habits.archivedHabitsByGroup()[i]??[]}masteryPercent(i){return this.habits.getMasteryProgress(i).percent}scoreEmojiForDate(i,t){let e=this.habits.getCompletion(i,t);return e?.completionScore?Dn(e.completionScore):null}toggleHabitCompletion(i,t){if(this.habits.isCompleted(i.id,t)){this.habits.toggleCompletion(i.id,t);return}if(!i.withCompletionScore){this.habits.toggleCompletion(i.id,t);return}this.dialog.open(ge,{width:"480px"}).afterClosed().subscribe(e=>{e!==void 0&&this.habits.completeWithScore(i.id,t,e)})}totalHabitPoints(i){return this.habits.completions().filter(t=>t.habitId===i).reduce((t,e)=>t+e.pointsEarned,0)}startReorder(i){this.reorderingGroupId.set(i)}stopReorder(){this.reorderingGroupId.set(null)}onDrop(i,t){if(i.previousIndex===i.currentIndex)return;let e=[...this.habitsForGroup(t)];mn(e,i.previousIndex,i.currentIndex),this.habits.reorder(t,e.map(n=>n.id))}addGroup(){this.dialog.open(Ht,{data:null,width:"380px"}).afterClosed().subscribe(i=>{i&&this.habits.addGroup(i.name)})}editGroup(i){this.dialog.open(Ht,{data:i,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(i.id,t.name)})}deleteGroup(i){this.dialog.open(Mt,{data:{message:`Delete group "${i.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(i.id)})}addHabit(i){this.dialog.open(Tt,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:i},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(i){this.dialog.open(Tt,{data:{habit:i,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(i.id,t)})}deleteHabit(i){let t=this.totalHabitPoints(i.id);if(t===0){this.dialog.open(Mt,{data:{message:`Delete "${i.name}"?`}}).afterClosed().subscribe(e=>{e&&this.habits.deleteHabit(i.id,!0)});return}this.dialog.open(he,{data:{habitName:i.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(e=>{e&&this.habits.deleteHabit(i.id,e==="keep-points")})}archiveHabit(i){this.habits.archiveHabit(i.id)}unarchiveHabit(i){this.habits.unarchiveHabit(i.id)}addHabitToArchive(){this.dialog.open(Tt,{data:{habit:null,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(i=>{i&&this.habits.addHabit(i,!0)})}claimMastery(i){this.dialog.open(_e,{data:{habitName:i.name,defaultPoints:i.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(i.id,t)})}unmaster(i){this.dialog.open(Mt,{data:{message:`Move "${i.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(i.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habits-page"]],decls:30,vars:4,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],["habitMenuY","matMenu"],["habitMenuA","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Today"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["label","Yesterday"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-button",""],[1,"text-sm","text-gray-400","py-2"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",1,"habit-row",3,"cdkDragDisabled"],["mat-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],["cdkDragHandle","",1,"drag-handle"],[1,"shrink-0",3,"change","checked"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","title"],[1,"day-chip",3,"click","title"],[1,"habit-row"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-flat-button","",3,"click"],[1,"trophy-icon",2,"font-size","14px","width","14px","height","14px"]],template:function(t,e){t&1&&(s(0,"div",4)(1,"mat-tab-group")(2,"mat-tab",5)(3,"div",6)(4,"mat-accordion",7),M(5,ai,12,3,"mat-expansion-panel",8,st),r(),s(7,"button",9),b("click",function(){return e.addGroup()}),s(8,"mat-icon"),l(9,"add"),r(),l(10," Add Group "),r()()(),s(11,"mat-tab",10)(12,"div",6)(13,"mat-accordion",7),M(14,li,8,2,"mat-expansion-panel",8,st),r()()(),s(16,"mat-tab"),q(17,di,1,1,"ng-template",11),s(18,"div",12),g(19,ci,2,0,"p",13)(20,hi,3,0,"div",14),r()(),s(21,"mat-tab"),q(22,_i,1,1,"ng-template",11),s(23,"div",6)(24,"button",9),b("click",function(){return e.addHabitToArchive()}),s(25,"mat-icon"),l(26,"add"),r(),l(27," Add Habit to Archive "),r(),g(28,gi,2,0,"p",13)(29,Ci,3,1,"mat-accordion",7),r()()()()),t&2&&(d(4),u("multi",!0),d(),T(e.sortedGroups()),d(8),u("multi",!0),d(),T(e.sortedGroups()),d(5),f(e.habits.masteredHabits().length===0?19:20),d(9),f(e.habits.archivedHabits().length===0?28:29))},dependencies:[N,L,rn,Tn,Mn,re,oe,Rn,Fn,Pe,Se,Hn,Ln,An,Bn,fn,_n,hn,gn,Qn,Le,Ne,$n,un,bn,pn,$t],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.drag-handle[_ngcontent-%COMP%]{cursor:grab;color:#bdbdbd;font-size:20px;width:20px;height:20px;flex-shrink:0}.drag-handle[_ngcontent-%COMP%]:active{cursor:grabbing}.cdk-drag-preview[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:6px 0;background:#fff;border-radius:4px;box-shadow:0 4px 12px #00000026;min-height:52px;width:100%}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .2s cubic-bezier(0,0,.2,1)}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{Kn as HabitsPage};
