const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/axe-gp8rn00I.js","assets/_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-s80U2dCN.js";import"../sb-preview/runtime.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{global:U}=__STORYBOOK_MODULE_GLOBAL__;var o="storybook/a11y",y=`${o}/result`,L=`${o}/request`,d=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,a={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=U,r=S.getChannel(),l=!1,_,R={config:{},options:{}},v=async(n,e)=>{e!=null&&e.manual||await s(n,e??R)},s=async(n,e=R)=>{_=n;try{if(!l){l=!0,r.emit(a.RUNNING);let{default:t}=await N(()=>import("./axe-gp8rn00I.js").then(u=>u.a),__vite__mapDeps([0,1])),{element:O="#storybook-root",config:i,options:c={}}=e,E=g.querySelector(O);if(!E)return;t.reset(),i&&t.configure(i);let m=await t.run(E,c),f=JSON.parse(JSON.stringify(m));_===n?r.emit(a.RESULT,f):(l=!1,s(_))}}catch(t){r.emit(a.ERROR,t)}finally{l=!1}};r.on(a.REQUEST,v);r.on(a.MANUAL,s);
