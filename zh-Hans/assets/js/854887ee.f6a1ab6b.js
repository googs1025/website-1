"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1079],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=n,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4518:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="Resource Model",c={unversionedId:"architecture/resource-model",id:"version-v0.7/architecture/resource-model",title:"Resource Model",description:"Colocation is a set of resource scheduling solutions for the fine grained orchestration of latency sensitive workloads with the big data computing workloads. It needs to solve two major problems:",source:"@site/versioned_docs/version-v0.7/architecture/resource-model.md",sourceDirName:"architecture",slug:"/architecture/resource-model",permalink:"/zh-Hans/docs/v0.7/architecture/resource-model",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/resource-model.md",tags:[],version:"v0.7",lastUpdatedBy:"Joseph",lastUpdatedAt:1664180357,formattedLastUpdatedAt:"2022/9/26",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/zh-Hans/docs/v0.7/architecture/overview"},next:{title:"Priority",permalink:"/zh-Hans/docs/v0.7/architecture/priority"}},u={},d=[{value:"Definition",id:"definition",level:2},{value:"SLO Description",id:"slo-description",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],h={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resource-model"},"Resource Model"),(0,i.kt)("p",null,"Colocation is a set of resource scheduling solutions for the fine grained orchestration of latency sensitive workloads with the big data computing workloads. It needs to solve two major problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to schedule resources for latency sensitive workloads to meet performance and long-tail latency requirements, the key points are resource scheduling strategies and QoS-aware strategies."),(0,i.kt)("li",{parentName:"ol"},"How to schedule and arrange big data computing workloads to meet the needs of jobs for computing resources at a lower cost. The key is how to achieve reasonable resource overcommitment and QoS protection in extreme abnormal scenarios.")),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Resource Model",src:r(8105).Z,width:"1058",height:"353"})),(0,i.kt)("p",null,"The above figure is the Koordinator colocation resource model, the basic idea is to use those allocated but unused resources to run low-priority pods. Four lines as shown:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"limit: gray, the amount of resources requested by the high-priority Pod, corresponding to the Pod request of kubernetes."),(0,i.kt)("li",{parentName:"ol"},"usage: red, the amount of resources actually used by the Pod, the horizontal axis is the time line, and the red line is the fluctuation curve of the Pod load over time."),(0,i.kt)("li",{parentName:"ol"},"short-term reservation: dark blue, which is based on the resource usage of usage in the past (shorter) period, and the estimation of its resource usage in the future period of time. The difference between reservation and limit is the allocated unused ( resources that will not be used in the future) can be used to run short-lived batch pods."),(0,i.kt)("li",{parentName:"ol"},"long-term reservation: light blue, similar to short-term reservation but the estimated historical period of use is longer. The resources from reservation to limit can be used for pods with a longer life cycle, compared with the predicted value of short-term, fewer resources available but more stability.")),(0,i.kt)("p",null,"The entire co-located resource scheduling building is constructed based on the resource model shown above, which can not only meet the resource requirements of various workloads, but also make full use of the idle resources of the cluster."),(0,i.kt)("h2",{id:"slo-description"},"SLO Description"),(0,i.kt)("p",null,"A Pod resource SLO running in a cluster consists of two concepts, Priority and QoS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Priority, the resource priority, represents the priority of the request being scheduled. Typically, Priority affects the relative position of the request in the scheduler pending queue."),(0,i.kt)("li",{parentName:"ul"},"QoS, which represents the quality of service when the Pod runs. Such as cgroups cpu shares, cfs quota, LLC, memory bandwidth, OOM Priority, etc.")),(0,i.kt)("p",null,"It should be noted that Priority and QoS are two-dimensional concepts, but in real business scenarios, there will be some constraints between the two (not all combinations are legal)."),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"Here are some recommended next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./priority"},"Priority"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn Koordinator's ",(0,i.kt)("a",{parentName:"li",href:"./qos"},"QoS"),".")))}p.isMDXComponent=!0},8105:function(e,t,r){t.Z=r.p+"assets/images/resource-model-0f6ca53f0a140a2be9705e75758caf22.png"}}]);