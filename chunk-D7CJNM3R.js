import{a as Xt,b as Yt,c as Ut,d as Wt,e as Qt,f as Jt,g as Zt,h as te,i as ee}from"./chunk-E4YFM5TL.js";import{a as ne,b as oe}from"./chunk-2U2OZL2N.js";import{a as Vt,b as Rt,c as Ot,d as $t,e as Bt,f as Lt,g as qt}from"./chunk-2TZC4KYD.js";import"./chunk-RQMHYQMU.js";import{a as zt,b as Kt}from"./chunk-PXEEL6LM.js";import"./chunk-AIPHN6GM.js";import{a as xt}from"./chunk-GN6G73HY.js";import{b as V,c as st,g as R,h as O,k as $,l as B}from"./chunk-OWQIC37J.js";import{A as jt,C as k,D as F,E as H,F as P,a as Nt,b as C,c as M,y as E,z as G}from"./chunk-ZGOCZXOM.js";import{a as Gt,b as At}from"./chunk-V4OJYAIF.js";import{a as ie,c as pt,d as ut,e as ae}from"./chunk-TSYUXS7J.js";import"./chunk-SKUHKIVW.js";import"./chunk-2TXXKFHM.js";import"./chunk-HNKFBZBO.js";import"./chunk-QVTOQB4T.js";import"./chunk-K66EXUFO.js";import{b as N,d as v,f as j,g as it,i as Ht,j as at,k as nt,n as ot,o as rt,p as Pt,q as lt,r as dt,s as mt,t as Tt,u as ct}from"./chunk-ORFEZIGP.js";import"./chunk-SWIXLFUM.js";import"./chunk-ZHLFS4SL.js";import{ea as It,h as et}from"./chunk-TZ4366YQ.js";import{Ab as wt,Bb as g,Cb as b,Eb as St,Ec as q,Fb as D,Gb as w,Hb as p,Ib as a,Jb as i,Kb as T,Rb as S,Vb as s,Xb as m,Yb as Et,Za as d,Zb as kt,ba as yt,da as vt,fa as f,fc as J,hc as I,ka as _,kc as l,la as h,lc as u,mb as y,mc as x,nb as Ct,nc as Ft,ob as Mt,oc as ht,sb as Dt,wc as Z,xa as Q,yc as tt}from"./chunk-YQKOKR5B.js";import"./chunk-Q7L6LLAK.js";var ue=["*"];var fe=new vt("MAT_CARD_CONFIG"),re=(()=>{class n{appearance;constructor(){let t=f(fe,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=y({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(o,r){o&2&&I("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ue,decls:1,vars:0,template:function(o,r){o&1&&(Et(),kt(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var le=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275dir=Mt({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var de=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=Ct({type:n});static \u0275inj=yt({imports:[It]})}return n})();function be(n,e){n&1&&(a(0,"mat-error"),l(1,"Name is required"),i())}var z=class n{fb=f(mt);dialogRef=f(E);data=f(G);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",v.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(a(0,"h2",0),l(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),l(6,"Group name"),i(),T(7,"input",3),g(8,be,2,0,"mat-error"),i()()(),a(9,"mat-dialog-actions",4)(10,"button",5),s("click",function(){return o.cancel()}),l(11,"Cancel"),i(),a(12,"button",6),s("click",function(){return o.save()}),l(13),i()()),t&2){let r;d(),u(o.isEditMode?"Edit Group":"Add Group"),d(2),p("formGroup",o.form),d(5),b((r=o.form.get("name"))!=null&&r.invalid&&((r=o.form.get("name"))!=null&&r.touched)?8:-1),d(4),p("disabled",o.form.invalid),d(),x(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[ct,at,N,j,it,dt,rt,ot,P,k,H,F,O,R,V,st,B,$,M,C],encapsulation:2})};var _e=(n,e)=>e.id;function he(n,e){n&1&&(a(0,"mat-error"),l(1,"Name is required"),i())}function xe(n,e){if(n&1&&(a(0,"mat-option",6),l(1),i()),n&2){let t=e.$implicit;p("value",t.id),d(),u(t.name)}}function ye(n,e){n&1&&(a(0,"mat-error"),l(1,"Must be at least 1"),i())}function ve(n,e){n&1&&(a(0,"mat-error"),l(1,"Enter a value between 1 and 7"),i())}function Ce(n,e){n&1&&(a(0,"mat-error"),l(1,"Must be at least 1"),i())}var Y=class n{fb=f(mt);dialogRef=f(E);data=f(G);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",v.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",v.required],basePoints:[this.data.habit?.basePoints??10,[v.required,v.min(1)]],frequency:[this.data.habit?.frequency??3,[v.required,v.min(1),v.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[v.required,v.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let e=this.form.getRawValue();this.dialogRef.close({name:e.name,emoji:e.emoji||void 0,groupId:e.groupId,basePoints:e.basePoints,frequency:e.frequency,masteryRewardPoints:e.masteryRewardPoints,withCompletionScore:e.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-habit-form"]],decls:42,vars:8,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(a(0,"h2",0),l(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),l(6,"Name"),i(),T(7,"input",3),g(8,he,2,0,"mat-error"),i(),a(9,"mat-form-field",2)(10,"mat-label"),l(11,"Emoji (optional)"),i(),T(12,"input",4),i(),a(13,"mat-form-field",2)(14,"mat-label"),l(15,"Group"),i(),a(16,"mat-select",5),D(17,xe,2,2,"mat-option",6,_e),i()(),a(19,"mat-form-field",2)(20,"mat-label"),l(21,"Base points per completion"),i(),T(22,"input",7),g(23,ye,2,0,"mat-error"),i(),a(24,"div",8)(25,"mat-slide-toggle",9),l(26," With completion score "),i()(),a(27,"mat-form-field",2)(28,"mat-label"),l(29,"Frequency (times per week, 1\u20137)"),i(),T(30,"input",10),g(31,ve,2,0,"mat-error"),i(),a(32,"mat-form-field",2)(33,"mat-label"),l(34,"Mastery reward points"),i(),T(35,"input",11),g(36,Ce,2,0,"mat-error"),i()()(),a(37,"mat-dialog-actions",12)(38,"button",13),s("click",function(){return o.cancel()}),l(39,"Cancel"),i(),a(40,"button",14),s("click",function(){return o.save()}),l(41),i()()),t&2){let r,c,A,W;d(),u(o.isEditMode?"Edit Habit":"Add Habit"),d(2),p("formGroup",o.form),d(5),b((r=o.form.get("name"))!=null&&r.invalid&&((r=o.form.get("name"))!=null&&r.touched)?8:-1),d(9),w(o.groups),d(6),b((c=o.form.get("basePoints"))!=null&&c.invalid&&((c=o.form.get("basePoints"))!=null&&c.touched)?23:-1),d(8),b((A=o.form.get("frequency"))!=null&&A.invalid&&((A=o.form.get("frequency"))!=null&&A.touched)?31:-1),d(5),b((W=o.form.get("masteryRewardPoints"))!=null&&W.invalid&&((W=o.form.get("masteryRewardPoints"))!=null&&W.touched)?36:-1),d(4),p("disabled",o.form.invalid),d(),x(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[ct,at,N,nt,j,it,dt,lt,Pt,rt,ot,P,k,H,F,O,R,V,st,B,$,qt,Lt,Bt,M,C,oe,ne],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function Me(n,e){if(n&1&&(a(0,"p"),l(1," This habit has earned "),a(2,"strong"),l(3),Z(4,"number"),i(),l(5," in total. What would you like to do with them? "),i()),n&2){let t=m();d(3),x("",tt(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var gt=class n{dialogRef=f(E);data=f(G);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,o){t&1&&(a(0,"h2",0),l(1,"Delete Habit"),i(),a(2,"mat-dialog-content")(3,"p"),l(4," Delete "),a(5,"strong"),l(6),i(),l(7,"? "),i(),g(8,Me,6,4,"p"),i(),a(9,"mat-dialog-actions",1)(10,"button",2),s("click",function(){return o.dialogRef.close()}),l(11,"Cancel"),i(),a(12,"button",2),s("click",function(){return o.dialogRef.close("keep-points")}),l(13,"Keep Points"),i(),a(14,"button",3),s("click",function(){return o.dialogRef.close("remove-points")}),l(15," Delete & Remove Points "),i()()),t&2&&(d(6),u(o.data.habitName),d(2),b(o.data.pointsEarned>0?8:-1))},dependencies:[P,k,H,F,M,C,et],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var bt=class n{dialogRef=f(E);data=f(G);amount=Q(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){t&1&&(a(0,"h2",0),l(1,"\u{1F3C6} Habit Mastered!"),i(),a(2,"mat-dialog-content")(3,"p"),l(4," You've mastered "),a(5,"strong"),l(6),i(),l(7,". Claim your reward points: "),i(),a(8,"mat-form-field",1)(9,"mat-label"),l(10,"Reward points"),i(),a(11,"input",2),s("ngModelChange",function(c){return o.amount.set(+c)}),i()()(),a(12,"mat-dialog-actions",3)(13,"button",4),s("click",function(){return o.dialogRef.close()}),l(14,"Cancel"),i(),a(15,"button",5),s("click",function(){return o.confirm()}),l(16),i()()),t&2&&(d(6),u(o.data.habitName),d(5),p("ngModel",o.amount()),d(4),p("disabled",o.amount()<=0),d(),x(" Claim ",o.amount()," pts "))},dependencies:[Tt,N,nt,j,lt,Ht,P,k,H,F,O,R,V,B,$,M,C],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var De=(n,e)=>e.value;function we(n,e){if(n&1){let t=S();a(0,"button",5),s("click",function(){let r=_(t).$implicit,c=m();return h(c.select(r.value))}),a(1,"span",6),l(2),i(),a(3,"span",7),l(4),i()()}if(n&2){let t=e.$implicit,o=m();I("selected",o.selected()===t.value),wt("aria-label",t.label),d(2),u(t.emoji),d(2),u(t.label)}}var Se=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],_t=class n{dialogRef=f(E);scores=Se;selected=Q(3);select(e){this.selected.set(e)}confirm(){this.dialogRef.close(this.selected())}onKey(e){let t=parseInt(e.key,10);t>=1&&t<=5?this.selected.set(t):e.key==="Enter"&&(e.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,o){t&1&&s("keydown",function(c){return o.onKey(c)})},decls:9,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],["align","end"],["mat-flat-button","",3,"click"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,o){t&1&&(a(0,"h2",0),l(1,"Rate your Habit"),i(),a(2,"mat-dialog-content")(3,"div",1),D(4,we,5,5,"button",2,De),i()(),a(6,"mat-dialog-actions",3)(7,"button",4),s("click",function(){return o.confirm()}),l(8,"Confirm"),i()()),t&2&&(d(4),w(o.scores))},dependencies:[P,k,H,F,M,C],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var U=(n,e)=>e.id;function Ee(n,e){if(n&1){let t=S();a(0,"button",18),s("click",function(){_(t);let r=m().$implicit,c=m();return h(c.deleteGroup(r))}),a(1,"mat-icon"),l(2,"delete"),i(),l(3," Delete group "),i()}}function ke(n,e){n&1&&(a(0,"p",20),l(1,"No habits yet. Click + to add one."),i())}function Fe(n,e){if(n&1&&(a(0,"span",25),l(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function He(n,e){if(n&1&&(a(0,"span",31),l(1),i()),n&2){let t=m().$implicit,o=m(2);d(),u(o.scoreEmojiForDate(t.id,o.today()))}}function Pe(n,e){if(n&1){let t=S();a(0,"button",34),s("click",function(){let r=_(t).$implicit,c=m().$implicit,A=m(2);return h(A.toggleHabitCompletion(c,r))}),l(1),i()}if(n&2){let t=e.$implicit,o=m().$implicit,r=m(2);I("day-chip-checked",r.habits.isCompleted(o.id,t))("day-chip-scored",o.withCompletionScore&&!r.habits.isCompleted(o.id,t)),p("title",r.dayLabel(t)),d(),u(r.dayInitial(t))}}function Te(n,e){if(n&1){let t=S();a(0,"div",21)(1,"mat-checkbox",22),s("change",function(){let r=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(r,c.today()))}),i(),a(2,"div",23)(3,"div",24),g(4,Fe,2,1,"span",25),a(5,"span",26),l(6),i()(),a(7,"div",27)(8,"span",28),l(9),i(),a(10,"span",29),l(11),i(),a(12,"span",30),l(13),i(),g(14,He,2,1,"span",31),i()(),a(15,"div",32),D(16,Pe,2,6,"button",33,St),a(18,"button",17)(19,"mat-icon"),l(20,"more_vert"),i()(),a(21,"mat-menu",null,1)(23,"button",18),s("click",function(){let r=_(t).$implicit,c=m(2);return h(c.editHabit(r))}),a(24,"mat-icon"),l(25,"edit"),i(),l(26," Edit "),i(),a(27,"button",18),s("click",function(){let r=_(t).$implicit,c=m(2);return h(c.deleteHabit(r))}),a(28,"mat-icon"),l(29,"delete"),i(),l(30," Delete "),i()()()()}if(n&2){let t=e.$implicit,o=J(22),r=m(2);d(),p("checked",r.habits.isCompleted(t.id,r.today())),d(3),b(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),ht(" (",t.basePoints,"pts) ",r.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+r.habits.getSticks(t.id)+"/7 (+"+r.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",r.habits.getSticks(t.id)),d(),I("mastery-low",r.masteryPercent(t)<50)("mastery-mid",r.masteryPercent(t)>=50&&r.masteryPercent(t)<80)("mastery-high",r.masteryPercent(t)>=80),p("title","Mastery: "+r.masteryPercent(t)+"%"),d(),x("",r.masteryPercent(t),"%"),d(),b(r.scoreEmojiForDate(t.id,r.today())?14:-1),d(2),w(r.last7Days()),d(2),p("matMenuTriggerFor",o)}}function Ie(n,e){if(n&1){let t=S();a(0,"mat-expansion-panel",7)(1,"mat-expansion-panel-header")(2,"mat-panel-title",14)(3,"span",15),l(4),i(),a(5,"span",16),s("click",function(r){return r.stopPropagation()}),a(6,"button",17)(7,"mat-icon"),l(8,"more_vert"),i()(),a(9,"mat-menu",null,0)(11,"button",18),s("click",function(){let r=_(t).$implicit,c=m();return h(c.addHabit(r.id))}),a(12,"mat-icon"),l(13,"add"),i(),l(14," Add habit "),i(),a(15,"button",18),s("click",function(){let r=_(t).$implicit,c=m();return h(c.editGroup(r))}),a(16,"mat-icon"),l(17,"edit"),i(),l(18," Edit group "),i(),g(19,Ee,4,0,"button",19),i()()()(),g(20,ke,2,0,"p",20),D(21,Te,31,19,"div",21,U),i()}if(n&2){let t=e.$implicit,o=J(10),r=m();d(4),u(t.name),d(2),p("matMenuTriggerFor",o),d(13),b(t.id!==r.othersGroupId?19:-1),d(),b(r.habitsForGroup(t.id).length===0?20:-1),d(),w(r.habitsForGroup(t.id))}}function Ge(n,e){n&1&&(a(0,"p",20),l(1,"No habits in this group."),i())}function Ae(n,e){if(n&1&&(a(0,"span",25),l(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Ne(n,e){if(n&1&&(a(0,"span",31),l(1),i()),n&2){let t=m().$implicit,o=m(2);d(),u(o.scoreEmojiForDate(t.id,o.yesterday()))}}function je(n,e){if(n&1){let t=S();a(0,"div",21)(1,"mat-checkbox",22),s("change",function(){let r=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(r,c.yesterday()))}),i(),a(2,"div",23)(3,"div",24),g(4,Ae,2,1,"span",25),a(5,"span",26),l(6),i()(),a(7,"div",27)(8,"span",28),l(9),i(),a(10,"span",29),l(11),i(),a(12,"span",30),l(13),i(),g(14,Ne,2,1,"span",31),i()(),a(15,"div",32)(16,"button",17)(17,"mat-icon"),l(18,"more_vert"),i()(),a(19,"mat-menu",null,2)(21,"button",18),s("click",function(){let r=_(t).$implicit,c=m(2);return h(c.editHabit(r))}),a(22,"mat-icon"),l(23,"edit"),i(),l(24," Edit "),i(),a(25,"button",18),s("click",function(){let r=_(t).$implicit,c=m(2);return h(c.deleteHabit(r))}),a(26,"mat-icon"),l(27,"delete"),i(),l(28," Delete "),i()()()()}if(n&2){let t=e.$implicit,o=J(20),r=m(2);d(),p("checked",r.habits.isCompleted(t.id,r.yesterday())),d(3),b(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),ht(" (",t.basePoints,"pts) ",r.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+r.habits.getSticks(t.id)+"/7 (+"+r.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",r.habits.getSticks(t.id)),d(),I("mastery-low",r.masteryPercent(t)<50)("mastery-mid",r.masteryPercent(t)>=50&&r.masteryPercent(t)<80)("mastery-high",r.masteryPercent(t)>=80),p("title","Mastery: "+r.masteryPercent(t)+"%"),d(),x("",r.masteryPercent(t),"%"),d(),b(r.scoreEmojiForDate(t.id,r.yesterday())?14:-1),d(2),p("matMenuTriggerFor",o)}}function Ve(n,e){if(n&1&&(a(0,"mat-expansion-panel",7)(1,"mat-expansion-panel-header")(2,"mat-panel-title",14)(3,"span",15),l(4),i()()(),g(5,Ge,2,0,"p",20),D(6,je,29,19,"div",21,U),i()),n&2){let t=e.$implicit,o=m();d(4),u(t.name),d(),b(o.habitsForGroup(t.id).length===0?5:-1),d(),w(o.habitsForGroup(t.id))}}function Re(n,e){if(n&1&&l(0),n&2){let t=m();x("Mastered (",t.habits.masteredHabits().length,")")}}function Oe(n,e){n&1&&(a(0,"p",12),l(1,"No mastered habits yet. Keep going!"),i())}function $e(n,e){if(n&1&&(a(0,"span",36),l(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Be(n,e){if(n&1){let t=S();a(0,"button",45),s("click",function(){_(t);let r=m().$implicit,c=m(2);return h(c.claimMastery(r))}),a(1,"mat-icon"),l(2,"redeem"),i(),l(3),Z(4,"number"),i()}if(n&2){let t=m().$implicit;d(3),x(" Claim ",tt(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function Le(n,e){n&1&&(a(0,"span",43),l(1,"Reward claimed"),i())}function qe(n,e){if(n&1){let t=S();a(0,"mat-card")(1,"mat-card-content",35)(2,"div",27),g(3,$e,2,1,"span",36),a(4,"div",37)(5,"div",38),l(6),i(),a(7,"div",39),l(8),i()(),a(9,"mat-icon",40),l(10,"emoji_events"),i()(),a(11,"div",41),g(12,Be,5,4,"button",42)(13,Le,2,0,"span",43),a(14,"button",44),s("click",function(){let r=_(t).$implicit,c=m(2);return h(c.unmaster(r))}),a(15,"mat-icon"),l(16,"undo"),i(),l(17," Un-master "),i()()()()}if(n&2){let t=e.$implicit;d(3),b(t.emoji?3:-1),d(3),u(t.name),d(2),Ft("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),d(4),b(t.masteryRewardClaimed?13:12)}}function ze(n,e){if(n&1&&(a(0,"div",13),D(1,qe,18,5,"mat-card",null,U),i()),n&2){let t=m();d(),w(t.habits.masteredHabits())}}var pe=class n{habits=f(ae);dialog=f(jt);othersGroupId=ut;last7Days=q(()=>pt(new Date,7));today=q(()=>pt(new Date,1)[0]);yesterday=q(()=>pt(new Date,2)[0]);sortedGroups=q(()=>{let e=this.habits.groups();return[...e.filter(t=>t.id!==ut),...e.filter(t=>t.id===ut)]});dayLabel(e){let t=new Date(e+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(e){return new Date(e+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(e){return this.habits.habitsByGroup()[e]??[]}masteryPercent(e){return this.habits.getMasteryProgress(e).percent}scoreEmojiForDate(e,t){let o=this.habits.getCompletion(e,t);return o?.completionScore?ie(o.completionScore):null}toggleHabitCompletion(e,t){if(this.habits.isCompleted(e.id,t)){this.habits.toggleCompletion(e.id,t);return}if(!e.withCompletionScore){this.habits.toggleCompletion(e.id,t);return}this.dialog.open(_t,{width:"480px"}).afterClosed().subscribe(o=>{o!==void 0&&this.habits.completeWithScore(e.id,t,o)})}totalHabitPoints(e){return this.habits.completions().filter(t=>t.habitId===e).reduce((t,o)=>t+o.pointsEarned,0)}addGroup(){this.dialog.open(z,{data:null,width:"380px"}).afterClosed().subscribe(e=>{e&&this.habits.addGroup(e.name)})}editGroup(e){this.dialog.open(z,{data:e,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(e.id,t.name)})}deleteGroup(e){this.dialog.open(xt,{data:{message:`Delete group "${e.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(e.id)})}addHabit(e){this.dialog.open(Y,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:e},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(e){this.dialog.open(Y,{data:{habit:e,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(e.id,t)})}deleteHabit(e){let t=this.totalHabitPoints(e.id);this.dialog.open(gt,{data:{habitName:e.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(o=>{o&&this.habits.deleteHabit(e.id,o==="keep-points")})}claimMastery(e){this.dialog.open(bt,{data:{habitName:e.name,defaultPoints:e.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(e.id,t)})}unmaster(e){this.dialog.open(xt,{data:{message:`Move "${e.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(e.id)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-habits-page"]],decls:21,vars:3,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],["habitMenuY","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Today"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["label","Yesterday"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"text-sm","text-gray-400","py-2"],[1,"habit-row"],[1,"shrink-0",3,"change","checked"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","title"],[1,"day-chip",3,"click","title"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"]],template:function(t,o){t&1&&(a(0,"div",3)(1,"mat-tab-group")(2,"mat-tab",4)(3,"div",5)(4,"mat-accordion",6),D(5,Ie,23,4,"mat-expansion-panel",7,U),i(),a(7,"button",8),s("click",function(){return o.addGroup()}),a(8,"mat-icon"),l(9,"add"),i(),l(10," Add Group "),i()()(),a(11,"mat-tab",9)(12,"div",5)(13,"mat-accordion",6),D(14,Ve,8,2,"mat-expansion-panel",7,U),i()()(),a(16,"mat-tab"),Dt(17,Re,1,1,"ng-template",10),a(18,"div",11),g(19,Oe,2,0,"p",12)(20,ze,3,0,"div",13),i()()()()),t&2&&(d(4),p("multi",!0),d(),w(o.sortedGroups()),d(8),p("multi",!0),d(),w(o.sortedGroups()),d(5),b(o.habits.masteredHabits().length===0?19:20))},dependencies:[M,C,Nt,Kt,zt,At,Gt,Qt,Wt,Xt,Yt,Ut,de,re,le,$t,Rt,Vt,Ot,ee,Jt,Zt,te,et],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{pe as HabitsPage};
