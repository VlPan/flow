import{b as g,c as Zt,d as J}from"./chunk-YTWGIYY3.js";import{a as qt}from"./chunk-6DE6A3JR.js";import"./chunk-6HVXYOOW.js";import{a as Jt}from"./chunk-DR4LLQUI.js";import{a as Kt}from"./chunk-GSFP255H.js";import{b as Yt,e as Xt}from"./chunk-FSCV3ILM.js";import{a as Wt}from"./chunk-DEO7JB67.js";import{a as Nt}from"./chunk-HRIKEJJY.js";import{a as gt,c as E}from"./chunk-YAJUSSVU.js";import"./chunk-DBI47PQ7.js";import"./chunk-K66EXUFO.js";import{a as Vt}from"./chunk-O4AVKK6B.js";import"./chunk-NZFBIDF2.js";import{c as $,d as A,e as N,g as K,h as O,i as dt}from"./chunk-6PCWDHTS.js";import{$ as Gt,D as At,I as jt,T as Ft,W as ct,ea as Pt,fa as $t,ga as Ht,ha as Ut,ia as Qt}from"./chunk-YRQMQA3Q.js";import{$b as Rt,Bb as q,Ca as Ot,Cb as Tt,Db as Dt,Fa as U,Gc as k,Ib as f,Ic as zt,Jb as p,Jc as st,Kb as u,Kc as B,Lb as x,Pc as lt,Tc as M,U as xt,Wb as j,Y as Ct,Yb as Mt,Zb as Et,_a as y,_b as It,a as yt,aa as _t,ac as Bt,ba as kt,bc as nt,c as ft,ca as at,cc as it,e as vt,ea as P,g as et,ga as h,gc as Lt,i as St,ic as rt,lc as v,nb as W,ob as ot,pb as Q,ta as V,ua as wt,vc as Z,ya as H}from"./chunk-4P2YP4S6.js";import"./chunk-Q7L6LLAK.js";var Ie=["button"],Re=["*"];function Be(r,l){if(r&1&&(p(0,"div",2),x(1,"mat-pseudo-checkbox",6),u()),r&2){let t=Mt();y(),f("disabled",t.disabled)}}var te=new P("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ee=new P("MatButtonToggleGroup"),Le={provide:Vt,useExisting:_t(()=>ht),multi:!0},Y=class{source;value;constructor(l,t){this.source=l,this.value=t}},ht=(()=>{class r{_changeDetector=h(lt);_dir=h(Ht,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=h(ct).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new V;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new V;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=h(te,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Nt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||Ft(t))return;let a=t.target.id,o=this._buttonToggles.toArray().findIndex(i=>i.buttonId===a),n=null;switch(t.keyCode){case 32:case 13:n=this._buttonToggles.get(o)||null;break;case 38:n=this._getNextButton(o,-1);break;case 37:n=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:n=this._getNextButton(o,1);break;case 39:n=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}n&&(t.preventDefault(),n._onButtonClick(),n.focus())}_emitChangeEvent(t){let e=new Y(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,a=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,a)):this._updateModelValue(t,a)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let a=this._buttonToggles;for(let o=1;o<=a.length;o++){let n=(t+e*o+a.length)%a.length,i=a.get(n);if(i&&!i.disabled)return i}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(a=>a.tabIndex===-1)){for(let a of e)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let a of e)if(a.value===t){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Q({type:r,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,a,o){if(e&1&&Rt(o,X,5),e&2){let n;nt(n=it())&&(a._buttonToggles=n)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,a){e&1&&j("keydown",function(n){return a._keydown(n)}),e&2&&(q("role",a.multiple?"group":"radiogroup")("aria-disabled",a.disabled),rt("mat-button-toggle-vertical",a.vertical)("mat-button-toggle-group-appearance-standard",a.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",M],value:"value",multiple:[2,"multiple","multiple",M],disabled:[2,"disabled","disabled",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",M],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",M]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Z([Le,{provide:ee,useExisting:r}])]})}return r})(),X=(()=>{class r{_changeDetectorRef=h(lt);_elementRef=h(U);_focusMonitor=h(jt);_idGenerator=h(ct);_animationDisabled=Gt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new V;constructor(){h(At).load($t);let t=h(ee,{optional:!0}),e=h(new zt("tabindex"),{optional:!0})||"",a=h(te,{optional:!0});this._tabIndex=H(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=a&&a.appearance?a.appearance:"standard",this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new Y(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=W({type:r,selectors:[["mat-button-toggle"]],viewQuery:function(e,a){if(e&1&&Bt(Ie,5),e&2){let o;nt(o=it())&&(a._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,a){e&1&&j("focus",function(){return a.focus()}),e&2&&(q("aria-label",null)("aria-labelledby",null)("id",a.id)("name",null),rt("mat-button-toggle-standalone",!a.buttonToggleGroup)("mat-button-toggle-checked",a.checked)("mat-button-toggle-disabled",a.disabled)("mat-button-toggle-disabled-interactive",a.disabledInteractive)("mat-button-toggle-appearance-standard",a.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",M],appearance:"appearance",checked:[2,"checked","checked",M],disabled:[2,"disabled","disabled",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Re,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,a){if(e&1&&(Et(),p(0,"button",1,0),j("click",function(){return a._onButtonClick()}),Tt(2,Be,2,1,"div",2),p(3,"span",3),It(4),u()(),x(5,"span",4)(6,"span",5)),e&2){let o=Lt(1);f("id",a.buttonId)("disabled",a.disabled&&!a.disabledInteractive||null),q("role",a.isSingleSelector()?"radio":"button")("tabindex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("aria-pressed",a.isSingleSelector()?null:a.checked)("aria-checked",a.isSingleSelector()?a.checked:null)("name",a._getButtonName())("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),y(2),Dt(a.buttonToggleGroup&&(!a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideSingleSelectionIndicator||a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),y(4),f("matRippleTrigger",o)("matRippleDisabled",a.disableRipple||a.disabled)}},dependencies:[Pt,Wt],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return r})(),ae=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=ot({type:r});static \u0275inj=at({imports:[Qt,X,Ut]})}return r})();var oe=new P("NGX_ECHARTS_CONFIG"),pt=class{constructor(){this.subject=new et(1),this.subscriptions=new yt}doFilter(l){this.subject.next(l)}dispose(){this.subscriptions.unsubscribe()}notEmpty(l,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[l]){let a=e[l].currentValue;a!=null&&t(a)}}))}has(l,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[l]){let a=e[l].currentValue;t(a)}}))}notFirst(l,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[l]&&!e[l].isFirstChange()){let a=e[l].currentValue;t(a)}}))}notFirstAndEmpty(l,t){this.subscriptions.add(this.subject.subscribe(e=>{if(e[l]&&!e[l].isFirstChange()){let a=e[l].currentValue;a!=null&&t(a)}}))}},ne=(()=>{class r{constructor(){this.el=h(U),this.ngZone=h(wt),this.config=h(oe),this.options=B(null),this.theme=B(this.config.theme??null),this.initOpts=B(null),this.merge=B(null),this.autoResize=B(!0),this.loading=B(!1),this.loadingType=B("default"),this.loadingOpts=B(null),this.chartInit=st(),this.optionsError=st(),this.chartClick=g(this.createLazyEvent("click")),this.chartDblClick=g(this.createLazyEvent("dblclick")),this.chartMouseDown=g(this.createLazyEvent("mousedown")),this.chartMouseMove=g(this.createLazyEvent("mousemove")),this.chartMouseUp=g(this.createLazyEvent("mouseup")),this.chartMouseOver=g(this.createLazyEvent("mouseover")),this.chartMouseOut=g(this.createLazyEvent("mouseout")),this.chartGlobalOut=g(this.createLazyEvent("globalout")),this.chartContextMenu=g(this.createLazyEvent("contextmenu")),this.chartHighlight=g(this.createLazyEvent("highlight")),this.chartDownplay=g(this.createLazyEvent("downplay")),this.chartSelectChanged=g(this.createLazyEvent("selectchanged")),this.chartLegendSelectChanged=g(this.createLazyEvent("legendselectchanged")),this.chartLegendSelected=g(this.createLazyEvent("legendselected")),this.chartLegendUnselected=g(this.createLazyEvent("legendunselected")),this.chartLegendLegendSelectAll=g(this.createLazyEvent("legendselectall")),this.chartLegendLegendInverseSelect=g(this.createLazyEvent("legendinverseselect")),this.chartLegendScroll=g(this.createLazyEvent("legendscroll")),this.chartDataZoom=g(this.createLazyEvent("datazoom")),this.chartDataRangeSelected=g(this.createLazyEvent("datarangeselected")),this.chartGraphRoam=g(this.createLazyEvent("graphroam")),this.chartGeoRoam=g(this.createLazyEvent("georoam")),this.chartTreeRoam=g(this.createLazyEvent("treeroam")),this.chartTimelineChanged=g(this.createLazyEvent("timelinechanged")),this.chartTimelinePlayChanged=g(this.createLazyEvent("timelineplaychanged")),this.chartRestore=g(this.createLazyEvent("restore")),this.chartDataViewChanged=g(this.createLazyEvent("dataviewchanged")),this.chartMagicTypeChanged=g(this.createLazyEvent("magictypechanged")),this.chartGeoSelectChanged=g(this.createLazyEvent("geoselectchanged")),this.chartGeoSelected=g(this.createLazyEvent("geoselected")),this.chartGeoUnselected=g(this.createLazyEvent("geounselected")),this.chartAxisAreaSelected=g(this.createLazyEvent("axisareaselected")),this.chartBrush=g(this.createLazyEvent("brush")),this.chartBrushEnd=g(this.createLazyEvent("brushend")),this.chartBrushSelected=g(this.createLazyEvent("brushselected")),this.chartGlobalCursorTaken=g(this.createLazyEvent("globalcursortaken")),this.chartRendered=g(this.createLazyEvent("rendered")),this.chartFinished=g(this.createLazyEvent("finished")),this.animationFrameID=null,this.chart$=new et(1),this.resize$=new vt,this.changeFilter=new pt,this.resizeObFired=!1,this.echarts=this.config.echarts}ngOnChanges(t){this.changeFilter.doFilter(t)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(Ct(100,St,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize()&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(t=>{for(let e of t)e.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",t=>this.onOptionsChange(t)),this.changeFilter.notFirstAndEmpty("merge",t=>this.setOption(t)),this.changeFilter.has("loading",t=>this.toggleLoading(!!t)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(t){this.chart?t?this.chart.showLoading(this.loadingType(),this.loadingOpts()):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>t?e.showLoading(this.loadingType(),this.loadingOpts()):e.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(a){console.error(a),this.optionsError.emit(a)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let t=this.el.nativeElement;if(window&&window.getComputedStyle){let e=window.getComputedStyle(t,null).getPropertyValue("height");(!e||e==="0px")&&(!t.style.height||t.style.height==="0px")&&(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(t,this.theme()??this.config?.theme,this.initOpts())))}async initChart(){await this.onOptionsChange(this.options());let t=this.merge();t&&this.chart&&this.setOption(t)}async onOptionsChange(t){t&&(this.chart?this.setOption(this.options(),!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options(),!0)))}createLazyEvent(t){return Zt(this.chartInit).pipe(xt(e=>new ft(a=>(e.on(t,o=>this.ngZone.run(()=>a.next(o))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275dir=Q({type:r,selectors:[["echarts"],["","echarts",""]],inputs:{options:[1,"options"],theme:[1,"theme"],initOpts:[1,"initOpts"],merge:[1,"merge"],autoResize:[1,"autoResize"],loading:[1,"loading"],loadingType:[1,"loadingType"],loadingOpts:[1,"loadingOpts"]},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[Ot]})}}return r})();function ie(r){return{provide:oe,useValue:r}}var mt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function D(r,l){let t=new Date(r);return t.setDate(t.getDate()+l),t}function R(r){let l=new Date(r);return l.setHours(0,0,0,0),l}function le(r,l){let t=mt[r.getMonth()],e=r.getDate();return l?`${Ae[r.getDay()]} ${t} ${e}`:`${t} ${e}`}function ce(r,l){let t={},e={},a=0;for(let o of r){a+=J(o.sessionMinutes,o.flowScore),t[o.projectId]=(t[o.projectId]??0)+o.sessionMinutes;let n=l[o.projectId]??O;e[n]=(e[n]??0)+o.sessionMinutes}return{score:Math.round(a),minutesByVector:t,minutesByCategory:e}}function je(r,l,t,e,a,o){let n=new Map;for(let d of r){let C=n.get(d.startDate)??[];C.push(d),n.set(d.startDate,C)}let i=[],c=R(l),s=R(t);for(;c<=s;){let d=E(c),{score:C,minutesByVector:S,minutesByCategory:I}=ce(n.get(d)??[],o),m=a[d]??0;i.push({key:d,label:le(c,e),score:C,habitPts:m,minutesByVector:S,minutesByCategory:I}),c=D(c,1)}return i}function Fe(r,l,t,e,a){let o=[],n=R(gt(l)),i=R(t);for(;n<=i;){let c=D(n,6),s=E(n),d=E(c),C=r.filter(_=>_.startDate>=s&&_.startDate<=d),{score:S,minutesByVector:I,minutesByCategory:m}=ce(C,a),T=`${mt[n.getMonth()]} ${n.getDate()}`,w=Object.entries(e).filter(([_])=>_>=s&&_<=d).reduce((_,[,F])=>_+F,0);o.push({key:s,label:T,score:S,habitPts:w,minutesByVector:I,minutesByCategory:m}),n=D(n,7)}return o}function de(r,l,t,e,a,o=[]){let n=R(a),i,c=!1,s=Object.fromEntries(l.map(b=>[b.id,b.categoryId??O]));if(e==="7d")i=D(n,-6);else if(e==="30d")i=D(n,-29);else if(e==="100d")i=D(n,-99);else{if(r.length===0&&o.length===0)return{buckets:[],activeProjects:[],activeCategories:[],isWeekly:!1,filteredRecords:[]};let b=[...r.map(L=>L.startDate),...o.map(L=>L.date)],z=b.reduce((L,bt)=>bt<L?bt:L,b[0]);i=R(new Date(z)),c=Math.ceil((n.getTime()-i.getTime())/864e5)+1>60}let d=E(i),C=E(n),S=r.filter(b=>b.startDate>=d&&b.startDate<=C),I=Yt(o,d,C),m=c?Fe(S,i,n,I,s):je(S,i,n,e==="7d",I,s),T=new Set(m.flatMap(b=>Object.keys(b.minutesByVector).filter(z=>b.minutesByVector[z]>0))),w=l.filter(b=>T.has(b.id)),_=new Set(m.flatMap(b=>Object.keys(b.minutesByCategory).filter(z=>b.minutesByCategory[z]>0))),F=t.filter(b=>_.has(b.id));return{buckets:m,activeProjects:w,activeCategories:F,isWeekly:c,filteredRecords:S}}function ge(r){let{buckets:l}=r;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{let e=t.filter(o=>o.value>0).map(o=>`${o.marker}${o.seriesName}: <b>${o.value} pts</b>`),a=t.reduce((o,n)=>o+n.value,0);return`${t[0].axisValue}<br/>${e.join("<br/>")}<br/>Total: <b>${a} pts</b>`}},xAxis:{type:"category",data:l.map(t=>t.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"pts",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:[{name:"Flow pts",type:"bar",stack:"pts",data:l.map(t=>t.score),barMinHeight:1,itemStyle:{color:"#4FC3F7"}},{name:"Habit pts",type:"bar",stack:"pts",data:l.map(t=>t.habitPts),barMinHeight:1,itemStyle:{color:"#81C784"}}]}}function ue(r){let{buckets:l,activeCategories:t}=r;return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:e=>{let a=e.filter(n=>n.value>0).map(n=>`${n.marker}${n.seriesName}: <b>${n.value} min</b>`),o=e.reduce((n,i)=>n+i.value,0);return`${e[0].axisValue}<br/>${a.join("<br/>")}<br/>Total: <b>${o} min</b>`}},xAxis:{type:"category",data:l.map(e=>e.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},series:t.map(e=>({name:e.name,type:"bar",stack:"time",data:l.map(a=>a.minutesByCategory[e.id]??0),itemStyle:{color:e.color||K}}))}}function he(r){let{buckets:l,filteredRecords:t,isWeekly:e}=r,a=new Map;for(let c of t){let s=a.get(c.startDate)??[];s.push(c.flowScore),a.set(c.startDate,s)}let o=e?4:7,n=l.map((c,s)=>{let C=l.slice(Math.max(0,s-o+1),s+1).flatMap(S=>a.get(S.key)??[]);return C.length>0?+(C.reduce((S,I)=>S+I,0)/C.length).toFixed(1):null}),i=e?"4-week":"7-day";return{grid:{left:48,right:16,top:16,bottom:64},tooltip:{trigger:"axis",formatter:c=>{let s=c[0].value;return s!=null?`${c[0].axisValue}<br/>Avg flow score (${i}): <b>${s}</b>`:`${c[0].axisValue}<br/>No data`}},xAxis:{type:"category",data:l.map(c=>c.label),axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"score",min:0,max:10,nameTextStyle:{fontSize:11}},series:[{type:"line",data:n,smooth:!0,connectNulls:!1,itemStyle:{color:"#ab47bc"},areaStyle:{color:"rgba(171,71,188,0.1)"},lineStyle:{width:2},symbol:"circle",symbolSize:4}]}}function pe(r){let{buckets:l,activeProjects:t}=r,e={};for(let o of l)for(let[n,i]of Object.entries(o.minutesByVector))e[n]=(e[n]??0)+i;let a=t.filter(o=>(e[o.id]??0)>0).map(o=>({project:o,minutes:e[o.id]})).sort((o,n)=>o.minutes-n.minutes);return{grid:{left:130,right:24,top:16,bottom:32},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:o=>`${o[0].axisValue}<br/><b>${o[0].value} min</b>`},xAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},yAxis:{type:"category",data:a.map(o=>`${o.project.icon} ${o.project.name}`),axisLabel:{fontSize:11}},series:[{type:"bar",data:a.map(o=>({value:o.minutes,itemStyle:{color:o.project.color||N}})),barMinHeight:1}]}}function me(r){let{filteredRecords:l}=r,t=Array.from({length:7},()=>new Array(24).fill(0));for(let o of l){let n=new Date(o.startedAt),i=(n.getDay()+6)%7,c=n.getHours();t[i][c]+=o.sessionMinutes}let e=[];for(let o=0;o<7;o++)for(let n=0;n<24;n++)e.push([o,n,t[o][n]]);let a=Math.max(...e.map(o=>o[2]),1);return{tooltip:{formatter:o=>`${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][o.data[0]]} ${o.data[1]}:00<br/><b>${o.data[2]} min</b>`},grid:{left:48,right:80,top:8,bottom:32},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],splitArea:{show:!0},axisLabel:{fontSize:11}},yAxis:{type:"category",data:Array.from({length:24},(o,n)=>`${n}:00`),splitArea:{show:!0},inverse:!0,axisLabel:{fontSize:10}},visualMap:{min:0,max:a,calculable:!0,orient:"vertical",right:0,top:"center",textStyle:{fontSize:10},inRange:{color:["#e3f2fd","#0277bd"]}},series:[{type:"heatmap",data:e,label:{show:!1},emphasis:{itemStyle:{shadowBlur:6,shadowColor:"rgba(0,0,0,0.3)"}}}]}}function be(r){let{filteredRecords:l}=r,t=new Array(7).fill(0);for(let e of l){let[a,o,n]=e.startDate.split("-").map(Number),i=(new Date(a,o-1,n).getDay()+6)%7;t[i]+=e.sessionMinutes}return{grid:{left:56,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} min</b>`},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLabel:{fontSize:11}},yAxis:{type:"value",name:"min",nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t.map((e,a)=>({value:e,itemStyle:{color:a>=5?"#ff8a65":"#42a5f5"}})),barMinHeight:1}]}}var re=[{label:"<15 min",min:0,max:15},{label:"15\u201330 min",min:15,max:30},{label:"30\u201345 min",min:30,max:45},{label:"45\u201360 min",min:45,max:60},{label:"60\u201390 min",min:60,max:90},{label:"90+ min",min:90,max:1/0}];function ye(r){let{filteredRecords:l}=r,t=re.map(e=>l.filter(a=>a.sessionMinutes>=e.min&&a.sessionMinutes<e.max).length);return{grid:{left:48,right:16,top:16,bottom:40},tooltip:{trigger:"axis",formatter:e=>`${e[0].axisValue}<br/><b>${e[0].value} sessions</b>`},xAxis:{type:"category",data:re.map(e=>e.label),axisLabel:{fontSize:11}},yAxis:{type:"value",name:"sessions",minInterval:1,nameTextStyle:{fontSize:11}},series:[{type:"bar",data:t,barMinHeight:1,itemStyle:{color:"#66bb6a"}}]}}function fe(r){let{filteredRecords:l,activeProjects:t}=r,e=new Map(t.map(n=>[n.id,n])),a=new Map;for(let n of l){let i=a.get(n.projectId)??[];i.push([n.sessionMinutes,n.flowScore]),a.set(n.projectId,i)}let o=[...a.entries()].map(([n,i])=>{let c=e.get(n);return{name:c?`${c.icon} ${c.name}`:n,type:"scatter",data:i,symbolSize:8,itemStyle:{color:c?.color||N}}});return{grid:{left:56,right:16,top:16,bottom:48},tooltip:{trigger:"item",formatter:n=>`${n.seriesName}<br/>Duration: <b>${n.data[0]} min</b><br/>Flow score: <b>${n.data[1]}</b>`},legend:{bottom:0,type:"scroll",textStyle:{fontSize:11}},xAxis:{type:"value",name:"duration (min)",nameLocation:"end",nameTextStyle:{fontSize:11}},yAxis:{type:"value",name:"flow score",min:0,max:10,nameTextStyle:{fontSize:11}},series:o}}function ve(r){let{filteredRecords:l,activeProjects:t}=r,e=new Map(t.map(i=>[i.id,i])),a={},o={};for(let i of l)a[i.projectId]=(a[i.projectId]??0)+i.flowScore*i.sessionMinutes,o[i.projectId]=(o[i.projectId]??0)+i.sessionMinutes;let n=[];for(let[i,c]of Object.entries(o)){if(c===0)continue;let s=+(a[i]/c).toFixed(2);if(i===$)n.push({label:`${A.icon} ${A.name}`,quality:s,color:A.color});else{let d=e.get(i);d&&n.push({label:`${d.icon} ${d.name}`,quality:s,color:d.color||N})}}return n.sort((i,c)=>i.quality-c.quality),{grid:{left:130,right:24,top:16,bottom:32},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:i=>`${i[0].axisValue}<br/><b>${i[0].value}</b> / 10`},xAxis:{type:"value",name:"avg score",min:0,max:10,nameTextStyle:{fontSize:11}},yAxis:{type:"category",data:n.map(i=>i.label),axisLabel:{fontSize:11}},series:[{type:"bar",data:n.map(i=>({value:i.quality,itemStyle:{color:i.color}})),barMinHeight:1}]}}function Se(r){let{filteredRecords:l,activeProjects:t,activeCategories:e}=r,a=new Map(t.map(s=>[s.id,s.categoryId??O])),o={},n={};for(let s of l){let d=s.projectId===$?O:a.get(s.projectId)??O;o[d]=(o[d]??0)+s.flowScore*s.sessionMinutes,n[d]=(n[d]??0)+s.sessionMinutes}let i=[...e];(n[O]??0)>0&&!i.find(s=>s.id===O)&&i.push(dt);let c=i.filter(s=>(n[s.id]??0)>0).map(s=>({category:s,quality:+(o[s.id]/n[s.id]).toFixed(2)})).sort((s,d)=>s.quality-d.quality);return{grid:{left:130,right:24,top:16,bottom:32},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:s=>`${s[0].axisValue}<br/><b>${s[0].value}</b> / 10`},xAxis:{type:"value",name:"avg score",min:0,max:10,nameTextStyle:{fontSize:11}},yAxis:{type:"category",data:c.map(s=>s.category.name),axisLabel:{fontSize:11}},series:[{type:"bar",data:c.map(s=>({value:s.quality,itemStyle:{color:s.category.color||K}})),barMinHeight:1}]}}function xe(r){let{filteredRecords:l,activeProjects:t}=r,e=new Map(t.map(i=>[i.id,i])),a={},o={};for(let i of l)a[i.projectId]=(a[i.projectId]??0)+J(i.sessionMinutes,i.flowScore),o[i.projectId]=(o[i.projectId]??0)+1;let n=[];for(let[i,c]of Object.entries(o)){if(c===0)continue;let s=+(a[i]/c).toFixed(2);if(i===$)n.push({label:`${A.icon} ${A.name}`,score:s,color:A.color});else{let d=e.get(i);d&&n.push({label:`${d.icon} ${d.name}`,score:s,color:d.color||N})}}return n.sort((i,c)=>i.score-c.score),{grid:{left:130,right:24,top:16,bottom:32},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:i=>`${i[0].axisValue}<br/><b>${i[0].value} pts/session</b>`},xAxis:{type:"value",name:"avg pts/session",nameTextStyle:{fontSize:11}},yAxis:{type:"category",data:n.map(i=>i.label),axisLabel:{fontSize:11}},series:[{type:"bar",data:n.map(i=>({value:i.score,itemStyle:{color:i.color}})),barMinHeight:1}]}}function Ce(r){let{filteredRecords:l,activeProjects:t,activeCategories:e}=r,a=new Map(t.map(s=>[s.id,s.categoryId??O])),o={},n={};for(let s of l){let d=s.projectId===$?O:a.get(s.projectId)??O;o[d]=(o[d]??0)+J(s.sessionMinutes,s.flowScore),n[d]=(n[d]??0)+1}let i=[...e];(n[O]??0)>0&&!i.find(s=>s.id===O)&&i.push(dt);let c=i.filter(s=>(n[s.id]??0)>0).map(s=>({category:s,score:+(o[s.id]/n[s.id]).toFixed(2)})).sort((s,d)=>s.score-d.score);return{grid:{left:130,right:24,top:16,bottom:32},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:s=>`${s[0].axisValue}<br/><b>${s[0].value} pts/session</b>`},xAxis:{type:"value",name:"avg pts/session",nameTextStyle:{fontSize:11}},yAxis:{type:"category",data:c.map(s=>s.category.name),axisLabel:{fontSize:11}},series:[{type:"bar",data:c.map(s=>({value:s.score,itemStyle:{color:s.category.color||K}})),barMinHeight:1}]}}function _e(r,l,t){let e=R(t),a,o=!1;if(l==="7d")a=D(e,-6);else if(l==="30d")a=D(e,-29);else if(l==="100d")a=D(e,-99);else{if(r.length===0)return{grid:{left:56,right:16,top:16,bottom:64},xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"pts"},series:[{type:"bar",data:[]}]};let m=r.map(w=>w.date).reduce((w,_)=>_<w?_:w);a=R(new Date(m)),o=Math.ceil((e.getTime()-a.getTime())/864e5)+1>60}let n=E(a),i=E(e),c=r.filter(m=>m.date>=n&&m.date<=i);if(o){let m=[],T=R(gt(a));for(;T<=e;){let w=D(T,6),_=E(T),F=E(w),b=c.filter(G=>G.date>=_&&G.date<=F).reduce((G,L)=>G+L.points,0),z=`${mt[T.getMonth()]} ${T.getDate()}`;m.push({key:_,label:z,pts:b}),T=D(T,7)}return se(m.map(w=>w.label),m.map(w=>w.pts))}let s=new Map;for(let m of c)s.set(m.date,(s.get(m.date)??0)+m.points);let d=[],C=[],S=R(a),I=l==="7d";for(;S<=e;){let m=E(S);d.push(le(S,I)),C.push(s.get(m)??0),S=D(S,1)}return se(d,C)}function se(r,l){return{grid:{left:56,right:16,top:16,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>`${t[0].axisValue}<br/>${t[0].marker}Task rewards: <b>${t[0].value} pts</b>`},xAxis:{type:"category",data:r,axisLabel:{rotate:40,fontSize:11}},yAxis:{type:"value",name:"pts",nameTextStyle:{fontSize:11}},series:[{name:"Task rewards",type:"bar",data:l,barMinHeight:1,itemStyle:{color:"#ffb300"}}]}}var tt=class r{sessionService=h(qt);projectsService=h(Kt);habitsService=h(Xt);categoriesService=h(Jt);selectedRange=H("30d");today=new Date;_data=k(()=>de(this.sessionService.records(),this.projectsService.allProjectsIncludingDeleted(),this.categoriesService.allCategoriesIncludingDeleted(),this.selectedRange(),this.today,this.habitsService.completions()));ptsChartOptions=k(()=>ge(this._data()));timeChartOptions=k(()=>ue(this._data()));flowScoreTrendOptions=k(()=>he(this._data()));projectBarOptions=k(()=>pe(this._data()));timeOfDayHeatmapOptions=k(()=>me(this._data()));dayOfWeekOptions=k(()=>be(this._data()));sessionLengthDistOptions=k(()=>ye(this._data()));scoreVsLengthOptions=k(()=>fe(this._data()));taskClaimsOptions=k(()=>_e(this.projectsService.claimRecords(),this.selectedRange(),this.today));scoreByProjectOptions=k(()=>xe(this._data()));scoreByCategoryOptions=k(()=>Ce(this._data()));flowQualityByProjectOptions=k(()=>ve(this._data()));flowQualityByCategoryOptions=k(()=>Se(this._data()));static \u0275fac=function(t){return new(t||r)};static \u0275prov=kt({token:r,factory:r.\u0275fac,providedIn:"root"})};var ke=class r{stats=h(tt);setRange(l){this.stats.selectedRange.set(l)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=W({type:r,selectors:[["app-statistics-page"]],features:[Z([ie({echarts:()=>import("./chunk-CAVARVDH.js")})])],decls:69,vars:14,consts:[[1,"p-6","flex","flex-col","gap-6","h-full","overflow-y-auto"],[1,"flex","items-center","justify-between","flex-wrap","gap-3"],[1,"text-2xl","font-semibold"],["hideSingleSelectionIndicator","",3,"change","value"],["value","7d"],["value","30d"],["value","100d"],["value","all"],[1,"flex","flex-col","gap-2"],[1,"text-sm","font-medium","text-gray-500","uppercase","tracking-wide"],["echarts","",1,"w-full",2,"height","320px",3,"options"],["echarts","",1,"w-full",2,"height","350px",3,"options"],["echarts","",1,"w-full",2,"height","300px",3,"options"],["echarts","",1,"w-full",2,"height","280px",3,"options"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6"],["echarts","",1,"w-full",2,"height","480px",3,"options"]],template:function(t,e){t&1&&(p(0,"div",0)(1,"div",1)(2,"h1",2),v(3,"Statistics"),u(),p(4,"mat-button-toggle-group",3),j("change",function(o){return e.setRange(o.value)}),p(5,"mat-button-toggle",4),v(6,"7 days"),u(),p(7,"mat-button-toggle",5),v(8,"30 days"),u(),p(9,"mat-button-toggle",6),v(10,"100 days"),u(),p(11,"mat-button-toggle",7),v(12,"All time"),u()()(),p(13,"div",8)(14,"h2",9),v(15,"Points per day"),u(),x(16,"div",10),u(),p(17,"div",8)(18,"h2",9),v(19,"Focused time per day"),u(),x(20,"div",11),u(),p(21,"div",8)(22,"h2",9),v(23,"Flow score trend"),u(),x(24,"div",12),u(),p(25,"div",8)(26,"h2",9),v(27,"Task rewards per day"),u(),x(28,"div",13),u(),p(29,"div",14)(30,"div",8)(31,"h2",9),v(32,"Time by project"),u(),x(33,"div",10),u(),p(34,"div",8)(35,"h2",9),v(36,"By day of week"),u(),x(37,"div",10),u()(),p(38,"div",14)(39,"div",8)(40,"h2",9),v(41,"Flow score by project"),u(),x(42,"div",12),u(),p(43,"div",8)(44,"h2",9),v(45,"Flow score by category"),u(),x(46,"div",12),u()(),p(47,"div",14)(48,"div",8)(49,"h2",9),v(50,"Flow quality by project"),u(),x(51,"div",12),u(),p(52,"div",8)(53,"h2",9),v(54,"Flow quality by category"),u(),x(55,"div",12),u()(),p(56,"div",8)(57,"h2",9),v(58,"Time-of-day activity"),u(),x(59,"div",15),u(),p(60,"div",14)(61,"div",8)(62,"h2",9),v(63,"Session length distribution"),u(),x(64,"div",13),u(),p(65,"div",8)(66,"h2",9),v(67,"Score vs duration"),u(),x(68,"div",13),u()()()),t&2&&(y(4),f("value",e.stats.selectedRange()),y(12),f("options",e.stats.ptsChartOptions()),y(4),f("options",e.stats.timeChartOptions()),y(4),f("options",e.stats.flowScoreTrendOptions()),y(4),f("options",e.stats.taskClaimsOptions()),y(5),f("options",e.stats.projectBarOptions()),y(4),f("options",e.stats.dayOfWeekOptions()),y(5),f("options",e.stats.scoreByProjectOptions()),y(4),f("options",e.stats.scoreByCategoryOptions()),y(5),f("options",e.stats.flowQualityByProjectOptions()),y(4),f("options",e.stats.flowQualityByCategoryOptions()),y(4),f("options",e.stats.timeOfDayHeatmapOptions()),y(5),f("options",e.stats.sessionLengthDistOptions()),y(4),f("options",e.stats.scoreVsLengthOptions()))},dependencies:[ae,ht,X,ne],encapsulation:2})};export{ke as StatisticsPage};
