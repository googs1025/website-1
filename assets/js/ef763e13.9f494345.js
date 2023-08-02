"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1846],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Anolis Plugsched",c={unversionedId:"best-practices/anolis_plugsched",id:"best-practices/anolis_plugsched",title:"Anolis Plugsched",description:"In order to improve the colocation effect on CentOS 7.9 operating system kernel in the CPU resource dimension, Anolis community provides a plug-in solution, which is to use the plugsched to provide a scheduler plug-in package for CPU colocation technology. This plug-in can be directly installed on CentOS 7.9 without downtime and business migration. For more details about plugsched, please refer to the Blog.",source:"@site/docs/best-practices/anolis_plugsched.md",sourceDirName:"best-practices",slug:"/best-practices/anolis_plugsched",permalink:"/docs/next/best-practices/anolis_plugsched",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/anolis_plugsched.md",tags:[],version:"current",lastUpdatedBy:"Tao Song",lastUpdatedAt:1678951577,formattedLastUpdatedAt:"3/16/2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Colocation of Spark Jobs",permalink:"/docs/next/best-practices/colocation-of-spark-jobs"},next:{title:"Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration",permalink:"/docs/next/best-practices/fine-grained-cpu-orchestration"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use Plugsched",id:"use-plugsched",level:2},{value:"Install the plug-in",id:"install-the-plug-in",level:3},{value:"Removing plug-in",id:"removing-plug-in",level:3},{value:"Use Koordinator CPU QoS feature",id:"use-koordinator-cpu-qos-feature",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anolis-plugsched"},"Anolis Plugsched"),(0,i.kt)("p",null,"In order to improve the colocation effect on CentOS 7.9 operating system kernel in the CPU resource dimension, Anolis community provides a plug-in solution, which is to use the plugsched to provide a scheduler plug-in package for CPU colocation technology. This plug-in can be directly installed on CentOS 7.9 without downtime and business migration. For more details about plugsched, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://koordinator.sh/blog/anolis-CPU-Co-location"},"Blog"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kernel: The kernel must be the official CentOS 7.9 kernel."),(0,i.kt)("li",{parentName:"ul"},"version == 3.10.0"),(0,i.kt)("li",{parentName:"ul"},"release >= 1160.81.1")),(0,i.kt)("h2",{id:"use-plugsched"},"Use Plugsched"),(0,i.kt)("h3",{id:"install-the-plug-in"},"Install the plug-in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# rpm -ivh https://github.com/koordinator-sh/koordinator/releases/download/v1.1.1/scheduler-bvt-noise-clean-$(uname -r).rpm\n")),(0,i.kt)("p",null,"If you update the kernel version, you can use the following command to install the new plug-in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# rpm -ivh https://github.com/koordinator-sh/koordinator/releases/download/v1.1.1/scheduler-bvt-noise-clean-$(uname -r).rpm --oldpackage\n")),(0,i.kt)("p",null,"After installation, you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," in cpu cgroup directory and the usage of it is compatible with Group Identity."),(0,i.kt)("h3",{id:"removing-plug-in"},"Removing plug-in"),(0,i.kt)("p",null,"Removing the plug-in can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rpm -e")," command and the ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," doesn't exist either. Please make sure that no tasks are still using ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," before uninstalling."),(0,i.kt)("h2",{id:"use-koordinator-cpu-qos-feature"},"Use Koordinator CPU QoS feature"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/user-manuals/cpu-qos"},"User Manual"),"."))}h.isMDXComponent=!0}}]);