"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,y=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="Running Hadoop YARN with K8s by Koordinator",c={unversionedId:"best-practices/colocation-of-hadoop-yarn",id:"best-practices/colocation-of-hadoop-yarn",title:"Running Hadoop YARN with K8s by Koordinator",description:"The english version document is under construction, please refer to the chinese version doc.",source:"@site/docs/best-practices/colocation-of-hadoop-yarn.md",sourceDirName:"best-practices",slug:"/best-practices/colocation-of-hadoop-yarn",permalink:"/docs/next/best-practices/colocation-of-hadoop-yarn",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/colocation-of-hadoop-yarn.md",tags:[],version:"current",lastUpdatedBy:"zwzhang",lastUpdatedAt:1696903627,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration",permalink:"/docs/next/best-practices/fine-grained-cpu-orchestration"}},s={},p=[],d={toc:p},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-hadoop-yarn-with-k8s-by-koordinator"},"Running Hadoop YARN with K8s by Koordinator"),(0,o.kt)("p",null,"The english version document is under construction, please refer to the chinese version doc."))}u.isMDXComponent=!0}}]);