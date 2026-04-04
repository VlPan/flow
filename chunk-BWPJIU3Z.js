import{a as _n}from"./chunk-KDX2F5XE.js";import{$ as fn,A as mn,J as hn,K as un,X as pn,_ as gn,a as ve,b as zt,ba as vn,c as sn,l as cn,n as ln,r as _t,s as dn,ya as _e,za as bn}from"./chunk-B2KD4SEN.js";import{$b as tn,A as ot,Ab as ct,Ac as nn,Ba as ft,C as oe,Ca as J,D as se,Da as Vi,Dc as b,Ea as st,Ec as ge,F as gt,Fc as rn,Gc as an,I as zi,Ib as ti,Ic as on,J as Z,Jb as Ji,K as Ze,Kb as ue,Nc as jt,Rc as fe,S as Fi,T as z,U as ce,Vb as pe,W as P,Xa as Gi,Yb as ei,Z as w,Zb as tt,_ as $i,_b as Pt,a as re,aa as x,ac as $,b as Di,ba as Ot,bc as B,c as Oi,ca as Bi,da as k,e as K,ea as le,f as D,fa as d,fb as he,ga as Hi,gb as F,hc as Ut,ia as Y,ib as Wi,ja as L,k as O,kb as Qi,l as M,lb as Je,m as g,mb as vt,n as Li,nb as Lt,o as Qe,oa as de,ob as I,p as Ni,q as R,qa as Ye,r as Pi,ra as qi,rb as Nt,rc as en,s as V,sa as X,t as Ke,ta as Xe,u as Ui,ub as Ki,v as ae,va as me,wb as Zi,xa as v,xb as Yi,yb as Xi,z as ji}from"./chunk-YQKOKR5B.js";import{a as m,b as E}from"./chunk-Q7L6LLAK.js";var u="primary",te=Symbol("RouteTitle"),oi=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function dt(e){return new oi(e)}function ii(e,n,t){for(let i=0;i<e.length;i++){let r=e[i],a=n[i];if(r[0]===":")t[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function Sn(e,n,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||i.length<e.length))return null;let c={},l=e.slice(0,i.length);return ii(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let a=i.slice(0,r),o=i.slice(r+1);if(a.length+o.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let s={};return!ii(a,e.slice(0,a.length),s)||!ii(o,e.slice(e.length-o.length),s)?null:{consumed:e,posParams:s}}function Ce(e){return new Promise((n,t)=>{e.pipe(Z()).subscribe({next:i=>n(i),error:i=>t(i)})})}function vr(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!H(e[t],n[t]))return!1;return!0}function H(e,n){let t=e?si(e):void 0,i=n?si(n):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let a=0;a<t.length;a++)if(r=t[a],!In(e[r],n[r]))return!1;return!0}function si(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function In(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),i=[...n].sort();return t.every((r,a)=>i[a]===r)}else return e===n}function _r(e){return e.length>0?e[e.length-1]:null}function ut(e){return Qe(e)?e:Zi(e)?M(Promise.resolve(e)):g(e)}function Mn(e){return Qe(e)?Ce(e):Promise.resolve(e)}var br={exact:Tn,subset:En},An={exact:yr,subset:wr,ignored:()=>!0},xi={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Vt={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ki(e,n,t){let i=e instanceof S?e:n.parseUrl(e);return ge(()=>ci(n.lastSuccessfulNavigation()?.finalUrl??new S,i,m(m({},Vt),t)))}function ci(e,n,t){return br[t.paths](e.root,n.root,t.matrixParams)&&An[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function yr(e,n){return H(e,n)}function Tn(e,n,t){if(!lt(e.segments,n.segments)||!we(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!e.children[i]||!Tn(e.children[i],n.children[i],t))return!1;return!0}function wr(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>In(e[t],n[t]))}function En(e,n,t){return Dn(e,n,n.segments,t)}function Dn(e,n,t,i){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!lt(r,t)||n.hasChildren()||!we(r,t,i))}else if(e.segments.length===t.length){if(!lt(e.segments,t)||!we(e.segments,t,i))return!1;for(let r in n.children)if(!e.children[r]||!En(e.children[r],n.children[r],i))return!1;return!0}else{let r=t.slice(0,e.segments.length),a=t.slice(e.segments.length);return!lt(e.segments,r)||!we(e.segments,r,i)||!e.children[u]?!1:Dn(e.children[u],n,a,i)}}function we(e,n,t){return n.every((i,r)=>An[t](e[r].parameters,i.parameters))}var S=class{root;queryParams;fragment;_queryParamMap;constructor(n=new f([],{}),t={},i=null){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=dt(this.queryParams),this._queryParamMap}toString(){return Cr.serialize(this)}},f=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xe(this)}},et=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=dt(this.parameters),this._parameterMap}toString(){return Ln(this)}};function xr(e,n){return lt(e,n)&&e.every((t,i)=>H(t.parameters,n[i].parameters))}function lt(e,n){return e.length!==n.length?!1:e.every((t,i)=>t.path===n[i].path)}function kr(e,n){let t=[];return Object.entries(e.children).forEach(([i,r])=>{i===u&&(t=t.concat(n(r,i)))}),Object.entries(e.children).forEach(([i,r])=>{i!==u&&(t=t.concat(n(r,i)))}),t}var It=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:()=>new it,providedIn:"root"})}return e})(),it=class{parse(n){let t=new di(n);return new S(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${Ft(n.root,!0)}`,i=Ir(n.queryParams),r=typeof n.fragment=="string"?`#${Rr(n.fragment)}`:"";return`${t}${i}${r}`}},Cr=new it;function xe(e){return e.segments.map(n=>Ln(n)).join("/")}function Ft(e,n){if(!e.hasChildren())return xe(e);if(n){let t=e.children[u]?Ft(e.children[u],!1):"",i=[];return Object.entries(e.children).forEach(([r,a])=>{r!==u&&i.push(`${r}:${Ft(a,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=kr(e,(i,r)=>r===u?[Ft(e.children[u],!1)]:[`${r}:${Ft(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[u]!=null?`${xe(e)}/${t[0]}`:`${xe(e)}/(${t.join("//")})`}}function On(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function be(e){return On(e).replace(/%3B/gi,";")}function Rr(e){return encodeURI(e)}function li(e){return On(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ke(e){return decodeURIComponent(e)}function yn(e){return ke(e.replace(/\+/g,"%20"))}function Ln(e){return`${li(e.path)}${Sr(e.parameters)}`}function Sr(e){return Object.entries(e).map(([n,t])=>`;${li(n)}=${li(t)}`).join("")}function Ir(e){let n=Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(r=>`${be(t)}=${be(r)}`).join("&"):`${be(t)}=${be(i)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var Mr=/^[^\/()?;#]+/;function ni(e){let n=e.match(Mr);return n?n[0]:""}var Ar=/^[^\/()?;=#]+/;function Tr(e){let n=e.match(Ar);return n?n[0]:""}var Er=/^[^=?&#]+/;function Dr(e){let n=e.match(Er);return n?n[0]:""}var Or=/^[^&#]+/;function Lr(e){let n=e.match(Or);return n?n[0]:""}var di=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new f([],{}):new f([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new w(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(i).length>0)&&(r[u]=new f(t,i)),r}parseSegment(){let n=ni(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(n),new et(ke(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=Tr(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=ni(this.remaining);r&&(i=r,this.capture(i))}n[ke(t)]=ke(i)}parseQueryParam(n){let t=Dr(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=Lr(this.remaining);o&&(i=o,this.capture(i))}let r=yn(t),a=yn(i);if(n.hasOwnProperty(r)){let o=n[r];Array.isArray(o)||(o=[o],n[r]=o),o.push(a)}else n[r]=a}parseParens(n,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ni(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new w(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):n&&(o=u);let s=this.parseChildren(t+1);i[o??u]=Object.keys(s).length===1&&s[u]?s[u]:new f([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new w(4011,!1)}};function Nn(e){return e.segments.length>0?new f([],{[u]:e}):e}function Pn(e){let n={};for(let[i,r]of Object.entries(e.children)){let a=Pn(r);if(i===u&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))n[o]=s;else(a.segments.length>0||a.hasChildren())&&(n[i]=a)}let t=new f(e.segments,n);return Nr(t)}function Nr(e){if(e.numberOfChildren===1&&e.children[u]){let n=e.children[u];return new f(e.segments.concat(n.segments),n.children)}return e}function nt(e){return e instanceof S}function Un(e,n,t=null,i=null,r=new it){let a=jn(e);return zn(a,n,t,i,r)}function jn(e){let n;function t(a){let o={};for(let c of a.children){let l=t(c);o[c.outlet]=l}let s=new f(a.url,o);return a===e&&(n=s),s}let i=t(e.root),r=Nn(i);return n??r}function zn(e,n,t,i,r){let a=e;for(;a.parent;)a=a.parent;if(n.length===0)return ri(a,a,a,t,i,r);let o=Pr(n);if(o.toRoot())return ri(a,a,new f([],{}),t,i,r);let s=Ur(o,a,e),c=s.processChildren?Bt(s.segmentGroup,s.index,o.commands):$n(s.segmentGroup,s.index,o.commands);return ri(a,s.segmentGroup,c,t,i,r)}function Re(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Gt(e){return typeof e=="object"&&e!=null&&e.outlets}function wn(e,n,t){e||="\u0275";let i=new S;return i.queryParams={[e]:n},t.parse(t.serialize(i)).queryParams[e]}function ri(e,n,t,i,r,a){let o={};for(let[l,h]of Object.entries(i??{}))o[l]=Array.isArray(h)?h.map(p=>wn(l,p,a)):wn(l,h,a);let s;e===n?s=t:s=Fn(e,n,t);let c=Nn(Pn(s));return new S(c,o,r)}function Fn(e,n,t){let i={};return Object.entries(e.children).forEach(([r,a])=>{a===n?i[r]=t:i[r]=Fn(a,n,t)}),new f(e.segments,i)}var Se=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&Re(i[0]))throw new w(4003,!1);let r=i.find(Gt);if(r&&r!==_r(i))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Pr(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Se(!0,0,e);let n=0,t=!1,i=e.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?t=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new Se(t,n,i)}var yt=class{segmentGroup;processChildren;index;constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}};function Ur(e,n,t){if(e.isAbsolute)return new yt(n,!0,0);if(!t)return new yt(n,!1,NaN);if(t.parent===null)return new yt(t,!0,0);let i=Re(e.commands[0])?0:1,r=t.segments.length-1+i;return jr(t,r,e.numberOfDoubleDots)}function jr(e,n,t){let i=e,r=n,a=t;for(;a>r;){if(a-=r,i=i.parent,!i)throw new w(4005,!1);r=i.segments.length}return new yt(i,!1,r-a)}function zr(e){return Gt(e[0])?e[0].outlets:{[u]:e}}function $n(e,n,t){if(e??=new f([],{}),e.segments.length===0&&e.hasChildren())return Bt(e,n,t);let i=Fr(e,n,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let a=new f(e.segments.slice(0,i.pathIndex),{});return a.children[u]=new f(e.segments.slice(i.pathIndex),e.children),Bt(a,0,r)}else return i.match&&r.length===0?new f(e.segments,{}):i.match&&!e.hasChildren()?mi(e,n,t):i.match?Bt(e,0,r):mi(e,n,t)}function Bt(e,n,t){if(t.length===0)return new f(e.segments,{});{let i=zr(t),r={};if(Object.keys(i).some(a=>a!==u)&&e.children[u]&&e.numberOfChildren===1&&e.children[u].segments.length===0){let a=Bt(e.children[u],n,t);return new f(e.segments,a.children)}return Object.entries(i).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=$n(e.children[a],n,o))}),Object.entries(e.children).forEach(([a,o])=>{i[a]===void 0&&(r[a]=o)}),new f(e.segments,r)}}function Fr(e,n,t){let i=0,r=n,a={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(i>=t.length)return a;let o=e.segments[r],s=t[i];if(Gt(s))break;let c=`${s}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!kn(c,l,o))return a;i+=2}else{if(!kn(c,{},o))return a;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function mi(e,n,t){let i=e.segments.slice(0,n),r=0;for(;r<t.length;){let a=t[r];if(Gt(a)){let c=$r(a.outlets);return new f(i,c)}if(r===0&&Re(t[0])){let c=e.segments[n];i.push(new et(c.path,xn(t[0]))),r++;continue}let o=Gt(a)?a.outlets[u]:`${a}`,s=r<t.length-1?t[r+1]:null;o&&s&&Re(s)?(i.push(new et(o,xn(s))),r+=2):(i.push(new et(o,{})),r++)}return new f(i,{})}function $r(e){let n={};return Object.entries(e).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[t]=mi(new f([],{}),0,i))}),n}function xn(e){let n={};return Object.entries(e).forEach(([t,i])=>n[t]=`${i}`),n}function kn(e,n,t){return e==t.path&&H(n,t.parameters)}var Ht="imperative",y=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(y||{}),T=class{id;url;constructor(n,t){this.id=n,this.url=t}},mt=class extends T{type=y.NavigationStart;navigationTrigger;restoredState;constructor(n,t,i="imperative",r=null){super(n,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},j=class extends T{urlAfterRedirects;type=y.NavigationEnd;constructor(n,t,i){super(n,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},C=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(C||{}),Wt=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(Wt||{}),N=class extends T{reason;code;type=y.NavigationCancel;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Bn(e){return e instanceof N&&(e.code===C.Redirect||e.code===C.SupersededByNewNavigation)}var W=class extends T{reason;code;type=y.NavigationSkipped;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}},ht=class extends T{error;target;type=y.NavigationError;constructor(n,t,i,r){super(n,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Qt=class extends T{urlAfterRedirects;state;type=y.RoutesRecognized;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ie=class extends T{urlAfterRedirects;state;type=y.GuardsCheckStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Me=class extends T{urlAfterRedirects;state;shouldActivate;type=y.GuardsCheckEnd;constructor(n,t,i,r,a){super(n,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ae=class extends T{urlAfterRedirects;state;type=y.ResolveStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Te=class extends T{urlAfterRedirects;state;type=y.ResolveEnd;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ee=class{route;type=y.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},De=class{route;type=y.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Oe=class{snapshot;type=y.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Le=class{snapshot;type=y.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ne=class{snapshot;type=y.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pe=class{snapshot;type=y.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var xt=class{},Kt=class{},kt=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function Br(e){return!(e instanceof xt)&&!(e instanceof kt)&&!(e instanceof Kt)}var Ue=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Mt(this.rootInjector)}},Mt=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Ue(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||e)(le(Y))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),je=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=hi(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){let t=hi(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=ui(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return ui(n,this._root).map(t=>t.value)}};function hi(e,n){if(e===n.value)return n;for(let t of n.children){let i=hi(e,t);if(i)return i}return null}function ui(e,n){if(e===n.value)return[n];for(let t of n.children){let i=ui(e,t);if(i.length)return i.unshift(n),i}return[]}var A=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function bt(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var Zt=class extends je{snapshot;constructor(n,t){super(n),this.snapshot=t,Ri(this,n)}toString(){return this.snapshot.toString()}};function Hn(e,n){let t=Hr(e,n),i=new D([new et("",{})]),r=new D({}),a=new D({}),o=new D({}),s=new D(""),c=new Q(i,r,o,s,a,u,e,t.root);return c.snapshot=t.root,new Zt(new A(c,[]),t)}function Hr(e,n){let t={},i={},r={},o=new Ct([],t,r,"",i,u,e,null,{},n);return new Yt("",new A(o,[]))}var Q=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,i,r,a,o,s,c){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(R(l=>l[te]))??g(void 0),this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(n=>dt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(n=>dt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ci(e,n,t="emptyOnly"){let i,{routeConfig:r}=e;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:m(m({},n.params),e.params),data:m(m({},n.data),e.data),resolve:m(m(m(m({},e.data),n.data),r?.data),e._resolvedData)}:i={params:m({},e.params),data:m({},e.data),resolve:m(m({},e.data),e._resolvedData??{})},r&&Vn(r)&&(i.resolve[te]=r.title),i}var Ct=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[te]}constructor(n,t,i,r,a,o,s,c,l,h){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=dt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=dt(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},Yt=class extends je{url;constructor(n,t){super(t),this.url=n,Ri(this,t)}toString(){return qn(this._root)}};function Ri(e,n){n.value._routerState=e,n.children.forEach(t=>Ri(e,t))}function qn(e){let n=e.children.length>0?` { ${e.children.map(qn).join(", ")} } `:"";return`${e.value}${n}`}function ai(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,H(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),H(n.params,t.params)||e.paramsSubject.next(t.params),vr(n.url,t.url)||e.urlSubject.next(t.url),H(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function pi(e,n){let t=H(e.params,n.params)&&xr(e.url,n.url),i=!e.parent!=!n.parent;return t&&!i&&(!e.parent||pi(e.parent,n.parent))}function Vn(e){return typeof e.title=="string"||e.title===null}var Gn=new k(""),Si=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=u;activateEvents=new X;deactivateEvents=new X;attachEvents=new X;detachEvents=new X;routerOutletData=on();parentContexts=d(Mt);location=d(Wi);changeDetector=d(jt);inputBinder=d(Be,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new gi(t,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ft]})}return e})(),gi=class{route;childContexts;parent;outletData;constructor(n,t,i,r){this.route=n,this.childContexts=t,this.parent=i,this.outletData=r}get(n,t){return n===Q?this.route:n===Mt?this.childContexts:n===Gn?this.outletData:this.parent.get(n,t)}},Be=new k("");var Ii=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=vt({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ue(0,"router-outlet")},dependencies:[Si],encapsulation:2})}return e})();function Mi(e){let n=e.children&&e.children.map(Mi),t=n?E(m({},e),{children:n}):m({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==u&&(t.component=Ii),t}function qr(e,n,t){let i=Xt(e,n._root,t?t._root:void 0);return new Zt(i,n)}function Xt(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=n.value;let r=Vr(e,n,t);return new A(i,r)}else{if(e.shouldAttach(n.value)){let a=e.retrieve(n.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=n.value,o.children=n.children.map(s=>Xt(e,s)),o}}let i=Gr(n.value),r=n.children.map(a=>Xt(e,a));return new A(i,r)}}function Vr(e,n,t){return n.children.map(i=>{for(let r of t.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return Xt(e,i,r);return Xt(e,i)})}function Gr(e){return new Q(new D(e.url),new D(e.params),new D(e.queryParams),new D(e.fragment),new D(e.data),e.outlet,e.component,e)}var Rt=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},Wn="ngNavigationCancelingError";function ze(e,n){let{redirectTo:t,navigationBehaviorOptions:i}=nt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Qn(!1,C.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Qn(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Wn]=!0,t.cancellationCode=n,t}function Wr(e){return Kn(e)&&nt(e.url)}function Kn(e){return!!e&&e[Wn]}var fi=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,i,r,a){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=a}activate(n){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),ai(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){let r=bt(t);n.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],i),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(r===a)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(n,t,o.children)}else this.deactivateChildRoutes(n,t,i);else a&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=bt(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:s})}}deactivateRouteAndOutlet(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=bt(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,t,i){let r=bt(t);n.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],i),this.forwardEvent(new Pe(a.value.snapshot))}),n.children.length&&this.forwardEvent(new Le(n.value.snapshot))}activateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(ai(r),r===a)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,o.children)}else this.activateChildRoutes(n,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),ai(s.route.value),this.activateChildRoutes(n,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(n,null,o.children)}else this.activateChildRoutes(n,null,i)}},Fe=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},wt=class{component;route;constructor(n,t){this.component=n,this.route=t}};function Qr(e,n,t){let i=e._root,r=n?n._root:null;return $t(i,r,t,[i.value])}function Kr(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function At(e,n){let t=Symbol(),i=n.get(e,t);return i===t?typeof e=="function"&&!Bi(e)?e:n.get(e):i}function $t(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=bt(n);return e.children.forEach(o=>{Zr(o,a[o.value.outlet],t,i.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>qt(s,t.getContext(o),r)),r}function Zr(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=e.value,o=n?n.value:null,s=t?t.getContext(e.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=Yr(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Fe(i)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?$t(e,n,s?s.children:null,i,r):$t(e,n,t,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new wt(s.outlet.component,o))}else o&&qt(n,s,r),r.canActivateChecks.push(new Fe(i)),a.component?$t(e,null,s?s.children:null,i,r):$t(e,null,t,i,r);return r}function Yr(e,n,t){if(typeof t=="function")return L(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!lt(e.url,n.url);case"pathParamsOrQueryParamsChange":return!lt(e.url,n.url)||!H(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!pi(e,n)||!H(e.queryParams,n.queryParams);default:return!pi(e,n)}}function qt(e,n,t){let i=bt(e),r=e.value;Object.entries(i).forEach(([a,o])=>{r.component?n?qt(o,n.children.getContext(a),t):qt(o,null,t):qt(o,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new wt(n.outlet.component,r)):t.canDeactivateChecks.push(new wt(null,r)):t.canDeactivateChecks.push(new wt(null,r))}function ee(e){return typeof e=="function"}function Xr(e){return typeof e=="boolean"}function Jr(e){return e&&ee(e.canLoad)}function ta(e){return e&&ee(e.canActivate)}function ea(e){return e&&ee(e.canActivateChild)}function ia(e){return e&&ee(e.canDeactivate)}function na(e){return e&&ee(e.canMatch)}function Zn(e){return e instanceof Ni||e?.name==="EmptyError"}var ye=Symbol("INITIAL_VALUE");function St(){return z(e=>Pi(e.map(n=>n.pipe(gt(1),Fi(ye)))).pipe(R(n=>{for(let t of n)if(t!==!0){if(t===ye)return ye;if(t===!1||ra(t))return t}return!0}),ot(n=>n!==ye),gt(1)))}function ra(e){return nt(e)||e instanceof Rt}function Yn(e){return e.aborted?g(void 0).pipe(gt(1)):new Oi(n=>{let t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function Xn(e){return ce(Yn(e))}function aa(e){return V(n=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:a}}=n;return a.length===0&&r.length===0?g(E(m({},n),{guardsResult:!0})):oa(a,t,i).pipe(V(o=>o&&Xr(o)?sa(t,r,e):g(o)),R(o=>E(m({},n),{guardsResult:o})))})}function oa(e,n,t){return M(e).pipe(V(i=>ha(i.component,i.route,t,n)),Z(i=>i!==!0,!0))}function sa(e,n,t){return M(n).pipe(se(i=>Ui(la(i.route.parent,t),ca(i.route,t),ma(e,i.path),da(e,i.route))),Z(i=>i!==!0,!0))}function ca(e,n){return e!==null&&n&&n(new Ne(e)),g(!0)}function la(e,n){return e!==null&&n&&n(new Oe(e)),g(!0)}function da(e,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return g(!0);let i=t.map(r=>ae(()=>{let a=n._environmentInjector,o=At(r,a),s=ta(o)?o.canActivate(n,e):L(a,()=>o(n,e));return ut(s).pipe(Z())}));return g(i).pipe(St())}function ma(e,n){let t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(a=>Kr(a)).filter(a=>a!==null).map(a=>ae(()=>{let o=a.guards.map(s=>{let c=a.node._environmentInjector,l=At(s,c),h=ea(l)?l.canActivateChild(t,e):L(c,()=>l(t,e));return ut(h).pipe(Z())});return g(o).pipe(St())}));return g(r).pipe(St())}function ha(e,n,t,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let a=r.map(o=>{let s=n._environmentInjector,c=At(o,s),l=ia(c)?c.canDeactivate(e,n,t,i):L(s,()=>c(e,n,t,i));return ut(l).pipe(Z())});return g(a).pipe(St())}function ua(e,n,t,i,r){let a=n.canLoad;if(a===void 0||a.length===0)return g(!0);let o=a.map(s=>{let c=At(s,e),l=Jr(c)?c.canLoad(n,t):L(e,()=>c(n,t)),h=ut(l);return r?h.pipe(Xn(r)):h});return g(o).pipe(St(),Jn(i))}function Jn(e){return Di(P(n=>{if(typeof n!="boolean")throw ze(e,n)}),R(n=>n===!0))}function pa(e,n,t,i,r,a){let o=n.canMatch;if(!o||o.length===0)return g(!0);let s=o.map(c=>{let l=At(c,e),h=na(l)?l.canMatch(n,t,r):L(e,()=>l(n,t,r));return ut(h).pipe(Xn(a))});return g(s).pipe(St(),Jn(i))}var G=class e extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,e.prototype)}},Jt=class e extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,e.prototype)}};function ga(e){throw new w(4e3,!1)}function fa(e){throw Qn(!1,C.GuardRejected)}var vi=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[u])throw ga(`${n.redirectTo}`);r=r.children[u]}}async applyRedirectCommands(n,t,i,r,a){let o=await va(t,r,a);if(o instanceof S)throw new Jt(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),n,i);if(o[0]==="/")throw new Jt(s);return s}applyRedirectCreateUrlTree(n,t,i,r){let a=this.createSegmentGroup(n,t.root,i,r);return new S(a,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let i={};return Object.entries(n).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[r]=t[s]}else i[r]=a}),i}createSegmentGroup(n,t,i,r){let a=this.createSegments(n,t.segments,i,r),o={};return Object.entries(t.children).forEach(([s,c])=>{o[s]=this.createSegmentGroup(n,c,i,r)}),new f(a,o)}createSegments(n,t,i,r){return t.map(a=>a.path[0]===":"?this.findPosParam(n,a,r):this.findOrReturn(a,i))}findPosParam(n,t,i){let r=i[t.path.substring(1)];if(!r)throw new w(4001,!1);return r}findOrReturn(n,t){let i=0;for(let r of t){if(r.path===n.path)return t.splice(i),r;i++}return n}};function va(e,n,t){if(typeof e=="string")return Promise.resolve(e);let i=e;return Ce(ut(L(t,()=>i(n))))}function _a(e,n){return e.providers&&!e._injector&&(e._injector=Je(e.providers,n,`Route: ${e.path}`)),e._injector??n}function U(e){return e.outlet||u}function ba(e,n){let t=e.filter(i=>U(i)===n);return t.push(...e.filter(i=>U(i)!==n)),t}var _i={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function tr(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function ya(e,n,t,i,r,a,o){let s=er(e,n,t);if(!s.matched)return g(s);let c=tr(a(s));return i=_a(n,i),pa(i,n,t,r,c,o).pipe(R(l=>l===!0?s:m({},_i)))}function er(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?m({},_i):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Sn)(t,e,n);if(!r)return m({},_i);let a={};Object.entries(r.posParams??{}).forEach(([s,c])=>{a[s]=c.path});let o=r.consumed.length>0?m(m({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Cn(e,n,t,i,r){return t.length>0&&ka(e,t,i,r)?{segmentGroup:new f(n,xa(i,new f(t,e.children))),slicedSegments:[]}:t.length===0&&Ca(e,t,i)?{segmentGroup:new f(e.segments,wa(e,t,i,e.children)),slicedSegments:t}:{segmentGroup:new f(e.segments,e.children),slicedSegments:t}}function wa(e,n,t,i){let r={};for(let a of t)if(He(e,n,a)&&!i[U(a)]){let o=new f([],{});r[U(a)]=o}return m(m({},i),r)}function xa(e,n){let t={};t[u]=n;for(let i of e)if(i.path===""&&U(i)!==u){let r=new f([],{});t[U(i)]=r}return t}function ka(e,n,t,i){return t.some(r=>!He(e,n,r)||!(U(r)!==u)?!1:!(i!==void 0&&U(r)===i))}function Ca(e,n,t){return t.some(i=>He(e,n,i))}function He(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Ra(e,n,t){return n.length===0&&!e.children[t]}var bi=class{};async function Sa(e,n,t,i,r,a,o="emptyOnly",s){return new yi(e,n,t,i,r,o,a,s).recognize()}var Ia=31,yi=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,i,r,a,o,s,c){this.injector=n,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new vi(this.urlSerializer,this.urlTree)}noMatchError(n){return new w(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Cn(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(n),r=new A(i,t),a=new Yt("",r),o=Un(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(n){let t=new Ct([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),u,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,u,t),rootSnapshot:t}}catch(i){if(i instanceof Jt)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof G?this.noMatchError(i):i}}async processSegmentGroup(n,t,i,r,a){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,t,i,a);let o=await this.processSegment(n,t,i,i.segments,r,!0,a);return o instanceof A?[o]:[]}async processChildren(n,t,i,r){let a=[];for(let c of Object.keys(i.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let l=i.children[c],h=ba(t,c),p=await this.processSegmentGroup(n,h,l,c,r);o.push(...p)}let s=ir(o);return Ma(s),s}async processSegment(n,t,i,r,a,o,s){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??n,t,c,i,r,a,o,s)}catch(l){if(l instanceof G||Zn(l))continue;throw l}if(Ra(i,r,a))return new bi;throw new G(i)}async processSegmentAgainstRoute(n,t,i,r,a,o,s,c){if(U(i)!==o&&(o===u||!He(r,a,i)))throw new G(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,a,o,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,i,a,o,c);throw new G(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,i,r,a,o,s){let{matched:c,parameters:l,consumedSegments:h,positionalParamSegments:p,remainingSegments:_}=er(t,r,a);if(!c)throw new G(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ia&&(this.allowRedirects=!1));let rt=this.createSnapshot(n,r,a,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let q=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,tr(rt),n),at=await this.applyRedirects.lineralizeSegments(r,q);return this.processSegment(n,i,t,at.concat(_),o,!1,s)}createSnapshot(n,t,i,r,a){let o=new Ct(i,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Ta(t),U(t),t.component??t._loadedComponent??null,t,Ea(t),n),s=Ci(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(n,t,i,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ne=>this.createSnapshot(n,i,ne.consumedSegments,ne.parameters,o),c=await Ce(ya(t,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new G(t);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),h=i._loadedInjector??n,{parameters:p,consumedSegments:_,remainingSegments:rt}=c,q=this.createSnapshot(n,i,_,p,o),{segmentGroup:at,slicedSegments:Et}=Cn(t,_,rt,l,a);if(Et.length===0&&at.hasChildren()){let ne=await this.processChildren(h,l,at,q);return new A(q,ne)}if(l.length===0&&Et.length===0)return new A(q,[]);let We=U(i)===a,Dt=await this.processSegment(h,l,at,Et,We?u:a,!0,q);return new A(q,Dt instanceof A?[Dt]:[])}async getChildConfig(n,t,i){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let a=t._loadedNgModuleFactory;return a&&!t._loadedInjector&&(t._loadedInjector=a.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ce(ua(n,t,i,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}throw fa(t)}return{routes:[],injector:n}}};function Ma(e){e.sort((n,t)=>n.value.outlet===u?-1:t.value.outlet===u?1:n.value.outlet.localeCompare(t.value.outlet))}function Aa(e){let n=e.value.routeConfig;return n&&n.path===""}function ir(e){let n=[],t=new Set;for(let i of e){if(!Aa(i)){n.push(i);continue}let r=n.find(a=>i.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):n.push(i)}for(let i of t){let r=ir(i.children);n.push(new A(i.value,r))}return n.filter(i=>!t.has(i))}function Ta(e){return e.data||{}}function Ea(e){return e.resolve||{}}function Da(e,n,t,i,r,a,o){return V(async s=>{let{state:c,tree:l}=await Sa(e,n,t,i,s.extractedUrl,r,a,o);return E(m({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function Oa(e){return V(n=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=n;if(!i.length)return g(n);let r=new Set(i.map(s=>s.route)),a=new Set;for(let s of r)if(!a.has(s))for(let c of nr(s))a.add(c);let o=0;return M(a).pipe(se(s=>r.has(s)?La(s,t,e):(s.data=Ci(s,s.parent,e).resolve,g(void 0))),P(()=>o++),Ze(1),V(s=>o===a.size?g(n):O))})}function nr(e){let n=e.children.map(t=>nr(t)).flat();return[e,...n]}function La(e,n,t){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!Vn(i)&&(r[te]=i.title),ae(()=>(e.data=Ci(e,e.parent,t).resolve,Na(r,e,n).pipe(R(a=>(e._resolvedData=a,e.data=m(m({},e.data),a),null)))))}function Na(e,n,t){let i=si(e);if(i.length===0)return g({});let r={};return M(i).pipe(V(a=>Pa(e[a],n,t).pipe(Z(),P(o=>{if(o instanceof Rt)throw ze(new it,o);r[a]=o}))),Ze(1),R(()=>r),oe(a=>Zn(a)?O:Li(a)))}function Pa(e,n,t){let i=n._environmentInjector,r=At(e,i),a=r.resolve?r.resolve(n,t):L(i,()=>r(n,t));return ut(a)}function Rn(e){return z(n=>{let t=e(n);return t?M(t).pipe(R(()=>n)):g(n)})}var Ai=(()=>{class e{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(a=>a.outlet===u);return i}getResolvedTitleForRoute(t){return t.data[te]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:()=>d(rr),providedIn:"root"})}return e})(),rr=(()=>{class e extends Ai{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||e)(le(cn))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tt=new k("",{factory:()=>({})}),ie=new k(""),ar=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(nn);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await Mn(L(t,()=>i.loadComponent())),o=await cr(sr(a));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await or(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();async function or(e,n,t,i){let r=await Mn(L(t,()=>e.loadChildren())),a=await cr(sr(r)),o;a instanceof Qi||Array.isArray(a)?o=a:o=await n.compileModuleAsync(a),i&&i(e);let s,c,l=!1,h;return Array.isArray(o)?(c=o,l=!0):(s=o.create(t).injector,h=o,c=s.get(ie,[],{optional:!0,self:!0}).flat()),{routes:c.map(Mi),injector:s,factory:h}}function Ua(e){return e&&typeof e=="object"&&"default"in e}function sr(e){return Ua(e)?e.default:e}async function cr(e){return e}var qe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:()=>d(ja),providedIn:"root"})}return e})(),ja=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),lr=new k("");var za=()=>{},dr=new k(""),mr=(()=>{class e{currentNavigation=v(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=v(null);events=new K;transitionAbortWithErrorSubject=new K;configLoader=d(ar);environmentInjector=d(Y);destroyRef=d(Ye);urlSerializer=d(It);rootContexts=d(Mt);location=d(zt);inputBindingEnabled=d(Be,{optional:!0})!==null;titleStrategy=d(Ai);options=d(Tt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(qe);createViewTransition=d(lr,{optional:!0});navigationErrorHandler=d(dr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Ee(r)),i=r=>this.events.next(new De(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;b(()=>{this.transitions?.next(E(m({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new D(null),this.transitions.pipe(ot(i=>i!==null),z(i=>{let r=!1,a=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return g(i).pipe(z(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",C.SupersededByNewNavigation),O;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?E(m({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&h!=="reload")return this.events.next(new W(s.id,this.urlSerializer.serialize(s.rawUrl),"",Wt.IgnoredSameUrlNavigation)),s.resolve(!1),O;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(z(p=>(this.events.next(new mt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?O:Promise.resolve(p))),Da(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),P(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=p.urlAfterRedirects,_)),this.events.next(new Kt)}),z(p=>M(i.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(R(()=>p))),P(()=>{let p=new Qt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:_,source:rt,restoredState:q,extras:at}=s,Et=new mt(p,this.urlSerializer.serialize(_),rt,q);this.events.next(Et);let We=Hn(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=E(m({},s),{targetSnapshot:We,urlAfterRedirects:_,extras:E(m({},at),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Dt=>(Dt.finalUrl=_,Dt)),g(i)}else return this.events.next(new W(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Wt.IgnoredByUrlHandlingStrategy)),s.resolve(!1),O}),R(s=>{let c=new Ie(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=E(m({},s),{guards:Qr(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),aa(s=>this.events.next(s)),z(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ze(this.urlSerializer,s.guardsResult);let c=new Me(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!o())return O;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",C.GuardRejected),O;if(s.guards.canActivateChecks.length===0)return g(s);let l=new Ae(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!o())return O;let h=!1;return g(s).pipe(Oa(this.paramsInheritanceStrategy),P({next:()=>{h=!0;let p=new Te(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",C.NoDataFromResolver)}}))}),Rn(s=>{let c=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let _=h._environmentInjector;p.push(this.configLoader.loadComponent(_,h.routeConfig).then(rt=>{h.component=rt}))}for(let _ of h.children)p.push(...c(_));return p},l=c(s.targetSnapshot.root);return l.length===0?g(s):M(Promise.all(l).then(()=>s))}),Rn(()=>this.afterPreactivation()),z(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?M(l).pipe(R(()=>i)):g(i)}),gt(1),z(s=>{let c=qr(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=E(m({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new xt);let l=i.beforeActivateHandler.deferredHandle;return l?M(l.then(()=>s)):g(s)}),P(s=>{new fi(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=za,c)),this.lastSuccessfulNavigation.set(b(this.currentNavigation)),this.events.next(new j(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ce(Yn(a.signal).pipe(ot(()=>!r&&!i.targetRouterState),P(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",C.Aborted)}))),P({complete:()=>{r=!0}}),ce(this.transitionAbortWithErrorSubject.pipe(P(s=>{throw s}))),zi(()=>{a.abort(),r||this.cancelNavigationTransition(i,"",C.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),oe(s=>{if(r=!0,this.destroyed)return i.resolve(!1),O;if(Kn(s))this.events.next(new N(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Wr(s)?this.events.next(new kt(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new ht(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=L(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Rt){let{message:h,cancellationCode:p}=ze(this.urlSerializer,l);this.events.next(new N(i.id,this.urlSerializer.serialize(i.extractedUrl),h,p)),this.events.next(new kt(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return O}))}))}cancelNavigationTransition(t,i,r){let a=new N(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(a),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=b(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Fa(e){return e!==Ht}var hr=new k("");var ur=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:()=>d($a),providedIn:"root"})}return e})(),$e=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},$a=(()=>{class e extends $e{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ve=(()=>{class e{urlSerializer=d(It);options=d(Tt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(zt);urlHandlingStrategy=d(qe);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new S;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let a=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??a;return o instanceof S?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Hn(null,d(Y));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:()=>d(Ba),providedIn:"root"})}return e})(),Ba=(()=>{class e extends Ve{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof mt?this.updateStateMemento():t instanceof W?this.commitTransition(i):t instanceof Qt?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof xt?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof N&&!Bn(t)?this.restoreHistory(i):t instanceof ht?this.restoreHistory(i,!0):t instanceof j&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:a,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||a){let s=this.browserPageId,c=m(m({},o),this.generateNgRouterState(r,s));this.location.replaceState(t,"",c)}else{let s=m(m({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===t.finalUrl&&a===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ti(e,n){e.events.pipe(ot(t=>t instanceof j||t instanceof N||t instanceof ht||t instanceof W),R(t=>t instanceof j||t instanceof W?0:(t instanceof N?t.code===C.Redirect||t.code===C.SupersededByNewNavigation:!1)?2:1),ot(t=>t!==2),gt(1)).subscribe(()=>{n()})}var pt=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Ki);stateManager=d(Ve);options=d(Tt,{optional:!0})||{};pendingTasks=d(qi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(mr);urlSerializer=d(It);location=d(zt);urlHandlingStrategy=d(qe);injector=d(Y);_events=new K;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(ur);injectorCleanup=d(hr,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(ie,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Be,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new re;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,a=b(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof N&&i.code!==C.Redirect&&i.code!==C.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof j)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof kt){let o=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Fa(r.source)},o);this.scheduleNavigation(s,Ht,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Br(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ht,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,a)=>{this.navigateToSyncWithBrowser(t,r,i,a)})}navigateToSyncWithBrowser(t,i,r,a){let o=r?.navigationId?r:null;if(r){let c=m({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(a.state=c)}let s=this.parseUrl(t);this.scheduleNavigation(s,i,o,a).catch(c=>{this.disposed||this.injector.get(me)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return b(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Mi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),a);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=a||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let _=r?r.snapshot:this.routerState.snapshot.root;p=jn(_)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return zn(p,t,h,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=nt(t)?t:this.parseUrl(t),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,Ht,null,i)}navigate(t,i={skipLocationChange:!1}){return Ha(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn($i(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=m({},xi):i===!1?r=m({},Vt):r=m(m({},Vt),i),nt(t))return ci(this.currentUrlTree,t,r);let a=this.parseUrl(t);return ci(this.currentUrlTree,a,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,a])=>(a!=null&&(i[r]=a),i),{})}scheduleNavigation(t,i,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,c,l;o?(s=o.resolve,c=o.reject,l=o.promise):l=new Promise((p,_)=>{s=p,c=_});let h=this.pendingTasks.add();return Ti(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:a,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ha(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new w(4008,!1)}var Va=(()=>{class e{router=d(pt);stateManager=d(Ve);fragment=v("");queryParams=v({});path=v("");serializer=d(It);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof j&&this.updateState()})}updateState(){let{fragment:t,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new S(i)))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ge=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new an("href"),{optional:!0});reactiveHref=rn(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return b(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return b(this._target)}_target=v(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return b(this._queryParams)}_queryParams=v(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return b(this._fragment)}_fragment=v(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return b(this._queryParamsHandling)}_queryParamsHandling=v(void 0);set state(t){this._state.set(t)}get state(){return b(this._state)}_state=v(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return b(this._info)}_info=v(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return b(this._relativeTo)}_relativeTo=v(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return b(this._preserveFragment)}_preserveFragment=v(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return b(this._skipLocationChange)}_skipLocationChange=v(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return b(this._replaceUrl)}_replaceUrl=v(!1);isAnchorElement;onChanges=new K;applicationErrorHandler=d(me);options=d(Tt,{optional:!0});reactiveRouterState=d(Va);constructor(t,i,r,a,o,s){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=v(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(nt(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(t!==0||i||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,i){let r=this.renderer,a=this.el.nativeElement;i!==null?r.setAttribute(a,t,i):r.removeAttribute(a,t)}_urlTree=ge(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:nt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,i)=>this.computeHref(t)===this.computeHref(i)});get urlTree(){return b(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(i){return new(i||e)(F(pt),F(Q),Vi("tabindex"),F(he),F(st),F(ve))};static \u0275dir=I({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&pe("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&ct("href",r.reactiveHref(),Gi)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",fe],skipLocationChange:[2,"skipLocationChange","skipLocationChange",fe],replaceUrl:[2,"replaceUrl","replaceUrl",fe],routerLink:"routerLink"},features:[ft]})}return e})(),Ga=(()=>{class e{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new X;link=d(Ge,{optional:!0});constructor(t,i,r,a){this.router=t,this.element=i,this.renderer=r,this.cdr=a,this.routerEventsSubscription=t.events.subscribe(o=>{o instanceof j&&this.update()})}ngAfterContentInit(){g(this.links.changes,g(null)).pipe(Ke()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=M(t).pipe(Ke()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=Wa(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},xi):m({},Vt);return r=>{let a=r.urlTree;return a?b(ki(a,t,i)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||e)(F(pt),F(st),F(he),F(jt))};static \u0275dir=I({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,a){if(i&1&&Pt(a,Ge,5),i&2){let o;$(o=B())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[ft]})}return e})();function Wa(e){let n=e;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Qa=new k("");function Ka(e,...n){return Hi([{provide:ie,multi:!0,useValue:e},[],{provide:Q,useFactory:Za},{provide:Yi,multi:!0,useFactory:Xa},n.map(t=>t.\u0275providers)])}function Za(){return d(pt).routerState.root}function Ya(e,n){return{\u0275kind:e,\u0275providers:n}}function Xa(){let e=d(de);return n=>{let t=e.get(Xi);if(n!==t.components[0])return;let i=e.get(pt),r=e.get(Ja);e.get(to)===1&&i.initialNavigation(),e.get(eo,null,{optional:!0})?.setUpPreloading(),e.get(Qa,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ja=new k("",{factory:()=>new K}),to=new k("",{factory:()=>1});var eo=new k("");function io(){return Ya(6,[{provide:ve,useClass:sn}])}var pr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Lt({type:e});static \u0275inj=Ot({imports:[_e]})}return e})();var no=["*"],ro=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,ao=["unscopedContent"],oo=["text"],so=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],co=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var lo=new k("ListOption"),mo=(()=>{class e{_elementRef=d(st);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),ho=(()=>{class e{_elementRef=d(st);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),uo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),gr=(()=>{class e{_listOption=d(lo,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,hostVars:4,hostBindings:function(i,r){i&2&&Ut("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return e})(),po=(()=>{class e extends gr{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275dir=I({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Nt]})}return e})(),go=(()=>{class e extends gr{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275dir=I({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Nt]})}return e})(),fo=new k("MAT_LIST_CONFIG"),Ei=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=_t(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(_t(t))}_disabled=v(!1);_defaultOptions=d(fo,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,hostVars:1,hostBindings:function(i,r){i&2&&ct("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),vo=(()=>{class e{_elementRef=d(st);_ngZone=d(Xe);_listBase=d(Ei,{optional:!0});_platform=d(dn);_hostElement;_isButtonElement;_noopAnimations=pn();_avatars;_icons;set lines(t){this._explicitLines=ln(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=_t(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(_t(t))}_disabled=v(!1);_subscriptions=new re;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(mn).load(vn);let t=d(fn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new gn(this,this._ngZone,this._hostElement,this._platform,d(de)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ji(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",a),r.classList.toggle("mdc-list-item__secondary-text",!a)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,contentQueries:function(i,r,a){if(i&1&&Pt(a,po,4)(a,go,4),i&2){let o;$(o=B())&&(r._avatars=o),$(o=B())&&(r._icons=o)}},hostVars:4,hostBindings:function(i,r){i&2&&(ct("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),Ut("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Cc=(()=>{class e extends vo{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=_t(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=vt({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,a){if(i&1&&Pt(a,ho,5)(a,mo,5)(a,uo,5),i&2){let o;$(o=B())&&(r._lines=o),$(o=B())&&(r._titles=o),$(o=B())&&(r._meta=o)}},viewQuery:function(i,r){if(i&1&&tn(ao,5)(oo,5),i&2){let a;$(a=B())&&(r._unscopedContent=a.first),$(a=B())&&(r._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ct("aria-current",r._getAriaCurrent()),Ut("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Nt],ngContentSelectors:co,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ei(so),tt(0),ti(1,"span",1),tt(2,1),tt(3,2),ti(4,"span",2,0),pe("cdkObserveContent",function(){return r._updateItemLines(!0)}),tt(6,3),Ji()(),tt(7,4),tt(8,5),ue(9,"div",3))},dependencies:[hn],encapsulation:2,changeDetection:0})}return e})();var Rc=(()=>{class e extends Ei{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=vt({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[en([{provide:Ei,useExisting:e}]),Nt],ngContentSelectors:no,decls:1,vars:0,template:function(i,r){i&1&&(ei(),tt(0))},styles:[ro],encapsulation:2,changeDetection:0})}return e})();var Sc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Lt({type:e});static \u0275inj=Ot({imports:[un,bn,_n,_e,pr]})}return e})();export{Si as a,Ge as b,Ga as c,Ka as d,io as e,mo as f,go as g,Cc as h,Rc as i,Sc as j};
