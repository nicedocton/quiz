import{_ as q}from"./nuxt-link.03bb2ba8.js";import{u as y}from"./ages.cca53463.js";import{f as h,g as m,h as p,o as n,c as r,a as e,F as b,r as A,b as S,w as k,t as w,n as g,i as v,p as G,e as B,_ as F,s as N,k as T,l as O,v as $,j as f,m as W}from"./entry.8257ff69.js";import{u as C}from"./genders.12e469c2.js";import{u as j}from"./trades.2de7477a.js";const E={class:"question"},P=e("div",{class:"question__title"},[e("h1",{class:"h1"},"Choose your current income level")],-1),U={class:"grid gap-2"},z={class:"grid__block-text"},D=["src"],Y=h({__name:"Slide1",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"Grow wealth"},{id:2,text:"Passive income"},{id:3,text:"Financial independence"},{id:4,text:"Other"}],c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender(),p(()=>{_.setSlide(1)})}),(l,o)=>{const u=q;return n(),r("div",E,[P,e("div",U,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/2",onClick:o[0]||(o[0]=x=>c(2)),class:g("grid__block"),key:t.id},{default:k(()=>[e("div",z,w(t.text),1),e("div",{class:g(`grid__block-img _${v(s).activeAge}`)},[e("img",{src:`/images/slides/slide1/${v(d).gender}/${v(s).activeAge}/${t.id}.png`,alt:""},null,8,D)],2)]),_:2},1024)),64))])])}}}),J={class:"question"},K=e("div",{class:"question__title"},[e("h1",{class:"h1"},"Choose your current income level")],-1),Q={class:"flex flex-col"},X={class:"flex__block-text"},Z={class:"flex__block-img"},ee=["src"],te=h({__name:"Slide2",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"Low"},{id:2,text:"Middle"},{id:3,text:"High"}];p(()=>{_.setSlide(2)});const c=l=>{_.setSlide(l),console.log(_.activeSlide)};return p(()=>{s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",J,[K,e("div",Q,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/3",onClick:o[0]||(o[0]=x=>c(3)),class:g("flex__block"),key:t.id},{default:k(()=>[e("div",X,w(t.text),1),e("div",Z,[e("img",{src:`/images/slides/slide2/${t.id}.svg`,alt:""},null,8,ee)])]),_:2},1024)),64))])])}}}),se={class:"question"},oe=e("div",{class:"question__title"},[e("h1",{class:"h1"},"Annual income level you want to have")],-1),ie={class:"flex flex-col"},ne={class:"flex__block-text"},_e=h({__name:"Slide3",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"$50,000 - $100,000"},{id:2,text:"$100,000 - $250,000"},{id:3,text:"More than $250,000"}],c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender(),_.setSlide(3)}),(l,o)=>{const u=q;return n(),r("div",se,[oe,e("div",ie,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/4",onClick:o[0]||(o[0]=x=>c(4)),class:g("flex__block"),key:t.id},{default:k(()=>[e("div",ne,w(t.text),1)]),_:2},1024)),64))])])}}}),V=i=>(G("data-v-d3133720"),i=i(),B(),i),le={class:"question"},ce=V(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"What is your current income source?")],-1)),de={class:"grid"},ae={class:"grid__block-img"},re=["src"],ue={class:"grid__block-text"},ve=V(()=>e("div",{class:"flex__block-text"},"Other",-1)),pe={class:"flex__block-img"},xe=["src"],ge=h({__name:"Slide4",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"9 to 5 job"},{id:2,text:"Passive income from investing"}];p(()=>{_.setSlide(4)});const c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",le,[ce,e("div",de,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/5",onClick:o[0]||(o[0]=x=>c(5)),class:g("grid__block"),key:t.id},{default:k(()=>[e("div",ae,[e("img",{src:`/images/slides/slide4/${t.id}.png`,alt:""},null,8,re)]),e("div",ue,w(t.text),1)]),_:2},1024)),64)),S(u,{to:"/slides/5",onClick:o[1]||(o[1]=t=>c(5)),class:g("flex__block")},{default:k(()=>[ve,e("div",pe,[e("img",{src:"/images/slides/slide4/3.png",alt:""},null,8,xe)])]),_:1})])])}}});const he=F(ge,[["__scopeId","data-v-d3133720"]]),me=i=>(G("data-v-76a193fb"),i=i(),B(),i),$e={class:"question"},fe=me(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"When was the last time you couldn't afford something?")],-1)),Se={class:"grid"},ke={class:"grid__col"},ye={class:"grid__col-img"},be=["src"],Ae={class:"grid__col"},we={class:"grid__block-text"},Ce=h({__name:"Slide5",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"This month"},{id:2,text:"1 month ago"},{id:3,text:"This year"},{id:4,text:"More than 1 year ago"}];p(()=>{_.setSlide(5)});const c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",$e,[fe,e("div",Se,[e("div",ke,[e("div",ye,[e("img",{src:`/images/slides/slide5/${v(d).gender}/${v(s).activeAge}.png`,alt:""},null,8,be)])]),e("div",Ae,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/6",onClick:o[0]||(o[0]=x=>c(6)),class:g("grid__block"),key:t.id},{default:k(()=>[e("div",we,w(t.text),1)]),_:2},1024)),64))])])])}}});const qe=F(Ce,[["__scopeId","data-v-76a193fb"]]),Ie=i=>(G("data-v-5393ab96"),i=i(),B(),i),Ge={class:"question"},Be=Ie(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"How frequently do you buy stuff with a credit card?")],-1)),Fe={class:"grid"},Me={class:"grid__block-text"},Re={class:"h300"},Te={class:"grid__img"},Ve=["src"],He=h({__name:"Slide6",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"Every day"},{id:2,text:"Once a week"},{id:3,text:"1-4 times a month"},{id:4,text:"I do not have a credit card"}];p(()=>{_.setSlide(6)});const c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",Ge,[Be,e("div",Fe,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/7",onClick:o[0]||(o[0]=x=>c(7)),class:g("grid__block"),key:t.id},{default:k(()=>[e("div",Me,w(t.text),1)]),_:2},1024)),64))]),e("div",Re,[e("div",Te,[e("img",{src:`/images/slides/slide6/${v(d).gender}/${v(s).activeAge}.png`,alt:""},null,8,Ve)])])])}}});const Le=F(He,[["__scopeId","data-v-5393ab96"]]),Ne=i=>(G("data-v-aa019907"),i=i(),B(),i),Oe={class:"question"},We=Ne(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"How frequently do you buy stuff with a credit card?")],-1)),je={class:"flex flex-col"},Ee={class:"flex__block-text"},Pe={class:"flex__block-img"},Ue=["src"],ze=h({__name:"Slide7",setup(i){const s=y(),_=m(),d=C(),a=[{id:1,text:"Mortgage"},{id:2,text:"Auto loan"},{id:3,text:"Student loan"},{id:4,text:"Credit card debt"},{id:5,text:"I don't have any debts"}];p(()=>{_.setSlide(7)});const c=l=>{_.setSlide(l)};return p(()=>{s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",Oe,[We,e("div",je,[(n(),r(b,null,A(a,t=>S(u,{to:"/slides/8",onClick:o[0]||(o[0]=x=>c(8)),class:g("flex__block"),key:t.id},{default:k(()=>[e("div",Ee,w(t.text),1),e("div",Pe,[e("img",{src:`/images/slides/slide7/${t.id}.png`,alt:""},null,8,Ue)])]),_:2},1024)),64))])])}}});const De=F(ze,[["__scopeId","data-v-aa019907"]]),Ye=i=>(G("data-v-99483395"),i=i(),B(),i),Je={class:"question"},Ke=Ye(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"Choose topics you are interested in")],-1)),Qe={class:"flex justify-center"},Xe=["onClick"],Ze={key:0,class:"btn-wrapper"},et=h({__name:"Slide8",setup(i){const s=N(),_=y(),d=m(),a=C(),c=T([{id:1,text:"Investing",isActive:!1},{id:2,text:"Stocks",isActive:!1},{id:3,text:"Crypto",isActive:!1},{id:4,text:"Debt management",isActive:!1},{id:5,text:"Business",isActive:!1},{id:6,text:"Forex trading",isActive:!1},{id:7,text:"Passive income",isActive:!1},{id:8,text:"Financial literacy",isActive:!1},{id:9,text:"Real estate",isActive:!1},{id:10,text:"Entrepreneurship",isActive:!1}]),l=t=>{d.setSlide(t),s.push("/slides/9")},o=O(()=>c.value.filter(t=>t.isActive)),u=t=>{c.value[t-1].isActive?c.value[t-1].isActive=!1:c.value[t-1].isActive=!0};return p(()=>{d.setSlide(8),_.loadAge(),a.loadGender()}),(t,x)=>(n(),r("div",Je,[Ke,e("div",Qe,[(n(!0),r(b,null,A(v(c),I=>(n(),r("button",{onClick:R=>u(I.id),class:g(["rounded",I.isActive?"_active":""]),key:I.id},w(I.text),11,Xe))),128))]),v(o).length?(n(),r("div",Ze,[e("button",{class:"btn",onClick:x[0]||(x[0]=I=>l(9))},"Continue")])):$("",!0)]))}});const tt=F(et,[["__scopeId","data-v-99483395"]]),M=i=>(G("data-v-898c361e"),i=i(),B(),i),st={class:"question"},ot=M(()=>e("div",{class:"question__title"},[e("h1",{class:"h1"},"Is there something special you want to accumulate money for?"),e("p",null,"You're more likely to reach your goal if you have something important to aim for")],-1)),it={class:"flex flex-col"},nt={class:"flex__block-text"},_t={class:"flex__block-img"},lt=["src"],ct=M(()=>e("div",{class:"flex__block-text"},"Other",-1)),dt=M(()=>e("div",{class:"flex__block-img"},null,-1)),at=h({__name:"Slide9",setup(i){const s=y(),_=m(),d=C(),a=T([{id:1,text:"Buy a house"},{id:2,text:"Wedding"},{id:3,text:"Vacation"},{id:4,text:"Buy a car"},{id:5,text:"Retirement"}]),c=l=>{_.setSlide(l)};return p(()=>{_.setSlide(9),s.loadAge(),d.loadGender()}),(l,o)=>{const u=q;return n(),r("div",st,[ot,e("div",it,[(n(!0),r(b,null,A(v(a),t=>(n(),f(u,{to:"/slides/10",onClick:o[0]||(o[0]=x=>c(10)),class:g("flex__block"),key:t.id},{default:k(()=>[e("div",nt,w(t.text),1),e("div",_t,[e("img",{src:`/images/slides/slide9/${v(d).gender}/${t.id}.png`,alt:""},null,8,lt)])]),_:2},1024))),128)),S(u,{to:"/slides/10",onClick:o[1]||(o[1]=t=>c(10)),class:g("flex__block")},{default:k(()=>[ct,dt]),_:1})])])}}});const rt=F(at,[["__scopeId","data-v-898c361e"]]),ut={class:"question"},vt=e("div",{class:"question__title"},[e("h1",{class:"h1"},"How do you want to trade?")],-1),pt={class:"flex flex-col"},xt={class:"flex__block-text"},gt=h({__name:"Slide10",setup(i){const s=y(),_=m(),d=C(),a=j(),c=[{id:1,text:"Use signals"},{id:2,text:"With the help of a robot"},{id:3,text:"Using Strategies"}],l=o=>{o===1?a.setSignal():o===2?a.setRobot():o===3&&a.setStrategy()};return p(()=>{_.setSlide(10)}),p(()=>{s.loadAge(),d.loadGender()}),(o,u)=>{const t=q;return n(),r("div",ut,[vt,e("div",pt,[(n(),r(b,null,A(c,x=>S(t,{to:"/final",onClick:I=>l(x.id),class:g("flex__block"),key:x.id},{default:k(()=>[e("div",xt,w(x.text),1)]),_:2},1032,["onClick"])),64))])])}}}),H=""+new URL("progress-divider.7bcb7d21.svg",import.meta.url).href,ht={class:"slides"},mt={class:"slides__top"},$t=e("img",{src:H,class:"slides__top-before",width:"8",height:"6",alt:""},null,-1),ft=e("img",{src:H,class:"slides__top-after",width:"8",height:"6",alt:""},null,-1),St={class:"slides__bottom"},kt=h({__name:"Slides",setup(i){const s=m();return(_,d)=>{const a=Y,c=te,l=_e,o=he,u=qe,t=Le,x=De,I=tt,R=rt,L=gt;return n(),r("div",ht,[e("div",mt,[$t,e("span",{style:W("width: calc(100 / 10 *"+v(s).activeSlide+"%")},null,4),ft]),e("div",St,[v(s).activeSlide===1?(n(),f(a,{key:0})):$("",!0),v(s).activeSlide===2?(n(),f(c,{key:1})):$("",!0),v(s).activeSlide===3?(n(),f(l,{key:2})):$("",!0),v(s).activeSlide===4?(n(),f(o,{key:3})):$("",!0),v(s).activeSlide===5?(n(),f(u,{key:4})):$("",!0),v(s).activeSlide===6?(n(),f(t,{key:5})):$("",!0),v(s).activeSlide===7?(n(),f(x,{key:6})):$("",!0),v(s).activeSlide===8?(n(),f(I,{key:7})):$("",!0),v(s).activeSlide===9?(n(),f(R,{key:8})):$("",!0),v(s).activeSlide===10?(n(),f(L,{key:9})):$("",!0)])])}}});const qt=h({__name:"[id]",setup(i){const s=m();return p(()=>{s.loadSlide(),s.activeSlide===0&&s.setSlide(1)}),(_,d)=>{const a=kt;return n(),r("div",null,[S(a)])}}});export{qt as default};