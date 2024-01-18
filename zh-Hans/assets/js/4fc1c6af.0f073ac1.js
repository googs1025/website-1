"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8002],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(a),s=r,N=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[k]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="\u5b89\u88c5",i={unversionedId:"installation",id:"installation",title:"\u5b89\u88c5",description:"Koordinator \u4f9d\u8d56 Kubernetes version >= 1.18\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-Hans/docs/next/installation",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"wangjianyu",lastUpdatedAt:1705567859,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh-Hans/docs/next/"},next:{title:"\u6982\u8ff0",permalink:"/zh-Hans/docs/next/architecture/overview"}},d={},p=[{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 Helm \u5347\u7ea7",id:"\u4f7f\u7528-helm-\u5347\u7ea7",level:2},{value:"\u53ef\u9009\uff1a\u624b\u52a8\u4e0b\u8f7d Charts",id:"\u53ef\u9009\u624b\u52a8\u4e0b\u8f7d-charts",level:2},{value:"\u53ef\u9009\uff1a\u542f\u7528 NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f",id:"\u53ef\u9009\u542f\u7528-nri-\u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u914d\u7f6e\u65b9\u5f0f",id:"\u914d\u7f6e\u65b9\u5f0f",level:3},{value:"\u53ef\u9009",id:"\u53ef\u9009",level:2},{value:"\u53ef\u9009\uff1a Chart \u53c2\u6570",id:"\u53ef\u9009-chart-\u53c2\u6570",level:3},{value:"\u53ef\u9009: feature-gate",id:"\u53ef\u9009-feature-gate",level:3},{value:"\u53ef\u9009: \u4e2d\u56fd\u672c\u5730\u955c\u50cf",id:"\u53ef\u9009-\u4e2d\u56fd\u672c\u5730\u955c\u50cf",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"AWS EKS \u7684\u5b89\u88c5\u53c2\u6570",id:"aws-eks-\u7684\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}],m={toc:p},k="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"Koordinator \u4f9d\u8d56 ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18"),"\u3002"),(0,r.kt)("p",null,"Koordinator \u9700\u8981\u4ece kubelet \u53ea\u8bfb\u7aef\u53e3\u6536\u96c6\u6307\u6807\uff08\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u7981\u7528\uff09\u3002\n\u66f4\u591a\u4fe1\u606f ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"here"),"."),(0,r.kt)("p",null,"\u4e3a\u4e86\u6700\u597d\u7684\u4f53\u9a8c\uff0ckoordinator \u63a8\u8350 ",(0,r.kt)("strong",{parentName:"p"},"linux kernel 4.19")," \u6216\u8005\u66f4\u9ad8\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,r.kt)("p",null,"Koordinator \u53ef\u4ee5\u4f7f\u7528 Helm v3.5+ \u5b89\u88c5, Helm \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u66f4\u591a\u4fe1\u606f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 1.4.0\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-helm-\u5347\u7ea7"},"\u4f7f\u7528 Helm \u5347\u7ea7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 1.4.0 [--force]\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5347\u7ea7\u524d\uff0c\u4e3a\u786e\u4fdd\u4f60\u4e86\u89e3\u65b0\u7248\u672c\u4e2d\u7684\u91cd\u5927\u66f4\u6539\uff0c\u4f60 ",(0,r.kt)("strong",{parentName:"li"},"\u5fc5\u987b")," \u5148\u9605\u8bfb ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/master/CHANGELOG.md"},"\u53d8\u66f4\u65e5\u5fd7"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u60f3\u5220\u9664\u6216\u8005\u65b0\u589e\u65e7\u7248\u672c\u4e2d\u7684 Chart \u53c2\u6570\uff0c\u63a8\u8350\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"helm upgrade")," \u547d\u4ee4\u4e2d\u6dfb\u52a0\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"--reset-values")," \u3002\u5426\u5219\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"--reuse-values")," \u53c2\u6570\u6765\u6062\u590d\u4e0a\u4e00\u4e2a\u7248\u672c\u7684\u503c\u3002")),(0,r.kt)("h2",{id:"\u53ef\u9009\u624b\u52a8\u4e0b\u8f7d-charts"},"\u53ef\u9009\uff1a\u624b\u52a8\u4e0b\u8f7d Charts"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://koordinator-sh.github.io/charts/")," \u65f6\u9047\u5230\u95ee\u9898\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/releases"},"\u6b64\u5904")," \u624b\u52a8\u4e0b\u8f7d Charts \u8fdb\u884c\u5b89\u88c5\u6216\u5347\u7ea7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade koordinator /PATH/TO/CHART\n")),(0,r.kt)("h2",{id:"\u53ef\u9009\u542f\u7528-nri-\u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f"},"\u53ef\u9009\uff1a\u542f\u7528 NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f"),(0,r.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Containerd >= 1.7.0 \u4e14\u914d\u7f6e\u542f\u7528 NRI\u3002\u8bf7\u786e\u4fdd NRI \u5df2\u5728 containerd \u4e2d\u542f\u7528\uff0c\u5426\u5219\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/NRI.md"},"Enable NRI in Containerd"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Koordinator >= 1.3")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u65b9\u5f0f"},"\u914d\u7f6e\u65b9\u5f0f"),(0,r.kt)("p",null,"NRI \u8d44\u6e90\u7ba1\u7406\u6a21\u5f0f\u662f",(0,r.kt)("em",{parentName:"p"},"\u9ed8\u8ba4\u542f\u7528"),"\u7684\u3002\u4f60\u65e0\u9700\u4fee\u6539 koordlet \u914d\u7f6e\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"enable-nri-runtime-hook=false")," \u7684 koordlet \u542f\u52a8\u53c2\u6570\u6765\u7981\u7528\u5b83\u3002\u5f53\u5b83\u7684\u524d\u7f6e\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff0c\u542f\u7528\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u53ef\u9009"},"\u53ef\u9009"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u76f4\u63a5\u5b89\u88c5\u8fd9\u4e2a Chart \u610f\u5473\u7740\u4f7f\u7528 Koordinator \u7684\u9ed8\u8ba4\u6a21\u677f\u503c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5c06\u5176\u90e8\u7f72\u5230\u751f\u4ea7\u96c6\u7fa4\u4e2d\uff0c\u6216\u8005\u4f60\u60f3\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"feature-gates"),"\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8bbe\u7f6e\u7279\u5b9a\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u53ef\u9009-chart-\u53c2\u6570"},"\u53ef\u9009\uff1a Chart \u53c2\u6570"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 Chart \u53ef\u914d\u7f6e\u53c2\u6570\u53ca\u5176\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,r.kt)("td",{parentName:"tr",align:null},"Feature gates for Koordinator, empty string means all by default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"namespace for Koordinator installation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordinator-system"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imageRepositoryHost")),(0,r.kt)("td",{parentName:"tr",align:null},"Image repository host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghcr.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,r.kt)("td",{parentName:"tr",align:null},"Log level that koord-manager printed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Replicas of koord-manager deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for koord-manager image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-manager"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for koord-manager image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1.4.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"9443"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,r.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-manager pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"Node labels for koord-manager pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,r.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-manager pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"Resync period of informer koord-manager, defaults no resync"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether koord-manager pod should run with hostnetwork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.log.level")),(0,r.kt)("td",{parentName:"tr",align:null},"Log level that koord-scheduler printed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Replicas of koord-scheduler deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for koord-scheduler image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-scheduler"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for koord-scheduler image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1.4.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-scheduler container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-scheduler container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-scheduler container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-scheduler container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10251"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.nodeAffinity")),(0,r.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-scheduler pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"Node labels for koord-scheduler pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.tolerations")),(0,r.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-scheduler pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheduler.hostNetwork")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether koord-scheduler pod should run with hostnetwork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.log.level")),(0,r.kt)("td",{parentName:"tr",align:null},"Log level that koordlet printed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for koordlet image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koordlet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for koordlet image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v1.4.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koordlet container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koordlet container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource request of koordlet container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource request of koordlet container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"koordlet.enableServiceMonitor")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable ServiceMonitor for koordlet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,r.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,r.kt)("td",{parentName:"tr",align:null},"Koordinator will not install CRDs with chart if this is false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of image pull secrets for koordinator image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"--set key=value[\uff0ckey=value]")," \u53c2\u6570\u6307\u5b9a\u6bcf\u4e2a\u53c2\u6570\u3002"),(0,r.kt)("h3",{id:"\u53ef\u9009-feature-gate"},"\u53ef\u9009: feature-gate"),(0,r.kt)("p",null,"Feature-Gate \u63a7\u5236 Koordinator \u4e2d\u7684\u4e00\u4e9b\u6709\u5f71\u54cd\u529b\u7684\u529f\u80fd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PodMutatingWebhook")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to open a mutating webhook for Pod ",(0,r.kt)("strong",{parentName:"td"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Don't inject koordinator.sh/qosClass, koordinator.sh/priority and don't replace koordinator extend resources ad so on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PodValidatingWebhook")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to open a validating webhook for Pod ",(0,r.kt)("strong",{parentName:"td"},"create/update")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"It is possible to create some Pods that do not conform to the Koordinator specification, causing some unpredictable problems")))),(0,r.kt)("p",null,"\u5982\u679c\u8981\u914d\u7f6e feature-gate \uff0c\u53ea\u9700\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u8bbe\u7f6e\u53c2\u6570\u5373\u53ef\u3002\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=true\\,PodValidatingWebhook=true"\n')),(0,r.kt)("p",null,"\u5982\u679c\u8981\u542f\u7528\u6240\u6709 feature-gates \uff0c\u8bf7\u5c06\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true")," \u3002"),(0,r.kt)("h3",{id:"\u53ef\u9009-\u4e2d\u56fd\u672c\u5730\u955c\u50cf"},"\u53ef\u9009: \u4e2d\u56fd\u672c\u5730\u955c\u50cf"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e2d\u56fd\u5e76\u4e14\u65e0\u6cd5\u4ece\u5b98\u65b9 DockerHub \u62c9\u53d6\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6258\u7ba1\u5728\u963f\u91cc\u4e91\u4e0a\u7684\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install koordinator https://... --set imageRepositoryHost=registry.cn-beijing.aliyuncs.com\n")),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"aws-eks-\u7684\u5b89\u88c5\u53c2\u6570"},"AWS EKS \u7684\u5b89\u88c5\u53c2\u6570"),(0,r.kt)("p",null,"\u5728 EKS \u4e0a\u4f7f\u7528\u81ea\u5b9a\u4e49 CNI\uff08\u4f8b\u5982 Weave \u6216 Calico\uff09\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u65e0\u6cd5\u8bbf\u95ee webhook\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u662f\u56e0\u4e3a\u5728 EKS \u4e0a\u63a7\u5236\u5e73\u9762\u65e0\u6cd5\u914d\u7f6e\u8fd0\u884c\u81ea\u5b9a\u4e49 CNI \uff0c\u56e0\u6b64\u63a7\u5236\u5e73\u9762\u548c\u5de5\u4f5c\u8282\u70b9\u4e4b\u95f4\u7684 CNI \u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f7f\u7528 helm install \u6216 upgrade \u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true"),"\uff0cwebhook \u53ef\u4ee5\u5728\u4e3b\u673a\u7f51\u7edc\u4e2d\u8fd0\u884c\u3002"),(0,r.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u5c06\u5bfc\u81f4 Koordinator \u521b\u5efa\u7684\u6240\u6709\u8d44\u6e90\uff0c\u5305\u62ec Webhook \u914d\u7f6e\u3001Services\u3001Namespace\u3001CRD \u548c\u7531 Koordinator \u63a7\u5236\u5668\u7ba1\u7406\u7684 CR \u5b9e\u4f8b\uff0c\u90fd\u88ab\u5220\u9664\uff01\n\u8bf7\u5728\u5145\u5206\u4e86\u89e3\u540e\u679c\u7684\u60c5\u51b5\u4e0b\u624d\u8fd9\u6837\u505a\u3002"),(0,r.kt)("p",null,"\u5378\u8f7d\u901a\u8fc7 Chart \u5b89\u88c5\u7684 Koordinator \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall koordinator\nrelease "koordinator" uninstalled\n')))}u.isMDXComponent=!0}}]);