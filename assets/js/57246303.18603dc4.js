"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[5814],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5085:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},s="QoS",u={unversionedId:"architecture/qos",id:"version-v1.0/architecture/qos",title:"QoS",description:"QoS is used to express the running quality of the Pod on the node, such as the way to obtain resources, the proportion of resources obtained, and the QoS guarantee policy.",source:"@site/versioned_docs/version-v1.0/architecture/qos.md",sourceDirName:"architecture",slug:"/architecture/qos",permalink:"/docs/architecture/qos",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/qos.md",tags:[],version:"v1.0",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1667483216,formattedLastUpdatedAt:"11/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"Priority",permalink:"/docs/architecture/priority"},next:{title:"Colocation Profile",permalink:"/docs/user-manuals/colocation-profile"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"Koordinator QoS vs. Kubernetes QoS",id:"koordinator-qos-vs-kubernetes-qos",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qos"},"QoS"),(0,a.kt)("p",null,"QoS is used to express the running quality of the Pod on the node, such as the way to obtain resources, the proportion of resources obtained, and the QoS guarantee policy."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"There are five types of QoS supported by the Koordinator scheduling system:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"QoS"),(0,a.kt)("th",{parentName:"tr",align:null},"feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,a.kt)("td",{parentName:"tr",align:null},"system process, resource constrained"),(0,a.kt)("td",{parentName:"tr",align:null},"For system services such as DaemonSets, the latency needs to be guaranteed but it needs to limit the resource usage limit of all containers running on the node to ensure that system processes do not occupy too many resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSE(Latency Sensitive Exclusive)"),(0,a.kt)("td",{parentName:"tr",align:null},"reserve resources and organizing co-located pods to share resources"),(0,a.kt)("td",{parentName:"tr",align:null},"Rarely used, common in middleware-type applications, generally in independent resource pools")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSR(Latency Sensitive Reserved)"),(0,a.kt)("td",{parentName:"tr",align:null},"reserve resources for better certainty"),(0,a.kt)("td",{parentName:"tr",align:null},"Similar to Guaranteed by the community, CPU cores are bound")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LS(Latency Sensitive)"),(0,a.kt)("td",{parentName:"tr",align:null},"share resources for better resilience to burst traffic"),(0,a.kt)("td",{parentName:"tr",align:null},"Typical QoS level for microservice workloads to achieve better resource elasticity and more flexible resource adjustment capabilities")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BE(Best Effort)"),(0,a.kt)("td",{parentName:"tr",align:null},"share resource exclude LSE, the quality of resource operation is limited, or even killed in extreme cases"),(0,a.kt)("td",{parentName:"tr",align:null},"Typical QoS level for batch jobs, stable computing throughput within a certain period, low-cost resources")))),(0,a.kt)("h2",{id:"koordinator-qos-vs-kubernetes-qos"},"Koordinator QoS vs. Kubernetes QoS"),(0,a.kt)("p",null,"As seen in the ",(0,a.kt)("a",{parentName:"p",href:"#definition"},"Definition")," section, Koordinator's QoS is more complicated than Kubernetes QoS, because in colocation scenarios, we need to fine-tune the QoS for latency-sensitive workloads to meet the needs of co-located performance."),(0,a.kt)("p",null,"There is a correspondence between Koordinator and Kubernetes QoS:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Koordinator QoS"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes QoS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SYSTEM"),(0,a.kt)("td",{parentName:"tr",align:null},"---")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSE"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LSR"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LS"),(0,a.kt)("td",{parentName:"tr",align:null},"Guaranteed/Burstable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BE"),(0,a.kt)("td",{parentName:"tr",align:null},"BestEffort")))),(0,a.kt)("p",null,"Koordlet triggers corresponding resource isolation and QoS guarantee according to Pod's Priority and QoS definition."))}m.isMDXComponent=!0}}]);