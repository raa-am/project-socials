import{h as x,U as T,W as _,X as B,Y as A,Z as $,k as c,$ as L,a0 as y,u as f,a as l,a1 as R,a2 as b,a3 as j,a4 as P,a5 as S,D as V,E as q,R as D,a6 as k,a7 as F,a8 as G,a9 as z,aa as N,ab as Q,ac as U,ad as O,ae as W,af as X,ag as Y,_ as Z,o as h,c as H,w as p,ah as J,ai as K,aj as M,ak as ee,F as ae,S as ne,al as le}from"./index.6cd85a03.js";const r=Symbol.for("vuetify:v-expansion-panel"),te=["default","accordion","inset","popout"],se=x({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>te.includes(e)},readonly:Boolean,...T(),..._(),...B()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;A(e,r);const{themeClasses:a}=$(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return L({VExpansionPanel:{color:y(e,"color")},VExpansionPanelTitle:{readonly:y(e,"readonly")}}),f(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=R({color:String,expandIcon:{type:b,default:"$expand"},collapseIcon:{type:b,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean}),oe=x({name:"VExpansionPanelTitle",directives:{Ripple:j},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return f(()=>{var v;return V(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(D,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[q("ripple"),e.ripple]])}),{}}}),ie=x({name:"VExpansionPanelText",props:{...k()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=F(e,a.isSelected);return f(()=>{var d;return l(z,{onAfterLeave:u},{default:()=>[V(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[G,a.isSelected.value]])]})}),{}}}),de=x({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...N(),...Q(),...k(),...U(),..._(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=O(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"bgColor"),{elevationClasses:d}=W(e),{roundedClasses:v}=X(e),I=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),g=c(()=>a.group.items.value.reduce((s,t,m)=>(a.group.selected.value.includes(t.id)&&s.push(m),s),[])),C=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&g.value.some(t=>t-s===1)}),w=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&g.value.some(t=>t-s===-1)});return Y(r,a),f(()=>{var s;const t=!!(n.text||e.text),m=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":C.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":I.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),m&&l(oe,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(ie,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(s=n.default)==null?void 0:s.call(n)]})}),{}}}),ce={},ue=le("h1",null,"FAQ:",-1);function re(e,o){return h(),H(J,{class:"d-flex flex-wrap justify-center align-center"},{default:p(()=>[l(ne,{"max-width":"80vh"},{default:p(()=>[l(K,{class:"d-flex flex-wrap justify-center align-center",height:"50"},{default:p(()=>[ue]),_:1}),l(se,{variant:"popout",class:"my-4"},{default:p(()=>[(h(),M(ae,null,ee(10,n=>l(de,{key:n,title:"Question ?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})]),_:1})]),_:1})}const pe=Z(ce,[["render",re]]);export{pe as default};
