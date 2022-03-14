"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1518],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2943:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>i,assets:()=>s,toc:()=>u,default:()=>m});var r=t(7813),o=t(7044),l=(t(9496),t(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},c=void 0,i={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Adicionado em: v6.12.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/pt/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/pt/next/cli/start"},next:{title:"pnpm publish",permalink:"/pt/next/cli/publish"}},s={},u=[{value:"Comandos",id:"comandos",level:2},{value:"use",id:"use",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Adicionado em: v6.12.0"),(0,l.kt)("p",null,"Gerencia o ambiente Node.js."),(0,l.kt)("h2",{id:"comandos"},"Comandos"),(0,l.kt)("h3",{id:"use"},"use"),(0,l.kt)("p",null,"Instala uma vers\xe3o espec\xedfica do Node.js"),(0,l.kt)("p",null,"Instala a vers\xe3o LTS do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,l.kt)("p",null,"Instala o Node.js v16:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,l.kt)("p",null,"Adicionado em: v6.18.0:"),(0,l.kt)("p",null,"Instala as vers\xf5es betas do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,l.kt)("p",null,"Instala a \xfaltima vers\xe3o do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,l.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"As mudan\xe7as s\xe3o aplicadas globalmente."))}m.isMDXComponent=!0}}]);