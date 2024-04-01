import{R as te,w as ne,s as a,l as V,S as h,t as se,v as le,c as x,U as ie,Y as de,B as R,D as p,E as $,F as l,am as s,O as oe,K as B,M as D,G as M,H as c,L as re,an as ce,ao as ue}from"./index.4e31816d.js";import{a as y,n as E,i as A,R as me,b as ve,o as ge,c as _e,B as fe,C as pe,D as he,d as ye,p as be,m as F,q as ke,f as Ce,s as Ie,t as xe,v as Ae,g as Ve,E as Se,F as we,G as Pe,h as Le,r as Be,V as U,L as De,w as Me,_ as z,H as Te,j as je}from"./Xplugin-vueXexport-helper.511ab067.js";import{c as S,V as T,u as Re}from"./VAvatar.e6b51727.js";import{V as I,a as f}from"./VRow.99044148.js";const $e="/assets/full_body_compressed.33e99697.jpg";const Ee=te({name:"VCardActions",setup(e,d){let{slots:n}=d;return ne({VBtn:{variant:"text"}}),y(()=>{var t;return a("div",{class:"v-card-actions"},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Fe=S("v-card-subtitle"),Ue=S("v-card-title"),ze=V()({name:"VCardItem",props:{appendAvatar:String,appendIcon:h,prependAvatar:String,prependIcon:h,subtitle:String,title:String,...E()},setup(e,d){let{slots:n}=d;return y(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),m=!!(t||n.prepend),i=!!(e.appendAvatar||e.appendIcon),b=!!(i||n.append),k=!!(e.title||n.title),C=!!(e.subtitle||n.subtitle);return a("div",{class:"v-card-item"},[m&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(A,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):t&&a(T,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),a("div",{class:"v-card-item__content"},[k&&a(Ue,{key:"title"},{default:()=>{var o,r;return[(r=(o=n.title)==null?void 0:o.call(n))!=null?r:e.title]}}),C&&a(Fe,{key:"subtitle"},{default:()=>{var o,r;return[(r=(o=n.subtitle)==null?void 0:o.call(n))!=null?r:e.subtitle]}}),(v=n.default)==null?void 0:v.call(n)]),b&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(A,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):i&&a(T,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ge=S("v-card-text"),He=V()({name:"VCard",directives:{Ripple:me},props:{appendAvatar:String,appendIcon:h,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:h,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...se(),...ve(),...E(),...ge(),..._e(),...fe(),...pe(),...he(),...ye(),...be(),...F(),...ke({variant:"elevated"})},setup(e,d){let{attrs:n,slots:t}=d;const{themeClasses:m}=le(e),{borderClasses:i}=Ce(e),{colorClasses:b,colorStyles:k,variantClasses:C}=Ie(e),{densityClasses:v}=xe(e),{dimensionStyles:o}=Ae(e),{elevationClasses:r}=Ve(e),{loaderClasses:G}=Se(e),{locationStyles:H}=we(e),{positionClasses:N}=Pe(e),{roundedClasses:J}=Le(e),g=Be(e,n),O=x(()=>e.link!==!1&&g.isLink.value),_=x(()=>!e.disabled&&e.link!==!1&&(e.link||g.isClickable.value));return y(()=>{const W=O.value?"a":e.tag,q=!!(t.title||e.title),K=!!(t.subtitle||e.subtitle),X=q||K,Y=!!(t.append||e.appendAvatar||e.appendIcon),Q=!!(t.prepend||e.prependAvatar||e.prependIcon),Z=!!(t.image||e.image),ee=X||Q||Y,ae=!!(t.text||e.text);return ie(a(W,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":_.value},m.value,i.value,b.value,v.value,r.value,G.value,N.value,J.value,C.value],style:[k.value,o.value,H.value],href:g.href.value,onClick:_.value&&g.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[Z&&a("div",{key:"image",class:"v-card__image"},[t.image?a(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(U,{key:"image-img",cover:!0,src:e.image},null)]),a(De,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),ee&&a(ze,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ae&&a(Ge,{key:"text"},{default:()=>{var P,L;return[(L=(P=t.text)==null?void 0:P.call(t))!=null?L:e.text]}}),(w=t.default)==null?void 0:w.call(t),t.actions&&a(Ee,null,{default:t.actions}),Me(_.value,"v-card")]}}),[[de("ripple"),_.value&&e.ripple]])}),{}}}),Ne=["href"],Je={class:"d-flex justify-space-between"},Oe=["src"],We={class:"d-flex align-center"},qe={class:"title"},Ke=["src"],Xe=R({__name:"CourseCard",props:{logoImage:null,courseLogo:null,link:null,title:null},setup(e){return(d,n)=>(p(),$(He,{class:"course-card pa-2 ma-2"},{default:l(()=>[s("a",{href:e.link,target:"_blank",class:"certificate-link"},[s("div",Je,[s("img",{src:e.logoImage,class:"logo-image"},null,8,Oe),s("div",We,[s("h3",qe,oe(e.title),1)]),s("img",{src:e.courseLogo,class:"course-logo"},null,8,Ke)])],8,Ne)]),_:1}))}});const Ye=z(Xe,[["__scopeId","data-v-cefa6100"]]),j=V()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...F()},setup(e,d){let{slots:n}=d;return y(()=>a(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},n)),{}}}),u=e=>(ce("data-v-8dcf5ec0"),e=e(),ue(),e),Qe={style:{position:"relative"}},Ze={class:"d-flex align-center justify-center fill-height"},ea=u(()=>s("p",{class:"pa-2",style:{"font-size":"1.25rem","max-width":"700px","line-height":"2"}},[c(" I am a Lead UX Engineer, Flutter Developer for Mobile and Web at GoldenM INC. "),s("br"),s("br"),c(" I am a computer engineer graduated from the University Jose Antonio P\xE1ez. I am studying to learn AI to be a machine learning engineer. "),s("br"),s("br"),c(" My dream Job is to Use Machine Learning and AI to build systems that help shape the future of the world and help deal with global warming. ")],-1)),aa=u(()=>s("div",{style:{height:"220px"}},null,-1)),ta={style:{position:"absolute",bottom:"0",right:"0",left:"0"},class:"pa-1"},na=u(()=>s("h1",{class:"font-weight-bold",style:{"text-align":"end"}},"Luis Rogelio ",-1)),sa=u(()=>s("p",{style:{"text-align":"end"}},[c(" Computer Engineer "),s("br"),c(" Web & Mobile Development "),s("br"),c(" Currently working at "),s("a",{href:"https://www.linkedin.com/company/golden-m-inc/",target:"_blank"},"GoldenM")],-1)),la={class:"d-flex justify-end mt-4"},ia=u(()=>s("h1",null,"Courses and personal projects",-1)),da=R({__name:"About",setup(e){const d=Re(),n=x(()=>d.coursesAndProjects);return(t,m)=>(p(),B(D,null,[a(j,{class:"ma-0 pa-0"},{default:l(()=>[a(I,{"no-gutters":""},{default:l(()=>[a(f,{cols:"12",md:"4"},{default:l(()=>[s("div",Qe,[a(U,{cover:"","aspect-ratio":"9/16",height:"70vh",width:"100%","max-width":"550px",class:"image_cropped",src:M($e)},{placeholder:l(()=>[s("div",Ze,[a(Te,{color:"grey-lighten-4",indeterminate:""})])]),_:1},8,["src"])])]),_:1}),a(f,{cols:"12",md:"6",class:"d-flex align-center justify-center"},{default:l(()=>[ea]),_:1}),a(f,{cols:"12",md:"2",style:{position:"relative"}},{default:l(()=>[aa,s("div",ta,[na,sa,s("div",la,[a(je,{size:"x-large",style:{width:"100%"},color:"red",href:"https://www.linkedin.com/in/luis-rogelio-reyes-hern%C3%A1ndez-3a1028114/",target:"_blank","prepend-icon":"mdi-linkedin"},{default:l(()=>[c(" Hire Me! ")]),_:1})])])]),_:1})]),_:1})]),_:1}),a(j,null,{default:l(()=>[a(I,{"no-gutters":"",class:"mb-12"},{default:l(()=>[ia]),_:1}),a(I,{"no-gutters":""},{default:l(()=>[(p(!0),B(D,null,re(M(n),i=>(p(),$(f,{key:i.name,cols:"12",xs:"12",sm:"6",md:"4",lg:"4"},{default:l(()=>[a(Ye,{"logo-image":i.platformLogo,"course-logo":i.courseLogo,link:i.link,title:i.name},null,8,["logo-image","course-logo","link","title"])]),_:2},1024))),128))]),_:1})]),_:1})],64))}});const ma=z(da,[["__scopeId","data-v-8dcf5ec0"]]);export{ma as default};
