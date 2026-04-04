import{a as Lt,b as $t,c as qt,d as zt,e as Xt,f as Ut,g as Kt,h as Wt,i as Yt}from"./chunk-5VBPKHJE.js";import{a as jt,b as Bt,c as Ot}from"./chunk-56FWPQAW.js";import{a as Gt,b as Nt,c as Rt,d as Vt}from"./chunk-YWVOFPQQ.js";import"./chunk-KDX2F5XE.js";import{a as ut}from"./chunk-VO6TUS44.js";import{A as At,C as S,D as H,E as k,F,a as Tt,b as v,c as y,y as w,z as E}from"./chunk-I6Y3GREL.js";import{a as It,b as Pt}from"./chunk-6N6GO5LP.js";import{b as R,c as rt,g as V,h as j,k as B,l as O}from"./chunk-OEW4JWJD.js";import{b as Jt,c as ot,d as Qt}from"./chunk-TAIYTZ45.js";import"./chunk-MNGV6IHC.js";import"./chunk-2TXXKFHM.js";import"./chunk-BCMP54PU.js";import"./chunk-K66EXUFO.js";import"./chunk-SWIXLFUM.js";import"./chunk-MCAQEUJG.js";import"./chunk-RL5SRWV4.js";import{da as G,fa as x,g as W,ha as N,ia as Y,ka as St,la as J,ma as Q,pa as Z,qa as tt,ra as Ht,sa as et,ta as it,ua as at,va as kt,wa as nt,ya as Ft}from"./chunk-B2KD4SEN.js";import{Bb as f,Cb as g,Eb as Mt,Ec as pt,Fb as I,Gb as P,Hb as u,Ib as n,Jb as e,Kb as D,Rb as T,Vb as m,Xb as c,Yb as Ct,Za as l,Zb as Dt,ba as bt,da as _t,fa as p,fc as st,hc as L,ka as M,kc as r,la as C,lc as b,mb as h,mc as _,nb as xt,nc as wt,ob as vt,oc as Et,sb as yt,wc as U,xa as ht,yc as K}from"./chunk-YQKOKR5B.js";import"./chunk-Q7L6LLAK.js";var oe=["*"];var de=new _t("MAT_CARD_CONFIG"),Zt=(()=>{class a{appearance;constructor(){let t=p(de,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(o,d){o&2&&L("mat-mdc-card-outlined",d.appearance==="outlined")("mdc-card--outlined",d.appearance==="outlined")("mat-mdc-card-filled",d.appearance==="filled")("mdc-card--filled",d.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:oe,decls:1,vars:0,template:function(o,d){o&1&&(Ct(),Dt(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return a})();var te=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275dir=vt({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var ee=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=xt({type:a});static \u0275inj=bt({imports:[Ft]})}return a})();function me(a,i){a&1&&(n(0,"mat-error"),r(1,"Name is required"),e())}var q=class a{fb=p(at);dialogRef=p(w);data=p(E);isEditMode=!!this.data;form=this.fb.group({name:[this.data?.name??"",x.required]});save(){this.form.invalid||this.dialogRef.close({name:this.form.getRawValue().name})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=h({type:a,selectors:[["app-habit-group-form"]],decls:14,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","60"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(n(0,"h2",0),r(1),e(),n(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Group name"),e(),D(7,"input",3),f(8,me,2,0,"mat-error"),e()()(),n(9,"mat-dialog-actions",4)(10,"button",5),m("click",function(){return o.cancel()}),r(11,"Cancel"),e(),n(12,"button",6),m("click",function(){return o.save()}),r(13),e()()),t&2){let d;l(),b(o.isEditMode?"Edit Group":"Add Group"),l(2),u("formGroup",o.form),l(5),g((d=o.form.get("name"))!=null&&d.invalid&&((d=o.form.get("name"))!=null&&d.touched)?8:-1),l(4),u("disabled",o.form.invalid),l(),_(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[nt,J,G,N,Y,it,tt,Z,F,S,k,H,j,V,R,rt,O,B,y,v],encapsulation:2})};var ce=(a,i)=>i.id;function se(a,i){a&1&&(n(0,"mat-error"),r(1,"Name is required"),e())}function pe(a,i){if(a&1&&(n(0,"mat-option",6),r(1),e()),a&2){let t=i.$implicit;u("value",t.id),l(),b(t.name)}}function ue(a,i){a&1&&(n(0,"mat-error"),r(1,"Must be at least 1"),e())}function fe(a,i){a&1&&(n(0,"mat-error"),r(1,"Enter a value between 1 and 7"),e())}function ge(a,i){a&1&&(n(0,"mat-error"),r(1,"Must be at least 1"),e())}var z=class a{fb=p(at);dialogRef=p(w);data=p(E);isEditMode=!!this.data.habit;groups=this.data.groups;form=this.fb.group({name:[this.data.habit?.name??"",x.required],emoji:[this.data.habit?.emoji??""],groupId:[this.data.habit?.groupId??this.data.defaultGroupId??this.groups[0]?.id??"",x.required],basePoints:[this.data.habit?.basePoints??10,[x.required,x.min(1)]],frequency:[this.data.habit?.frequency??3,[x.required,x.min(1),x.max(7)]],masteryRewardPoints:[this.data.habit?.masteryRewardPoints??100,[x.required,x.min(1)]]});save(){if(this.form.invalid)return;let i=this.form.getRawValue();this.dialogRef.close({name:i.name,emoji:i.emoji||void 0,groupId:i.groupId,basePoints:i.basePoints,frequency:i.frequency,masteryRewardPoints:i.masteryRewardPoints})}cancel(){this.dialogRef.close(void 0)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=h({type:a,selectors:[["app-habit-form"]],decls:39,vars:8,consts:[["mat-dialog-title",""],[1,"habit-form-fields",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","maxlength","100"],["matInput","","formControlName","emoji","maxlength","4"],["formControlName","groupId"],[3,"value"],["matInput","","type","number","formControlName","basePoints","min","1","step","1"],["matInput","","type","number","formControlName","frequency","min","1","max","7","step","1"],["matInput","","type","number","formControlName","masteryRewardPoints","min","1","step","1"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){if(t&1&&(n(0,"h2",0),r(1),e(),n(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),r(6,"Name"),e(),D(7,"input",3),f(8,se,2,0,"mat-error"),e(),n(9,"mat-form-field",2)(10,"mat-label"),r(11,"Emoji (optional)"),e(),D(12,"input",4),e(),n(13,"mat-form-field",2)(14,"mat-label"),r(15,"Group"),e(),n(16,"mat-select",5),I(17,pe,2,2,"mat-option",6,ce),e()(),n(19,"mat-form-field",2)(20,"mat-label"),r(21,"Base points per completion"),e(),D(22,"input",7),f(23,ue,2,0,"mat-error"),e(),n(24,"mat-form-field",2)(25,"mat-label"),r(26,"Frequency (times per week, 1\u20137)"),e(),D(27,"input",8),f(28,fe,2,0,"mat-error"),e(),n(29,"mat-form-field",2)(30,"mat-label"),r(31,"Mastery reward points"),e(),D(32,"input",9),f(33,ge,2,0,"mat-error"),e()()(),n(34,"mat-dialog-actions",10)(35,"button",11),m("click",function(){return o.cancel()}),r(36,"Cancel"),e(),n(37,"button",12),m("click",function(){return o.save()}),r(38),e()()),t&2){let d,s,A,X;l(),b(o.isEditMode?"Edit Habit":"Add Habit"),l(2),u("formGroup",o.form),l(5),g((d=o.form.get("name"))!=null&&d.invalid&&((d=o.form.get("name"))!=null&&d.touched)?8:-1),l(9),P(o.groups),l(6),g((s=o.form.get("basePoints"))!=null&&s.invalid&&((s=o.form.get("basePoints"))!=null&&s.touched)?23:-1),l(5),g((A=o.form.get("frequency"))!=null&&A.invalid&&((A=o.form.get("frequency"))!=null&&A.touched)?28:-1),l(5),g((X=o.form.get("masteryRewardPoints"))!=null&&X.invalid&&((X=o.form.get("masteryRewardPoints"))!=null&&X.touched)?33:-1),l(4),u("disabled",o.form.invalid),l(),_(" ",o.isEditMode?"Save":"Add"," ")}},dependencies:[nt,J,G,Q,N,Y,it,et,Ht,tt,Z,F,S,k,H,j,V,R,rt,O,B,Ot,Bt,jt,y,v],encapsulation:2})};function be(a,i){if(a&1&&(n(0,"p"),r(1," This habit has earned "),n(2,"strong"),r(3),U(4,"number"),e(),r(5," in total. What would you like to do with them? "),e()),a&2){let t=c();l(3),_("",K(4,1,t.data.pointsEarned,"1.0-0")," pts")}}var mt=class a{dialogRef=p(w);data=p(E);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=h({type:a,selectors:[["app-delete-habit-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[1,"delete-actions"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,o){t&1&&(n(0,"h2",0),r(1,"Delete Habit"),e(),n(2,"mat-dialog-content")(3,"p"),r(4," Delete "),n(5,"strong"),r(6),e(),r(7,"? "),e(),f(8,be,6,4,"p"),e(),n(9,"mat-dialog-actions",1)(10,"button",2),m("click",function(){return o.dialogRef.close()}),r(11,"Cancel"),e(),n(12,"button",2),m("click",function(){return o.dialogRef.close("keep-points")}),r(13,"Keep Points"),e(),n(14,"button",3),m("click",function(){return o.dialogRef.close("remove-points")}),r(15," Delete & Remove Points "),e()()),t&2&&(l(6),b(o.data.habitName),l(2),g(o.data.pointsEarned>0?8:-1))},dependencies:[F,S,k,H,y,v,W],styles:[".delete-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px}"]})};var ct=class a{dialogRef=p(w);data=p(E);amount=ht(this.data.defaultPoints);confirm(){this.amount()<=0||this.dialogRef.close(this.amount())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=h({type:a,selectors:[["app-claim-mastery-dialog"]],decls:17,vars:4,consts:[["mat-dialog-title",""],["appearance","outline",1,"full-width"],["matInput","","type","number","min","1","step","1",3,"ngModelChange","ngModel"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"]],template:function(t,o){t&1&&(n(0,"h2",0),r(1,"\u{1F3C6} Habit Mastered!"),e(),n(2,"mat-dialog-content")(3,"p"),r(4," You've mastered "),n(5,"strong"),r(6),e(),r(7,". Claim your reward points: "),e(),n(8,"mat-form-field",1)(9,"mat-label"),r(10,"Reward points"),e(),n(11,"input",2),m("ngModelChange",function(s){return o.amount.set(+s)}),e()()(),n(12,"mat-dialog-actions",3)(13,"button",4),m("click",function(){return o.dialogRef.close()}),r(14,"Cancel"),e(),n(15,"button",5),m("click",function(){return o.confirm()}),r(16),e()()),t&2&&(l(6),b(o.data.habitName),l(5),u("ngModel",o.amount()),l(4),u("disabled",o.amount()<=0),l(),_(" Claim ",o.amount()," pts "))},dependencies:[kt,G,Q,N,et,St,F,S,k,H,j,V,R,O,B,y,v],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})};var gt=(a,i)=>i.id;function _e(a,i){if(a&1){let t=T();n(0,"button",16),m("click",function(){M(t);let d=c().$implicit,s=c();return C(s.deleteGroup(d))}),n(1,"mat-icon"),r(2,"delete"),e(),r(3," Delete group "),e()}}function he(a,i){a&1&&(n(0,"p",18),r(1,"No habits yet. Click + to add one."),e())}function xe(a,i){if(a&1&&(n(0,"span",21),r(1),e()),a&2){let t=c().$implicit;l(),b(t.emoji)}}function ve(a,i){if(a&1){let t=T();n(0,"button",28),m("click",function(){let d=M(t).$implicit,s=c().$implicit,A=c(2);return C(A.habits.toggleCompletion(s.id,d))}),r(1),e()}if(a&2){let t=i.$implicit,o=c().$implicit,d=c(2);L("day-chip-checked",d.habits.isCompleted(o.id,t)),u("title",d.dayLabel(t)),l(),b(d.dayInitial(t))}}function ye(a,i){if(a&1){let t=T();n(0,"div",19)(1,"div",20),f(2,xe,2,1,"span",21),n(3,"span",22),r(4),e(),n(5,"span",23),r(6),e(),n(7,"span",24),r(8),e(),n(9,"span",25),r(10),e()(),n(11,"div",26),I(12,ve,2,4,"button",27,Mt),n(14,"button",15)(15,"mat-icon"),r(16,"more_vert"),e()(),n(17,"mat-menu",null,1)(19,"button",16),m("click",function(){let d=M(t).$implicit,s=c(2);return C(s.editHabit(d))}),n(20,"mat-icon"),r(21,"edit"),e(),r(22," Edit "),e(),n(23,"button",16),m("click",function(){let d=M(t).$implicit,s=c(2);return C(s.deleteHabit(d))}),n(24,"mat-icon"),r(25,"delete"),e(),r(26," Delete "),e()()()()}if(a&2){let t=i.$implicit,o=st(18),d=c(2);l(2),g(t.emoji?2:-1),l(),u("title",t.name),l(),b(t.name),l(2),Et(" (",t.basePoints,"pts) ",d.habits.weeklyCompletionCount(t.id),"/",t.frequency," done "),l(),u("title","Streak: "+d.habits.getSticks(t.id)+"/7 (+"+d.habits.getSticks(t.id)*10+"%)"),l(),_("\u{1F525} ",d.habits.getSticks(t.id)),l(),L("mastery-low",d.masteryPercent(t)<50)("mastery-mid",d.masteryPercent(t)>=50&&d.masteryPercent(t)<80)("mastery-high",d.masteryPercent(t)>=80),u("title","Mastery: "+d.masteryPercent(t)+"%"),l(),_("",d.masteryPercent(t),"%"),l(2),P(d.last7Days()),l(2),u("matMenuTriggerFor",o)}}function Me(a,i){if(a&1){let t=T();n(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header")(2,"mat-panel-title",12)(3,"span",13),r(4),e(),n(5,"span",14),m("click",function(d){return d.stopPropagation()}),n(6,"button",15)(7,"mat-icon"),r(8,"more_vert"),e()(),n(9,"mat-menu",null,0)(11,"button",16),m("click",function(){let d=M(t).$implicit,s=c();return C(s.addHabit(d.id))}),n(12,"mat-icon"),r(13,"add"),e(),r(14," Add habit "),e(),n(15,"button",16),m("click",function(){let d=M(t).$implicit,s=c();return C(s.editGroup(d))}),n(16,"mat-icon"),r(17,"edit"),e(),r(18," Edit group "),e(),f(19,_e,4,0,"button",17),e()()()(),f(20,he,2,0,"p",18),I(21,ye,27,17,"div",19,gt),e()}if(a&2){let t=i.$implicit,o=st(10),d=c();l(4),b(t.name),l(2),u("matMenuTriggerFor",o),l(13),g(t.id!==d.othersGroupId?19:-1),l(),g(d.habitsForGroup(t.id).length===0?20:-1),l(),P(d.habitsForGroup(t.id))}}function Ce(a,i){if(a&1&&r(0),a&2){let t=c();_("Mastered (",t.habits.masteredHabits().length,")")}}function De(a,i){a&1&&(n(0,"p",10),r(1,"No mastered habits yet. Keep going!"),e())}function we(a,i){if(a&1&&(n(0,"span",31),r(1),e()),a&2){let t=c().$implicit;l(),b(t.emoji)}}function Ee(a,i){if(a&1){let t=T();n(0,"button",40),m("click",function(){M(t);let d=c().$implicit,s=c(2);return C(s.claimMastery(d))}),n(1,"mat-icon"),r(2,"redeem"),e(),r(3),U(4,"number"),e()}if(a&2){let t=c().$implicit;l(3),_(" Claim ",K(4,1,t.masteryRewardPoints,"1.0-0")," pts ")}}function Se(a,i){a&1&&(n(0,"span",38),r(1,"Reward claimed"),e())}function He(a,i){if(a&1){let t=T();n(0,"mat-card")(1,"mat-card-content",29)(2,"div",30),f(3,we,2,1,"span",31),n(4,"div",32)(5,"div",33),r(6),e(),n(7,"div",34),r(8),e()(),n(9,"mat-icon",35),r(10,"emoji_events"),e()(),n(11,"div",36),f(12,Ee,5,4,"button",37)(13,Se,2,0,"span",38),n(14,"button",39),m("click",function(){let d=M(t).$implicit,s=c(2);return C(s.unmaster(d))}),n(15,"mat-icon"),r(16,"undo"),e(),r(17," Un-master "),e()()()()}if(a&2){let t=i.$implicit;l(3),g(t.emoji?3:-1),l(3),b(t.name),l(2),wt("",t.frequency,"\xD7/wk \xB7 ",t.basePoints," pts/completion"),l(4),g(t.masteryRewardClaimed?13:12)}}function ke(a,i){if(a&1&&(n(0,"div",11),I(1,He,18,5,"mat-card",null,gt),e()),a&2){let t=c();l(),P(t.habits.masteredHabits())}}var re=class a{habits=p(Qt);dialog=p(At);othersGroupId=ot;last7Days=pt(()=>Jt(new Date,7));sortedGroups=pt(()=>{let i=this.habits.groups();return[...i.filter(t=>t.id!==ot),...i.filter(t=>t.id===ot)]});dayLabel(i){let t=new Date(i+"T00:00:00");return t.toLocaleDateString("en",{weekday:"short"})+" "+t.getDate()}dayInitial(i){return new Date(i+"T00:00:00").toLocaleDateString("en",{weekday:"narrow"})}habitsForGroup(i){return this.habits.habitsByGroup()[i]??[]}masteryPercent(i){return this.habits.getMasteryProgress(i).percent}totalHabitPoints(i){return this.habits.completions().filter(t=>t.habitId===i).reduce((t,o)=>t+o.pointsEarned,0)}addGroup(){this.dialog.open(q,{data:null,width:"380px"}).afterClosed().subscribe(i=>{i&&this.habits.addGroup(i.name)})}editGroup(i){this.dialog.open(q,{data:i,width:"380px"}).afterClosed().subscribe(t=>{t&&this.habits.updateGroup(i.id,t.name)})}deleteGroup(i){this.dialog.open(ut,{data:{message:`Delete group "${i.name}"? Habits will be moved to Others.`}}).afterClosed().subscribe(t=>{t&&this.habits.deleteGroup(i.id)})}addHabit(i){this.dialog.open(z,{data:{habit:null,groups:this.habits.groups(),defaultGroupId:i},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.addHabit(t)})}editHabit(i){this.dialog.open(z,{data:{habit:i,groups:this.habits.groups()},width:"440px"}).afterClosed().subscribe(t=>{t&&this.habits.updateHabit(i.id,t)})}deleteHabit(i){let t=this.totalHabitPoints(i.id);this.dialog.open(mt,{data:{habitName:i.name,pointsEarned:t},width:"400px"}).afterClosed().subscribe(o=>{o&&this.habits.deleteHabit(i.id,o==="keep-points")})}claimMastery(i){this.dialog.open(ct,{data:{habitName:i.name,defaultPoints:i.masteryRewardPoints},width:"380px"}).afterClosed().subscribe(t=>{t!==void 0&&this.habits.claimMasteryReward(i.id,t)})}unmaster(i){this.dialog.open(ut,{data:{message:`Move "${i.name}" back to active habits?`,confirmLabel:"Un-master"}}).afterClosed().subscribe(t=>{t&&this.habits.unmaster(i.id)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=h({type:a,selectors:[["app-habits-page"]],decls:16,vars:2,consts:[["groupMenu","matMenu"],["habitMenu","matMenu"],[1,"p-6","flex","flex-col","gap-5","h-full","overflow-y-auto"],["label","Active"],[1,"flex","flex-col","gap-5","pt-4","p-2.5"],[3,"multi"],["expanded",""],["mat-stroked-button","",1,"self-start",3,"click"],["mat-tab-label",""],[1,"pt-4"],[1,"text-gray-400","text-center","py-10"],[1,"flex","flex-col","gap-3"],[1,"group-header"],[1,"font-medium","flex-1"],[3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item",""],[1,"text-sm","text-gray-400","py-2"],[1,"habit-row"],[1,"flex","items-center","gap-2","flex-1","min-w-0","overflow-hidden"],[1,"shrink-0"],[1,"text-sm","font-medium","truncate",3,"title"],[1,"text-xs","text-gray-400","shrink-0","whitespace-nowrap"],[1,"shrink-0","text-sm","whitespace-nowrap",3,"title"],[1,"mastery-dot","shrink-0",3,"title"],[1,"flex","items-center","gap-1","shrink-0"],[1,"day-chip",3,"day-chip-checked","title"],[1,"day-chip",3,"click","title"],[1,"mastered-content"],[1,"flex","items-center","gap-2"],[1,"text-lg"],[1,"flex-1","min-w-0"],[1,"font-medium"],[1,"text-xs","text-gray-400"],[1,"trophy-icon"],[1,"flex","items-center","gap-2","flex-wrap"],["mat-flat-button",""],[1,"claimed-badge"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"]],template:function(t,o){t&1&&(n(0,"div",2)(1,"mat-tab-group")(2,"mat-tab",3)(3,"div",4)(4,"mat-accordion",5),I(5,Me,23,4,"mat-expansion-panel",6,gt),e(),n(7,"button",7),m("click",function(){return o.addGroup()}),n(8,"mat-icon"),r(9,"add"),e(),r(10," Add Group "),e()()(),n(11,"mat-tab"),yt(12,Ce,1,1,"ng-template",8),n(13,"div",9),f(14,De,2,0,"p",10)(15,ke,3,0,"div",11),e()()()()),t&2&&(l(4),u("multi",!0),l(),P(o.sortedGroups()),l(9),g(o.habits.masteredHabits().length===0?14:15))},dependencies:[y,v,Tt,Pt,It,Xt,zt,Lt,$t,qt,ee,Zt,te,Vt,Nt,Gt,Rt,Yt,Ut,Kt,Wt,W],styles:[".group-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.habit-row[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);min-height:40px;width:100%}.mastery-dot[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:38px;height:20px;border-radius:10px;font-size:.625rem;font-weight:600;color:#fff;cursor:default}.mastery-low[_ngcontent-%COMP%]{background:#bdbdbd}.mastery-mid[_ngcontent-%COMP%]{background:#ffa726}.mastery-high[_ngcontent-%COMP%]{background:#66bb6a}.day-chip[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:1.5px solid #e0e0e0;background:transparent;font-size:.6rem;font-weight:600;color:#bdbdbd;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .12s,border-color .12s,color .12s}.day-chip[_ngcontent-%COMP%]:hover{background:#0000000d}.day-chip-checked[_ngcontent-%COMP%]{background:#66bb6a;border-color:#43a047;color:#fff}.mastered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:16px!important}.trophy-icon[_ngcontent-%COMP%]{color:#ffa000}.claimed-badge[_ngcontent-%COMP%]{font-size:.75rem;color:#9e9e9e;padding:4px 10px;border:1px solid #e0e0e0;border-radius:12px}"]})};export{re as HabitsPage};
