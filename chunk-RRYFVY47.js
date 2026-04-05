import{a as Xt,b as Ut,c as Wt,d as Qt,e as Yt,f as Jt,g as Zt,h as te,i as ee}from"./chunk-E4YFM5TL.js";import{a as ne,b as oe}from"./chunk-2U2OZL2N.js";import{a as Rt,b as Vt,c as Ot,d as Bt,e as $t,f as Lt,g as qt}from"./chunk-2TZC4KYD.js";import"./chunk-RQMHYQMU.js";import{a as zt,b as Kt}from"./chunk-PXEEL6LM.js";import"./chunk-AIPHN6GM.js";import{a as bt}from"./chunk-GN6G73HY.js";import{b as R,c as mt,g as V,h as O,k as B,l as $}from"./chunk-OWQIC37J.js";import{A as jt,C as w,D as S,E,F as k,a as Nt,b as C,c as M,y as D,z as I}from"./chunk-ZGOCZXOM.js";import{a as At,b as Gt}from"./chunk-V4OJYAIF.js";import{a as ie,c as _t,d as ct,e as ae}from"./chunk-C2FCK3IW.js";import"./chunk-SKUHKIVW.js";import"./chunk-2TXXKFHM.js";import"./chunk-HNKFBZBO.js";import"./chunk-QVTOQB4T.js";import"./chunk-K66EXUFO.js";import{b as N,d as v,f as j,g as tt,i as Ft,j as et,k as it,n as at,o as nt,p as Pt,q as ot,r as rt,s as lt,t as Tt,u as dt}from"./chunk-ORFEZIGP.js";import"./chunk-SWIXLFUM.js";import"./chunk-ZHLFS4SL.js";import{ea as It,h as Z}from"./chunk-TZ4366YQ.js";import{Ab as Dt,Bb as g,Cb as b,Eb as wt,Ec as J,Fb as H,Gb as F,Hb as f,Ib as n,Jb as i,Kb as T,Rb as P,Vb as m,Xb as s,Yb as St,Za as d,Zb as Et,ba as xt,da as yt,fa as p,fc as gt,hc as A,ka as x,kc as r,la as y,lc as u,mb as _,mc as h,nb as vt,nc as kt,ob as Ct,oc as Ht,sb as Mt,wc as Q,xa as W,yc as Y}from"./chunk-YQKOKR5B.js";import"./chunk-Q7L6LLAK.js";var ue=["*"];var fe=new yt("MAT_CARD_CONFIG"),re=(()=>{class a{appearance;constructor(){let t=p(fe,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=_({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(o,l){o&2&&A("mat-mdc-card-outlined",l.appearance==="outlined")("mdc-card--outlined",l.appearance==="outlined")("mat-mdc-card-filled",l.appearance==="filled")("mdc-card--filled",l.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ue,decls:1,vars:0,template:function(o,l){o&1&&(St(),Et(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return a})();var le=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275dir=Ct({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var de=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=vt({type:a});static \u0275inj=xt({imports:[It]})}return a})();function be(a,e){a&1&&(n(0,"mat-error"),r(1,"Name is required"),i())}var q=class a{fb=p(lt);dialogRef=p(D);data=p(I);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",v.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(n(0,"h2",0),r(1),i(),n(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Group name"),i(),T(7,"input",3),g(8,be,2,0,"mat-error"),i()()(),n(9,"mat-dialog-actions",4)(10,"button",5),m("click",function(){return o.cancel()}),r(11,"Cancel"),i(),n(12,"button",6),m("click",function(){return o.save()}),r(13),i()()),t&2){let l;d(),u(o.isEditMode?"Edit Group":"Add Group"),d(2),f("formGroup",o.form),d(5),b((l=o.form.get("name"))!=null&&l.invalid&&((l=o.form.get("name"))!=null&&l.touched)?8:-1),d(4),f("disabled",o.form.invalid),d(),h(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[dt,et,N,j,tt,rt,nt,at,k,w,E,S,O,V,R,mt,$,B,M,C],encapsulation:2})};var _e=(a,e)=>e.id;function he(a,e){a&1&&(n(0,"mat-error"),r(1,"Name is required"),i())}function xe(a,e){if(a&1&&(n(0,"mat-option",6),r(1),i()),a&2){let t=e.$implicit;f("value",t.id),d(),u(t.name)}}function ye(a,e){a&1&&(n(0,"mat-error"),r(1,"Must be at least 1"),i())}function ve(a,e){a&1&&(n(0,"mat-error"),r(1,"Enter a value between 1 and 7"),i())}function Ce(a,e){a&1&&(n(0,"mat-error"),r(1,"Must be at least 1"),i())}var X=class a{fb=p(lt);dialogRef=p(D);data=p(I);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",v.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",v.required],basePoints:[this.data.habit?.basePoints??10,[v.required,v.min(1)]],frequency:[this.data.habit?.frequency??3,[v.required,v.min(1),v.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[v.required,v.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let e=this.form.getRawValue();this.dialogRef.close({name:e.name,emoji:e.emoji||void 0,groupId:e.groupId,basePoints:e.basePoints,frequency:e.frequency,masteryRewardPoints:e.masteryRewardPoints,withCompletionScore:e.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-habit-form"]],decls:42,vars:8,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(n(0,"h2",0),r(1),i(),n(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Name"),i(),T(7,"input",3),g(8,he,2,0,"mat-error"),i(),n(9,"mat-form-field",2)(10,"mat-label"),r(11,"Emoji (optional)"),i(),T(12,"input",4),i(),n(13,"mat-form-field",2)(14,"mat-label"),r(15,"Group"),i(),n(16,"mat-select",5),H(17,xe,2,2,"mat-option",6,_e),i()(),n(19,"mat-form-field",2)(20,"mat-label"),r(21,"Base points per completion"),i(),T(22,"input",7),g(23,ye,2,0,"mat-error"),i(),n(24,"div",8)(25,"mat-slide-toggle",9),r(26," With completion score "),i()(),n(27,"mat-form-field",2)(28,"mat-label"),r(29,"Frequency (times per week, 1\u20137)"),i(),T(30,"input",10),g(31,ve,2,0,"mat-error"),i(),n(32,"mat-form-field",2)(33,"mat-label"),r(34,"Mastery reward points"),i(),T(35,"input",11),g(36,Ce,2,0,"mat-error"),i()()(),n(37,"mat-dialog-actions",12)(38,"button",13),m("click",function(){return o.cancel()}),r(39,"Cancel"),i(),n(40,"button",14),m("click",function(){return o.save()}),r(41),i()()),t&2){let l,c,G,U;d(),u(o.isEditMode?"Edit Habit":"Add Habit"),d(2),f("formGroup",o.form),d(5),b((l=o.form.get("name"))!=null&&l.invalid&&((l=o.form.get("name"))!=null&&l.touched)?8:-1),d(9),F(o.groups),d(6),b((c=o.form.get("basePoints"))!=null&&c.invalid&&((c=o.form.get("basePoints"))!=null&&c.touched)?23:-1),d(8),b((G=o.form.get("frequency"))!=null&&G.invalid&&((G=o.form.get("frequency"))!=null&&G.touched)?31:-1),d(5),b((U=o.form.get("masteryRewardPoints"))!=null&&U.invalid&&((U=o.form.get("masteryRewardPoints"))!=null&&U.touched)?36:-1),d(4),f("disabled",o.form.invalid),d(),h(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[dt,et,N,it,j,tt,rt,ot,Pt,nt,at,k,w,E,S,O,V,R,mt,$,B,qt,Lt,$t,M,C,oe,ne],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function Me(a,e){if(a&1&&(n(0,"p"),r(1," This habit has earned "),n(2,"strong"),r(3),Q(4,"number"),i(),r(5," in total. What would you like to do with them? "),i()),a&2){let t=s();d(3),h("",Y(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var pt=class a{dialogRef=p(D);data=p(I);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,o){t&1&&(n(0,"h2",0),r(1,"Delete Habit"),i(),n(2,"mat-dialog-content")(3,"p"),r(4," Delete "),n(5,"strong"),r(6),i(),r(7,"? "),i(),g(8,Me,6,4,"p"),i(),n(9,"mat-dialog-actions",1)(10,"button",2),m("click",function(){return o.dialogRef.close()}),r(11,"Cancel"),i(),n(12,"button",2),m("click",function(){return o.dialogRef.close("keep-points")}),r(13,"Keep Points"),i(),n(14,"button",3),m("click",function(){return o.dialogRef.close("remove-points")}),r(15," Delete & Remove Points "),i()()),t&2&&(d(6),u(o.data.habitName),d(2),b(o.data.pointsEarned>0?8:-1))},dependencies:[k,w,E,S,M,C,Z],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var ut=class a{dialogRef=p(D);data=p(I);amount=W(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){t&1&&(n(0,"h2",0),r(1,"\u{1F3C6} Habit Mastered!"),i(),n(2,"mat-dialog-content")(3,"p"),r(4," You've mastered "),n(5,"strong"),r(6),i(),r(7,". Claim your reward points: "),i(),n(8,"mat-form-field",1)(9,"mat-label"),r(10,"Reward points"),i(),n(11,"input",2),m("ngModelChange",function(c){return o.amount.set(+c)}),i()()(),n(12,"mat-dialog-actions",3)(13,"button",4),m("click",function(){return o.dialogRef.close()}),r(14,"Cancel"),i(),n(15,"button",5),m("click",function(){return o.confirm()}),r(16),i()()),t&2&&(d(6),u(o.data.habitName),d(5),f("ngModel",o.amount()),d(4),f("disabled",o.amount()<=0),d(),h(" Claim ",o.amount()," pts "))},dependencies:[Tt,N,it,j,ot,Ft,k,w,E,S,O,V,R,$,B,M,C],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var De=(a,e)=>e.value;function we(a,e){if(a&1){let t=P();n(0,"button",5),m("click",function(){let l=x(t).$implicit,c=s();return y(c.select(l.value))}),n(1,"span",6),r(2),i(),n(3,"span",7),r(4),i()()}if(a&2){let t=e.$implicit,o=s();A("selected",o.selected()===t.value),Dt("aria-label",t.label),d(2),u(t.emoji),d(2),u(t.label)}}var Se=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],ft=class a{dialogRef=p(D);scores=Se;selected=W(3);select(e){this.selected.set(e)}confirm(){this.dialogRef.close(this.selected())}onKey(e){let t=parseInt(e.key,10);t>=1&&t<=5?this.selected.set(t):e.key==="Enter"&&(e.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,o){t&1&&m("keydown",function(c){return o.onKey(c)})},decls:9,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],["align","end"],["mat-flat-button","",3,"click"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,o){t&1&&(n(0,"h2",0),r(1,"Rate your Habit"),i(),n(2,"mat-dialog-content")(3,"div",1),H(4,we,5,5,"button",2,De),i()(),n(6,"mat-dialog-actions",3)(7,"button",4),m("click",function(){return o.confirm()}),r(8,"Confirm"),i()()),t&2&&(d(4),F(o.scores))},dependencies:[k,w,E,S,M,C],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var ht=(a,e)=>e.id;function Ee(a,e){if(a&1){let t=P();n(0,"button",16),m("click",function(){x(t);let l=s().$implicit,c=s();return y(c.deleteGroup(l))}),n(1,"mat-icon"),r(2,"delete"),i(),r(3," Delete group "),i()}}function ke(a,e){a&1&&(n(0,"p",18),r(1,"No habits yet. Click + to add one."),i())}function He(a,e){if(a&1&&(n(0,"span",23),r(1),i()),a&2){let t=s().$implicit;d(),u(t.emoji)}}function Fe(a,e){if(a&1&&(n(0,"span",29),r(1),i()),a&2){let t=s().$implicit,o=s(2);d(),u(o.todayScoreEmoji(t.id))}}function Pe(a,e){if(a&1){let t=P();n(0,"button",32),m("click",function(){let l=x(t).$implicit,c=s().$implicit,G=s(2);return y(G.toggleHabitCompletion(c,l))}),r(1),i()}if(a&2){let t=e.$implicit,o=s().$implicit,l=s(2);A("day-chip-checked",l.habits.isCompleted(o.id,t))("day-chip-scored",o.withCompletionScore&&!l.habits.isCompleted(o.id,t)),f("title",l.dayLabel(t)),d(),u(l.dayInitial(t))}}function Te(a,e){if(a&1){let t=P();n(0,"div",19)(1,"mat-checkbox",20),m("change",function(){let l=x(t).$implicit,c=s(2);return y(c.toggleHabitCompletion(l,c.today()))}),i(),n(2,"div",21)(3,"div",22),g(4,He,2,1,"span",23),n(5,"span",24),r(6),i()(),n(7,"div",25)(8,"span",26),r(9),i(),n(10,"span",27),r(11),i(),n(12,"span",28),r(13),i(),g(14,Fe,2,1,"span",29),i()(),n(15,"div",30),H(16,Pe,2,6,"button",31,wt),n(18,"button",15)(19,"mat-icon"),r(20,"more_vert"),i()(),n(21,"mat-menu",null,1)(23,"button",16),m("click",function(){let l=x(t).$implicit,c=s(2);return y(c.editHabit(l))}),n(24,"mat-icon"),r(25,"edit"),i(),r(26," Edit "),i(),n(27,"button",16),m("click",function(){let l=x(t).$implicit,c=s(2);return y(c.deleteHabit(l))}),n(28,"mat-icon"),r(29,"delete"),i(),r(30," Delete "),i()()()()}if(a&2){let t=e.$implicit,o=gt(22),l=s(2);d(),f("checked",l.habits.isCompleted(t.id,l.today())),d(3),b(t.emoji?4:-1),d(),f("title",t.name),d(),u(t.name),d(3),Ht(" (",t.basePoints,"pts) ",l.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),f("title","Streak: "+l.habits.getSticks(t.id)+"/7 (+"+l.habits.getSticks(t.id)*10+"%)"),d(),h("\u{1F525} ",l.habits.getSticks(t.id)),d(),A("mastery-low",l.masteryPercent(t)<50)("mastery-mid",l.masteryPercent(t)>=50&&l.masteryPercent(t)<80)("mastery-high",l.masteryPercent(t)>=80),f("title","Mastery: "+l.masteryPercent(t)+"%"),d(),h("",l.masteryPercent(t),"%"),d(),b(l.todayScoreEmoji(t.id)?14:-1),d(2),F(l.last7Days()),d(2),f("matMenuTriggerFor",o)}}function Ie(a,e){if(a&1){let t=P();n(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header")(2,"mat-panel-title",12)(3,"span",13),r(4),i(),n(5,"span",14),m("click",function(l){return l.stopPropagation()}),n(6,"button",15)(7,"mat-icon"),r(8,"more_vert"),i()(),n(9,"mat-menu",null,0)(11,"button",16),m("click",function(){let l=x(t).$implicit,c=s();return y(c.addHabit(l.id))}),n(12,"mat-icon"),r(13,"add"),i(),r(14," Add habit "),i(),n(15,"button",16),m("click",function(){let l=x(t).$implicit,c=s();return y(c.editGroup(l))}),n(16,"mat-icon"),r(17,"edit"),i(),r(18," Edit group "),i(),g(19,Ee,4,0,"button",17),i()()()(),g(20,ke,2,0,"p",18),H(21,Te,31,19,"div",19,ht),i()}if(a&2){let t=e.$implicit,o=gt(10),l=s();d(4),u(t.name),d(2),f("matMenuTriggerFor",o),d(13),b(t.id!==l.othersGroupId?19:-1),d(),b(l.habitsForGroup(t.id).length===0?20:-1),d(),F(l.habitsForGroup(t.id))}}function Ae(a,e){if(a&1&&r(0),a&2){let t=s();h("Mastered (",t.habits.masteredHabits().length,")")}}function Ge(a,e){a&1&&(n(0,"p",10),r(1,"No mastered habits yet. Keep going!"),i())}function Ne(a,e){if(a&1&&(n(0,"span",34),r(1),i()),a&2){let t=s().$implicit;d(),u(t.emoji)}}function je(a,e){if(a&1){let t=P();n(0,"button",43),m("click",function(){x(t);let l=s().$implicit,c=s(2);return y(c.claimMastery(l))}),n(1,"mat-icon"),r(2,"redeem"),i(),r(3),Q(4,"number"),i()}if(a&2){let t=s().$implicit;d(3),h(" Claim ",Y(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function Re(a,e){a&1&&(n(0,"span",41),r(1,"Reward claimed"),i())}function Ve(a,e){if(a&1){let t=P();n(0,"mat-card")(1,"mat-card-content",33)(2,"div",25),g(3,Ne,2,1,"span",34),n(4,"div",35)(5,"div",36),r(6),i(),n(7,"div",37),r(8),i()(),n(9,"mat-icon",38),r(10,"emoji_events"),i()(),n(11,"div",39),g(12,je,5,4,"button",40)(13,Re,2,0,"span",41),n(14,"button",42),m("click",function(){let l=x(t).$implicit,c=s(2);return y(c.unmaster(l))}),n(15,"mat-icon"),r(16,"undo"),i(),r(17," Un-master "),i()()()()}if(a&2){let t=e.$implicit;d(3),b(t.emoji?3:-1),d(3),u(t.name),d(2),kt("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),d(4),b(t.masteryRewardClaimed?13:12)}}function Oe(a,e){if(a&1&&(n(0,"div",11),H(1,Ve,18,5,"mat-card",null,ht),i()),a&2){let t=s();d(),F(t.habits.masteredHabits())}}var pe=class a{habits=p(ae);dialog=p(jt);othersGroupId=ct;last7Days=J(()=>_t(new Date,7));today=J(()=>_t(new Date,1)[0]);sortedGroups=J(()=>{let e=this.habits.groups();return[...e.filter(t=>t.id!==ct),...e.filter(t=>t.id===ct)]});dayLabel(e){let t=new Date(e+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(e){return new Date(e+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(e){return this.habits.habitsByGroup()[e]??[]}masteryPercent(e){return this.habits.getMasteryProgress(e).percent}todayScoreEmoji(e){let t=this.habits.getCompletion(e,this.today());return t?.completionScore?ie(t.completionScore):null}toggleHabitCompletion(e,t){if(this.habits.isCompleted(e.id,t)){this.habits.toggleCompletion(e.id,t);return}if(!e.withCompletionScore){this.habits.toggleCompletion(e.id,t);return}this.dialog.open(ft,{width:"480px"}).afterClosed().subscribe(o=>{o!==void 0&&this.habits.completeWithScore(e.id,t,o)})}totalHabitPoints(e){return this.habits.completions().filter(t=>t.habitId===e).reduce((t,o)=>t+o.pointsEarned,0)}addGroup(){this.dialog.open(q,{data:null,width:"380px"}).afterClosed().subscribe(e=>{e&&this.habits.addGroup(e.name)})}editGroup(e){this.dialog.open(q,{data:e,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(e.id,t.name)})}deleteGroup(e){this.dialog.open(bt,{data:{message:`Delete group "${e.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(e.id)})}addHabit(e){this.dialog.open(X,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:e},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(e){this.dialog.open(X,{data:{habit:e,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(e.id,t)})}deleteHabit(e){let t=this.totalHabitPoints(e.id);this.dialog.open(pt,{data:{habitName:e.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(o=>{o&&this.habits.deleteHabit(e.id,o==="keep-points")})}claimMastery(e){this.dialog.open(ut,{data:{habitName:e.name,defaultPoints:e.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(e.id,t)})}unmaster(e){this.dialog.open(bt,{data:{message:`Move "${e.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(e.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=_({type:a,selectors:[["app-habits-page"]],decls:16,vars:2,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Active"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"text-sm","text-gray-400","py-2"],[1,"habit-row"],[1,"shrink-0",3,"change","checked"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","title"],[1,"day-chip",3,"click","title"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"]],template:function(t,o){t&1&&(n(0,"div",2)(1,"mat-tab-group")(2,"mat-tab",3)(3,"div",4)(4,"mat-accordion",5),H(5,Ie,23,4,"mat-expansion-panel",6,ht),i(),n(7,"button",7),m("click",function(){return o.addGroup()}),n(8,"mat-icon"),r(9,"add"),i(),r(10," Add Group "),i()()(),n(11,"mat-tab"),Mt(12,Ae,1,1,"ng-template",8),n(13,"div",9),g(14,Ge,2,0,"p",10)(15,Oe,3,0,"div",11),i()()()()),t&2&&(d(4),f("multi",!0),d(),F(o.sortedGroups()),d(9),b(o.habits.masteredHabits().length===0?14:15))},dependencies:[M,C,Nt,Kt,zt,Gt,At,Yt,Qt,Xt,Ut,Wt,de,re,le,Bt,Vt,Rt,Ot,ee,Jt,Zt,te,Z],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{pe as HabitsPage};
