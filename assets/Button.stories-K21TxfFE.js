import{j as g}from"./index-C68CaD8g.js";import{c as ee}from"./index-CZuomz4M.js";import{e as t,r as p}from"./index-CNoy27hg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BXqDHCZF.js";const re=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),t.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),ae=p.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var te=Object.defineProperty,u=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,v=(r,e,a)=>e in r?te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,w=(r,e)=>{for(var a in e||(e={}))D.call(e,a)&&v(r,a,e[a]);if(u)for(var a of u(e))T.call(e,a)&&v(r,a,e[a]);return r},E=(r,e)=>{var a={};for(var n in r)D.call(r,n)&&e.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&u)for(var n of u(r))e.indexOf(n)<0&&T.call(r,n)&&(a[n]=r[n]);return a};const _=p.forwardRef((r,e)=>{const a=r,{alt:n,color:h,size:o,weight:f,mirrored:q,children:G,weights:J}=a,K=E(a,["alt","color","size","weight","mirrored","children","weights"]),y=p.useContext(ae),{color:Q="currentColor",size:b,weight:U="regular",mirrored:X=!1}=y,Y=E(y,["color","size","weight","mirrored"]);return t.createElement("svg",w(w({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o??b,height:o??b,fill:h??Q,viewBox:"0 0 256 256",transform:q||X?"scale(-1, 1)":void 0},Y),K),!!n&&t.createElement("title",null,n),G,J.get(f??U))});_.displayName="IconBase";const ne=_;var oe=Object.defineProperty,se=Object.defineProperties,le=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,x=(r,e,a)=>e in r?oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,me=(r,e)=>{for(var a in e||(e={}))ce.call(e,a)&&x(r,a,e[a]);if(O)for(var a of O(e))ie.call(e,a)&&x(r,a,e[a]);return r},de=(r,e)=>se(r,le(e));const W=p.forwardRef((r,e)=>t.createElement(ne,de(me({ref:e},r),{weights:re})));W.displayName="ArrowRight";const ye={title:"Form/Button",component:ee,parameters:{backgrounds:{default:"dark"}},tags:["autodocs"],args:{children:"Send",variant:"primary",size:"md"},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},s={args:{disabled:!1}},l={args:{variant:"secondary",children:"Create new"}},c={args:{variant:"tertiary",children:"Cancel"}},i={args:{size:"sm"}},m={args:{children:g.jsxs(g.Fragment,{children:["Next step",g.jsx(W,{weight:"bold"})]})}},d={args:{disabled:!0}};var j,S,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,H,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var z,L,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,Z,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(B=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var I,R,$;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <>
        Next step
        <ArrowRight weight="bold" />
      </>
  }
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var k,N,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const be=["Primary","Secondary","Tertiary","Small","WithIcon","Disabled"];export{d as Disabled,s as Primary,l as Secondary,i as Small,c as Tertiary,m as WithIcon,be as __namedExportsOrder,ye as default};