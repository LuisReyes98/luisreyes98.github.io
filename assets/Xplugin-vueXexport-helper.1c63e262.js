import{a5 as ee,f as U,r as $,a6 as Ze,n as X,Z as L,A as Qe,g as R,a7 as Ke,y as _e,p as w,b as f,e as x,u as o,a8 as re,h as et,C as Se,t as tt,a3 as nt,a2 as Ce,W as te,_ as we,O as ke,X as st,a9 as V,a4 as M,aa as xe,ab as ve,I as fe,v as Y,x as J,w as B,z as at,j as it,k as Ie,i as rt,d as ot,B as lt,o as ut,ac as ct,ad as dt,q as vt,ae as ft,V as ne,af as mt,ag as gt,ah as ht,ai as bt,aj as me,a1 as yt,ak as pt,al as ge}from"./index.3d982b05.js";const _t=["top","bottom"],St=["start","end","left","right"];function Ct(e,t){let[s,n]=e.split(" ");return n||(n=ee(_t,s)?"start":ee(St,s)?"top":"center"),{side:he(s,t),align:he(n,t)}}function he(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function N(e){const t=U("useRender");t.render=e}function wt(e){const t=$(),s=$();if(Ze){const n=new ResizeObserver(i=>{e==null||e(i,n),i.length&&(s.value=i[0].contentRect)});X(()=>{n.disconnect()}),L(t,(i,a)=>{a&&(n.unobserve(a),s.value=void 0),i&&n.observe(i)},{flush:"post"})}return{resizeRef:t,contentRect:Qe(s)}}const Q=R(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:s}=t;const{defaults:n,disabled:i,reset:a,root:r,scoped:d}=Ke(e);return _e(n,{reset:a,root:r,scoped:d,disabled:i}),()=>{var u;return(u=s.default)==null?void 0:u.call(s)}}});const $e=w({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ee(e){return{dimensionStyles:f(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}function kt(e){return{aspectStyles:f(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const xt=R()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...$e()},setup(e,t){let{slots:s}=t;const{aspectStyles:n}=kt(e),{dimensionStyles:i}=Ee(e);return N(()=>{var a;return o("div",{class:"v-responsive",style:i.value},[o("div",{class:"v-responsive__sizer",style:n.value},null),(a=s.additional)==null?void 0:a.call(s),s.default&&o("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function It(e,t){if(!re)return;const s=t.modifiers||{},n=t.value,{handler:i,options:a}=typeof n=="object"?n:{handler:n,options:{}},r=new IntersectionObserver(function(){var y;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const v=(y=e._observe)==null?void 0:y[t.instance.$.uid];if(!v)return;const m=d.some(l=>l.isIntersecting);i&&(!s.quiet||v.init)&&(!s.once||m||v.init)&&i(m,d,u),m&&s.once?Te(e,t):v.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Te(e,t){var n;const s=(n=e._observe)==null?void 0:n[t.instance.$.uid];!s||(s.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const $t={mounted:It,unmounted:Te},Et=$t,Tt=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),q=(e,t)=>{let{slots:s}=t;const{transition:n,...i}=e,{component:a=tt,...r}=typeof n=="object"?n:{};return et(a,Se(typeof n=="string"?{name:n}:r,i),s)},un=R()({name:"VImg",directives:{intersect:Et},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Tt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:s,slots:n}=t;const i=$(""),a=$(),r=$(e.eager?"loading":"idle"),d=$(),u=$(),v=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=f(()=>v.value.aspect||d.value/u.value||0);L(()=>e.src,()=>{y(r.value!=="idle")}),L(m,(g,C)=>{!g&&C&&a.value&&_(a.value)}),nt(()=>y());function y(g){if(!(e.eager&&g)&&!(re&&!g&&!e.eager)){if(r.value="loading",v.value.lazySrc){const C=new Image;C.src=v.value.lazySrc,_(C,null)}!v.value.src||Ce(()=>{var C,E;if(s("loadstart",((C=a.value)==null?void 0:C.currentSrc)||v.value.src),(E=a.value)!=null&&E.complete){if(a.value.naturalWidth||c(),r.value==="error")return;m.value||_(a.value,null),l()}else m.value||_(a.value),p()})}}function l(){var g;p(),r.value="loaded",s("load",((g=a.value)==null?void 0:g.currentSrc)||v.value.src)}function c(){var g;r.value="error",s("error",((g=a.value)==null?void 0:g.currentSrc)||v.value.src)}function p(){const g=a.value;g&&(i.value=g.currentSrc||g.src)}let h=-1;function _(g){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{clearTimeout(h);const{naturalHeight:O,naturalWidth:A}=g;O||A?(d.value=A,u.value=O):!g.complete&&r.value==="loading"&&C!=null?h=window.setTimeout(E,C):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,u.value=1)};E()}const S=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),b=()=>{var E;if(!v.value.src||r.value==="idle")return null;const g=o("img",{class:["v-img__img",S.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:l,onError:c},null),C=(E=n.sources)==null?void 0:E.call(n);return o(q,{transition:e.transition,appear:!0},{default:()=>[te(C?o("picture",{class:"v-img__picture"},[C,g]):g,[[st,r.value==="loaded"]])]})},k=()=>o(q,{transition:e.transition},{default:()=>[v.value.lazySrc&&r.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",S.value],src:v.value.lazySrc,alt:e.alt},null)]}),z=()=>n.placeholder?o(q,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!n.error)&&o("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,T=()=>n.error?o(q,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&o("div",{class:"v-img__error"},[n.error()])]}):null,P=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=$(!1);{const g=L(m,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),g())})}return N(()=>te(o(xt,{class:["v-img",{"v-img--booting":!j.value}],style:{width:x(e.width==="auto"?d.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>o(ke,null,[o(b,null,null),o(k,null,null),o(P,null,null),o(z,null,null),o(T,null,null)]),default:n.default}),[[we("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:i,image:a,state:r,naturalWidth:d,naturalHeight:u}}}),Z=w({tag:{type:String,default:"div"}},"tag"),Be=w({border:[Boolean,Number,String]},"border");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{borderClasses:f(()=>{const n=M(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`border-${a}`);return i})}}const ze=w({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Le(e){return{elevationClasses:f(()=>{const s=M(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const Ve=w({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{roundedClasses:f(()=>{const n=M(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`rounded-${a}`);return i})}}function oe(e){return xe(()=>{const t=[],s={};return e.value.background&&(ve(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(ve(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function se(e,t){const s=f(()=>({text:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=oe(s);return{textColorClasses:n,textColorStyles:i}}function cn(e,t){const s=f(()=>({background:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=oe(s);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Bt=[null,"default","comfortable","compact"],Pe=w({density:{type:String,default:"default",validator:e=>Bt.includes(e)}},"density");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{densityClasses:f(()=>`${t}--density-${e.density}`)}}const Rt=["elevated","flat","tonal","outlined","text","plain"];function zt(e,t){return o(ke,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ae=w({color:String,variant:{type:String,default:"elevated",validator:e=>Rt.includes(e)}},"variant");function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();const s=f(()=>{const{variant:a}=fe(e);return`${t}--variant-${a}`}),{colorClasses:n,colorStyles:i}=oe(f(()=>{const{variant:a,color:r}=fe(e);return{[["elevated","flat"].includes(a)?"background":"text"]:r}}));return{colorClasses:n,colorStyles:i,variantClasses:s}}const We=w({divided:Boolean,...Be(),...Pe(),...ze(),...Ve(),...Z(),...Y(),...Ae()},"v-btn-group"),De=R()({name:"VBtnGroup",props:We(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=J(e),{densityClasses:i}=Oe(e),{borderClasses:a}=Re(e),{elevationClasses:r}=Le(e),{roundedClasses:d}=Ne(e);_e({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),N(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,a.value,i.value,r.value,d.value]},s))}});function Vt(e){return at(e,Object.keys(De.props))}const Nt=w({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Pt=w({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ot(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=U("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=it();Ie(Symbol.for(`${t.description}:id`),i);const a=rt(t,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const r=B(e,"value"),d=f(()=>a.disabled.value||e.disabled);a.register({id:i,value:r,disabled:d},n),X(()=>{a.unregister(i)});const u=f(()=>a.isSelected(i)),v=f(()=>u.value&&[a.selectedClass.value,e.selectedClass]);return L(u,m=>{n.emit("group:selected",{value:m})}),{id:i,isSelected:u,toggle:()=>a.select(i,!u.value),select:m=>a.select(i,m),selectedClass:v,value:r,disabled:d,group:a}}function At(e,t){let s=!1;const n=ot([]),i=lt(e,"modelValue",[],l=>l==null?[]:He(n,dt(l)),l=>{const c=Dt(n,l);return e.multiple?c:c[0]}),a=U("useGroup");function r(l,c){const p=l,h=Symbol.for(`${t.description}:id`),S=vt(h,a==null?void 0:a.vnode).indexOf(c);S>-1?n.splice(S,0,p):n.push(p)}function d(l){if(s)return;u();const c=n.findIndex(p=>p.id===l);n.splice(c,1)}function u(){const l=n.find(c=>!c.disabled);l&&e.mandatory==="force"&&!i.value.length&&(i.value=[l.id])}ut(()=>{u()}),X(()=>{s=!0});function v(l,c){const p=n.find(h=>h.id===l);if(!(c&&(p==null?void 0:p.disabled)))if(e.multiple){const h=i.value.slice(),_=h.findIndex(b=>b===l),S=~_;if(c=c!=null?c:!S,S&&e.mandatory&&h.length<=1||!S&&e.max!=null&&h.length+1>e.max)return;_<0&&c?h.push(l):_>=0&&!c&&h.splice(_,1),i.value=h}else{const h=i.value.includes(l);if(e.mandatory&&h)return;i.value=(c!=null?c:!h)?[l]:[]}}function m(l){if(e.multiple&&ft('This method is not supported when using "multiple" prop'),i.value.length){const c=i.value[0],p=n.findIndex(S=>S.id===c);let h=(p+l)%n.length,_=n[h];for(;_.disabled&&h!==p;)h=(h+l)%n.length,_=n[h];if(_.disabled)return;i.value=[n[h].id]}else{const c=n.find(p=>!p.disabled);c&&(i.value=[c.id])}}const y={register:r,unregister:d,selected:i,select:v,disabled:B(e,"disabled"),prev:()=>m(n.length-1),next:()=>m(1),isSelected:l=>i.value.includes(l),selectedClass:f(()=>e.selectedClass),items:f(()=>n),getItemIndex:l=>Wt(n,l)};return Ie(t,y),y}function Wt(e,t){const s=He(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function He(e,t){const s=[];for(let n=0;n<e.length;n++){const i=e[n];i.value!=null?t.find(a=>ct(a,i.value))!=null&&s.push(i.id):t.includes(n)&&s.push(i.id)}return s}function Dt(e,t){const s=[];for(let n=0;n<e.length;n++){const i=e[n];t.includes(i.id)&&s.push(i.value!=null?i.value:n)}return s}const Me=Symbol.for("vuetify:v-btn-toggle");R()({name:"VBtnToggle",props:{...We(),...Nt()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:i,prev:a,select:r,selected:d}=At(e,Me);return N(()=>{const[u]=Vt(e);return o(De,Se({class:"v-btn-toggle"},u),{default:()=>{var v;return[(v=s.default)==null?void 0:v.call(s,{isSelected:n,next:i,prev:a,select:r,selected:d})]}})}),{next:i,prev:a,select:r}}});const Ht=["x-small","small","default","large","x-large"],le=w({size:{type:[String,Number],default:"default"}},"size");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return xe(()=>{let s,n;return ee(Ht,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:x(e.size),height:x(e.size)}),{sizeClasses:s,sizeStyles:n}})}const Mt=w({color:String,start:Boolean,end:Boolean,icon:ne,...le(),...Z({tag:"i"}),...Y()},"v-icon"),K=R()({name:"VIcon",props:Mt(),setup(e,t){let{attrs:s,slots:n}=t,i;n.default&&(i=f(()=>{var y,l;const m=(y=n.default)==null?void 0:y.call(n);if(!!m)return(l=m.filter(c=>c.type===mt&&c.children&&typeof c.children=="string")[0])==null?void 0:l.children}));const{themeClasses:a}=J(e),{iconData:r}=gt(i||e),{sizeClasses:d}=ue(e),{textColorClasses:u,textColorStyles:v}=se(B(e,"color"));return N(()=>o(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",a.value,d.value,u.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[d.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},v.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n)]}})),{}}});function jt(e){const t=$(),s=$(!1);if(re){const n=new IntersectionObserver(i=>{e==null||e(i,n),s.value=!!i.find(a=>a.isIntersecting)});X(()=>{n.disconnect()}),L(t,(i,a)=>{a&&(n.unobserve(a),s.value=!1),i&&n.observe(i)},{flush:"post"})}return{intersectionRef:t,isIntersecting:s}}const Gt=R()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...le(),...Z({tag:"div"}),...Y()},setup(e,t){let{slots:s}=t;const n=20,i=2*Math.PI*n,a=$(),{themeClasses:r}=J(e),{sizeClasses:d,sizeStyles:u}=ue(e),{textColorClasses:v,textColorStyles:m}=se(B(e,"color")),{textColorClasses:y,textColorStyles:l}=se(B(e,"bgColor")),{intersectionRef:c,isIntersecting:p}=jt(),{resizeRef:h,contentRect:_}=wt(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),b=f(()=>Number(e.width)),k=f(()=>u.value?Number(e.size):_.value?_.value.width:Math.max(b.value,32)),z=f(()=>n/(1-b.value/k.value)*2),T=f(()=>b.value/k.value*z.value),P=f(()=>x((100-S.value)/100*i));return ht(()=>{c.value=a.value,h.value=a.value}),N(()=>o(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,d.value,v.value],style:[u.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${z.value} ${z.value}`},[o("circle",{class:["v-progress-circular__underlay",y.value],style:l.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":P.value},null)]),s.default&&o("div",{class:"v-progress-circular__content"},[s.default({value:S.value})])]})),{}}});const ae=Symbol("rippleStop"),qt=80;function be(e,t){e.style.transform=t,e.style.webkitTransform=t}function ie(e){return e.constructor.name==="TouchEvent"}function je(e){return e.constructor.name==="KeyboardEvent"}const Ft=function(e,t){var y;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!je(e)){const l=t.getBoundingClientRect(),c=ie(e)?e.touches[e.touches.length-1]:e;n=c.clientX-l.left,i=c.clientY-l.top}let a=0,r=.3;(y=t._ripple)!=null&&y.circle?(r=.15,a=t.clientWidth/2,a=s.center?a:a+Math.sqrt((n-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-a*2)/2}px`,u=`${(t.clientHeight-a*2)/2}px`,v=s.center?d:`${n-a}px`,m=s.center?u:`${i-a}px`;return{radius:a,scale:r,x:v,y:m,centerX:d,centerY:u}},F={show(e,t){var c;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=t==null?void 0:t._ripple)!=null&&c.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:a,scale:r,x:d,y:u,centerX:v,centerY:m}=Ft(e,t,s),y=`${a*2}px`;i.className="v-ripple__animation",i.style.width=y,i.style.height=y,t.appendChild(n);const l=window.getComputedStyle(t);l&&l.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),be(i,`translate(${d}, ${u}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),be(i,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=s.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(s.parentNode)},300)},i)}};function Ge(e){return typeof e>"u"||!!e}function D(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ae])){if(e[ae]=!0,ie(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||je(e),s._ripple.class&&(t.class=s._ripple.class),ie(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{F.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;(n=s==null?void 0:s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},qt)}else F.show(e,s,t)}}function ye(e){e[ae]=!0}function I(e){const t=e.currentTarget;if(!!(t!=null&&t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{I(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),F.hide(t)}}function qe(e){const t=e.currentTarget;!(t!=null&&t._ripple)||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let H=!1;function Fe(e){!H&&(e.keyCode===me.enter||e.keyCode===me.space)&&(H=!0,D(e))}function Ue(e){H=!1,I(e)}function Xe(e){H&&(H=!1,I(e))}function Ye(e,t,s){var r;const{value:n,modifiers:i}=t,a=Ge(n);if(a||F.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,bt(n)&&n.class&&(e._ripple.class=n.class),a&&!s){if(i.stop){e.addEventListener("touchstart",ye,{passive:!0}),e.addEventListener("mousedown",ye);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",I,{passive:!0}),e.addEventListener("touchmove",qe,{passive:!0}),e.addEventListener("touchcancel",I),e.addEventListener("mousedown",D),e.addEventListener("mouseup",I),e.addEventListener("mouseleave",I),e.addEventListener("keydown",Fe),e.addEventListener("keyup",Ue),e.addEventListener("blur",Xe),e.addEventListener("dragstart",I,{passive:!0})}else!a&&s&&Je(e)}function Je(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",I),e.removeEventListener("touchmove",qe),e.removeEventListener("touchcancel",I),e.removeEventListener("mouseup",I),e.removeEventListener("mouseleave",I),e.removeEventListener("keydown",Fe),e.removeEventListener("keyup",Ue),e.removeEventListener("dragstart",I),e.removeEventListener("blur",Xe)}function Ut(e,t){Ye(e,t,!1)}function Xt(e){delete e._ripple,Je(e)}function Yt(e,t){if(t.value===t.oldValue)return;const s=Ge(t.oldValue);Ye(e,t,s)}const Jt={mounted:Ut,unmounted:Xt,updated:Yt},pe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Zt=w({location:String},"location");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=yt();return{locationStyles:f(()=>{if(!e.location)return{};const{side:a,align:r}=Ct(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(v){return s?s(v):0}const u={};return a!=="center"&&(t?u[pe[a]]=`calc(100% - ${d(a)}px)`:u[a]=0),r!=="center"?t?u[pe[r]]=`calc(100% - ${d(r)}px)`:u[r]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const Kt=w({loading:[Boolean,String]},"loader");function en(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{loaderClasses:f(()=>({[`${t}--loading`]:e.loading}))}}const tn=["static","relative","fixed","absolute","sticky"],nn=w({position:{type:String,validator:e=>tn.includes(e)}},"position");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{positionClasses:f(()=>e.position?`${t}--${e.position}`:void 0)}}function dn(){var e,t;return(t=(e=U("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function an(e,t){const s=pt("RouterLink"),n=f(()=>!!(e.href||e.to)),i=f(()=>(n==null?void 0:n.value)||ge(t,"click")||ge(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:i,href:B(e,"href")};const a=e.to?s.useLink(e):void 0;return{isLink:n,isClickable:i,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&f(()=>{var r,d;return e.exact?(r=a.isExactActive)==null?void 0:r.value:(d=a.isActive)==null?void 0:d.value}),href:f(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const rn=w({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function on(e,t){L(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&Ce(()=>{t(!0)})},{immediate:!0})}const vn=R()({name:"VBtn",directives:{Ripple:Jt},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Be(),...Ve(),...Pe(),...$e(),...ze(),...Pt(),...Kt(),...Zt(),...nn(),...rn(),...le(),...Z({tag:"button"}),...Y(),...Ae({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:i}=J(e),{borderClasses:a}=Re(e),{colorClasses:r,colorStyles:d,variantClasses:u}=Lt(e),{densityClasses:v}=Oe(e),{dimensionStyles:m}=Ee(e),{elevationClasses:y}=Le(e),{loaderClasses:l}=en(e),{locationStyles:c}=Qt(e),{positionClasses:p}=sn(e),{roundedClasses:h}=Ne(e),{sizeClasses:_,sizeStyles:S}=ue(e),b=Ot(e,e.symbol,!1),k=an(e,s),z=f(()=>{var g;return e.active!==void 0?e.active:k.isLink.value?(g=k.isActive)==null?void 0:g.value:b==null?void 0:b.isSelected.value}),T=f(()=>(b==null?void 0:b.disabled.value)||e.disabled),P=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),j=f(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return on(k,b==null?void 0:b.select),N(()=>{var ce,de;const g=k.isLink.value?"a":e.tag,C=!!(e.prependIcon||n.prepend),E=!!(e.appendIcon||n.append),O=!!(e.icon&&e.icon!==!0),A=(b==null?void 0:b.isSelected.value)&&(!k.isLink.value||((ce=k.isActive)==null?void 0:ce.value))||!b||((de=k.isActive)==null?void 0:de.value);return te(o(g,{type:g==="a"?void 0:"button",class:["v-btn",b==null?void 0:b.selectedClass.value,{"v-btn--active":z.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,a.value,A?r.value:void 0,v.value,y.value,l.value,p.value,h.value,_.value,u.value],style:[A?d.value:void 0,m.value,c.value,S.value],disabled:T.value||void 0,href:k.href.value,onClick:G=>{var W;T.value||((W=k.navigate)==null||W.call(k,G),b==null||b.toggle())},value:j.value},{default:()=>{var G,W;return[zt(!0,"v-btn"),!e.icon&&C&&o("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?o(Q,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):o(K,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&O?o(K,{key:"content-icon",icon:e.icon},null):o(Q,{key:"content-defaults",disabled:!O,defaults:{VIcon:{icon:e.icon}}},n.default)]),!e.icon&&E&&o("span",{key:"append",class:"v-btn__append"},[n.append?o(Q,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):o(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[(W=(G=n.loader)==null?void 0:G.call(n))!=null?W:o(Gt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[we("ripple"),!T.value&&e.ripple,null]])}),{}}}),fn=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s};export{he as A,Gt as B,Jt as R,un as V,fn as _,N as a,Be as b,ze as c,Ve as d,cn as e,Re as f,Le as g,Ne as h,Q as i,vn as j,K as k,se as l,Z as m,Pe as n,le as o,Ae as p,Lt as q,Oe as r,ue as s,zt as t,wt as u,$e as v,rn as w,an as x,Ee as y,dn as z};