import{a as Xt,b as Yt,c as Wt,d as Qt,e as Jt,f as Zt,g as te,h as ee,i as ie}from"./chunk-GC37RYPG.js";import{a as ne,b as re}from"./chunk-UASNDPZR.js";import{a as Rt,b as $t,c as Ot,d as Bt,e as Lt,f as qt,g as zt}from"./chunk-FDUMLZBP.js";import"./chunk-WOFHDXZI.js";import{a as Kt,b as Ut}from"./chunk-R66DT5JI.js";import"./chunk-EVFCUY5S.js";import{a as z}from"./chunk-JKXQ3SOI.js";import{b as $,c as bt,g as O,h as B,k as L,l as q}from"./chunk-HCTYLJ4B.js";import{A as ut,C as H,D as F,E as A,F as k,a as jt,b as S,c as w,y as E,z as I}from"./chunk-PUSBWM5F.js";import{a as st,b as pt}from"./chunk-NCULXK4I.js";import{a as ae,c as gt,d as ft,e as _t}from"./chunk-2MYKUKTW.js";import"./chunk-CT3OW3FY.js";import"./chunk-RTXURBMN.js";import"./chunk-2Q5SZ3ZJ.js";import"./chunk-W3C7JVXL.js";import"./chunk-K66EXUFO.js";import{b as j,d as D,f as R,g as it,i as At,j as at,k as nt,n as rt,o as ot,p as Gt,q as lt,r as dt,s as mt,t as Vt,u as ct}from"./chunk-ED6V4OGT.js";import"./chunk-N5ZKCTSJ.js";import"./chunk-5R5NRHWZ.js";import{fa as Nt,h as et}from"./chunk-CO72KJRJ.js";import{Bb as kt,Cb as b,Db as g,Fb as Pt,Fc as N,Gb as y,Hb as C,Ib as p,Jb as a,Kb as i,Lb as P,Sb as M,Wb as s,Yb as m,Zb as Tt,_a as d,_b as It,ca as wt,ea as Et,ga as f,gc as X,ic as T,la as _,lc as o,ma as h,mc as u,nb as v,nc as x,ob as Ht,oc as Dt,pb as Ft,pc as St,tb as Mt,xc as Z,ya as J,zc as tt}from"./chunk-Q6RSDKAW.js";import"./chunk-Q7L6LLAK.js";var ue=["*"];var be=new Et("MAT_CARD_CONFIG"),oe=(()=>{class n{appearance;constructor(){let t=f(be,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=v({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,l){r&2&&T("mat-mdc-card-outlined",l.appearance==="outlined")("mdc-card--outlined",l.appearance==="outlined")("mat-mdc-card-filled",l.appearance==="filled")("mdc-card--filled",l.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ue,decls:1,vars:0,template:function(r,l){r&1&&(Tt(),It(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var le=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275dir=Ft({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var de=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=Ht({type:n});static \u0275inj=wt({imports:[Nt]})}return n})();function fe(n,e){n&1&&(a(0,"mat-error"),o(1,"Name is required"),i())}var Y=class n{fb=f(mt);dialogRef=f(E);data=f(I);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",D.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,r){if(t&1&&(a(0,"h2",0),o(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),o(6,"Group name"),i(),P(7,"input",3),b(8,fe,2,0,"mat-error"),i()()(),a(9,"mat-dialog-actions",4)(10,"button",5),s("click",function(){return r.cancel()}),o(11,"Cancel"),i(),a(12,"button",6),s("click",function(){return r.save()}),o(13),i()()),t&2){let l;d(),u(r.isEditMode?"Edit Group":"Add Group"),d(2),p("formGroup",r.form),d(5),g((l=r.form.get("name"))!=null&&l.invalid&&((l=r.form.get("name"))!=null&&l.touched)?8:-1),d(4),p("disabled",r.form.invalid),d(),x(" ",r.isEditMode?"Save":"Add"," ")}},dependencies:[ct,at,j,R,it,dt,ot,rt,k,H,A,F,B,O,$,bt,q,L,w,S],encapsulation:2})};var he=(n,e)=>e.id;function xe(n,e){n&1&&(a(0,"mat-error"),o(1,"Name is required"),i())}function ve(n,e){if(n&1&&(a(0,"mat-option",6),o(1),i()),n&2){let t=e.$implicit;p("value",t.id),d(),u(t.name)}}function ye(n,e){n&1&&(a(0,"mat-error"),o(1,"Must be at least 1"),i())}function Ce(n,e){n&1&&(a(0,"mat-error"),o(1,"Enter a value between 1 and 7"),i())}function Me(n,e){n&1&&(a(0,"mat-error"),o(1,"Must be at least 1"),i())}function De(n,e){if(n&1){let t=M();a(0,"button",16),s("click",function(){_(t);let l=m();return h(l.resetProgress())}),a(1,"mat-icon"),o(2,"restart_alt"),i(),o(3," Reset Progress "),i()}}var U=class n{fb=f(mt);dialogRef=f(E);matDialog=f(ut);habitsService=f(_t);data=f(I);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",D.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",D.required],basePoints:[this.data.habit?.basePoints??10,[D.required,D.min(1)]],frequency:[this.data.habit?.frequency??3,[D.required,D.min(1),D.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[D.required,D.min(1)]],withCompletionScore:[this.data.habit?.withCompletionScore??!1]});save(){if(this.form.invalid)return;let e=this.form.getRawValue();this.dialogRef.close({name:e.name,emoji:e.emoji||void 0,groupId:e.groupId,basePoints:e.basePoints,frequency:e.frequency,masteryRewardPoints:e.masteryRewardPoints,withCompletionScore:e.withCompletionScore??!1})}cancel(){this.dialogRef.close(void 0)}resetProgress(){this.matDialog.open(z,{data:{message:`Reset all progress for "${this.data.habit.name}"? All completions will be deleted.`,confirmLabel:"Reset"}}).afterClosed().subscribe(e=>{e&&this.habitsService.resetProgress(this.data.habit.id)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habit-form"]],decls:43,vars:9,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],[1,"toggle-row"],["formControlName","withCompletionScore"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","","color","warn",2,"margin-right","auto"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"],["mat-button","","color","warn",2,"margin-right","auto",3,"click"]],template:function(t,r){if(t&1&&(a(0,"h2",0),o(1),i(),a(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),o(6,"Name"),i(),P(7,"input",3),b(8,xe,2,0,"mat-error"),i(),a(9,"mat-form-field",2)(10,"mat-label"),o(11,"Emoji (optional)"),i(),P(12,"input",4),i(),a(13,"mat-form-field",2)(14,"mat-label"),o(15,"Group"),i(),a(16,"mat-select",5),y(17,ve,2,2,"mat-option",6,he),i()(),a(19,"mat-form-field",2)(20,"mat-label"),o(21,"Base points per completion"),i(),P(22,"input",7),b(23,ye,2,0,"mat-error"),i(),a(24,"div",8)(25,"mat-slide-toggle",9),o(26," With completion score "),i()(),a(27,"mat-form-field",2)(28,"mat-label"),o(29,"Frequency (times per week, 1\u20137)"),i(),P(30,"input",10),b(31,Ce,2,0,"mat-error"),i(),a(32,"mat-form-field",2)(33,"mat-label"),o(34,"Mastery reward points"),i(),P(35,"input",11),b(36,Me,2,0,"mat-error"),i()()(),a(37,"mat-dialog-actions",12),b(38,De,4,0,"button",13),a(39,"button",14),s("click",function(){return r.cancel()}),o(40,"Cancel"),i(),a(41,"button",15),s("click",function(){return r.save()}),o(42),i()()),t&2){let l,c,V,Q;d(),u(r.isEditMode?"Edit Habit":"Add Habit"),d(2),p("formGroup",r.form),d(5),g((l=r.form.get("name"))!=null&&l.invalid&&((l=r.form.get("name"))!=null&&l.touched)?8:-1),d(9),C(r.groups),d(6),g((c=r.form.get("basePoints"))!=null&&c.invalid&&((c=r.form.get("basePoints"))!=null&&c.touched)?23:-1),d(8),g((V=r.form.get("frequency"))!=null&&V.invalid&&((V=r.form.get("frequency"))!=null&&V.touched)?31:-1),d(5),g((Q=r.form.get("masteryRewardPoints"))!=null&&Q.invalid&&((Q=r.form.get("masteryRewardPoints"))!=null&&Q.touched)?36:-1),d(2),g(r.isEditMode?38:-1),d(3),p("disabled",r.form.invalid),d(),x(" ",r.isEditMode?"Save":"Add"," ")}},dependencies:[ct,at,j,nt,R,it,dt,lt,Gt,ot,rt,k,H,A,F,B,O,$,bt,q,L,zt,qt,Lt,w,S,pt,st,re,ne],styles:[".toggle-row[_ngcontent-%COMP%]{padding:4px 0 12px}"]})};function Se(n,e){if(n&1&&(a(0,"p"),o(1," This habit has earned "),a(2,"strong"),o(3),Z(4,"number"),i(),o(5," in total. What would you like to do with them? "),i()),n&2){let t=m();d(3),x("",tt(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var vt=class n{dialogRef=f(E);data=f(I);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,r){t&1&&(a(0,"h2",0),o(1,"Delete Habit"),i(),a(2,"mat-dialog-content")(3,"p"),o(4," Delete "),a(5,"strong"),o(6),i(),o(7,"? "),i(),b(8,Se,6,4,"p"),i(),a(9,"mat-dialog-actions",1)(10,"button",2),s("click",function(){return r.dialogRef.close()}),o(11,"Cancel"),i(),a(12,"button",2),s("click",function(){return r.dialogRef.close("keep-points")}),o(13,"Keep Points"),i(),a(14,"button",3),s("click",function(){return r.dialogRef.close("remove-points")}),o(15," Delete & Remove Points "),i()()),t&2&&(d(6),u(r.data.habitName),d(2),g(r.data.pointsEarned>0?8:-1))},dependencies:[k,H,A,F,w,S,et],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var yt=class n{dialogRef=f(E);data=f(I);amount=J(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,r){t&1&&(a(0,"h2",0),o(1,"\u{1F3C6} Habit Mastered!"),i(),a(2,"mat-dialog-content")(3,"p"),o(4," You've mastered "),a(5,"strong"),o(6),i(),o(7,". Claim your reward points: "),i(),a(8,"mat-form-field",1)(9,"mat-label"),o(10,"Reward points"),i(),a(11,"input",2),s("ngModelChange",function(c){return r.amount.set(+c)}),i()()(),a(12,"mat-dialog-actions",3)(13,"button",4),s("click",function(){return r.dialogRef.close()}),o(14,"Cancel"),i(),a(15,"button",5),s("click",function(){return r.confirm()}),o(16),i()()),t&2&&(d(6),u(r.data.habitName),d(5),p("ngModel",r.amount()),d(4),p("disabled",r.amount()<=0),d(),x(" Claim ",r.amount()," pts "))},dependencies:[Vt,j,nt,R,lt,At,k,H,A,F,B,O,$,q,L,w,S],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var we=(n,e)=>e.value;function Ee(n,e){if(n&1){let t=M();a(0,"button",3),s("click",function(){let l=_(t).$implicit,c=m();return h(c.select(l.value))}),a(1,"span",4),o(2),i(),a(3,"span",5),o(4),i()()}if(n&2){let t=e.$implicit,r=m();T("selected",r.selected()===t.value),kt("aria-label",t.label),d(2),u(t.emoji),d(2),u(t.label)}}var He=[{value:1,emoji:"\u{1F61E}",label:"Bad"},{value:2,emoji:"\u{1F615}",label:"Quite bad"},{value:3,emoji:"\u{1F610}",label:"Average"},{value:4,emoji:"\u{1F60A}",label:"Quite good"},{value:5,emoji:"\u{1F601}",label:"Good"}],Ct=class n{dialogRef=f(E);scores=He;selected=J(3);select(e){this.selected.set(e),this.confirm()}confirm(){this.dialogRef.close(this.selected())}onKey(e){let t=parseInt(e.key,10);t>=1&&t<=5?(this.selected.set(t),this.confirm()):e.key==="Enter"&&(e.preventDefault(),this.confirm())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-completion-score-dialog"]],hostBindings:function(t,r){t&1&&s("keydown",function(c){return r.onKey(c)})},decls:6,vars:0,consts:[["mat-dialog-title",""],[1,"scores-row"],[1,"score-btn",3,"selected"],[1,"score-btn",3,"click"],[1,"emoji"],[1,"label"]],template:function(t,r){t&1&&(a(0,"h2",0),o(1,"Rate your Habit"),i(),a(2,"mat-dialog-content")(3,"div",1),y(4,Ee,5,5,"button",2,we),i()()),t&2&&(d(4),C(r.scores))},dependencies:[k,H,F],styles:["mat-dialog-content[_ngcontent-%COMP%]{overflow:visible}.scores-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;padding:8px 0}.score-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 12px;background:transparent;border:2px dashed #bdbdbd;border-radius:12px;cursor:pointer;transition:border-color .15s,background .15s;outline:none}.score-btn[_ngcontent-%COMP%]:hover{border-color:#90caf9;background:#f5f9ff}.score-btn.selected[_ngcontent-%COMP%]{border-color:#1976d2;background:#e3f2fd}.emoji[_ngcontent-%COMP%]{font-size:28px;line-height:1}.label[_ngcontent-%COMP%]{font-size:11px;color:#616161;white-space:nowrap}.score-btn.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#1976d2;font-weight:600}"]})};var G=(n,e)=>e.id;function Fe(n,e){if(n&1){let t=M();a(0,"button",19),s("click",function(){_(t);let l=m().$implicit,c=m();return h(c.deleteGroup(l))}),a(1,"mat-icon"),o(2,"delete"),i(),o(3," Delete group "),i()}}function ke(n,e){n&1&&(a(0,"p",21),o(1,"No habits yet. Click + to add one."),i())}function Pe(n,e){if(n&1&&(a(0,"span",26),o(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Te(n,e){if(n&1&&(a(0,"span",32),o(1),i()),n&2){let t=m().$implicit,r=m(2);d(),u(r.scoreEmojiForDate(t.id,r.today()))}}function Ie(n,e){if(n&1){let t=M();a(0,"button",35),s("click",function(){let l=_(t).$implicit,c=m().$implicit,V=m(2);return h(V.toggleHabitCompletion(c,l))}),o(1),i()}if(n&2){let t=e.$implicit,r=m().$implicit,l=m(2);T("day-chip-checked",l.habits.isCompleted(r.id,t))("day-chip-scored",r.withCompletionScore&&!l.habits.isCompleted(r.id,t)),p("title",l.dayLabel(t)),d(),u(l.dayInitial(t))}}function Ae(n,e){if(n&1){let t=M();a(0,"div",22)(1,"mat-checkbox",23),s("change",function(){let l=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(l,c.today()))}),i(),a(2,"div",24)(3,"div",25),b(4,Pe,2,1,"span",26),a(5,"span",27),o(6),i()(),a(7,"div",28)(8,"span",29),o(9),i(),a(10,"span",30),o(11),i(),a(12,"span",31),o(13),i(),b(14,Te,2,1,"span",32),i()(),a(15,"div",33),y(16,Ie,2,6,"button",34,Pt),a(18,"button",18)(19,"mat-icon"),o(20,"more_vert"),i()(),a(21,"mat-menu",null,1)(23,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.editHabit(l))}),a(24,"mat-icon"),o(25,"edit"),i(),o(26," Edit "),i(),a(27,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(28,"mat-icon"),o(29,"archive"),i(),o(30," Archive "),i(),a(31,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.deleteHabit(l))}),a(32,"mat-icon"),o(33,"delete"),i(),o(34," Delete "),i()()()()}if(n&2){let t=e.$implicit,r=X(22),l=m(2);d(),p("checked",l.habits.isCompleted(t.id,l.today())),d(3),g(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),St(" (",t.basePoints,"pts) ",l.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+l.habits.getSticks(t.id)+"/7 (+"+l.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",l.habits.getSticks(t.id)),d(),T("mastery-low",l.masteryPercent(t)<50)("mastery-mid",l.masteryPercent(t)>=50&&l.masteryPercent(t)<80)("mastery-high",l.masteryPercent(t)>=80),p("title","Mastery: "+l.masteryPercent(t)+"%"),d(),x("",l.masteryPercent(t),"%"),d(),g(l.scoreEmojiForDate(t.id,l.today())?14:-1),d(2),C(l.last7Days()),d(2),p("matMenuTriggerFor",r)}}function Ge(n,e){if(n&1){let t=M();a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),o(4),i(),a(5,"span",17),s("click",function(l){return l.stopPropagation()}),a(6,"button",18)(7,"mat-icon"),o(8,"more_vert"),i()(),a(9,"mat-menu",null,0)(11,"button",19),s("click",function(){let l=_(t).$implicit,c=m();return h(c.addHabit(l.id))}),a(12,"mat-icon"),o(13,"add"),i(),o(14," Add habit "),i(),a(15,"button",19),s("click",function(){let l=_(t).$implicit,c=m();return h(c.editGroup(l))}),a(16,"mat-icon"),o(17,"edit"),i(),o(18," Edit group "),i(),b(19,Fe,4,0,"button",20),i()()()(),b(20,ke,2,0,"p",21),y(21,Ae,35,19,"div",22,G),i()}if(n&2){let t=e.$implicit,r=X(10),l=m();d(4),u(t.name),d(2),p("matMenuTriggerFor",r),d(13),g(t.id!==l.othersGroupId?19:-1),d(),g(l.habitsForGroup(t.id).length===0?20:-1),d(),C(l.habitsForGroup(t.id))}}function Ve(n,e){n&1&&(a(0,"p",21),o(1,"No habits in this group."),i())}function Ne(n,e){if(n&1&&(a(0,"span",26),o(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function je(n,e){if(n&1&&(a(0,"span",32),o(1),i()),n&2){let t=m().$implicit,r=m(2);d(),u(r.scoreEmojiForDate(t.id,r.yesterday()))}}function Re(n,e){if(n&1){let t=M();a(0,"div",22)(1,"mat-checkbox",23),s("change",function(){let l=_(t).$implicit,c=m(2);return h(c.toggleHabitCompletion(l,c.yesterday()))}),i(),a(2,"div",24)(3,"div",25),b(4,Ne,2,1,"span",26),a(5,"span",27),o(6),i()(),a(7,"div",28)(8,"span",29),o(9),i(),a(10,"span",30),o(11),i(),a(12,"span",31),o(13),i(),b(14,je,2,1,"span",32),i()(),a(15,"div",33)(16,"button",18)(17,"mat-icon"),o(18,"more_vert"),i()(),a(19,"mat-menu",null,2)(21,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.editHabit(l))}),a(22,"mat-icon"),o(23,"edit"),i(),o(24," Edit "),i(),a(25,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(26,"mat-icon"),o(27,"archive"),i(),o(28," Archive "),i(),a(29,"button",19),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.deleteHabit(l))}),a(30,"mat-icon"),o(31,"delete"),i(),o(32," Delete "),i()()()()}if(n&2){let t=e.$implicit,r=X(20),l=m(2);d(),p("checked",l.habits.isCompleted(t.id,l.yesterday())),d(3),g(t.emoji?4:-1),d(),p("title",t.name),d(),u(t.name),d(3),St(" (",t.basePoints,"pts) ",l.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),d(),p("title","Streak: "+l.habits.getSticks(t.id)+"/7 (+"+l.habits.getSticks(t.id)*10+"%)"),d(),x("\u{1F525} ",l.habits.getSticks(t.id)),d(),T("mastery-low",l.masteryPercent(t)<50)("mastery-mid",l.masteryPercent(t)>=50&&l.masteryPercent(t)<80)("mastery-high",l.masteryPercent(t)>=80),p("title","Mastery: "+l.masteryPercent(t)+"%"),d(),x("",l.masteryPercent(t),"%"),d(),g(l.scoreEmojiForDate(t.id,l.yesterday())?14:-1),d(2),p("matMenuTriggerFor",r)}}function $e(n,e){if(n&1&&(a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),o(4),i()()(),b(5,Ve,2,0,"p",21),y(6,Re,33,19,"div",22,G),i()),n&2){let t=e.$implicit,r=m();d(4),u(t.name),d(),g(r.habitsForGroup(t.id).length===0?5:-1),d(),C(r.habitsForGroup(t.id))}}function Oe(n,e){if(n&1&&o(0),n&2){let t=m();x("Mastered (",t.habits.masteredHabits().length,")")}}function Be(n,e){n&1&&(a(0,"p",13),o(1,"No mastered habits yet. Keep going!"),i())}function Le(n,e){if(n&1&&(a(0,"span",37),o(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function qe(n,e){if(n&1){let t=M();a(0,"button",46),s("click",function(){_(t);let l=m().$implicit,c=m(2);return h(c.claimMastery(l))}),a(1,"mat-icon"),o(2,"redeem"),i(),o(3),Z(4,"number"),i()}if(n&2){let t=m().$implicit;d(3),x(" Claim ",tt(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function ze(n,e){n&1&&(a(0,"span",44),o(1,"Reward claimed"),i())}function Ke(n,e){if(n&1){let t=M();a(0,"mat-card")(1,"mat-card-content",36)(2,"div",28),b(3,Le,2,1,"span",37),a(4,"div",38)(5,"div",39),o(6),i(),a(7,"div",40),o(8),i()(),a(9,"mat-icon",41),o(10,"emoji_events"),i()(),a(11,"div",42),b(12,qe,5,4,"button",43)(13,ze,2,0,"span",44),a(14,"button",45),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.unmaster(l))}),a(15,"mat-icon"),o(16,"undo"),i(),o(17," Un-master "),i(),a(18,"button",45),s("click",function(){let l=_(t).$implicit,c=m(2);return h(c.archiveHabit(l))}),a(19,"mat-icon"),o(20,"archive"),i(),o(21," Archive "),i()()()()}if(n&2){let t=e.$implicit;d(3),g(t.emoji?3:-1),d(3),u(t.name),d(2),Dt("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),d(4),g(t.masteryRewardClaimed?13:12)}}function Ue(n,e){if(n&1&&(a(0,"div",14),y(1,Ke,22,5,"mat-card",null,G),i()),n&2){let t=m();d(),C(t.habits.masteredHabits())}}function Xe(n,e){if(n&1&&o(0),n&2){let t=m();x("Archive (",t.habits.archivedHabits().length,")")}}function Ye(n,e){n&1&&(a(0,"p",13),o(1,"No archived habits. Archive habits to reduce clutter or plan ahead."),i())}function We(n,e){if(n&1&&(a(0,"span",26),o(1),i()),n&2){let t=m().$implicit;d(),u(t.emoji)}}function Qe(n,e){n&1&&(a(0,"mat-icon",47),o(1,"emoji_events"),i())}function Je(n,e){if(n&1){let t=M();a(0,"div",22)(1,"div",24)(2,"div",25),b(3,We,2,1,"span",26),a(4,"span",27),o(5),i()(),a(6,"div",28)(7,"span",29),o(8),i(),b(9,Qe,2,0,"mat-icon",47),i()(),a(10,"div",33)(11,"button",18)(12,"mat-icon"),o(13,"more_vert"),i()(),a(14,"mat-menu",null,3)(16,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.unarchiveHabit(l))}),a(17,"mat-icon"),o(18,"unarchive"),i(),o(19," Unarchive "),i(),a(20,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.editHabit(l))}),a(21,"mat-icon"),o(22,"edit"),i(),o(23," Edit "),i(),a(24,"button",19),s("click",function(){let l=_(t).$implicit,c=m(3);return h(c.deleteHabit(l))}),a(25,"mat-icon"),o(26,"delete"),i(),o(27," Delete "),i()()()()}if(n&2){let t=e.$implicit,r=X(15);d(3),g(t.emoji?3:-1),d(),p("title",t.name),d(),u(t.name),d(3),Dt(" (",t.basePoints,"pts) ",t.frequency,"\xD7/wk "),d(),g(t.isMastered?9:-1),d(2),p("matMenuTriggerFor",r)}}function Ze(n,e){if(n&1&&(a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title",15)(3,"span",16),o(4),i()()(),y(5,Je,28,7,"div",22,G),i()),n&2){let t=e.$implicit,r=m(2);d(4),u(t.name),d(),C(r.archivedHabitsForGroup(t.id))}}function ti(n,e){if(n&1&&(a(0,"mat-accordion",7),y(1,Ze,7,1,"mat-expansion-panel",8,G),i()),n&2){let t=m();p("multi",!0),d(),C(t.sortedGroupsForArchive())}}var pe=class n{habits=f(_t);dialog=f(ut);othersGroupId=ft;last7Days=N(()=>gt(new Date,7));today=N(()=>gt(new Date,1)[0]);yesterday=N(()=>gt(new Date,2)[0]);sortedGroups=N(()=>{let e=this.habits.groups();return[...e.filter(t=>t.id!==ft),...e.filter(t=>t.id===ft)]});sortedGroupsForArchive=N(()=>this.sortedGroups().filter(e=>(this.habits.archivedHabitsByGroup()[e.id]??[]).length>0));dayLabel(e){let t=new Date(e+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(e){return new Date(e+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(e){return this.habits.habitsByGroup()[e]??[]}archivedHabitsForGroup(e){return this.habits.archivedHabitsByGroup()[e]??[]}masteryPercent(e){return this.habits.getMasteryProgress(e).percent}scoreEmojiForDate(e,t){let r=this.habits.getCompletion(e,t);return r?.completionScore?ae(r.completionScore):null}toggleHabitCompletion(e,t){if(this.habits.isCompleted(e.id,t)){this.habits.toggleCompletion(e.id,t);return}if(!e.withCompletionScore){this.habits.toggleCompletion(e.id,t);return}this.dialog.open(Ct,{width:"480px"}).afterClosed().subscribe(r=>{r!==void 0&&this.habits.completeWithScore(e.id,t,r)})}totalHabitPoints(e){return this.habits.completions().filter(t=>t.habitId===e).reduce((t,r)=>t+r.pointsEarned,0)}addGroup(){this.dialog.open(Y,{data:null,width:"380px"}).afterClosed().subscribe(e=>{e&&this.habits.addGroup(e.name)})}editGroup(e){this.dialog.open(Y,{data:e,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(e.id,t.name)})}deleteGroup(e){this.dialog.open(z,{data:{message:`Delete group "${e.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(e.id)})}addHabit(e){this.dialog.open(U,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:e},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(e){this.dialog.open(U,{data:{habit:e,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(e.id,t)})}deleteHabit(e){let t=this.totalHabitPoints(e.id);if(t===0){this.dialog.open(z,{data:{message:`Delete "${e.name}"?`}}).afterClosed().subscribe(r=>{r&&this.habits.deleteHabit(e.id,!0)});return}this.dialog.open(vt,{data:{habitName:e.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(r=>{r&&this.habits.deleteHabit(e.id,r==="keep-points")})}archiveHabit(e){this.habits.archiveHabit(e.id)}unarchiveHabit(e){this.habits.unarchiveHabit(e.id)}addHabitToArchive(){this.dialog.open(U,{data:{habit:null,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(e=>{e&&this.habits.addHabit(e,!0)})}claimMastery(e){this.dialog.open(yt,{data:{habitName:e.name,defaultPoints:e.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(e.id,t)})}unmaster(e){this.dialog.open(z,{data:{message:`Move "${e.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(e.id)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-habits-page"]],decls:30,vars:4,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],["habitMenuY","matMenu"],["habitMenuA","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Today"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["label","Yesterday"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"text-sm","text-gray-400","py-2"],[1,"habit-row"],[1,"shrink-0",3,"change","checked"],[1,"flex","flex-col","min-w-0","flex-1"],[1,"flex","items-center","gap-1","min-w-0"],[1,"shrink-0","leading-none"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"flex","items-center","gap-2"],[1,"text-xs","text-gray-400","whitespace-nowrap"],[1,"shrink-0","text-xs","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"text-base","leading-none","shrink-0"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","day-chip-scored","title"],[1,"day-chip",3,"click","title"],[1,"mastered-content"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"],[1,"trophy-icon",2,"font-size","14px","width","14px","height","14px"]],template:function(t,r){t&1&&(a(0,"div",4)(1,"mat-tab-group")(2,"mat-tab",5)(3,"div",6)(4,"mat-accordion",7),y(5,Ge,23,4,"mat-expansion-panel",8,G),i(),a(7,"button",9),s("click",function(){return r.addGroup()}),a(8,"mat-icon"),o(9,"add"),i(),o(10," Add Group "),i()()(),a(11,"mat-tab",10)(12,"div",6)(13,"mat-accordion",7),y(14,$e,8,2,"mat-expansion-panel",8,G),i()()(),a(16,"mat-tab"),Mt(17,Oe,1,1,"ng-template",11),a(18,"div",12),b(19,Be,2,0,"p",13)(20,Ue,3,0,"div",14),i()(),a(21,"mat-tab"),Mt(22,Xe,1,1,"ng-template",11),a(23,"div",6)(24,"button",9),s("click",function(){return r.addHabitToArchive()}),a(25,"mat-icon"),o(26,"add"),i(),o(27," Add Habit to Archive "),i(),b(28,Ye,2,0,"p",13)(29,ti,3,1,"mat-accordion",7),i()()()()),t&2&&(d(4),p("multi",!0),d(),C(r.sortedGroups()),d(8),p("multi",!0),d(),C(r.sortedGroups()),d(5),g(r.habits.masteredHabits().length===0?19:20),d(9),g(r.habits.archivedHabits().length===0?28:29))},dependencies:[w,S,jt,Ut,Kt,pt,st,Jt,Qt,Xt,Yt,Wt,de,oe,le,Bt,$t,Rt,Ot,ie,Zt,te,ee,et],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:6px 0;border-top:1px solid rgba(0,0,0,.06);min-height:52px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.day-chip-scored[_ngcontent-%COMP%]{border-color:#90caf9;color:#1976d2}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{pe as HabitsPage};
