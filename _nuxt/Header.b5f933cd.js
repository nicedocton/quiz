import{f as p,s as v,g as u,o,c as a,i as _,a as s,v as d,t as m,d as i,p as S,e as b,_ as h}from"./entry.8257ff69.js";const f=""+new URL("arrow-left.7bde98ee.svg",import.meta.url).href,n=t=>(S("data-v-48bbb064"),t=t(),b(),t),g={class:"header"},k={key:0,class:"header__back"},x=n(()=>s("img",{src:f,alt:"Back"},null,-1)),y=[x],B=n(()=>s("div",{class:"logo"},[i("Exnova"),s("span",null,"Academy")],-1)),I={key:1,class:"header__pagination"},w=p({__name:"Header",setup(t){const r=v(),e=u(),l=()=>{e.activeSlide===1?(e.setSlide(0),r.back()):e.setSlide(e.activeSlide-1)};return(C,c)=>(o(),a("div",g,[_(e).activeSlide>=1?(o(),a("div",k,[s("div",{onClick:c[0]||(c[0]=N=>l())},y)])):d("",!0),B,_(e).activeSlide>=1?(o(),a("div",I,[s("span",null,m(_(e).activeSlide),1),i(" / 10 ")])):d("",!0)]))}});const E=h(w,[["__scopeId","data-v-48bbb064"]]);export{E as _};