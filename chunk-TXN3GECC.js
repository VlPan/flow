import{a as En,c as ce,d as me,e as pe}from"./chunk-JE6N244W.js";import{a as Pn,b as Sn}from"./chunk-SSK7R3WM.js";import{a as xn}from"./chunk-LSE2CCY6.js";import{a as Tn,b as wn,c as Mn}from"./chunk-DFYNLTBJ.js";import{a as mn,b as pn,c as bn,d as un,e as hn,f as _n,g as gn,h as fn,i as Cn,j as kn}from"./chunk-ATMUUIH2.js";import{c as tn}from"./chunk-Q2NWI5KD.js";import"./chunk-BWET5UJM.js";import"./chunk-SGI5HU6R.js";import{c as vn}from"./chunk-6BBMJZF6.js";import{a as Dn,b as In}from"./chunk-RGO2GZUN.js";import{b as en}from"./chunk-DGNO66F2.js";import"./chunk-RBPCYVGQ.js";import{a as wt}from"./chunk-L7OOKBT5.js";import"./chunk-CSVHBIOA.js";import"./chunk-4IEYPEKM.js";import"./chunk-K66EXUFO.js";import{c as yn,d as xt,e as le,j as yt,k as Ct,m as kt,n as Tt}from"./chunk-6AN2EZU4.js";import{b as ft,d as B,f as vt,g as Yt,i as nn,j as Xt,k as Ut,l as Jt,m as te,n as an,o as ee,p as ne,q as ae,r as on,s as ie}from"./chunk-S762TZKJ.js";import{a as V,b as Y,c as de,e as O,f as j,g as X,h as G}from"./chunk-J37SJYFY.js";import{a as rn,b as L,c as N}from"./chunk-F7WSVH7L.js";import{b as sn,c as dn,h as se,j as ln,k as St,l as cn}from"./chunk-RBNKSUD7.js";import{d as oe,e as re}from"./chunk-W4PDV4PV.js";import"./chunk-AKBMF7DS.js";import{B as Te,C as Ue,D as Qt,G as Je,N as Wt,P as qt,Q as Zt,ea as we,fa as Kt,ga as Me,h as $t,ha as gt,o as ke,t as _t}from"./chunk-RX5ESBOA.js";import{$b as it,A as lt,Ab as Ye,Ac as zt,B as tt,Bb as P,Ca as At,Cb as g,Da as mt,Db as f,F as ze,Fa as $,Fb as Et,G as $e,Ga as Bt,Gb as w,Gc as rt,Hb as M,Ib as u,Ic as Ce,Jb as s,Kb as r,Lb as A,Mb as Pt,Nb as Vt,Ob as Xe,Pc as ut,R as Qe,Sb as T,T as et,Tc as I,U as We,Uc as ht,V as Dt,Wb as b,Yb as m,Zb as Q,_a as l,_b as F,a as z,ac as ot,bc as C,c as Oe,ca as ct,cc as k,db as Lt,e as dt,ea as R,eb as pt,ga as c,gb as It,gc as Z,hc as Ot,ic as x,jb as Nt,k as Rt,kc as jt,la as h,lc as d,m as je,ma as _,mc as v,na as qe,nb as y,nc as D,ob as bt,oc as xe,pa as ve,pb as H,pc as ye,qa as Ze,sb as W,ta as E,tb as q,ua as nt,ub as Ke,vc as K,y as Ge,ya as at,zc as Gt}from"./chunk-4P2YP4S6.js";import"./chunk-Q7L6LLAK.js";var Un=["body"],Jn=["bodyWrapper"],ta=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ea=["mat-expansion-panel-header","*","mat-action-row"];function na(a,o){}var aa=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ia=["mat-panel-title","mat-panel-description","*"];function oa(a,o){a&1&&(Pt(0,"span",1),qe(),Pt(1,"svg",2),Xe(2,"path",3),Vt()())}var De=new R("MAT_ACCORDION"),Hn=new R("MAT_EXPANSION_PANEL"),ra=(()=>{class a{_template=c(pt);_expansionPanel=c(Hn,{optional:!0});constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),Fn=new R("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Pe=(()=>{class a extends wn{_viewContainerRef=c(Nt);_animationsDisabled=_t();_document=c(Ze);_ngZone=c(nt);_elementRef=c($);_renderer=c(It);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new E;afterCollapse=new E;_inputChanges=new dt;accordion=c(De,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Zt).getId("mat-expansion-panel-header-");constructor(){super();let t=c(Fn,{optional:!0});this._expansionDispatcher=c(en),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(et(null),tt(()=>this.expanded&&!this._portal),$e(1)).subscribe(()=>{this._portal=new se(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:e})=>{t===this._bodyWrapper?.nativeElement&&e==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this._transitionEndListener),t.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,i){if(e&1&&it(i,ra,5),e&2){let p;C(p=k())&&(n._lazyContent=p.first)}},viewQuery:function(e,n){if(e&1&&ot(Un,5)(Jn,5),e&2){let i;C(i=k())&&(n._body=i.first),C(i=k())&&(n._bodyWrapper=i.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[K([{provide:De,useValue:void 0},{provide:Hn,useExisting:a}]),W,At],ngContentSelectors:ea,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){e&1&&(Q(ta),F(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),F(6,1),q(7,na,0,0,"ng-template",5),r(),F(8,2),r()()),e&2&&(l(),P("inert",n.expanded?null:""),l(2),u("id",n.id),P("aria-labelledby",n._headerId),l(4),u("cdkPortalOutlet",n._portal))},dependencies:[St],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return a})();var Se=(()=>{class a{panel=c(Pe,{host:!0});_element=c($);_focusMonitor=c(Te);_changeDetectorRef=c(ut);_parentChangeSubscription=z.EMPTY;constructor(){c(Qt).load(Kt);let t=this.panel,e=c(Fn,{optional:!0}),n=c(new Ce("tabindex"),{optional:!0}),i=t.accordion?t.accordion._stateChanges.pipe(tt(p=>!!(p.hideToggle||p.togglePosition))):Rt;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=lt(t.opened,t.closed,i,t._inputChanges.pipe(tt(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(tt(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),e&&(this.expandedHeight=e.expandedHeight,this.collapsedHeight=e.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Wt(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,e){t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(e,n){e&1&&b("click",function(){return n._toggle()})("keydown",function(p){return n._keydown(p)}),e&2&&(P("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),Ot("height",n._getHeaderHeight()),x("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:ht(t)]},ngContentSelectors:ia,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(e,n){e&1&&(Q(aa),Pt(0,"span",0),F(1),F(2,1),F(3,2),Vt(),g(4,oa,3,0,"span",1)),e&2&&(x("mat-content-hide-toggle",!n._showToggle()),l(4),f(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return a})();var Rn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),An=(()=>{class a extends Tn{_keyManager;_ownHeaders=new Bt;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(et(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new qt(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["mat-accordion"]],contentQueries:function(e,n,i){if(e&1&&it(i,Se,5),e&2){let p;C(p=k())&&(n._headers=p)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,n){e&2&&x("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",I],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[K([{provide:De,useExisting:a}]),W]})}return a})(),Bn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[Mn,cn,gt]})}return a})();var da=["*"];var la=new R("MAT_CARD_CONFIG"),Ln=(()=>{class a{appearance;constructor(){let t=c(la,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,n){e&2&&x("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:da,decls:1,vars:0,template:function(e,n){e&1&&(Q(),F(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return a})();var Nn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var Vn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[gt]})}return a})();var Be=["*"];function ma(a,o){a&1&&F(0)}var pa=["tabListContainer"],ba=["tabList"],ua=["tabListInner"],ha=["nextPaginator"],_a=["previousPaginator"],ga=["content"];function fa(a,o){}var va=["tabBodyWrapper"],xa=["tabHeader"];function ya(a,o){}function Ca(a,o){if(a&1&&q(0,ya,0,0,"ng-template",12),a&2){let t=m().$implicit;u("cdkPortalOutlet",t.templateLabel)}}function ka(a,o){if(a&1&&d(0),a&2){let t=m().$implicit;v(t.textLabel)}}function Ta(a,o){if(a&1){let t=T();s(0,"div",7,2),b("click",function(){let n=h(t),i=n.$implicit,p=n.$index,S=m(),J=Z(1);return _(S._handleClick(i,J,p))})("cdkFocusChange",function(n){let i=h(t).$index,p=m();return _(p._tabFocusChanged(n,i))}),A(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),g(6,Ca,1,1,null,12)(7,ka,1,1),r()()()}if(a&2){let t=o.$implicit,e=o.$index,n=Z(1),i=m();jt(t.labelClass),x("mdc-tab--active",i.selectedIndex===e),u("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),P("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),l(3),u("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),l(3),f(t.templateLabel?6:7)}}function wa(a,o){a&1&&F(0)}function Ma(a,o){if(a&1){let t=T();s(0,"mat-tab-body",13),b("_onCentered",function(){h(t);let n=m();return _(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){h(t);let i=m();return _(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){h(t);let i=m();return _(i._bodyCentered(n))}),r()}if(a&2){let t=o.$implicit,e=o.$index,n=m();jt(t.bodyClass),u("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),P("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Da=new R("MatTabContent"),Ia=(()=>{class a{template=c(pt);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["","matTabContent",""]],features:[K([{provide:Da,useExisting:a}])]})}return a})(),Ea=new R("MatTabLabel"),zn=new R("MAT_TAB"),Le=(()=>{class a extends ln{_closestTab=c(zn,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[K([{provide:Ea,useExisting:a}]),W]})}return a})(),$n=new R("MAT_TAB_GROUP"),Ne=(()=>{class a{_viewContainerRef=c(Nt);_closestTabGroup=c($n,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new dt;position=null;origin=null;isActive=!1;constructor(){c(Qt).load(Kt)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new se(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&it(i,Le,5)(i,Ia,7,pt),e&2){let p;C(p=k())&&(n.templateLabel=p.first),C(p=k())&&(n._explicitContent=p.first)}},viewQuery:function(e,n){if(e&1&&ot(pt,7),e&2){let i;C(i=k())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&P("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[K([{provide:zn,useExisting:a}]),At],ngContentSelectors:Be,decls:1,vars:0,template:function(e,n){e&1&&(Q(),Ke(0,ma,1,0,"ng-template"))},encapsulation:2})}return a})(),He="mdc-tab-indicator--active",On="mdc-tab-indicator--no-transition",Fe=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let t=this._items.find(n=>n.elementRef.nativeElement===o),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Pa=(()=>{class a{_elementRef=c($);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(He);return}let n=e.getBoundingClientRect(),i=t.width/n.width,p=t.left-n.left;e.classList.add(On),this._inkBarContentElement.style.setProperty("transform",`translateX(${p}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(On),e.classList.add(He),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(He)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return a})();var Qn=(()=>{class a extends Pa{elementRef=c($);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275dir=H({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(P("aria-disabled",!!n.disabled),x("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[W]})}return a})(),jn={passive:!0},Sa=650,Ha=100,Fa=(()=>{class a{_elementRef=c($);_changeDetectorRef=c(ut);_viewportRuler=c(dn);_dir=c(Me,{optional:!0});_ngZone=c(nt);_platform=c(ke);_sharedResizeObserver=c(yn);_injector=c(ve);_renderer=c(It);_animationsDisabled=_t();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new dt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new dt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new E;indexFocused=new E;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),jn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),jn))}ngAfterContentInit(){let t=this._dir?this._dir.change:je("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ze(32),Dt(this._destroyed)),n=this._viewportRuler.change(150).pipe(Dt(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Lt(i,{injector:this._injector}),lt(t,n,e,this._items.changes,this._itemsResized()).pipe(Dt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(p=>{this.indexFocused.emit(p),this._setTabFocus(p)})}_itemsResized(){return typeof ResizeObserver!="function"?Rt:this._items.changes.pipe(et(this._items),We(t=>new Oe(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Qe(1),tt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Wt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:p}=e.elementRef.nativeElement,S,J;this._getLayoutDirection()=="ltr"?(S=i,J=S+p):(J=this._tabListInner.nativeElement.offsetWidth-i,S=J-p);let fe=this.scrollDistance,Ve=this.scrollDistance+n;S<fe?this.scrollDistance-=fe-S:J>Ve&&(this.scrollDistance+=Math.min(J-Ve,S-fe))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ge(Sa,Ha).pipe(Dt(lt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",ht]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),Ra=(()=>{class a extends Fa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Fe(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(a)))(n||a)}})();static \u0275cmp=y({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&it(i,Qn,4),e&2){let p;C(p=k())&&(n._items=p)}},viewQuery:function(e,n){if(e&1&&ot(pa,7)(ba,7)(ua,7)(ha,5)(_a,5),e&2){let i;C(i=k())&&(n._tabListContainer=i.first),C(i=k())&&(n._tabList=i.first),C(i=k())&&(n._tabListInner=i.first),C(i=k())&&(n._nextPaginator=i.first),C(i=k())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[W],ngContentSelectors:Be,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(Q(),s(0,"div",5,0),b("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(p){return n._handlePaginatorPress("before",p)})("touchend",function(){return n._stopInterval()}),A(2,"div",6),r(),s(3,"div",7,1),b("keydown",function(p){return n._handleKeydown(p)}),s(5,"div",8,2),b("cdkObserveContent",function(){return n._onContentChanges()}),s(7,"div",9,3),F(9),r()()(),s(10,"div",10,4),b("mousedown",function(p){return n._handlePaginatorPress("after",p)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),A(12,"div",6),r()),e&2&&(x("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),u("matRippleDisabled",n._disableScrollBefore||n.disableRipple),l(3),x("_mat-animation-noopable",n._animationsDisabled),l(2),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),l(5),x("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),u("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[we,Je],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),Aa=new R("MAT_TABS_CONFIG"),Gn=(()=>{class a extends St{_host=c(Re);_ngZone=c(nt);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(et(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=H({type:a,selectors:[["","matTabBodyHost",""]],features:[W]})}return a})(),Re=(()=>{class a{_elementRef=c($);_dir=c(Me,{optional:!0});_ngZone=c(nt);_injector=c(ve);_renderer=c(It);_diAnimationsDisabled=_t();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new E;_beforeCentering=new E;_afterLeavingCenter=new E;_onCentered=new E(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=c(ut);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Lt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Lt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&ot(Gn,5)(ga,5),e&2){let i;C(i=k())&&(n._portalHost=i.first),C(i=k())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&P("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(s(0,"div",1,0),q(2,fa,0,0,"ng-template",2),r()),e&2&&x("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Gn,sn],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),Wn=(()=>{class a{_elementRef=c($);_changeDetectorRef=c(ut);_ngZone=c(nt);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=_t();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Bt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new E;focusChange=new E;animationDone=new E;selectedTabChange=new E(!0);_groupId;_isServer=!c(ke).isBrowser;constructor(){let t=c(Aa,{optional:!0});this._groupId=c(Zt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(et(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Ae;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=lt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&it(i,Ne,5),e&2){let p;C(p=k())&&(n._allTabs=p)}},viewQuery:function(e,n){if(e&1&&ot(va,5)(xa,5)(Re,5),e&2){let i;C(i=k())&&(n._tabBodyWrapper=i.first),C(i=k())&&(n._tabHeader=i.first),C(i=k())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(P("mat-align-tabs",n.alignTabs),jt("mat-"+(n.color||"primary")),Ot("--mat-tab-animation-duration",n.animationDuration),x("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",ht],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ht],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[K([{provide:$n,useExisting:a}])],ngContentSelectors:Be,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(Q(),s(0,"mat-tab-header",3,0),b("indexFocused",function(p){return n._focusChanged(p)})("selectFocusedIndex",function(p){return n.selectedIndex=p}),w(2,Ta,8,17,"div",4,Et),r(),g(4,wa,1,0),s(5,"div",5,1),w(7,Ma,1,10,"mat-tab-body",6,Et),r()),e&2&&(u("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Ye("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),l(2),M(n._tabs),l(2),f(n._isServer?4:-1),l(),x("_mat-animation-noopable",n._animationsDisabled()),l(2),M(n._tabs))},dependencies:[Ra,Qn,Ue,we,St,Re],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),Ae=class{index;tab};var qn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=bt({type:a});static \u0275inj=ct({imports:[gt]})}return a})();function La(a,o){a&1&&(s(0,"mat-error"),d(1,"Name is required"),r())}var Ht=class a{fb=c(ae);dialogRef=c(V);data=c(Y);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",B.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"h2",0),d(1),r(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),d(6,"Group name"),r(),A(7,"input",3),g(8,La,2,0,"mat-error"),r()()(),s(9,"mat-dialog-actions",4)(10,"button",5),b("click",function(){return e.cancel()}),d(11,"Cancel"),r(),s(12,"button",6),b("click",function(){return e.save()}),d(13),r()()),t&2){let n;l(),v(e.isEditMode?"Edit Group":"Add Group"),l(2),u("formGroup",e.form),l(5),f((n=e.form.get("name"))!=null&&n.invalid&&((n=e.form.get("name"))!=null&&n.touched)?8:-1),l(4),u("disabled",e.form.invalid),l(),D(" ",e.isEditMode?"Save":"Add"," ")}},dependencies:[ie,Xt,ft,vt,Yt,ne,te,Jt,G,O,X,j,Ct,yt,xt,le,Tt,kt,N,L],encapsulation:2})};var Va=(a,o)=>o.id;function Oa(a,o){a&1&&(s(0,"mat-error"),d(1,"Name is required"),r())}function ja(a,o){if(a&1&&(s(0,"mat-option",6),d(1),r()),a&2){let t=o.$implicit;u("value",t.id),l(),v(t.name)}}function Ga(a,o){a&1&&(s(0,"mat-error"),d(1,"Must be at least 1"),r())}function za(a,o){a&1&&(s(0,"mat-error"),d(1,"Enter a value between 1 and 7"),r())}function $a(a,o){a&1&&(s(0,"mat-error"),d(1,"Must be at least 1"),r())}function Qa(a,o){if(a&1){let t=T();s(0,"button",16),b("click",function(){h(t);let n=m();return _(n.resetProgress())}),s(1,"mat-icon"),d(2,"restart_alt"),r(),d(3," Reset Progress "),r()}}var Mt=class a{fb=c(ae);dialogRef=c(V);matDialog=c(de);habitsService=c(pe);data=c(Y);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",B.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",B.required],basePoints:[this.data.habit?.basePoints??10,[B.required,B.min(1)]],frequency:[this.data.habit?.frequency??3,[B.required,B.min(1),B.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[B.required,B.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let o=this.form.getRawValue();this.dialogRef.close({name:o.name,emoji:o.emoji||void 0,groupId:o.groupId,basePoints:o.basePoints,frequency:o.frequency,masteryRewardPoints:o.masteryRewardPoints,withCompletionScore:o.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}resetProgress(){this.matDialog.open(wt,{data:{message:`Reset all progress for "${this.data.habit.name}"? All completions will be deleted.`,confirmLabel:"Reset"}}).afterClosed().subscribe(o=>{o&&this.habitsService.resetProgress(this.data.habit.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habit-form"]],decls:43,vars:9,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","","color","warn",2,"margin-right","auto"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"],["mat-button","","color","warn",2,"margin-right","auto",3,"click"]],template:function(t,e){if(t&1&&(s(0,"h2",0),d(1),r(),s(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),d(6,"Name"),r(),A(7,"input",3),g(8,Oa,2,0,"mat-error"),r(),s(9,"mat-form-field",2)(10,"mat-label"),d(11,"Emoji (optional)"),r(),A(12,"input",4),r(),s(13,"mat-form-field",2)(14,"mat-label"),d(15,"Group"),r(),s(16,"mat-select",5),w(17,ja,2,2,"mat-option",6,Va),r()(),s(19,"mat-form-field",2)(20,"mat-label"),d(21,"Base points per completion"),r(),A(22,"input",7),g(23,Ga,2,0,"mat-error"),r(),s(24,"div",8)(25,"mat-slide-toggle",9),d(26," With completion score "),r()(),s(27,"mat-form-field",2)(28,"mat-label"),d(29,"Frequency (times per week, 1\u20137)"),r(),A(30,"input",10),g(31,za,2,0,"mat-error"),r(),s(32,"mat-form-field",2)(33,"mat-label"),d(34,"Mastery reward points"),r(),A(35,"input",11),g(36,$a,2,0,"mat-error"),r()()(),s(37,"mat-dialog-actions",12),g(38,Qa,4,0,"button",13),s(39,"button",14),b("click",function(){return e.cancel()}),d(40,"Cancel"),r(),s(41,"button",15),b("click",function(){return e.save()}),d(42),r()()),t&2){let n,i,p,S;l(),v(e.isEditMode?"Edit Habit":"Add Habit"),l(2),u("formGroup",e.form),l(5),f((n=e.form.get("name"))!=null&&n.invalid&&((n=e.form.get("name"))!=null&&n.touched)?8:-1),l(9),M(e.groups),l(6),f((i=e.form.get("basePoints"))!=null&&i.invalid&&((i=e.form.get("basePoints"))!=null&&i.touched)?23:-1),l(8),f((p=e.form.get("frequency"))!=null&&p.invalid&&((p=e.form.get("frequency"))!=null&&p.touched)?31:-1),l(5),f((S=e.form.get("masteryRewardPoints"))!=null&&S.invalid&&((S=e.form.get("masteryRewardPoints"))!=null&&S.touched)?36:-1),l(2),f(e.isEditMode?38:-1),l(3),u("disabled",e.form.invalid),l(),D(" ",e.isEditMode?"Save":"Add"," ")}},dependencies:[ie,Xt,ft,Ut,vt,Yt,ne,ee,an,te,Jt,G,O,X,j,Ct,yt,xt,le,Tt,kt,kn,Cn,tn,N,L,re,oe,Sn,Pn],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function Wa(a,o){if(a&1&&(s(0,"p"),d(1," This habit has earned "),s(2,"strong"),d(3),Gt(4,"number"),r(),d(5," in total. What would you like to do with them? "),r()),a&2){let t=m();l(3),D("",zt(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var he=class a{dialogRef=c(V);data=c(Y);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,e){t&1&&(s(0,"h2",0),d(1,"Delete Habit"),r(),s(2,"mat-dialog-content")(3,"p"),d(4," Delete "),s(5,"strong"),d(6),r(),d(7,"? "),r(),g(8,Wa,6,4,"p"),r(),s(9,"mat-dialog-actions",1)(10,"button",2),b("click",function(){return e.dialogRef.close()}),d(11,"Cancel"),r(),s(12,"button",2),b("click",function(){return e.dialogRef.close("keep-points")}),d(13,"Keep Points"),r(),s(14,"button",3),b("click",function(){return e.dialogRef.close("remove-points")}),d(15," Delete & Remove Points "),r()()),t&2&&(l(6),v(e.data.habitName),l(2),f(e.data.pointsEarned>0?8:-1))},dependencies:[G,O,X,j,N,L,$t],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var _e=class a{dialogRef=c(V);data=c(Y);amount=at(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,e){t&1&&(s(0,"h2",0),d(1,"\u{1F3C6} Habit Mastered!"),r(),s(2,"mat-dialog-content")(3,"p"),d(4," You've mastered "),s(5,"strong"),d(6),r(),d(7,". Claim your reward points: "),r(),s(8,"mat-form-field",1)(9,"mat-label"),d(10,"Reward points"),r(),s(11,"input",2),b("ngModelChange",function(i){return e.amount.set(+i)}),r()()(),s(12,"mat-dialog-actions",3)(13,"button",4),b("click",function(){return e.dialogRef.close()}),d(14,"Cancel"),r(),s(15,"button",5),b("click",function(){return e.confirm()}),d(16),r()()),t&2&&(l(6),v(e.data.habitName),l(5),u("ngModel",e.amount()),l(4),u("disabled",e.amount()<=0),l(),D(" Claim ",e.amount()," pts "))},dependencies:[on,ft,Ut,vt,ee,nn,G,O,X,j,Ct,yt,xt,Tt,kt,N,L],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var qa=(a,o)=>o.value;function Za(a,o){if(a&1){let t=T();s(0,"button",3),b("click",function(){let n=h(t).$implicit,i=m();return _(i.select(n.value))}),s(1,"span",4),d(2),r(),s(3,"span",5),d(4),r()()}if(a&2){let t=o.$implicit,e=m();x("selected",e.selected()===t.value),P("aria-label",t.label),l(2),v(t.emoji),l(2),v(t.label)}}var Ka=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],ge=class a{dialogRef=c(V);scores=Ka;selected=at(3);select(o){this.selected.set(o),this.confirm()}confirm(){this.dialogRef.close(this.selected())}onKey(o){let t=parseInt(o.key,10);t>=1&&t<=5?(this.selected.set(t),this.confirm()):o.key==="Enter"&&(o.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,e){t&1&&b("keydown",function(i){return e.onKey(i)})},decls:6,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,e){t&1&&(s(0,"h2",0),d(1,"Rate your Habit"),r(),s(2,"mat-dialog-content")(3,"div",1),w(4,Za,5,5,"button",2,qa),r()()),t&2&&(l(4),M(e.scores))},dependencies:[G,O,j],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var st=(a,o)=>o.id;function Ya(a,o){if(a&1){let t=T();s(0,"button",22),b("click",function(){h(t);let n=m(2);return _(n.stopReorder())}),d(1,"Done"),r()}}function Xa(a,o){if(a&1){let t=T();s(0,"button",24),b("click",function(){h(t);let n=m(2).$implicit,i=m();return _(i.deleteGroup(n))}),s(1,"mat-icon"),d(2,"delete"),r(),d(3," Delete group "),r()}}function Ua(a,o){if(a&1){let t=T();s(0,"button",23)(1,"mat-icon"),d(2,"more_vert"),r()(),s(3,"mat-menu",null,0)(5,"button",24),b("click",function(){h(t);let n=m().$implicit,i=m();return _(i.addHabit(n.id))}),s(6,"mat-icon"),d(7,"add"),r(),d(8," Add habit "),r(),s(9,"button",24),b("click",function(){h(t);let n=m().$implicit,i=m();return _(i.editGroup(n))}),s(10,"mat-icon"),d(11,"edit"),r(),d(12," Edit group "),r(),s(13,"button",24),b("click",function(){h(t);let n=m().$implicit,i=m();return _(i.startReorder(n.id))}),s(14,"mat-icon"),d(15,"drag_indicator"),r(),d(16," Reorder "),r(),g(17,Xa,4,0,"button",25),r()}if(a&2){let t=Z(4),e=m().$implicit,n=m();u("matMenuTriggerFor",t),l(17),f(e.id!==n.othersGroupId?17:-1)}}function Ja(a,o){a&1&&(s(0,"p",19),d(1,"No habits yet. Click + to add one."),r())}function ti(a,o){a&1&&(s(0,"mat-icon",26),d(1,"drag_indicator"),r())}function ei(a,o){if(a&1&&(s(0,"span",30),d(1),r()),a&2){let t=m().$implicit;l(),v(t.emoji)}}function ni(a,o){if(a&1&&(s(0,"span",36),d(1),r()),a&2){let t=m().$implicit,e=m(2);l(),v(e.scoreEmojiForDate(t.id,e.today()))}}function ai(a,o){if(a&1){let t=T();s(0,"button",39),b("click",function(){let n=h(t).$implicit,i=m().$implicit,p=m(2);return _(p.toggleHabitCompletion(i,n))}),d(1),r()}if(a&2){let t=o.$implicit,e=m().$implicit,n=m(2);x("day-chip-checked",n.habits.isCompleted(e.id,t))("day-chip-scored",e.withCompletionScore&&!n.habits.isCompleted(e.id,t))("day-chip-vacation",n.isVacationDay(t))("day-chip-simple-track",n.isSimpleTrackDay(t)),u("disabled",(n.isVacationDay(t)||n.isSimpleTrackDay(t))&&!n.habits.isCompleted(e.id,t))("title",n.isVacationDay(t)?"Vacation day":n.isSimpleTrackDay(t)?"Simple track day":n.dayLabel(t)),l(),v(n.dayInitial(t))}}function ii(a,o){if(a&1){let t=T();s(0,"div",21),g(1,ti,2,0,"mat-icon",26),s(2,"mat-checkbox",27),b("change",function(){let n=h(t).$implicit,i=m(2);return _(i.toggleHabitCompletion(n,i.today()))}),r(),s(3,"div",28)(4,"div",29),g(5,ei,2,1,"span",30),s(6,"span",31),d(7),r()(),s(8,"div",32)(9,"span",33),d(10),r(),s(11,"span",34),d(12),r(),s(13,"span",35),d(14),r(),g(15,ni,2,1,"span",36),r()(),s(16,"div",37),w(17,ai,2,11,"button",38,Et),s(19,"button",23)(20,"mat-icon"),d(21,"more_vert"),r()(),s(22,"mat-menu",null,1)(24,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.editHabit(n))}),s(25,"mat-icon"),d(26,"edit"),r(),d(27," Edit "),r(),s(28,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.archiveHabit(n))}),s(29,"mat-icon"),d(30,"archive"),r(),d(31," Archive "),r(),s(32,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.deleteHabit(n))}),s(33,"mat-icon"),d(34,"delete"),r(),d(35," Delete "),r()()()()}if(a&2){let t=o.$implicit,e=Z(23),n=m().$implicit,i=m();u("cdkDragDisabled",i.reorderingGroupId()!==n.id),l(),f(i.reorderingGroupId()===n.id?1:-1),l(),u("checked",i.habits.isCompleted(t.id,i.today()))("disabled",(i.isVacationDay(i.today())||i.isSimpleTrackDay(i.today()))&&!i.habits.isCompleted(t.id,i.today()))("title",i.isVacationDay(i.today())?"Vacation day \u2014 tracking disabled":i.isSimpleTrackDay(i.today())?"Simple track day \u2014 tracking disabled":""),l(3),f(t.emoji?5:-1),l(),u("title",t.name),l(),v(t.name),l(3),ye(" (",t.basePoints,"pts) ",i.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),l(),u("title","Streak: "+i.habits.getSticks(t.id)+"/7 (+"+i.habits.getSticks(t.id)*10+"%)"),l(),D("\u{1F525} ",i.habits.getSticks(t.id)),l(),x("mastery-low",i.masteryPercent(t)<50)("mastery-mid",i.masteryPercent(t)>=50&&i.masteryPercent(t)<80)("mastery-high",i.masteryPercent(t)>=80),u("title","Mastery: "+i.masteryPercent(t)+"%"),l(),D("",i.masteryPercent(t),"%"),l(),f(i.scoreEmojiForDate(t.id,i.today())?15:-1),l(2),M(i.last7Days()),l(2),u("matMenuTriggerFor",e)}}function oi(a,o){if(a&1){let t=T();s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),d(4),r(),s(5,"span",17),b("click",function(n){return n.stopPropagation()}),g(6,Ya,2,0,"button",18)(7,Ua,18,2),r()()(),g(8,Ja,2,0,"p",19),s(9,"div",20),b("cdkDropListDropped",function(n){let i=h(t).$implicit,p=m();return _(p.onDrop(n,i.id))}),w(10,ii,36,23,"div",21,st),r()()}if(a&2){let t=o.$implicit,e=m();l(4),v(t.name),l(2),f(e.reorderingGroupId()===t.id?6:7),l(2),f(e.habitsForGroup(t.id).length===0?8:-1),l(2),M(e.habitsForGroup(t.id))}}function ri(a,o){a&1&&(s(0,"p",19),d(1,"No habits in this group."),r())}function si(a,o){if(a&1&&(s(0,"span",30),d(1),r()),a&2){let t=m().$implicit;l(),v(t.emoji)}}function di(a,o){if(a&1&&(s(0,"span",36),d(1),r()),a&2){let t=m().$implicit,e=m(2);l(),v(e.scoreEmojiForDate(t.id,e.yesterday()))}}function li(a,o){if(a&1){let t=T();s(0,"div",40)(1,"mat-checkbox",27),b("change",function(){let n=h(t).$implicit,i=m(2);return _(i.toggleHabitCompletion(n,i.yesterday()))}),r(),s(2,"div",28)(3,"div",29),g(4,si,2,1,"span",30),s(5,"span",31),d(6),r()(),s(7,"div",32)(8,"span",33),d(9),r(),s(10,"span",34),d(11),r(),s(12,"span",35),d(13),r(),g(14,di,2,1,"span",36),r()(),s(15,"div",37)(16,"button",23)(17,"mat-icon"),d(18,"more_vert"),r()(),s(19,"mat-menu",null,2)(21,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.editHabit(n))}),s(22,"mat-icon"),d(23,"edit"),r(),d(24," Edit "),r(),s(25,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.archiveHabit(n))}),s(26,"mat-icon"),d(27,"archive"),r(),d(28," Archive "),r(),s(29,"button",24),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.deleteHabit(n))}),s(30,"mat-icon"),d(31,"delete"),r(),d(32," Delete "),r()()()()}if(a&2){let t=o.$implicit,e=Z(20),n=m(2);l(),u("checked",n.habits.isCompleted(t.id,n.yesterday()))("disabled",(n.isVacationDay(n.yesterday())||n.isSimpleTrackDay(n.yesterday()))&&!n.habits.isCompleted(t.id,n.yesterday()))("title",n.isVacationDay(n.yesterday())?"Vacation day \u2014 tracking disabled":n.isSimpleTrackDay(n.yesterday())?"Simple track day \u2014 tracking disabled":""),l(3),f(t.emoji?4:-1),l(),u("title",t.name),l(),v(t.name),l(3),ye(" (",t.basePoints,"pts) ",n.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),l(),u("title","Streak: "+n.habits.getSticks(t.id)+"/7 (+"+n.habits.getSticks(t.id)*10+"%)"),l(),D("\u{1F525} ",n.habits.getSticks(t.id)),l(),x("mastery-low",n.masteryPercent(t)<50)("mastery-mid",n.masteryPercent(t)>=50&&n.masteryPercent(t)<80)("mastery-high",n.masteryPercent(t)>=80),u("title","Mastery: "+n.masteryPercent(t)+"%"),l(),D("",n.masteryPercent(t),"%"),l(),f(n.scoreEmojiForDate(t.id,n.yesterday())?14:-1),l(2),u("matMenuTriggerFor",e)}}function ci(a,o){if(a&1&&(s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),d(4),r()()(),g(5,ri,2,0,"p",19),w(6,li,33,21,"div",40,st),r()),a&2){let t=o.$implicit,e=m();l(4),v(t.name),l(),f(e.habitsForGroup(t.id).length===0?5:-1),l(),M(e.habitsForGroup(t.id))}}function mi(a,o){if(a&1&&d(0),a&2){let t=m();D("Mastered (",t.habits.masteredHabits().length,")")}}function pi(a,o){a&1&&(s(0,"p",13),d(1,"No mastered habits yet. Keep going!"),r())}function bi(a,o){if(a&1&&(s(0,"span",42),d(1),r()),a&2){let t=m().$implicit;l(),v(t.emoji)}}function ui(a,o){if(a&1){let t=T();s(0,"button",50),b("click",function(){h(t);let n=m().$implicit,i=m(2);return _(i.claimMastery(n))}),s(1,"mat-icon"),d(2,"redeem"),r(),d(3),Gt(4,"number"),r()}if(a&2){let t=m().$implicit;l(3),D(" Claim ",zt(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function hi(a,o){a&1&&(s(0,"span",49),d(1,"Reward claimed"),r())}function _i(a,o){if(a&1){let t=T();s(0,"mat-card")(1,"mat-card-content",41)(2,"div",32),g(3,bi,2,1,"span",42),s(4,"div",43)(5,"div",44),d(6),r(),s(7,"div",45),d(8),r()(),s(9,"mat-icon",46),d(10,"emoji_events"),r()(),s(11,"div",47),g(12,ui,5,4,"button",48)(13,hi,2,0,"span",49),s(14,"button",22),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.unmaster(n))}),s(15,"mat-icon"),d(16,"undo"),r(),d(17," Un-master "),r(),s(18,"button",22),b("click",function(){let n=h(t).$implicit,i=m(2);return _(i.archiveHabit(n))}),s(19,"mat-icon"),d(20,"archive"),r(),d(21," Archive "),r()()()()}if(a&2){let t=o.$implicit;l(3),f(t.emoji?3:-1),l(3),v(t.name),l(2),xe("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),l(4),f(t.masteryRewardClaimed?13:12)}}function gi(a,o){if(a&1&&(s(0,"div",14),w(1,_i,22,5,"mat-card",null,st),r()),a&2){let t=m();l(),M(t.habits.masteredHabits())}}function fi(a,o){if(a&1&&d(0),a&2){let t=m();D("Archive (",t.habits.archivedHabits().length,")")}}function vi(a,o){a&1&&(s(0,"p",13),d(1,"No archived habits. Archive habits to reduce clutter or plan ahead."),r())}function xi(a,o){if(a&1&&(s(0,"span",30),d(1),r()),a&2){let t=m().$implicit;l(),v(t.emoji)}}function yi(a,o){a&1&&(s(0,"mat-icon",51),d(1,"emoji_events"),r())}function Ci(a,o){if(a&1){let t=T();s(0,"div",40)(1,"div",28)(2,"div",29),g(3,xi,2,1,"span",30),s(4,"span",31),d(5),r()(),s(6,"div",32)(7,"span",33),d(8),r(),g(9,yi,2,0,"mat-icon",51),r()(),s(10,"div",37)(11,"button",23)(12,"mat-icon"),d(13,"more_vert"),r()(),s(14,"mat-menu",null,3)(16,"button",24),b("click",function(){let n=h(t).$implicit,i=m(3);return _(i.unarchiveHabit(n))}),s(17,"mat-icon"),d(18,"unarchive"),r(),d(19," Unarchive "),r(),s(20,"button",24),b("click",function(){let n=h(t).$implicit,i=m(3);return _(i.editHabit(n))}),s(21,"mat-icon"),d(22,"edit"),r(),d(23," Edit "),r(),s(24,"button",24),b("click",function(){let n=h(t).$implicit,i=m(3);return _(i.deleteHabit(n))}),s(25,"mat-icon"),d(26,"delete"),r(),d(27," Delete "),r()()()()}if(a&2){let t=o.$implicit,e=Z(15);l(3),f(t.emoji?3:-1),l(),u("title",t.name),l(),v(t.name),l(3),xe(" (",t.basePoints,"pts) ",t.frequency,"\xD7/wk "),l(),f(t.isMastered?9:-1),l(2),u("matMenuTriggerFor",e)}}function ki(a,o){if(a&1&&(s(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),d(4),r()()(),w(5,Ci,28,7,"div",40,st),r()),a&2){let t=o.$implicit,e=m(2);l(4),v(t.name),l(),M(e.archivedHabitsForGroup(t.id))}}function Ti(a,o){if(a&1&&(s(0,"mat-accordion",7),w(1,ki,7,1,"mat-expansion-panel",8,st),r()),a&2){let t=m();u("multi",!0),l(),M(t.sortedGroupsForArchive())}}var Xn=class a{habits=c(pe);vacationService=c(vn);simpleTrackService=c(xn);dialog=c(de);othersGroupId=me;reorderingGroupId=at(null);last7Days=rt(()=>ce(new Date,7));today=rt(()=>ce(new Date,1)[0]);yesterday=rt(()=>ce(new Date,2)[0]);sortedGroups=rt(()=>{let o=this.habits.groups();return[...o.filter(t=>t.id!==me),...o.filter(t=>t.id===me)]});sortedGroupsForArchive=rt(()=>this.sortedGroups().filter(o=>(this.habits.archivedHabitsByGroup()[o.id]??[]).length>0));isVacationDay(o){return this.vacationService.isVacationDay(o)}isSimpleTrackDay(o){return this.simpleTrackService.isSimpleTrackDay(o)}dayLabel(o){let t=new Date(o+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(o){return new Date(o+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(o){return this.habits.habitsByGroup()[o]??[]}archivedHabitsForGroup(o){return this.habits.archivedHabitsByGroup()[o]??[]}masteryPercent(o){return this.habits.getMasteryProgress(o).percent}scoreEmojiForDate(o,t){let e=this.habits.getCompletion(o,t);return e?.completionScore?En(e.completionScore):null}toggleHabitCompletion(o,t){if(!((this.vacationService.isVacationDay(t)||this.simpleTrackService.isSimpleTrackDay(t))&&!this.habits.isCompleted(o.id,t))){if(this.habits.isCompleted(o.id,t)){this.habits.toggleCompletion(o.id,t);return}if(!o.withCompletionScore){this.habits.toggleCompletion(o.id,t);return}this.dialog.open(ge,{width:"480px"}).afterClosed().subscribe(e=>{e!==void 0&&this.habits.completeWithScore(o.id,t,e)})}}totalHabitPoints(o){return this.habits.completions().filter(t=>t.habitId===o).reduce((t,e)=>t+e.pointsEarned,0)}startReorder(o){this.reorderingGroupId.set(o)}stopReorder(){this.reorderingGroupId.set(null)}onDrop(o,t){if(o.previousIndex===o.currentIndex)return;let e=[...this.habitsForGroup(t)];mn(e,o.previousIndex,o.currentIndex),this.habits.reorder(t,e.map(n=>n.id))}addGroup(){this.dialog.open(Ht,{data:null,width:"380px"}).afterClosed().subscribe(o=>{o&&this.habits.addGroup(o.name)})}editGroup(o){this.dialog.open(Ht,{data:o,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(o.id,t.name)})}deleteGroup(o){this.dialog.open(wt,{data:{message:`Delete group "${o.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(o.id)})}addHabit(o){this.dialog.open(Mt,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:o},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(o){this.dialog.open(Mt,{data:{habit:o,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(o.id,t)})}deleteHabit(o){let t=this.totalHabitPoints(o.id);if(t===0){this.dialog.open(wt,{data:{message:`Delete "${o.name}"?`}}).afterClosed().subscribe(e=>{e&&this.habits.deleteHabit(o.id,!0)});return}this.dialog.open(he,{data:{habitName:o.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(e=>{e&&this.habits.deleteHabit(o.id,e==="keep-points")})}archiveHabit(o){this.habits.archiveHabit(o.id)}unarchiveHabit(o){this.habits.unarchiveHabit(o.id)}addHabitToArchive(){this.dialog.open(Mt,{data:{habit:null,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(o=>{o&&this.habits.addHabit(o,!0)})}claimMastery(o){this.dialog.open(_e,{data:{habitName:o.name,defaultPoints:o.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(o.id,t)})}unmaster(o){this.dialog.open(wt,{data:{message:`Move "${o.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(o.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-habits-page"]],decls:30,vars:4,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],["habitMenuY","matMenu"],["habitMenuA","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Today"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["label","Yesterday"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-button",""],[1,"text-sm","text-gray-400","py-2"],["cdkDropList","",3,"cdkDropListDropped"],["cdkDrag","",1,"habit-row",3,"cdkDragDisabled"],["mat-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],["cdkDragHandle","",1,"drag-handle"],[1,"shrink-0",3,"change","checked","disabled","title"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","day-chip-vacation","day-chip-simple-track","disabled","title"],[1,"day-chip",3,"click","disabled","title"],[1,"habit-row"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-flat-button","",3,"click"],[1,"trophy-icon",2,"font-size","14px","width","14px","height","14px"]],template:function(t,e){t&1&&(s(0,"div",4)(1,"mat-tab-group")(2,"mat-tab",5)(3,"div",6)(4,"mat-accordion",7),w(5,oi,12,3,"mat-expansion-panel",8,st),r(),s(7,"button",9),b("click",function(){return e.addGroup()}),s(8,"mat-icon"),d(9,"add"),r(),d(10," Add Group "),r()()(),s(11,"mat-tab",10)(12,"div",6)(13,"mat-accordion",7),w(14,ci,8,2,"mat-expansion-panel",8,st),r()()(),s(16,"mat-tab"),q(17,mi,1,1,"ng-template",11),s(18,"div",12),g(19,pi,2,0,"p",13)(20,gi,3,0,"div",14),r()(),s(21,"mat-tab"),q(22,fi,1,1,"ng-template",11),s(23,"div",6)(24,"button",9),b("click",function(){return e.addHabitToArchive()}),s(25,"mat-icon"),d(26,"add"),r(),d(27," Add Habit to Archive "),r(),g(28,vi,2,0,"p",13)(29,Ti,3,1,"mat-accordion",7),r()()()()),t&2&&(l(4),u("multi",!0),l(),M(e.sortedGroups()),l(8),u("multi",!0),l(),M(e.sortedGroups()),l(5),f(e.habits.masteredHabits().length===0?19:20),l(9),f(e.habits.archivedHabits().length===0?28:29))},dependencies:[N,L,rn,In,Dn,re,oe,Bn,An,Pe,Se,Rn,Vn,Ln,Nn,fn,_n,hn,gn,qn,Le,Ne,Wn,un,bn,pn,$t],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.day-chip-vacation[_ngcontent-%COMP%]{border-color:#9575cd;color:#9575cd;opacity:.8}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.drag-handle[_ngcontent-%COMP%]{cursor:grab;color:#bdbdbd;font-size:20px;width:20px;height:20px;flex-shrink:0}.drag-handle[_ngcontent-%COMP%]:active{cursor:grabbing}.cdk-drag-preview[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:6px 0;background:#fff;border-radius:4px;box-shadow:0 4px 12px #00000026;min-height:52px;width:100%}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:.3}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .2s cubic-bezier(0,0,.2,1)}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}.day-chip-simple-track[_ngcontent-%COMP%]{background-color:#e0f2f1;color:#4db6ac;border-color:#b2dfdb}"]})};export{Xn as HabitsPage};
