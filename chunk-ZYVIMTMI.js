import{a as Xt,b as Yt,c as Wt,d as Qt,e as Jt,f as Zt,g as te,h as ee,i as ie}from"./chunk-E4YFM5TL.js";import{a as ne,b as oe}from"./chunk-2U2OZL2N.js";import{a as Rt,b as $t,c as Ot,d as Bt,e as Lt,f as qt,g as zt}from"./chunk-2TZC4KYD.js";import"./chunk-RQMHYQMU.js";import{a as Kt,b as Ut}from"./chunk-PXEEL6LM.js";import"./chunk-AIPHN6GM.js";import{a as z}from"./chunk-GN6G73HY.js";import{b as $,c as gt,g as O,h as B,k as L,l as q}from"./chunk-OWQIC37J.js";import{A as bt,C as H,D as F,E as k,F as P,a as jt,b as S,c as w,y as E,z as A}from"./chunk-ZGOCZXOM.js";import{a as pt,b as ut}from"./chunk-V4OJYAIF.js";import{a as ae,c as ft,d as _t,e as ht}from"./chunk-XWFKSO4B.js";import"./chunk-SKUHKIVW.js";import"./chunk-2TXXKFHM.js";import"./chunk-3WAWRMV6.js";import"./chunk-O5U5WXN6.js";import"./chunk-K66EXUFO.js";import{b as j,d as D,f as R,g as at,i as At,j as nt,k as ot,n as rt,o as lt,p as Gt,q as dt,r as mt,s as ct,t as Vt,u as st}from"./chunk-ORFEZIGP.js";import"./chunk-SWIXLFUM.js";import"./chunk-GYBPIAPJ.js";import{ea as Nt,h as it}from"./chunk-TZ4366YQ.js";import{Ab as kt,Bb as b,Cb as g,Eb as Pt,Ec as N,Fb as y,Gb as C,Hb as p,Ib as a,Jb as i,Kb as T,Rb as M,Vb as s,Xb as m,Yb as Tt,Za as d,Zb as It,ba as wt,da as Et,fa as f,fc as X,hc as I,ka as _,kc as r,la as h,lc as u,mb as v,mc as x,nb as Ht,nc as Dt,ob as Ft,oc as St,sb as Mt,wc as tt,xa as Z,yc as et}from"./chunk-YQKOKR5B.js";import"./chunk-Q7L6LLAK.js";var ue=["*"];var be=new Et("MAT_CARD_CONFIG"),re=(()=>{class n{appearance;constructor(){let t=f(be,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=v({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(o,l){o&2&&I("mat-mdc-card-outlined",l.appearance==="outlined")("mdc-card--outlined",l.appearance==="outlined")("mat-mdc-card-filled",l.appearance==="filled")("mdc-card--filled",l.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ue,decls:1,vars:0,template:function(o,l){o&1&&(Tt(),It(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var le=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275dir=Ft({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var de=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=Ht({type:n});static \u0275inj=wt({imports:[Nt]})}return n})();function fe(n,e){n&1&&(a(0,"mat-error"),r(1,"Name is required"),i())}var Y=class n{fb=f(ct);dialogRef=f(E);data=f(A);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",D.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(a(0,"h2",0),r(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Group name"),i(),T(7,"input",3),b(8,fe,2,0,"mat-error"),i()()(),a(9,"mat-dialog-actions",4)(10,"button",5),s("click",function(){return o.cancel()}),r(11,"Cancel"),i(),a(12,"button",6),s("click",function(){return o.save()}),r(13),i()()),t&2){let l;d(),u(o.isEditMode?"Edit Group":"Add Group"),d(2),p("formGroup",o.form),d(5),g((l=o.form.get("name"))!=null&&l.invalid&&((l=o.form.get("name"))!=null&&l.touched)?8:-1),d(4),p("disabled",o.form.invalid),d(),x(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[st,nt,j,R,at,mt,lt,rt,P,H,k,F,B,O,$,gt,q,L,w,S],encapsulation:2})};var he=(n,e)=>e.id;function xe(n,e){n&1&&(a(0,"mat-error"),r(1,"Name is required"),i())}function ve(n,e){if(n&1&&(a(0,"mat-option",6),r(1),i()),n&2){let t=e.$implicit;p("value",t.id),d(),u(t.name)}}function ye(n,e){n&1&&(a(0,"mat-error"),r(1,"Must be at least 1"),i())}function Ce(n,e){n&1&&(a(0,"mat-error"),r(1,"Enter a value between 1 and 7"),i())}function Me(n,e){n&1&&(a(0,"mat-error"),r(1,"Must be at least 1"),i())}function De(n,e){if(n&1){let t=M();a(0,"button",16),s("click",function(){_(t);let l=m();return h(l.resetProgress())}),a(1,"mat-icon"),r(2,"restart_alt"),i(),r(3," Reset Progress "),i()}}var U=class n{fb=f(ct);dialogRef=f(E);matDialog=f(bt);habitsService=f(ht);data=f(A);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",D.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",D.required],basePoints:[this.data.habit?.basePoints??10,[D.required,D.min(1)]],frequency:[this.data.habit?.frequency??3,[D.required,D.min(1),D.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[D.required,D.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let e=this.form.getRawValue();this.dialogRef.close({name:e.name,emoji:e.emoji||void 0,groupId:e.groupId,basePoints:e.basePoints,frequency:e.frequency,masteryRewardPoints:e.masteryRewardPoints,withCompletionScore:e.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}resetProgress(){this.matDialog.open(z,{data:{message:`Reset all progress for "${this.data.habit.name}"? All completions will be deleted.`,confirmLabel:"Reset"}}).afterClosed().subscribe(e=>{e&&this.habitsService.resetProgress(this.data.habit.id)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habit-form"]],decls:43,vars:9,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","","color","warn",2,"margin-right","auto"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"],["mat-button","","color","warn",2,"margin-right","auto",3,"click"]],template:function(t,o){if(t&1&&(a(0,"h2",0),r(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Name"),i(),T(7,"input",3),b(8,xe,2,0,"mat-error"),i(),a(9,"mat-form-field",2)(10,"mat-label"),r(11,"Emoji (optional)"),i(),T(12,"input",4),i(),a(13,"mat-form-field",2)(14,"mat-label"),r(15,"Group"),i(),a(16,"mat-select",5),y(17,ve,2,2,"mat-option",6,he),i()(),a(19,"mat-form-field",2)(20,"mat-label"),r(21,"Base points per completion"),i(),T(22,"input",7),b(23,ye,2,0,"mat-error"),i(),a(24,"div",8)(25,"mat-slide-toggle",9),r(26," With completion score "),i()(),a(27,"mat-form-field",2)(28,"mat-label"),r(29,"Frequency (times per week, 1\u20137)"),i(),T(30,"input",10),b(31,Ce,2,0,"mat-error"),i(),a(32,"mat-form-field",2)(33,"mat-label"),r(34,"Mastery reward points"),i(),T(35,"input",11),b(36,Me,2,0,"mat-error"),i()()(),a(37,"mat-dialog-actions",12),b(38,De,4,0,"button",13),a(39,"button",14),s("click",function(){return o.cancel()}),r(40,"Cancel"),i(),a(41,"button",15),s("click",function(){return o.save()}),r(42),i()()),t&2){let l,c,V,J;d(),u(o.isEditMode?"Edit Habit":"Add Habit"),d(2),p("formGroup",o.form),d(5),g((l=o.form.get("name"))!=null&&l.invalid&&((l=o.form.get("name"))!=null&&l.touched)?8:-1),d(9),C(o.groups),d(6),g((c=o.form.get("basePoints"))!=null&&c.invalid&&((c=o.form.get("basePoints"))!=null&&c.touched)?23:-1),d(8),g((V=o.form.get("frequency"))!=null&&V.invalid&&((V=o.form.get("frequency"))!=null&&V.touched)?31:-1),d(5),g((J=o.form.get("masteryRewardPoints"))!=null&&J.invalid&&((J=o.form.get("masteryRewardPoints"))!=null&&J.touched)?36:-1),d(2),g(o.isEditMode?38:-1),d(3),p("disabled",o.form.invalid),d(),x(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[st,nt,j,ot,R,at,mt,dt,Gt,lt,rt,P,H,k,F,B,O,$,gt,q,L,zt,qt,Lt,w,S,ut,pt,oe,ne],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function Se(n,e){if(n&1&&(a(0,"p"),r(1," This habit has earned "),a(2,"strong"),r(3),tt(4,"number"),i(),r(5," in total. What would you like to do with them? "),i()),n&2){let t=m();d(3),x("",et(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var vt=class n{dialogRef=f(E);data=f(A);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,o){t&1&&(a(0,"h2",0),r(1,"Delete Habit"),i(),a(2,"mat-dialog-content")(3,"p"),r(4," Delete "),a(5,"strong"),r(6),i(),r(7,"? "),i(),b(8,Se,6,4,"p"),i(),a(9,"mat-dialog-actions",1)(10,"button",2),s("click",function(){return o.dialogRef.close()}),r(11,"Cancel"),i(),a(12,"button",2),s("click",function(){return o.dialogRef.close("keep-points")}),r(13,"Keep Points"),i(),a(14,"button",3),s("click",function(){return o.dialogRef.close("remove-points")}),r(15," Delete & Remove Points "),i()()),t&2&&(d(6),u(o.data.habitName),d(2),g(o.data.pointsEarned>0?8:-1))},dependencies:[P,H,k,F,w,S,it],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var yt=class n{dialogRef=f(E);data=f(A);amount=Z(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){t&1&&(a(0,"h2",0),r(1,"\u{1F3C6} Habit Mastered!"),i(),a(2,"mat-dialog-content")(3,"p"),r(4," You've mastered "),a(5,"strong"),r(6),i(),r(7,". Claim your reward points: "),i(),a(8,"mat-form-field",1)(9,"mat-label"),r(10,"Reward points"),i(),a(11,"input",2),s("ngModelChange",function(c){return o.amount.set(+c)}),i()()(),a(12,"mat-dialog-actions",3)(13,"button",4),s("click",function(){return o.dialogRef.close()}),r(14,"Cancel"),i(),a(15,"button",5),s("click",function(){return o.confirm()}),r(16),i()()),t&2&&(d(6),u(o.data.habitName),d(5),p("ngModel",o.amount()),d(4),p("disabled",o.amount()<=0),d(),x(" Claim ",o.amount()," pts "))},dependencies:[Vt,j,ot,R,dt,At,P,H,k,F,B,O,$,q,L,w,S],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var we=(n,e)=>e.value;function Ee(n,e){if(n&1){let t=M();a(0,"button",5),s("click",function(){let l=_(t).$implicit,c=m();return h(c.select(l.value))}),a(1,"span",6),r(2),i(),a(3,"span",7),r(4),i()()}if(n&2){let t=e.$implicit,o=m();I("selected",o.selected()===t.value),kt("aria-label",t.label),d(2),u(t.emoji),d(2),u(t.label)}}var He=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],Ct=class n{dialogRef=f(E);scores=He;selected=Z(3);select(e){this.selected.set(e)}confirm(){this.dialogRef.close(this.selected())}onKey(e){let t=parseInt(e.key,10);t>=1&&t<=5?this.selected.set(t):e.key==="Enter"&&(e.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,o){t&1&&s("keydown",function(c){return o.onKey(c)})},decls:9,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],["align","end"],["mat-flat-button","",3,"click"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,o){t&1&&(a(0,"h2",0),r(1,"Rate your Habit"),i(),a(2,"mat-dialog-content")(3,"div",1),y(4,Ee,5,5,"button",2,we),i()(),a(6,"mat-dialog-actions",3)(7,"button",4),s("click",function(){return o.confirm()}),r(8,"Confirm"),i()()),t&2&&(d(4),C(o.scores))},dependencies:[P,H,k,F,w,S],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var G=(n,e)=>e.id;function Fe(n,e){if(n&1){let t=M();a(0,"button",19),s("click",function(){_(t);let l=m().$implicit,c=m();return h(c.deleteGroup(l))}),a(1,"mat-icon"),r(2,"delete"),i(),r(3," Delete group "),i()}}function ke(n,e){n&1&&(a(0,"p",21),r(1,"No habits yet. Click + to add one."),i())}function Pe(n,e){if(n&1&&(a(0,"span",26),r(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Te(n,e){if(n&1&&(a(0,"span",32),r(1),i()),n&2){let t=m().$implicit,o=m(2);d(),u(o.scoreEmojiForDate(t.id,o.today()))}}function Ie(n,e){if(n&1){let t=M();a(0,"button",35),s("click",function(){let l=_(t).$implicit,c=m().$implicit,V=m(2);return h(V.toggleHabitCompletion(c,l))}),r(1),i()}if(n&2){let t=e.$implicit,o=m().$implicit,l=m(2);I("day-chip-checked",l.habits.isCompleted(o.id,t))("day-chip-scored",o.withCompletionScore&&!l.habits.isCompleted(o.id,t)),p("title",l.dayLabel(t)),d(),u(l.dayInitial(t))}}function Ae(n,e){if(n&1){let t=M();a(0,"div",22)(1,"mat-checkbox",23),s("change",function(){let l=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(l,c.today()))}),i(),a(2,"div",24)(3,"div",25),b(4,Pe,2,1,"span",26),a(5,"span",27),r(6),i()(),a(7,"div",28)(8,"span",29),r(9),i(),a(10,"span",30),r(11),i(),a(12,"span",31),r(13),i(),b(14,Te,2,1,"span",32),i()(),a(15,"div",33),y(16,Ie,2,6,"button",34,Pt),a(18,"button",18)(19,"mat-icon"),r(20,"more_vert"),i()(),a(21,"mat-menu",null,1)(23,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.editHabit(l))}),a(24,"mat-icon"),r(25,"edit"),i(),r(26," Edit "),i(),a(27,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(28,"mat-icon"),r(29,"archive"),i(),r(30," Archive "),i(),a(31,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.deleteHabit(l))}),a(32,"mat-icon"),r(33,"delete"),i(),r(34," Delete "),i()()()()}if(n&2){let t=e.$implicit,o=X(22),l=m(2);d(),p("checked",l.habits.isCompleted(t.id,l.today())),d(3),g(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),St(" (",t.basePoints,"pts) ",l.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+l.habits.getSticks(t.id)+"/7 (+"+l.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",l.habits.getSticks(t.id)),d(),I("mastery-low",l.masteryPercent(t)<50)("mastery-mid",l.masteryPercent(t)>=50&&l.masteryPercent(t)<80)("mastery-high",l.masteryPercent(t)>=80),p("title","Mastery: "+l.masteryPercent(t)+"%"),d(),x("",l.masteryPercent(t),"%"),d(),g(l.scoreEmojiForDate(t.id,l.today())?14:-1),d(2),C(l.last7Days()),d(2),p("matMenuTriggerFor",o)}}function Ge(n,e){if(n&1){let t=M();a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),r(4),i(),a(5,"span",17),s("click",function(l){return l.stopPropagation()}),a(6,"button",18)(7,"mat-icon"),r(8,"more_vert"),i()(),a(9,"mat-menu",null,0)(11,"button",19),s("click",function(){let l=_(t).$implicit,c=m();return h(c.addHabit(l.id))}),a(12,"mat-icon"),r(13,"add"),i(),r(14," Add habit "),i(),a(15,"button",19),s("click",function(){let l=_(t).$implicit,c=m();return h(c.editGroup(l))}),a(16,"mat-icon"),r(17,"edit"),i(),r(18," Edit group "),i(),b(19,Fe,4,0,"button",20),i()()()(),b(20,ke,2,0,"p",21),y(21,Ae,35,19,"div",22,G),i()}if(n&2){let t=e.$implicit,o=X(10),l=m();d(4),u(t.name),d(2),p("matMenuTriggerFor",o),d(13),g(t.id!==l.othersGroupId?19:-1),d(),g(l.habitsForGroup(t.id).length===0?20:-1),d(),C(l.habitsForGroup(t.id))}}function Ve(n,e){n&1&&(a(0,"p",21),r(1,"No habits in this group."),i())}function Ne(n,e){if(n&1&&(a(0,"span",26),r(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function je(n,e){if(n&1&&(a(0,"span",32),r(1),i()),n&2){let t=m().$implicit,o=m(2);d(),u(o.scoreEmojiForDate(t.id,o.yesterday()))}}function Re(n,e){if(n&1){let t=M();a(0,"div",22)(1,"mat-checkbox",23),s("change",function(){let l=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(l,c.yesterday()))}),i(),a(2,"div",24)(3,"div",25),b(4,Ne,2,1,"span",26),a(5,"span",27),r(6),i()(),a(7,"div",28)(8,"span",29),r(9),i(),a(10,"span",30),r(11),i(),a(12,"span",31),r(13),i(),b(14,je,2,1,"span",32),i()(),a(15,"div",33)(16,"button",18)(17,"mat-icon"),r(18,"more_vert"),i()(),a(19,"mat-menu",null,2)(21,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.editHabit(l))}),a(22,"mat-icon"),r(23,"edit"),i(),r(24," Edit "),i(),a(25,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(26,"mat-icon"),r(27,"archive"),i(),r(28," Archive "),i(),a(29,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.deleteHabit(l))}),a(30,"mat-icon"),r(31,"delete"),i(),r(32," Delete "),i()()()()}if(n&2){let t=e.$implicit,o=X(20),l=m(2);d(),p("checked",l.habits.isCompleted(t.id,l.yesterday())),d(3),g(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),St(" (",t.basePoints,"pts) ",l.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+l.habits.getSticks(t.id)+"/7 (+"+l.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",l.habits.getSticks(t.id)),d(),I("mastery-low",l.masteryPercent(t)<50)("mastery-mid",l.masteryPercent(t)>=50&&l.masteryPercent(t)<80)("mastery-high",l.masteryPercent(t)>=80),p("title","Mastery: "+l.masteryPercent(t)+"%"),d(),x("",l.masteryPercent(t),"%"),d(),g(l.scoreEmojiForDate(t.id,l.yesterday())?14:-1),d(2),p("matMenuTriggerFor",o)}}function $e(n,e){if(n&1&&(a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),r(4),i()()(),b(5,Ve,2,0,"p",21),y(6,Re,33,19,"div",22,G),i()),n&2){let t=e.$implicit,o=m();d(4),u(t.name),d(),g(o.habitsForGroup(t.id).length===0?5:-1),d(),C(o.habitsForGroup(t.id))}}function Oe(n,e){if(n&1&&r(0),n&2){let t=m();x("Mastered (",t.habits.masteredHabits().length,")")}}function Be(n,e){n&1&&(a(0,"p",13),r(1,"No mastered habits yet. Keep going!"),i())}function Le(n,e){if(n&1&&(a(0,"span",37),r(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function qe(n,e){if(n&1){let t=M();a(0,"button",46),s("click",function(){_(t);let l=m().$implicit,c=m(2);return h(c.claimMastery(l))}),a(1,"mat-icon"),r(2,"redeem"),i(),r(3),tt(4,"number"),i()}if(n&2){let t=m().$implicit;d(3),x(" Claim ",et(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function ze(n,e){n&1&&(a(0,"span",44),r(1,"Reward claimed"),i())}function Ke(n,e){if(n&1){let t=M();a(0,"mat-card")(1,"mat-card-content",36)(2,"div",28),b(3,Le,2,1,"span",37),a(4,"div",38)(5,"div",39),r(6),i(),a(7,"div",40),r(8),i()(),a(9,"mat-icon",41),r(10,"emoji_events"),i()(),a(11,"div",42),b(12,qe,5,4,"button",43)(13,ze,2,0,"span",44),a(14,"button",45),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.unmaster(l))}),a(15,"mat-icon"),r(16,"undo"),i(),r(17," Un-master "),i(),a(18,"button",45),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(19,"mat-icon"),r(20,"archive"),i(),r(21," Archive "),i()()()()}if(n&2){let t=e.$implicit;d(3),g(t.emoji?3:-1),d(3),u(t.name),d(2),Dt("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),d(4),g(t.masteryRewardClaimed?13:12)}}function Ue(n,e){if(n&1&&(a(0,"div",14),y(1,Ke,22,5,"mat-card",null,G),i()),n&2){let t=m();d(),C(t.habits.masteredHabits())}}function Xe(n,e){if(n&1&&r(0),n&2){let t=m();x("Archive (",t.habits.archivedHabits().length,")")}}function Ye(n,e){n&1&&(a(0,"p",13),r(1,"No archived habits. Archive habits to reduce clutter or plan ahead."),i())}function We(n,e){if(n&1&&(a(0,"span",26),r(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Qe(n,e){n&1&&(a(0,"mat-icon",47),r(1,"emoji_events"),i())}function Je(n,e){if(n&1){let t=M();a(0,"div",22)(1,"div",24)(2,"div",25),b(3,We,2,1,"span",26),a(4,"span",27),r(5),i()(),a(6,"div",28)(7,"span",29),r(8),i(),b(9,Qe,2,0,"mat-icon",47),i()(),a(10,"div",33)(11,"button",18)(12,"mat-icon"),r(13,"more_vert"),i()(),a(14,"mat-menu",null,3)(16,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.unarchiveHabit(l))}),a(17,"mat-icon"),r(18,"unarchive"),i(),r(19," Unarchive "),i(),a(20,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.editHabit(l))}),a(21,"mat-icon"),r(22,"edit"),i(),r(23," Edit "),i(),a(24,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.deleteHabit(l))}),a(25,"mat-icon"),r(26,"delete"),i(),r(27," Delete "),i()()()()}if(n&2){let t=e.$implicit,o=X(15);d(3),g(t.emoji?3:-1),d(),p("title",t.name),d(),u(t.name),d(3),Dt(" (",t.basePoints,"pts) ",t.frequency,"\xD7/wk "),d(),g(t.isMastered?9:-1),d(2),p("matMenuTriggerFor",o)}}function Ze(n,e){if(n&1&&(a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),r(4),i()()(),y(5,Je,28,7,"div",22,G),i()),n&2){let t=e.$implicit,o=m(2);d(4),u(t.name),d(),C(o.archivedHabitsForGroup(t.id))}}function ti(n,e){if(n&1&&(a(0,"mat-accordion",7),y(1,Ze,7,1,"mat-expansion-panel",8,G),i()),n&2){let t=m();p("multi",!0),d(),C(t.sortedGroupsForArchive())}}var pe=class n{habits=f(ht);dialog=f(bt);othersGroupId=_t;last7Days=N(()=>ft(new Date,7));today=N(()=>ft(new Date,1)[0]);yesterday=N(()=>ft(new Date,2)[0]);sortedGroups=N(()=>{let e=this.habits.groups();return[...e.filter(t=>t.id!==_t),...e.filter(t=>t.id===_t)]});sortedGroupsForArchive=N(()=>this.sortedGroups().filter(e=>(this.habits.archivedHabitsByGroup()[e.id]??[]).length>0));dayLabel(e){let t=new Date(e+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(e){return new Date(e+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(e){return this.habits.habitsByGroup()[e]??[]}archivedHabitsForGroup(e){return this.habits.archivedHabitsByGroup()[e]??[]}masteryPercent(e){return this.habits.getMasteryProgress(e).percent}scoreEmojiForDate(e,t){let o=this.habits.getCompletion(e,t);return o?.completionScore?ae(o.completionScore):null}toggleHabitCompletion(e,t){if(this.habits.isCompleted(e.id,t)){this.habits.toggleCompletion(e.id,t);return}if(!e.withCompletionScore){this.habits.toggleCompletion(e.id,t);return}this.dialog.open(Ct,{width:"480px"}).afterClosed().subscribe(o=>{o!==void 0&&this.habits.completeWithScore(e.id,t,o)})}totalHabitPoints(e){return this.habits.completions().filter(t=>t.habitId===e).reduce((t,o)=>t+o.pointsEarned,0)}addGroup(){this.dialog.open(Y,{data:null,width:"380px"}).afterClosed().subscribe(e=>{e&&this.habits.addGroup(e.name)})}editGroup(e){this.dialog.open(Y,{data:e,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(e.id,t.name)})}deleteGroup(e){this.dialog.open(z,{data:{message:`Delete group "${e.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(e.id)})}addHabit(e){this.dialog.open(U,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:e},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(e){this.dialog.open(U,{data:{habit:e,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(e.id,t)})}deleteHabit(e){let t=this.totalHabitPoints(e.id);if(t===0){this.dialog.open(z,{data:{message:`Delete "${e.name}"?`}}).afterClosed().subscribe(o=>{o&&this.habits.deleteHabit(e.id,!0)});return}this.dialog.open(vt,{data:{habitName:e.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(o=>{o&&this.habits.deleteHabit(e.id,o==="keep-points")})}archiveHabit(e){this.habits.archiveHabit(e.id)}unarchiveHabit(e){this.habits.unarchiveHabit(e.id)}addHabitToArchive(){this.dialog.open(U,{data:{habit:null,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(e=>{e&&this.habits.addHabit(e,!0)})}claimMastery(e){this.dialog.open(yt,{data:{habitName:e.name,defaultPoints:e.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(e.id,t)})}unmaster(e){this.dialog.open(z,{data:{message:`Move "${e.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(e.id)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habits-page"]],decls:30,vars:4,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],["habitMenuY","matMenu"],["habitMenuA","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Today"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["label","Yesterday"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"text-sm","text-gray-400","py-2"],[1,"habit-row"],[1,"shrink-0",3,"change","checked"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","title"],[1,"day-chip",3,"click","title"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"],[1,"trophy-icon",2,"font-size","14px","width","14px","height","14px"]],template:function(t,o){t&1&&(a(0,"div",4)(1,"mat-tab-group")(2,"mat-tab",5)(3,"div",6)(4,"mat-accordion",7),y(5,Ge,23,4,"mat-expansion-panel",8,G),i(),a(7,"button",9),s("click",function(){return o.addGroup()}),a(8,"mat-icon"),r(9,"add"),i(),r(10," Add Group "),i()()(),a(11,"mat-tab",10)(12,"div",6)(13,"mat-accordion",7),y(14,$e,8,2,"mat-expansion-panel",8,G),i()()(),a(16,"mat-tab"),Mt(17,Oe,1,1,"ng-template",11),a(18,"div",12),b(19,Be,2,0,"p",13)(20,Ue,3,0,"div",14),i()(),a(21,"mat-tab"),Mt(22,Xe,1,1,"ng-template",11),a(23,"div",6)(24,"button",9),s("click",function(){return o.addHabitToArchive()}),a(25,"mat-icon"),r(26,"add"),i(),r(27," Add Habit to Archive "),i(),b(28,Ye,2,0,"p",13)(29,ti,3,1,"mat-accordion",7),i()()()()),t&2&&(d(4),p("multi",!0),d(),C(o.sortedGroups()),d(8),p("multi",!0),d(),C(o.sortedGroups()),d(5),g(o.habits.masteredHabits().length===0?19:20),d(9),g(o.habits.archivedHabits().length===0?28:29))},dependencies:[w,S,jt,Ut,Kt,ut,pt,Jt,Qt,Xt,Yt,Wt,de,re,le,Bt,$t,Rt,Ot,ie,Zt,te,ee,it],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{pe as HabitsPage};
