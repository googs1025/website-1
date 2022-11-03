"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4359],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),m=n,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return o?r.createElement(h,a(a({ref:t},d),{},{components:o})):r.createElement(h,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2816:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],c={},l="Overview",s={unversionedId:"architecture/overview",id:"version-v1.0/architecture/overview",title:"Overview",description:"This topic describes the architecture, components, and core concepts associated with Koordinator deployments to Kubernetes. Koordinator consists of two control planes (Koordinator Scheduler/Koordinator Manager) and one DaemonSet component (Koordlet).",source:"@site/versioned_docs/version-v1.0/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/architecture/overview",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/overview.md",tags:[],version:"v1.0",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1667483216,formattedLastUpdatedAt:"11/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Resource Model",permalink:"/docs/architecture/resource-model"}},d={},u=[{value:"Koordinator Scheduler",id:"koordinator-scheduler",level:2},{value:"Koordinator Manager",id:"koordinator-manager",level:2},{value:"Koordlet",id:"koordlet",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],p={toc:u};function m(e){var t=e.components,c=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This topic describes the architecture, components, and core concepts associated with Koordinator deployments to Kubernetes. Koordinator consists of two control planes (",(0,i.kt)("a",{parentName:"p",href:"#koordinator-scheduler"},"Koordinator Scheduler"),"/",(0,i.kt)("a",{parentName:"p",href:"#koordinator-manager"},"Koordinator Manager"),") and one DaemonSet component (",(0,i.kt)("a",{parentName:"p",href:"#koordlet"},"Koordlet"),").\nKoordinator adds co-location capabilities on top of the original kubernetes, and maintains the compatibility of the original kubernetes workloads."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Architecture",src:o(5109).Z,width:"2032",height:"1312"})),(0,i.kt)("h2",{id:"koordinator-scheduler"},"Koordinator Scheduler"),(0,i.kt)("p",null,"The Koordinator Scheduler is deployed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", which is used to enhance the resource scheduling capabilities of kubernetes in colocation scenarios, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More scenario support, including elastic quota scheduling, resource overcommitment, resource reservation, gang scheduling, heterogeneous resource scheduling."),(0,i.kt)("li",{parentName:"ul"},"Better performance, including dynamic index optimization, equivalence class scheduling, random relaxation algorithm optimization."),(0,i.kt)("li",{parentName:"ul"},"Safer descheduling, including workload availability awareness, deterministic pod migration, fine grained flow control, and modification audit support.")),(0,i.kt)("h2",{id:"koordinator-manager"},"Koordinator Manager"),(0,i.kt)("p",null,"The Koordinator Manager is deployed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", usually consists of two instances, one leader and one backup. The Koordinator Manager consists of several controllers and webhooks, which are used to orchestrate co-located workloads and support resource overcommitment scheduling and SLO management."),(0,i.kt)("p",null,"Currently, three components are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Colocation Profile, which used to support colocation without requiring modification of workloads. Users only need to do a small amount of configuration in the cluster, and the original workload can be run in a colocation mode, learn more about ",(0,i.kt)("a",{parentName:"li",href:"/docs/user-manuals/colocation-profile"},"Colocation Profile"),"."),(0,i.kt)("li",{parentName:"ul"},"SLO Controller, which is used for resource overcommitment model management, and dynamically adjusts the overcommitment ratio of the cluster according to the running status of the node co-location. The core responsibility of this controller is to manage co-located SLOs, such as intelligently identifying abnormal nodes in the cluster and lowering their weights, and dynamically adjusting the water level and suppression strategy of co-located, so as to ensure the stability and efficiency of Pods in the cluster."),(0,i.kt)("li",{parentName:"ul"},"Recommender(coming soon), it uses histograms to count and predict the resource usage details of the workloads, which are used to estimate the peak resource requirements of the workloads, thereby supporting better hotspot dispersion and improving the efficiency of co-location. In addition, resource profiling will also be used to simplify the complexity of user resource specification configuration, such as to support automatic specification hosting (VPA).")),(0,i.kt)("h2",{id:"koordlet"},"Koordlet"),(0,i.kt)("p",null,"The Koordlet is deployed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"DaemonSet")," in kubernetes cluster, which is used to support colocation resource overcommitment, interference detection, QoS guarantee, etc."),(0,i.kt)("p",null,"Inside Koordlet, it mainly includes the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resource Profiling, which estimates the actual usage of Pod resources, and reclaims allocated but unused resources for overcommit low-priority pods according to the reclaimed resource."),(0,i.kt)("li",{parentName:"ul"},"Resource Isolation, set resource isolation parameters for different types of Pods to avoid low-priority pods affecting the stability and performance of high-priority pods."),(0,i.kt)("li",{parentName:"ul"},"Interference detection, for running Pods, dynamically detect resource contention, including CPU scheduling, memory allocation delay, network, disk IO delay, etc."),(0,i.kt)("li",{parentName:"ul"},"QoS Manager, which dynamically adjusts the water level of node colocation based on resource profiling, interference detection results and SLO configuration, suppressing Pods that affect service quality."),(0,i.kt)("li",{parentName:"ul"},"Resource Tuning, container resource tuning for co-located scenarios, optimize the container's CPU Throttle, OOM, etc., to improve the quality of service operation.")),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"Here are some recommended next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./resource-model"},"Resource Model"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./priority"},"Priority"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./qos"},"QoS"),".")))}m.isMDXComponent=!0},5109:function(e,t,o){t.Z=o.p+"assets/images/architecture-c845f380c9948d615e708ee12d465e27.png"}}]);