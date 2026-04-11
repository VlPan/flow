import{b as s,c as Wt,d as Zt}from"./chunk-YTWGIYY3.js";import{a as Ht}from"./chunk-6DE6A3JR.js";import"./chunk-6HVXYOOW.js";import{a as Qt}from"./chunk-DR4LLQUI.js";import{a as Ut}from"./chunk-GSFP255H.js";import{b as Jt,e as qt}from"./chunk-FSCV3ILM.js";import{a as Vt}from"./chunk-DEO7JB67.js";import{a as Gt}from"./chunk-HRIKEJJY.js";import{a as rt,c as M}from"./chunk-YAJUSSVU.js";import"./chunk-DBI47PQ7.js";import"./chunk-K66EXUFO.js";import{a as Ft}from"./chunk-O4AVKK6B.js";import"./chunk-NZFBIDF2.js";import{e as ot,g as $t,h as it}from"./chunk-6PCWDHTS.js";import{$ as zt,D as It,I as Rt,T as Lt,W as nt,ea as Bt,fa as At,ga as Nt,ha as jt,ia as Pt}from"./chunk-YRQMQA3Q.js";import{$b as Dt,Bb as H,Ca as xt,Cb as _t,Db as kt,Fa as V,Gc as D,Ib as x,Ic as Et,Jb as m,Jc as et,Kb as d,Kc as R,Lb as C,Pc as at,Tc as O,U as bt,Wb as B,Y as ft,Yb as Ct,Zb as wt,_a as S,_b as Tt,a as ut,aa as yt,ac as Ot,ba as vt,bc as Y,c as ht,ca as q,cc as X,e as pt,ea as F,g as J,ga as g,gc as Mt,i as mt,ic as tt,lc as _,nb as P,ob as K,pb as $,ta as N,ua as St,vc as W,ya as j}from"./chunk-4P2YP4S6.js";import"./chunk-Q7L6LLAK.js";var Ce=["button"],we=["*"];function Te(i,r){if(i&1&&(m(0,"div",2),C(1,"mat-pseudo-checkbox",6),d()),i&2){let t=Ct();S(),x("disabled",t.disabled)}}var Kt=new F("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Yt=new F("MatButtonToggleGroup"),De={provide:Ft,useExisting:yt(()=>lt),multi:!0},U=class{source;value;constructor(r,t){this.source=r,this.value=t}},lt=(()=>{class i{_changeDetector=g(at);_dir=g(Nt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=g(nt).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new N;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new N;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=g(Kt,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Gt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||Lt(t))return;let a=t.target.id,n=this._buttonToggles.toArray().findIndex(l=>l.buttonId===a),o=null;switch(t.keyCode){case 32:case 13:o=this._buttonToggles.get(n)||null;break;case 38:o=this._getNextButton(n,-1);break;case 37:o=this._getNextButton(n,this.dir==="ltr"?-1:1);break;case 40:o=this._getNextButton(n,1);break;case 39:o=this._getNextButton(n,this.dir==="ltr"?1:-1);break;default:return}o&&(t.preventDefault(),o._onButtonClick(),o.focus())}_emitChangeEvent(t){let e=new U(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,a=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(t,a)):this._updateModelValue(t,a)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let a=this._buttonToggles;for(let n=1;n<=a.length;n++){let o=(t+e*n+a.length)%a.length,l=a.get(o);if(l&&!l.disabled)return l}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(a=>a.tabIndex===-1)){for(let a of e)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let a of e)if(a.value===t){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=$({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,a,n){if(e&1&&Dt(n,Z,5),e&2){let o;Y(o=X())&&(a._buttonToggles=o)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,a){e&1&&B("keydown",function(o){return a._keydown(o)}),e&2&&(H("role",a.multiple?"group":"radiogroup")("aria-disabled",a.disabled),tt("mat-button-toggle-vertical",a.vertical)("mat-button-toggle-group-appearance-standard",a.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",O],value:"value",multiple:[2,"multiple","multiple",O],disabled:[2,"disabled","disabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",O]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[W([De,{provide:Yt,useExisting:i}])]})}return i})(),Z=(()=>{class i{_changeDetectorRef=g(at);_elementRef=g(V);_focusMonitor=g(Rt);_idGenerator=g(nt);_animationDisabled=zt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new N;constructor(){g(It).load(At);let t=g(Yt,{optional:!0}),e=g(new Et("tabindex"),{optional:!0})||"",a=g(Kt,{optional:!0});this._tabIndex=j(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=a&&a.appearance?a.appearance:"standard",this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new U(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=P({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(e,a){if(e&1&&Ot(Ce,5),e&2){let n;Y(n=X())&&(a._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,a){e&1&&B("focus",function(){return a.focus()}),e&2&&(H("aria-label",null)("aria-labelledby",null)("id",a.id)("name",null),tt("mat-button-toggle-standalone",!a.buttonToggleGroup)("mat-button-toggle-checked",a.checked)("mat-button-toggle-disabled",a.disabled)("mat-button-toggle-disabled-interactive",a.disabledInteractive)("mat-button-toggle-appearance-standard",a.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",O],appearance:"appearance",checked:[2,"checked","checked",O],disabled:[2,"disabled","disabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:we,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,a){if(e&1&&(wt(),m(0,"button",1,0),B("click",function(){return a._onButtonClick()}),_t(2,Te,2,1,"div",2),m(3,"span",3),Tt(4),d()(),C(5,"span",4)(6,"span",5)),e&2){let n=Mt(1);x("id",a.buttonId)("disabled",a.disabled&&!a.disabledInteractive||null),H("role",a.isSingleSelector()?"radio":"button")("tabindex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("aria-pressed",a.isSingleSelector()?null:a.checked)("aria-checked",a.isSingleSelector()?a.checked:null)("name",a._getButtonName())("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),S(2),kt(a.buttonToggleGroup&&(!a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideSingleSelectionIndicator||a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),S(4),x("matRippleTrigger",n)("matRippleDisabled",a.disableRipple||a.disabled)}},dependencies:[Bt,Vt],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),Xt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=K({type:i});static \u0275inj=q({imports:[Pt,Z,jt]})}return i})();var te=new F("NGX_ECHARTS_CONFIG"),ct=class{constructor(){this.subject=new J(1),this.subscriptions=new ut}doFilter(r){this.subject.next(r)}dispose(){this.subscriptions.unsubscribe()}notEmpty(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]){let a=e[r].currentValue;a!=null&&t(a)}}))}has(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]){let a=e[r].currentValue;t(a)}}))}notFirst(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]&&!e[r].isFirstChange()){let a=e[r].currentValue;t(a)}}))}notFirstAndEmpty(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]&&!e[r].isFirstChange()){let a=e[r].currentValue;a!=null&&t(a)}}))}},ee=(()=>{class i{constructor(){this.el=g(V),this.ngZone=g(St),this.config=g(te),this.options=R(null),this.theme=R(this.config.theme??null),this.initOpts=R(null),this.merge=R(null),this.autoResize=R(!0),this.loading=R(!1),this.loadingType=R("default"),this.loadingOpts=R(null),this.chartInit=et(),this.optionsError=et(),this.chartClick=s(this.createLazyEvent("click")),this.chartDblClick=s(this.createLazyEvent("dblclick")),this.chartMouseDown=s(this.createLazyEvent("mousedown")),this.chartMouseMove=s(this.createLazyEvent("mousemove")),this.chartMouseUp=s(this.createLazyEvent("mouseup")),this.chartMouseOver=s(this.createLazyEvent("mouseover")),this.chartMouseOut=s(this.createLazyEvent("mouseout")),this.chartGlobalOut=s(this.createLazyEvent("globalout")),this.chartContextMenu=s(this.createLazyEvent("contextmenu")),this.chartHighlight=s(this.createLazyEvent("highlight")),this.chartDownplay=s(this.createLazyEvent("downplay")),this.chartSelectChanged=s(this.createLazyEvent("selectchanged")),this.chartLegendSelectChanged=s(this.createLazyEvent("legendselectchanged")),this.chartLegendSelected=s(this.createLazyEvent("legendselected")),this.chartLegendUnselected=s(this.createLazyEvent("legendunselected")),this.chartLegendLegendSelectAll=s(this.createLazyEvent("legendselectall")),this.chartLegendLegendInverseSelect=s(this.createLazyEvent("legendinverseselect")),this.chartLegendScroll=s(this.createLazyEvent("legendscroll")),this.chartDataZoom=s(this.createLazyEvent("datazoom")),this.chartDataRangeSelected=s(this.createLazyEvent("datarangeselected")),this.chartGraphRoam=s(this.createLazyEvent("graphroam")),this.chartGeoRoam=s(this.createLazyEvent("georoam")),this.chartTreeRoam=s(this.createLazyEvent("treeroam")),this.chartTimelineChanged=s(this.createLazyEvent("timelinechanged")),this.chartTimelinePlayChanged=s(this.createLazyEvent("timelineplaychanged")),this.chartRestore=s(this.createLazyEvent("restore")),this.chartDataViewChanged=s(this.createLazyEvent("dataviewchanged")),this.chartMagicTypeChanged=s(this.createLazyEvent("magictypechanged")),this.chartGeoSelectChanged=s(this.createLazyEvent("geoselectchanged")),this.chartGeoSelected=s(this.createLazyEvent("geoselected")),this.chartGeoUnselected=s(this.createLazyEvent("geounselected")),this.chartAxisAreaSelected=s(this.createLazyEvent("axisareaselected")),this.chartBrush=s(this.createLazyEvent("brush")),this.chartBrushEnd=s(this.createLazyEvent("brushend")),this.chartBrushSelected=s(this.createLazyEvent("brushselected")),this.chartGlobalCursorTaken=s(this.createLazyEvent("globalcursortaken")),this.chartRendered=s(this.createLazyEvent("rendered")),this.chartFinished=s(this.createLazyEvent("finished")),this.animationFrameID=null,this.chart$=new J(1),this.resize$=new pt,this.changeFilter=new ct,this.resizeObFired=!1,this.echarts=this.config.echarts}ngOnChanges(t){this.changeFilter.doFilter(t)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(ft(100,mt,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize()&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(t=>{for(let e of t)e.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",t=>this.onOptionsChange(t)),this.changeFilter.notFirstAndEmpty("merge",t=>this.setOption(t)),this.changeFilter.has("loading",t=>this.toggleLoading(!!t)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart?t?this.chart.showLoading(this.loadingType(),this.loadingOpts()):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>t?e.showLoading(this.loadingType(),this.loadingOpts()):e.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(a){console.error(a),this.optionsError.emit(a)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let t=this.el.nativeElement;if(window&&window.getComputedStyle){let e=window.getComputedStyle(t,null).getPropertyValue("height");(!e||e==="0px")&&(!t.style.height||t.style.height==="0px")&&(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(t,this.theme()??this.config?.theme,this.initOpts())))}async initChart(){await this.onOptionsChange(this.options());let t=this.merge();t&&this.chart&&this.setOption(t)}async onOptionsChange(t){t&&(this.chart?this.setOption(this.options(),!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options(),!0)))}createLazyEvent(t){return Wt(this.chartInit).pipe(bt(e=>new ht(a=>(e.on(t,n=>this.ngZone.run(()=>a.next(n))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=$({type:i,selectors:[["echarts"],["","echarts",""]],inputs:{options:[1,"options"],theme:[1,"theme"],initOpts:[1,"initOpts"],merge:[1,"merge"],autoResize:[1,"autoResize"],loading:[1,"loading"],loadingType:[1,"loadingType"],loadingOpts:[1,"loadingOpts"]},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[xt]})}}return i})();function ae(i){return{provide:te,useValue:i}}var dt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Me=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function T(i,r){let t=new Date(i);return t.setDate(t.getDate()+r),t}function I(i){let r=new Date(i);return r.setHours(0,0,0,0),r}function ie(i,r){let t=dt[i.getMonth()],e=i.getDate();return r?`${Me[i.getDay()]} ${t} ${e}`:`${t} ${e}`}function re(i,r){let t={},e={},a=0;for(let n of i){a+=Zt(n.sessionMinutes,n.flowScore),t[n.projectId]=(t[n.projectId]??0)+n.sessionMinutes;let o=r[n.projectId]??it;e[o]=(e[o]??0)+n.sessionMinutes}return{score:Math.round(a),minutesByVector:t,minutesByCategory:e}}function Ee(i,r,t,e,a,n){let o=new Map;for(let b of i){let y=o.get(b.startDate)??[];y.push(b),o.set(b.startDate,y)}let l=[],c=I(r),h=I(t);for(;c<=h;){let b=M(c),{score:y,minutesByVector:f,minutesByCategory:E}=re(o.get(b)??[],n),u=a[b]??0;l.push({key:b,label:ie(c,e),score:y,habitPts:u,minutesByVector:f,minutesByCategory:E}),c=T(c,1)}return l}function Ie(i,r,t,e,a){let n=[],o=I(rt(r)),l=I(t);for(;o<=l;){let c=T(o,6),h=M(o),b=M(c),y=i.filter(v=>v.startDate>=h&&v.startDate<=b),{score:f,minutesByVector:E,minutesByCategory:u}=re(y,a),w=`${dt[o.getMonth()]} ${o.getDate()}`,k=Object.entries(e).filter(([v])=>v>=h&&v<=b).reduce((v,[,A])=>v+A,0);n.push({key:h,label:w,score:f,habitPts:k,minutesByVector:E,minutesByCategory:u}),o=T(o,7)}return n}function se(i,r,t,e,a,n=[]){let o=I(a),l,c=!1,h=Object.fromEntries(r.map(p=>[p.id,p.categoryId??it]));if(e==="7d")l=T(o,-6);else if(e==="30d")l=T(o,-29);else if(e==="100d")l=T(o,-99);else{if(i.length===0&&n.length===0)return{buckets:[],activeProjects:[],activeCategories:[],isWeekly:!1,filteredRecords:[]};let p=[...i.map(L=>L.startDate),...n.map(L=>L.date)],z=p.reduce((L,gt)=>gt<L?gt:L,p[0]);l=I(new Date(z)),c=Math.ceil((o.getTime()-l.getTime())/864e5)+1>60}let b=M(l),y=M(o),f=i.filter(p=>p.startDate>=b&&p.startDate<=y),E=Jt(n,b,y),u=c?Ie(f,l,o,E,h):Ee(f,l,o,e==="7d",E,h),w=new Set(u.flatMap(p=>Object.keys(p.minutesByVector).filter(z=>p.minutesByVector[z]>0))),k=r.filter(p=>w.has(p.id)),v=new Set(u.flatMap(p=>Object.keys(p.minutesByCategory).filter(z=>p.minutesByCategory[z]>0))),A=t.filter(p=>v.has(p.id));return{buckets:u,activeProjects:k,activeCategories:A,isWeekly:c,filteredRecords:f}}function le(i){let{buckets:r}=i;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{let e=t.filter(n=>n.value>0).map(n=>`${n.marker}${n.seriesName}: <b>${n.value} pts</b>`),a=t.reduce((n,o)=>n+o.value,0);return`${t[0].axisValue}<br/>${e.join("<br/>")}<br/>Total: <b>${a} pts</b>`}},xAxis:{type:"category",data:r.map(t=>t.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"pts",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:[{name:"Flow pts",type:"bar",stack:"pts",data:r.map(t=>t.score),barMinHeight:1,itemStyle:{color:"#4FC3F7"}},{name:"Habit pts",type:"bar",stack:"pts",data:r.map(t=>t.habitPts),barMinHeight:1,itemStyle:{color:"#81C784"}}]}}function ce(i){let{buckets:r,activeCategories:t}=i;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:e=>{let a=e.filter(o=>o.value>0).map(o=>`${o.marker}${o.seriesName}: <b>${o.value} min</b>`),n=e.reduce((o,l)=>o+l.value,0);return`${e[0].axisValue}<br/>${a.join("<br/>")}<br/>Total: <b>${n} min</b>`}},xAxis:{type:"category",data:r.map(e=>e.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:t.map(e=>({name:e.name,type:"bar",stack:"time",data:r.map(a=>a.minutesByCategory[e.id]??0),itemStyle:{color:e.color||$t}}))}}function de(i){let{buckets:r,filteredRecords:t,isWeekly:e}=i,a=new Map;for(let c of t){let h=a.get(c.startDate)??[];h.push(c.flowScore),a.set(c.startDate,h)}let n=e?4:7,o=r.map((c,h)=>{let y=r.slice(Math.max(0,h-n+1),h+1).flatMap(f=>a.get(f.key)??[]);return y.length>0?+(y.reduce((f,E)=>f+E,0)/y.length).toFixed(1):null}),l=e?"4-week":"7-day";return{grid:{left:48,right:16,top:16,bottom:64},tooltip:{trigger:"axis",formatter:c=>{let h=c[0].value;return h!=null?`${c[0].axisValue}<br/>Avg flow score (${l}): <b>${h}</b>`:`${c[0].axisValue}<br/>No data`}},xAxis:{type:"category",data:r.map(c=>c.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"score",min:0,max:10,nameTextStyle:{fontSize:11}},series:[{type:"line",data:o,smooth:!0,connectNulls:!1,itemStyle:{color:"#ab47bc"},areaStyle:{color:"rgba(171,71,188,0.1)"},lineStyle:{width:2},symbol:"circle",symbolSize:4}]}}function ge(i){let{buckets:r,activeProjects:t}=i,e={};for(let n of r)for(let[o,l]of Object.entries(n.minutesByVector))e[o]=(e[o]??0)+l;let a=t.filter(n=>(e[n.id]??0)>0).map(n=>({name:`${n.icon} ${n.name}`,value:e[n.id],itemStyle:{color:n.color||ot}}));return{tooltip:{trigger:"item",formatter:n=>`${n.name}<br/><b>${n.value} min</b> (${n.percent}%)`},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:[{type:"pie",radius:["40%","70%"],center:["50%","44%"],data:a,label:{show:!1},emphasis:{label:{show:!0,fontSize:13,fontWeight:"bold"}}}]}}function ue(i){let{filteredRecords:r}=i,t=Array.from({length:7},()=>new Array(24).fill(0));for(let n of r){let o=new Date(n.startedAt),l=(o.getDay()+6)%7,c=o.getHours();t[l][c]+=n.sessionMinutes}let e=[];for(let n=0;n<7;n++)for(let o=0;o<24;o++)e.push([n,o,t[n][o]]);let a=Math.max(...e.map(n=>n[2]),1);return{tooltip:{formatter:n=>`${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][n.data[0]]} ${n.data[1]}:00<br/><b>${n.data[2]} min</b>`},grid:{left:48,right:80,top:8,bottom:32},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],splitArea:{show:!0},axisLabel:{fontSize:11}},yAxis:{type:"category",data:Array.from({length:24},(n,o)=>`${o}:00`),splitArea:{show:!0},inverse:!0,axisLabel:{fontSize:10}},visualMap:{min:0,max:a,calculable:!0,orient:"vertical",right:0,top:"center",textStyle:{fontSize:10},inRange:{color:["#e3f2fd","#0277bd"]}},series:[{type:"heatmap",data:e,label:{show:!1},emphasis:{itemStyle:{shadowBlur:6,shadowColor:"rgba(0,0,0,0.3)"}}}]}}function he(i){let{filteredRecords:r}=i,t=new Array(7).fill(0);for(let e of r){let[a,n,o]=e.startDate.split("-").map(Number),l=(new Date(a,n-1,o).getDay()+6)%7;t[l]+=e.sessionMinutes}return{grid:{left:56,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} min</b>`},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLabel:{fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t.map((e,a)=>({value:e,itemStyle:{color:a>=5?"#ff8a65":"#42a5f5"}})),barMinHeight:1}]}}var ne=[{label:"<15 min",min:0,max:15},{label:"15\u201330 min",min:15,max:30},{label:"30\u201345 min",min:30,max:45},{label:"45\u201360 min",min:45,max:60},{label:"60\u201390 min",min:60,max:90},{label:"90+ min",min:90,max:1/0}];function pe(i){let{filteredRecords:r}=i,t=ne.map(e=>r.filter(a=>a.sessionMinutes>=e.min&&a.sessionMinutes<e.max).length);return{grid:{left:48,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} sessions</b>`},xAxis:{type:"category",data:ne.map(e=>e.label),axisLabel:{fontSize:11}},yAxis:{type:"value",name:"sessions",minInterval:1,nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t,barMinHeight:1,itemStyle:{color:"#66bb6a"}}]}}function me(i){let{filteredRecords:r,activeProjects:t}=i,e=new Map(t.map(o=>[o.id,o])),a=new Map;for(let o of r){let l=a.get(o.projectId)??[];l.push([o.sessionMinutes,o.flowScore]),a.set(o.projectId,l)}let n=[...a.entries()].map(([o,l])=>{let c=e.get(o);return{name:c?`${c.icon} ${c.name}`:o,type:"scatter",data:l,symbolSize:8,itemStyle:{color:c?.color||ot}}});return{grid:{left:56,right:16,top:16,bottom:48},tooltip:{trigger:"item",formatter:o=>`${o.seriesName}<br/>Duration: <b>${o.data[0]} min</b><br/>Flow score: <b>${o.data[1]}</b>`},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},xAxis:{type:"value",name:"duration (min)",nameLocation:"end",nameTextStyle:{fontSize:11}},yAxis:{type:"value",name:"flow score",min:0,max:10,nameTextStyle:{fontSize:11}},series:n}}function be(i,r,t){let e=I(t),a,n=!1;if(r==="7d")a=T(e,-6);else if(r==="30d")a=T(e,-29);else if(r==="100d")a=T(e,-99);else{if(i.length===0)return{grid:{left:56,right:16,top:16,bottom:64},xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"pts"},series:[{type:"bar",data:[]}]};let u=i.map(k=>k.date).reduce((k,v)=>v<k?v:k);a=I(new Date(u)),n=Math.ceil((e.getTime()-a.getTime())/864e5)+1>60}let o=M(a),l=M(e),c=i.filter(u=>u.date>=o&&u.date<=l);if(n){let u=[],w=I(rt(a));for(;w<=e;){let k=T(w,6),v=M(w),A=M(k),p=c.filter(G=>G.date>=v&&G.date<=A).reduce((G,L)=>G+L.points,0),z=`${dt[w.getMonth()]} ${w.getDate()}`;u.push({key:v,label:z,pts:p}),w=T(w,7)}return oe(u.map(k=>k.label),u.map(k=>k.pts))}let h=new Map;for(let u of c)h.set(u.date,(h.get(u.date)??0)+u.points);let b=[],y=[],f=I(a),E=r==="7d";for(;f<=e;){let u=M(f);b.push(ie(f,E)),y.push(h.get(u)??0),f=T(f,1)}return oe(b,y)}function oe(i,r){return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>`${t[0].axisValue}<br/>${t[0].marker}Task rewards: <b>${t[0].value} pts</b>`},xAxis:{type:"category",data:i,axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"pts",nameTextStyle:{fontSize:11}},series:[{name:"Task rewards",type:"bar",data:r,barMinHeight:1,itemStyle:{color:"#ffb300"}}]}}var Q=class i{sessionService=g(Ht);projectsService=g(Ut);habitsService=g(qt);categoriesService=g(Qt);selectedRange=j("30d");today=new Date;_data=D(()=>se(this.sessionService.records(),this.projectsService.allProjectsIncludingDeleted(),this.categoriesService.allCategoriesIncludingDeleted(),this.selectedRange(),this.today,this.habitsService.completions()));ptsChartOptions=D(()=>le(this._data()));timeChartOptions=D(()=>ce(this._data()));flowScoreTrendOptions=D(()=>de(this._data()));projectDonutOptions=D(()=>ge(this._data()));timeOfDayHeatmapOptions=D(()=>ue(this._data()));dayOfWeekOptions=D(()=>he(this._data()));sessionLengthDistOptions=D(()=>pe(this._data()));scoreVsLengthOptions=D(()=>me(this._data()));taskClaimsOptions=D(()=>be(this.projectsService.claimRecords(),this.selectedRange(),this.today));static \u0275fac=function(t){return new(t||i)};static \u0275prov=vt({token:i,factory:i.\u0275fac,providedIn:"root"})};var fe=class i{stats=g(Q);setRange(r){this.stats.selectedRange.set(r)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=P({type:i,selectors:[["app-statistics-page"]],features:[W([ae({echarts:()=>import("./chunk-CAVARVDH.js")})])],decls:51,vars:10,consts:[[1,"p-6","flex","flex-col","gap-6","h-full","overflow-y-auto"],[1,"flex","items-center","justify-between","flex-wrap","gap-3"],[1,"text-2xl","font-semibold"],["hideSingleSelectionIndicator","",3,"change","value"],["value","7d"],["value","30d"],["value","100d"],["value","all"],[1,"flex","flex-col","gap-2"],[1,"text-sm","font-medium","text-gray-500","uppercase","tracking-wide"],["echarts","",1,"w-full",2,"height","320px",3,"options"],["echarts","",1,"w-full",2,"height","350px",3,"options"],["echarts","",1,"w-full",2,"height","300px",3,"options"],["echarts","",1,"w-full",2,"height","280px",3,"options"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["echarts","",1,"w-full",2,"height","480px",3,"options"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1)(2,"h1",2),_(3,"Statistics"),d(),m(4,"mat-button-toggle-group",3),B("change",function(n){return e.setRange(n.value)}),m(5,"mat-button-toggle",4),_(6,"7 days"),d(),m(7,"mat-button-toggle",5),_(8,"30 days"),d(),m(9,"mat-button-toggle",6),_(10,"100 days"),d(),m(11,"mat-button-toggle",7),_(12,"All time"),d()()(),m(13,"div",8)(14,"h2",9),_(15,"Points per day"),d(),C(16,"div",10),d(),m(17,"div",8)(18,"h2",9),_(19,"Focused time per day"),d(),C(20,"div",11),d(),m(21,"div",8)(22,"h2",9),_(23,"Flow score trend"),d(),C(24,"div",12),d(),m(25,"div",8)(26,"h2",9),_(27,"Task rewards per day"),d(),C(28,"div",13),d(),m(29,"div",14)(30,"div",8)(31,"h2",9),_(32,"Time by project"),d(),C(33,"div",10),d(),m(34,"div",8)(35,"h2",9),_(36,"By day of week"),d(),C(37,"div",10),d()(),m(38,"div",8)(39,"h2",9),_(40,"Time-of-day activity"),d(),C(41,"div",15),d(),m(42,"div",14)(43,"div",8)(44,"h2",9),_(45,"Session length distribution"),d(),C(46,"div",13),d(),m(47,"div",8)(48,"h2",9),_(49,"Score vs duration"),d(),C(50,"div",13),d()()()),t&2&&(S(4),x("value",e.stats.selectedRange()),S(12),x("options",e.stats.ptsChartOptions()),S(4),x("options",e.stats.timeChartOptions()),S(4),x("options",e.stats.flowScoreTrendOptions()),S(4),x("options",e.stats.taskClaimsOptions()),S(5),x("options",e.stats.projectDonutOptions()),S(4),x("options",e.stats.dayOfWeekOptions()),S(4),x("options",e.stats.timeOfDayHeatmapOptions()),S(5),x("options",e.stats.sessionLengthDistOptions()),S(4),x("options",e.stats.scoreVsLengthOptions()))},dependencies:[Xt,lt,Z,ee],encapsulation:2})};export{fe as StatisticsPage};
