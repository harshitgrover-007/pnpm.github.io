"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6548],{9613:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(o),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return o?r.createElement(d,i(i({ref:t},s),{},{components:o})):r.createElement(d,i({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5743:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,assets:()=>s,toc:()=>u,default:()=>f});var r=o(7813),n=o(7044),a=(o(9496),o(9613)),i=["components"],c={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,l={permalink:"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/pt",source:"@site/i18n/pt/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Node-Modules configuration options with pnpm",description:"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 de outubro de 2020",tags:[],readingTime:1.86,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"The year 2021 for pnpm",permalink:"/pt/blog/2021/12/29/yearly-update"},nextItem:{title:"node_modules planos n\xe3o s\xe3o a \xfanica maneira",permalink:"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well."))}f.isMDXComponent=!0}}]);