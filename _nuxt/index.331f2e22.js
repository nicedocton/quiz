import{_ as d}from"./nuxt-link.03bb2ba8.js";import{u as p}from"./genders.12e469c2.js";import{f as u,o as l,c as m,a as e,b as c,w as a,p as f,e as h,_ as r,j as g}from"./entry.8257ff69.js";const s=t=>(f("data-v-29f23b76"),t=t(),h(),t),x={class:"gender"},v=s(()=>e("div",{class:"title"},[e("h1",{class:"h1"},"Let's Create Your Wealth Growth Plan"),e("p",null,"Select your gender:")],-1)),k={class:"grid"},b=s(()=>e("div",{class:"grid__item-img"},null,-1)),C=s(()=>e("button",null,[e("span",null,"Male"),e("i",{class:"caret"})],-1)),G=s(()=>e("div",{class:"grid__item-img"},null,-1)),S=s(()=>e("button",null,[e("span",null,"Female"),e("i",{class:"caret"})],-1)),w=u({__name:"Gender",setup(t){const n=p(),o=()=>{n.setMan()},i=()=>{n.setWoman()};return(M,W)=>{const _=d;return l(),m("div",x,[v,e("div",k,[c(_,{to:"/age-picker",onClick:o,class:"grid__item _male"},{default:a(()=>[b,C]),_:1}),c(_,{to:"/age-picker",onClick:i,class:"grid__item _female"},{default:a(()=>[G,S]),_:1})])])}}});const B=r(w,[["__scopeId","data-v-29f23b76"]]),I={};function y(t,n){const o=B;return l(),g(o)}const j=r(I,[["render",y]]);export{j as default};