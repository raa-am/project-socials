import{g as se,h as q,m as J,i as re,j as ue,k as p,u as K,l as Q,n as W,p as ie,a as t,q as de,r as k,s as X,I as ce,t as fe,v as ve,x as g,y as me,z as y,A as xe,B as Ve,C as ge,F as A,D as j,E as he,G as Ce,H as ye,J as pe,K as G,L as ke,M as be,N as we,_ as _e,o as Pe,c as Fe,w as r,d as M,O as Ie,P as H,Q as E,R as O,e as T,S as Be,T as Se,U as Re,W as $e}from"./index.64f8b229.js";const L=se("flex-grow-1","div","VSpacer");const Ne=q({name:"VCheckbox",inheritAttrs:!1,props:{...J(),...re()},setup(e,n){let{attrs:f,slots:h}=n;const s=ue(),l=p(()=>e.id||`checkbox-${s}`);return K(()=>{const[o,F]=Q(f),[I,B]=W(e),[v,c]=ie(e);return t(X,k({class:"v-checkbox"},o,I,{id:l.value}),{...h,default:b=>{let{id:m,isDisabled:w,isReadonly:S}=b;return t(de,k(v,{id:m.value,disabled:w.value,readonly:S.value},F),h)}})}),{}}});const Ue=q({name:"VTextarea",directives:{Intersect:ce},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...J(),...fe()},emits:{"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:f,emit:h,slots:s}=n;const l=ve(e,"modelValue"),o=p(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),F=p(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function I(a,u){var i,d;!e.autofocus||!a||(i=u[0].target)==null||(d=i.focus)==null||d.call(i)}const B=g(),v=g(),c=g(!1),b=g(""),m=g(),w=p(()=>c.value||e.persistentPlaceholder),S=p(()=>e.messages.length?e.messages:w.value||e.persistentHint?e.hint:"");function R(){if(m.value!==document.activeElement){var a;(a=m.value)==null||a.focus()}c.value||(c.value=!0)}function Y(a){R(),h("click:control",a)}function Z(a){a.stopPropagation(),R(),G(()=>{l.value="",ke(e["onClick:clear"],a)})}function ee(a){l.value=a.target.value}const x=g();function V(){!e.autoGrow||G(()=>{if(!x.value||!v.value)return;const a=getComputedStyle(x.value),u=getComputedStyle(v.value.$el),i=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=x.value.scrollHeight,$=parseFloat(a.lineHeight),N=Math.max(parseFloat(e.rows)*$+i,parseFloat(u.getPropertyValue("--v-input-control-height"))),U=parseFloat(e.maxRows)*$+i||1/0;b.value=be(we(d!=null?d:0,N,U))})}me(V),y(l,V),y(()=>e.rows,V),y(()=>e.maxRows,V),y(()=>e.density,V);let _;return y(x,a=>{if(a)_=new ResizeObserver(V),_.observe(x.value);else{var u;(u=_)==null||u.disconnect()}}),xe(()=>{var a;(a=_)==null||a.disconnect()}),K(()=>{const a=!!(s.counter||e.counter||e.counterValue),u=!!(a||s.details),[i,d]=Q(f),[{modelValue:$,...N}]=W(e),[U]=Ve(e);return t(X,k({ref:B,modelValue:l.value,"onUpdate:modelValue":C=>l.value=C,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},i,N,{messages:S.value}),{...s,default:C=>{let{isDisabled:P,isDirty:D,isReadonly:te,isValid:ae}=C;return t(ge,k({ref:v,style:{"--v-textarea-control-height":b.value},"onClick:control":Y,"onClick:clear":Z,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},U,{active:w.value||D.value,dirty:D.value||e.dirty,focused:c.value,error:ae.value===!1}),{...s,default:le=>{let{props:{class:z,...ne}}=le;return t(A,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),j(t("textarea",k({ref:m,class:z,value:l.value,onInput:ee,autofocus:e.autofocus,readonly:te.value,disabled:P.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:R,onBlur:()=>c.value=!1},ne,d),null),[[he("intersect"),{handler:I},null,{once:!0}]]),e.autoGrow&&j(t("textarea",{class:[z,"v-textarea__sizer"],"onUpdate:modelValue":oe=>l.value=oe,ref:x,readonly:!0,"aria-hidden":"true"},null),[[Ce,l.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?C=>{var P;return t(A,null,[(P=s.details)==null?void 0:P.call(s,C),a&&t(A,null,[t("span",null,null),t(ye,{active:e.persistentCounter||c.value,value:o.value,max:F.value},s.counter)])])}:void 0})}),pe({},B,v,m)}});const Ae={data:()=>({first:null,last:null,email:null,password:null,terms:!1})},He=Re("h1",null,"Contact Us",-1),Te=$e(" Send ticket ");function De(e,n,f,h,s,l){return Pe(),Fe(M,{class:"d-flex flex-wrap justify-center mx-auto"},{default:r(()=>[t(H,{rounded:"",id:"borderDemo"},{default:r(()=>[t(Ie,{class:"d-flex flex-wrap justify-center"},{default:r(()=>[He]),_:1}),t(H,{class:"d-flex flex-wrap justify-center"},{default:r(()=>[t(E),t(O,null,{default:r(()=>[t(L)]),_:1})]),_:1}),t(H,{class:"d-flex flex-wrap justify-center"},{default:r(()=>[t(M,null,{default:r(()=>[t(T,{modelValue:e.first,"onUpdate:modelValue":n[0]||(n[0]=o=>e.first=o),color:"primary",label:"Title",variant:"underlined"},null,8,["modelValue"]),t(T,{modelValue:e.last,"onUpdate:modelValue":n[1]||(n[1]=o=>e.last=o),color:"primary",label:"Object",variant:"underlined"},null,8,["modelValue"]),t(T,{modelValue:e.email,"onUpdate:modelValue":n[2]||(n[2]=o=>e.email=o),color:"primary",label:"Email",variant:"underlined"},null,8,["modelValue"]),t(Ue,{label:"Label",variant:"outlined"}),t(Ne,{modelValue:e.terms,"onUpdate:modelValue":n[3]||(n[3]=o=>e.terms=o),color:"secondary",label:"I agree to site terms and conditions"},null,8,["modelValue"])]),_:1}),t(E),t(O,null,{default:r(()=>[t(L),t(Be,{variant:"outlined"},{default:r(()=>[Te,t(Se,{icon:"mdi-email-send"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const je=_e(Ae,[["render",De]]);export{je as default};
