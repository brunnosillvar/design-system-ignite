import{H as i}from"./index-CDGIcdxo.js";const m={title:"Typography/Heading",component:i,parameters:{backgrounds:{default:"dark"}},args:{children:"Custom Title"}},e={},r={args:{children:"H1 Heading",as:"h1",size:"md"},argTypes:{size:{options:["xxs","xs","sm","md","lg","2xl","4xl","5xl","6xl"],control:{type:"inline-radio"}}},parameters:{docs:{description:{story:"Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as` no CustomTag Story."}}}};var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,t,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um \`h2\`, mas podemos alterar isso com a propriedade \`as\` no CustomTag Story.'
      }
    }
  }
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const p=["Primary","CustomTag"],l=Object.freeze(Object.defineProperty({__proto__:null,CustomTag:r,Primary:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{r as C,l as H};
