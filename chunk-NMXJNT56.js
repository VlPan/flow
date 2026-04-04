import{b as s,c as Ft,d as Gt}from"./chunk-F5TWJFHC.js";import{a as Vt}from"./chunk-V4PUVJK3.js";import{a as At}from"./chunk-D45CO7DA.js";import"./chunk-O3HUFLCF.js";import{a as Nt,d as $t}from"./chunk-TAIYTZ45.js";import{a as Rt}from"./chunk-MNGV6IHC.js";import{a as Ot}from"./chunk-2TXXKFHM.js";import{a as Bt,c as C}from"./chunk-BCMP54PU.js";import"./chunk-K66EXUFO.js";import"./chunk-SWIXLFUM.js";import"./chunk-MCAQEUJG.js";import{a as N}from"./chunk-RL5SRWV4.js";import{A as kt,F as wt,P as Dt,S as Y,X as Tt,aa as Ct,ba as Mt,ca as Et,xa as It,ya as Lt,za as zt}from"./chunk-B2KD4SEN.js";import{$ as dt,$b as St,Ab as V,Ba as ht,Bb as mt,Cb as pt,Ea as B,Ec as k,Gc as xt,Hb as b,Hc as K,Ib as h,Ic as w,Jb as d,Kb as y,Nc as X,Rc as S,T as lt,Vb as T,X as ct,Xb as bt,Yb as ft,Za as p,Zb as yt,_b as vt,a as ot,aa as ut,ac as Q,ba as W,bc as q,c as it,da as L,e as rt,fa as u,fc as _t,g as U,hc as J,i as st,kc as f,mb as A,nb as Z,ob as F,rc as G,sa as R,ta as gt,xa as z}from"./chunk-YQKOKR5B.js";import"./chunk-Q7L6LLAK.js";var he=["button"],me=["*"];function pe(i,r){if(i&1&&(h(0,"div",2),y(1,"mat-pseudo-checkbox",6),d()),i&2){let t=bt();p(),b("disabled",t.disabled)}}var Pt=new L("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Ht=new L("MatButtonToggleGroup"),be={provide:Et,useExisting:dt(()=>et),multi:!0},$=class{source;value;constructor(r,t){this.source=r,this.value=t}},et=(()=>{class i{_changeDetector=u(X);_dir=u(It,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=u(Y).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new R;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new R;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=u(Pt,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ot(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||Dt(t))return;let a=t.target.id,n=this._buttonToggles.toArray().findIndex(l=>l.buttonId===a),o=null;switch(t.keyCode){case 32:case 13:o=this._buttonToggles.get(n)||null;break;case 38:o=this._getNextButton(n,-1);break;case 37:o=this._getNextButton(n,this.dir==="ltr"?-1:1);break;case 40:o=this._getNextButton(n,1);break;case 39:o=this._getNextButton(n,this.dir==="ltr"?1:-1);break;default:return}o&&(t.preventDefault(),o._onButtonClick(),o.focus())}_emitChangeEvent(t){let e=new $(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,a=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(t,a)):this._updateModelValue(t,a)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let a=this._buttonToggles;for(let n=1;n<=a.length;n++){let o=(t+e*n+a.length)%a.length,l=a.get(o);if(l&&!l.disabled)return l}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(a=>a.tabIndex===-1)){for(let a of e)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let a of e)if(a.value===t){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,a,n){if(e&1&&vt(n,P,5),e&2){let o;Q(o=q())&&(a._buttonToggles=o)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,a){e&1&&T("keydown",function(o){return a._keydown(o)}),e&2&&(V("role",a.multiple?"group":"radiogroup")("aria-disabled",a.disabled),J("mat-button-toggle-vertical",a.vertical)("mat-button-toggle-group-appearance-standard",a.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",S],value:"value",multiple:[2,"multiple","multiple",S],disabled:[2,"disabled","disabled",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",S]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[G([be,{provide:Ht,useExisting:i}])]})}return i})(),P=(()=>{class i{_changeDetectorRef=u(X);_elementRef=u(B);_focusMonitor=u(wt);_idGenerator=u(Y);_animationDisabled=Tt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new R;constructor(){u(kt).load(Mt);let t=u(Ht,{optional:!0}),e=u(new xt("tabindex"),{optional:!0})||"",a=u(Pt,{optional:!0});this._tabIndex=z(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=a&&a.appearance?a.appearance:"standard",this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new $(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=A({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(e,a){if(e&1&&St(he,5),e&2){let n;Q(n=q())&&(a._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,a){e&1&&T("focus",function(){return a.focus()}),e&2&&(V("aria-label",null)("aria-labelledby",null)("id",a.id)("name",null),J("mat-button-toggle-standalone",!a.buttonToggleGroup)("mat-button-toggle-checked",a.checked)("mat-button-toggle-disabled",a.disabled)("mat-button-toggle-disabled-interactive",a.disabledInteractive)("mat-button-toggle-appearance-standard",a.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",S],appearance:"appearance",checked:[2,"checked","checked",S],disabled:[2,"disabled","disabled",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:me,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,a){if(e&1&&(ft(),h(0,"button",1,0),T("click",function(){return a._onButtonClick()}),mt(2,pe,2,1,"div",2),h(3,"span",3),yt(4),d()(),y(5,"span",4)(6,"span",5)),e&2){let n=_t(1);b("id",a.buttonId)("disabled",a.disabled&&!a.disabledInteractive||null),V("role",a.isSingleSelector()?"radio":"button")("tabindex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("aria-pressed",a.isSingleSelector()?null:a.checked)("aria-checked",a.isSingleSelector()?a.checked:null)("name",a._getButtonName())("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),p(2),pt(a.buttonToggleGroup&&(!a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideSingleSelectionIndicator||a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),p(4),b("matRippleTrigger",n)("matRippleDisabled",a.disableRipple||a.disabled)}},dependencies:[Ct,Rt],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return i})(),jt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Z({type:i});static \u0275inj=W({imports:[zt,P,Lt]})}return i})();var Ut=new L("NGX_ECHARTS_CONFIG"),at=class{constructor(){this.subject=new U(1),this.subscriptions=new ot}doFilter(r){this.subject.next(r)}dispose(){this.subscriptions.unsubscribe()}notEmpty(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]){let a=e[r].currentValue;a!=null&&t(a)}}))}has(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]){let a=e[r].currentValue;t(a)}}))}notFirst(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]&&!e[r].isFirstChange()){let a=e[r].currentValue;t(a)}}))}notFirstAndEmpty(r,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[r]&&!e[r].isFirstChange()){let a=e[r].currentValue;a!=null&&t(a)}}))}},Wt=(()=>{class i{constructor(){this.el=u(B),this.ngZone=u(gt),this.config=u(Ut),this.options=w(null),this.theme=w(this.config.theme??null),this.initOpts=w(null),this.merge=w(null),this.autoResize=w(!0),this.loading=w(!1),this.loadingType=w("default"),this.loadingOpts=w(null),this.chartInit=K(),this.optionsError=K(),this.chartClick=s(this.createLazyEvent("click")),this.chartDblClick=s(this.createLazyEvent("dblclick")),this.chartMouseDown=s(this.createLazyEvent("mousedown")),this.chartMouseMove=s(this.createLazyEvent("mousemove")),this.chartMouseUp=s(this.createLazyEvent("mouseup")),this.chartMouseOver=s(this.createLazyEvent("mouseover")),this.chartMouseOut=s(this.createLazyEvent("mouseout")),this.chartGlobalOut=s(this.createLazyEvent("globalout")),this.chartContextMenu=s(this.createLazyEvent("contextmenu")),this.chartHighlight=s(this.createLazyEvent("highlight")),this.chartDownplay=s(this.createLazyEvent("downplay")),this.chartSelectChanged=s(this.createLazyEvent("selectchanged")),this.chartLegendSelectChanged=s(this.createLazyEvent("legendselectchanged")),this.chartLegendSelected=s(this.createLazyEvent("legendselected")),this.chartLegendUnselected=s(this.createLazyEvent("legendunselected")),this.chartLegendLegendSelectAll=s(this.createLazyEvent("legendselectall")),this.chartLegendLegendInverseSelect=s(this.createLazyEvent("legendinverseselect")),this.chartLegendScroll=s(this.createLazyEvent("legendscroll")),this.chartDataZoom=s(this.createLazyEvent("datazoom")),this.chartDataRangeSelected=s(this.createLazyEvent("datarangeselected")),this.chartGraphRoam=s(this.createLazyEvent("graphroam")),this.chartGeoRoam=s(this.createLazyEvent("georoam")),this.chartTreeRoam=s(this.createLazyEvent("treeroam")),this.chartTimelineChanged=s(this.createLazyEvent("timelinechanged")),this.chartTimelinePlayChanged=s(this.createLazyEvent("timelineplaychanged")),this.chartRestore=s(this.createLazyEvent("restore")),this.chartDataViewChanged=s(this.createLazyEvent("dataviewchanged")),this.chartMagicTypeChanged=s(this.createLazyEvent("magictypechanged")),this.chartGeoSelectChanged=s(this.createLazyEvent("geoselectchanged")),this.chartGeoSelected=s(this.createLazyEvent("geoselected")),this.chartGeoUnselected=s(this.createLazyEvent("geounselected")),this.chartAxisAreaSelected=s(this.createLazyEvent("axisareaselected")),this.chartBrush=s(this.createLazyEvent("brush")),this.chartBrushEnd=s(this.createLazyEvent("brushend")),this.chartBrushSelected=s(this.createLazyEvent("brushselected")),this.chartGlobalCursorTaken=s(this.createLazyEvent("globalcursortaken")),this.chartRendered=s(this.createLazyEvent("rendered")),this.chartFinished=s(this.createLazyEvent("finished")),this.animationFrameID=null,this.chart$=new U(1),this.resize$=new rt,this.changeFilter=new at,this.resizeObFired=!1,this.echarts=this.config.echarts}ngOnChanges(t){this.changeFilter.doFilter(t)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(ct(100,st,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize()&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(t=>{for(let e of t)e.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",t=>this.onOptionsChange(t)),this.changeFilter.notFirstAndEmpty("merge",t=>this.setOption(t)),this.changeFilter.has("loading",t=>this.toggleLoading(!!t)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart?t?this.chart.showLoading(this.loadingType(),this.loadingOpts()):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>t?e.showLoading(this.loadingType(),this.loadingOpts()):e.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(a){console.error(a),this.optionsError.emit(a)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let t=this.el.nativeElement;if(window&&window.getComputedStyle){let e=window.getComputedStyle(t,null).getPropertyValue("height");(!e||e==="0px")&&(!t.style.height||t.style.height==="0px")&&(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(t,this.theme()??this.config?.theme,this.initOpts())))}async initChart(){await this.onOptionsChange(this.options());let t=this.merge();t&&this.chart&&this.setOption(t)}async onOptionsChange(t){t&&(this.chart?this.setOption(this.options(),!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options(),!0)))}createLazyEvent(t){return Ft(this.chartInit).pipe(lt(e=>new it(a=>(e.on(t,n=>this.ngZone.run(()=>a.next(n))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=F({type:i,selectors:[["echarts"],["","echarts",""]],inputs:{options:[1,"options"],theme:[1,"theme"],initOpts:[1,"initOpts"],merge:[1,"merge"],autoResize:[1,"autoResize"],loading:[1,"loading"],loadingType:[1,"loadingType"],loadingOpts:[1,"loadingOpts"]},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[ht]})}}return i})();function Zt(i){return{provide:Ut,useValue:i}}var qt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ye=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function M(i,r){let t=new Date(i);return t.setDate(t.getDate()+r),t}function O(i){let r=new Date(i);return r.setHours(0,0,0,0),r}function ve(i,r){let t=qt[i.getMonth()],e=i.getDate();return r?`${ye[i.getDay()]} ${t} ${e}`:`${t} ${e}`}function Jt(i){let r={},t=0;for(let e of i)t+=Gt(e.sessionMinutes,e.flowScore),r[e.flowVectorId]=(r[e.flowVectorId]??0)+e.sessionMinutes;return{score:Math.round(t),minutesByVector:r}}function Se(i,r,t,e,a){let n=new Map;for(let g of i){let v=n.get(g.startDate)??[];v.push(g),n.set(g.startDate,v)}let o=[],l=O(r),c=O(t);for(;l<=c;){let g=C(l),{score:v,minutesByVector:_}=Jt(n.get(g)??[]),x=a[g]??0;o.push({key:g,label:ve(l,e),score:v,habitPts:x,minutesByVector:_}),l=M(l,1)}return o}function _e(i,r,t,e){let a=[],n=O(Bt(r)),o=O(t);for(;n<=o;){let l=M(n,6),c=C(n),g=C(l),v=i.filter(m=>m.startDate>=c&&m.startDate<=g),{score:_,minutesByVector:x}=Jt(v),E=`${qt[n.getMonth()]} ${n.getDate()}`,j=Object.entries(e).filter(([m])=>m>=c&&m<=g).reduce((m,[,I])=>m+I,0);a.push({key:c,label:E,score:_,habitPts:j,minutesByVector:x}),n=M(n,7)}return a}function Kt(i,r,t,e,a=[]){let n=O(e),o,l=!1;if(t==="7d")o=M(n,-6);else if(t==="30d")o=M(n,-29);else if(t==="100d")o=M(n,-99);else{if(i.length===0&&a.length===0)return{buckets:[],activeVectors:[],isWeekly:!1,filteredRecords:[]};let m=[...i.map(D=>D.startDate),...a.map(D=>D.date)],I=m.reduce((D,nt)=>nt<D?nt:D,m[0]);o=O(new Date(I)),l=Math.ceil((n.getTime()-o.getTime())/864e5)+1>60}let c=C(o),g=C(n),v=i.filter(m=>m.startDate>=c&&m.startDate<=g),_=Nt(a,c,g),x=l?_e(v,o,n,_):Se(v,o,n,t==="7d",_),E=new Set(x.flatMap(m=>Object.keys(m.minutesByVector).filter(I=>m.minutesByVector[I]>0))),j=r.filter(m=>E.has(m.id));return{buckets:x,activeVectors:j,isWeekly:l,filteredRecords:v}}function Xt(i){let{buckets:r}=i;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{let e=t.filter(n=>n.value>0).map(n=>`${n.marker}${n.seriesName}: <b>${n.value} pts</b>`),a=t.reduce((n,o)=>n+o.value,0);return`${t[0].axisValue}<br/>${e.join("<br/>")}<br/>Total: <b>${a} pts</b>`}},xAxis:{type:"category",data:r.map(t=>t.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"pts",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:[{name:"Flow pts",type:"bar",stack:"pts",data:r.map(t=>t.score),barMinHeight:1,itemStyle:{color:"#4FC3F7"}},{name:"Habit pts",type:"bar",stack:"pts",data:r.map(t=>t.habitPts),barMinHeight:1,itemStyle:{color:"#81C784"}}]}}function Yt(i){let{buckets:r,activeVectors:t}=i;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:e=>{let a=e.filter(o=>o.value>0).map(o=>`${o.marker}${o.seriesName}: <b>${o.value} min</b>`),n=e.reduce((o,l)=>o+l.value,0);return`${e[0].axisValue}<br/>${a.join("<br/>")}<br/>Total: <b>${n} min</b>`}},xAxis:{type:"category",data:r.map(e=>e.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:t.map(e=>({name:`${e.icon} ${e.name}`,type:"bar",stack:"time",data:r.map(a=>a.minutesByVector[e.id]??0),itemStyle:{color:e.color||N}}))}}function te(i){let{buckets:r,filteredRecords:t,isWeekly:e}=i,a=new Map;for(let c of t){let g=a.get(c.startDate)??[];g.push(c.flowScore),a.set(c.startDate,g)}let n=e?4:7,o=r.map((c,g)=>{let _=r.slice(Math.max(0,g-n+1),g+1).flatMap(x=>a.get(x.key)??[]);return _.length>0?+(_.reduce((x,E)=>x+E,0)/_.length).toFixed(1):null}),l=e?"4-week":"7-day";return{grid:{left:48,right:16,top:16,bottom:64},tooltip:{trigger:"axis",formatter:c=>{let g=c[0].value;return g!=null?`${c[0].axisValue}<br/>Avg flow score (${l}): <b>${g}</b>`:`${c[0].axisValue}<br/>No data`}},xAxis:{type:"category",data:r.map(c=>c.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"score",min:0,max:10,nameTextStyle:{fontSize:11}},series:[{type:"line",data:o,smooth:!0,connectNulls:!1,itemStyle:{color:"#ab47bc"},areaStyle:{color:"rgba(171,71,188,0.1)"},lineStyle:{width:2},symbol:"circle",symbolSize:4}]}}function ee(i){let{buckets:r,activeVectors:t}=i,e={};for(let n of r)for(let[o,l]of Object.entries(n.minutesByVector))e[o]=(e[o]??0)+l;let a=t.filter(n=>(e[n.id]??0)>0).map(n=>({name:`${n.icon} ${n.name}`,value:e[n.id],itemStyle:{color:n.color||N}}));return{tooltip:{trigger:"item",formatter:n=>`${n.name}<br/><b>${n.value} min</b> (${n.percent}%)`},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:[{type:"pie",radius:["40%","70%"],center:["50%","44%"],data:a,label:{show:!1},emphasis:{label:{show:!0,fontSize:13,fontWeight:"bold"}}}]}}function ae(i){let{filteredRecords:r}=i,t=Array.from({length:7},()=>new Array(24).fill(0));for(let n of r){let o=new Date(n.startedAt),l=(o.getDay()+6)%7,c=o.getHours();t[l][c]+=n.sessionMinutes}let e=[];for(let n=0;n<7;n++)for(let o=0;o<24;o++)e.push([n,o,t[n][o]]);let a=Math.max(...e.map(n=>n[2]),1);return{tooltip:{formatter:n=>`${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][n.data[0]]} ${n.data[1]}:00<br/><b>${n.data[2]} min</b>`},grid:{left:48,right:80,top:8,bottom:32},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],splitArea:{show:!0},axisLabel:{fontSize:11}},yAxis:{type:"category",data:Array.from({length:24},(n,o)=>`${o}:00`),splitArea:{show:!0},inverse:!0,axisLabel:{fontSize:10}},visualMap:{min:0,max:a,calculable:!0,orient:"vertical",right:0,top:"center",textStyle:{fontSize:10},inRange:{color:["#e3f2fd","#0277bd"]}},series:[{type:"heatmap",data:e,label:{show:!1},emphasis:{itemStyle:{shadowBlur:6,shadowColor:"rgba(0,0,0,0.3)"}}}]}}function ne(i){let{filteredRecords:r}=i,t=new Array(7).fill(0);for(let e of r){let[a,n,o]=e.startDate.split("-").map(Number),l=(new Date(a,n-1,o).getDay()+6)%7;t[l]+=e.sessionMinutes}return{grid:{left:56,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} min</b>`},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLabel:{fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t.map((e,a)=>({value:e,itemStyle:{color:a>=5?"#ff8a65":"#42a5f5"}})),barMinHeight:1}]}}var Qt=[{label:"<15 min",min:0,max:15},{label:"15\u201330 min",min:15,max:30},{label:"30\u201345 min",min:30,max:45},{label:"45\u201360 min",min:45,max:60},{label:"60\u201390 min",min:60,max:90},{label:"90+ min",min:90,max:1/0}];function oe(i){let{filteredRecords:r}=i,t=Qt.map(e=>r.filter(a=>a.sessionMinutes>=e.min&&a.sessionMinutes<e.max).length);return{grid:{left:48,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} sessions</b>`},xAxis:{type:"category",data:Qt.map(e=>e.label),axisLabel:{fontSize:11}},yAxis:{type:"value",name:"sessions",minInterval:1,nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t,barMinHeight:1,itemStyle:{color:"#66bb6a"}}]}}function ie(i){let{filteredRecords:r,activeVectors:t}=i,e=new Map(t.map(o=>[o.id,o])),a=new Map;for(let o of r){let l=a.get(o.flowVectorId)??[];l.push([o.sessionMinutes,o.flowScore]),a.set(o.flowVectorId,l)}let n=[...a.entries()].map(([o,l])=>{let c=e.get(o);return{name:c?`${c.icon} ${c.name}`:o,type:"scatter",data:l,symbolSize:8,itemStyle:{color:c?.color||N}}});return{grid:{left:56,right:16,top:16,bottom:48},tooltip:{trigger:"item",formatter:o=>`${o.seriesName}<br/>Duration: <b>${o.data[0]} min</b><br/>Flow score: <b>${o.data[1]}</b>`},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},xAxis:{type:"value",name:"duration (min)",nameLocation:"end",nameTextStyle:{fontSize:11}},yAxis:{type:"value",name:"flow score",min:0,max:10,nameTextStyle:{fontSize:11}},series:n}}var H=class i{sessionService=u(At);vectorsService=u(Vt);habitsService=u($t);selectedRange=z("30d");today=new Date;_data=k(()=>Kt(this.sessionService.records(),this.vectorsService.allVectorsIncludingDeleted(),this.selectedRange(),this.today,this.habitsService.completions()));ptsChartOptions=k(()=>Xt(this._data()));timeChartOptions=k(()=>Yt(this._data()));flowScoreTrendOptions=k(()=>te(this._data()));vectorDonutOptions=k(()=>ee(this._data()));timeOfDayHeatmapOptions=k(()=>ae(this._data()));dayOfWeekOptions=k(()=>ne(this._data()));sessionLengthDistOptions=k(()=>oe(this._data()));scoreVsLengthOptions=k(()=>ie(this._data()));static \u0275fac=function(t){return new(t||i)};static \u0275prov=ut({token:i,factory:i.\u0275fac,providedIn:"root"})};var re=class i{stats=u(H);setRange(r){this.stats.selectedRange.set(r)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-statistics-page"]],features:[G([Zt({echarts:()=>import("./chunk-CAVARVDH.js")})])],decls:47,vars:9,consts:[[1,"p-6","flex","flex-col","gap-6","h-full","overflow-y-auto"],[1,"flex","items-center","justify-between","flex-wrap","gap-3"],[1,"text-2xl","font-semibold"],["hideSingleSelectionIndicator","",3,"change","value"],["value","7d"],["value","30d"],["value","100d"],["value","all"],[1,"flex","flex-col","gap-2"],[1,"text-sm","font-medium","text-gray-500","uppercase","tracking-wide"],["echarts","",1,"w-full",2,"height","320px",3,"options"],["echarts","",1,"w-full",2,"height","350px",3,"options"],["echarts","",1,"w-full",2,"height","300px",3,"options"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["echarts","",1,"w-full",2,"height","480px",3,"options"],["echarts","",1,"w-full",2,"height","280px",3,"options"]],template:function(t,e){t&1&&(h(0,"div",0)(1,"div",1)(2,"h1",2),f(3,"Statistics"),d(),h(4,"mat-button-toggle-group",3),T("change",function(n){return e.setRange(n.value)}),h(5,"mat-button-toggle",4),f(6,"7 days"),d(),h(7,"mat-button-toggle",5),f(8,"30 days"),d(),h(9,"mat-button-toggle",6),f(10,"100 days"),d(),h(11,"mat-button-toggle",7),f(12,"All time"),d()()(),h(13,"div",8)(14,"h2",9),f(15,"Points per day"),d(),y(16,"div",10),d(),h(17,"div",8)(18,"h2",9),f(19,"Focused time per day"),d(),y(20,"div",11),d(),h(21,"div",8)(22,"h2",9),f(23,"Flow score trend"),d(),y(24,"div",12),d(),h(25,"div",13)(26,"div",8)(27,"h2",9),f(28,"Time by vector"),d(),y(29,"div",10),d(),h(30,"div",8)(31,"h2",9),f(32,"By day of week"),d(),y(33,"div",10),d()(),h(34,"div",8)(35,"h2",9),f(36,"Time-of-day activity"),d(),y(37,"div",14),d(),h(38,"div",13)(39,"div",8)(40,"h2",9),f(41,"Session length distribution"),d(),y(42,"div",15),d(),h(43,"div",8)(44,"h2",9),f(45,"Score vs duration"),d(),y(46,"div",15),d()()()),t&2&&(p(4),b("value",e.stats.selectedRange()),p(12),b("options",e.stats.ptsChartOptions()),p(4),b("options",e.stats.timeChartOptions()),p(4),b("options",e.stats.flowScoreTrendOptions()),p(5),b("options",e.stats.vectorDonutOptions()),p(4),b("options",e.stats.dayOfWeekOptions()),p(4),b("options",e.stats.timeOfDayHeatmapOptions()),p(5),b("options",e.stats.sessionLengthDistOptions()),p(4),b("options",e.stats.scoreVsLengthOptions()))},dependencies:[jt,et,P,Wt],encapsulation:2})};export{re as StatisticsPage};
