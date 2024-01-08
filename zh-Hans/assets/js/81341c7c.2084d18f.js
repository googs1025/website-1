"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={},l="\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565",i={unversionedId:"user-manuals/memory-evict",id:"user-manuals/memory-evict",title:"\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565",description:"\u7b80\u4ecb",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-manuals/memory-evict.md",sourceDirName:"user-manuals",slug:"/user-manuals/memory-evict",permalink:"/zh-Hans/docs/next/user-manuals/memory-evict",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/memory-evict.md",tags:[],version:"current",lastUpdatedBy:"Frame",lastUpdatedAt:1702872734,formattedLastUpdatedAt:"2023\u5e7412\u670818\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u57fa\u4e8eCPU\u8d44\u6e90\u6ee1\u8db3\u5ea6\u7684\u9a71\u9010\u7b56\u7565",permalink:"/zh-Hans/docs/next/user-manuals/cpu-evict"},next:{title:"SLO \u914d\u7f6e",permalink:"/zh-Hans/docs/next/user-manuals/slo-config"}},p={},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}],s={toc:m},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565"},"\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"Koordinator\u652f\u6301\u4e86\u5c06\u8282\u70b9\u7a7a\u95f2\u8d44\u6e90\u52a8\u6001\u8d85\u5356\u7ed9\u4f4e\u4f18\u5148\u7ea7Pod\uff0c\u5728\u6df7\u90e8\u573a\u666f\u4e0b\uff0c\u8282\u70b9\u5b9e\u9645\u7684\u5185\u5b58\u8d44\u6e90\u7528\u91cf\u65f6\u523b\u5728\u53d8\u5316\uff0c\u5bf9\u4e8e\u5185\u5b58\u8fd9\u7c7b\u4e0d\u53ef\u538b\u7f29\u7c7b\u578b\u7684\u8d44\u6e90\uff0c\n\u5f53\u8282\u70b9\u8d44\u6e90\u7528\u91cf\u8f83\u9ad8\u65f6\uff0c\u53ef\u80fd\u4f1a\u5f15\u53d1\u6574\u673a\u5185\u5b58OOM\uff0c\u5bfc\u81f4\u9ad8\u4f18\u5148\u7ea7Pod\u7684\u8fdb\u7a0b\u88abkill\u3002\u4e3a\u9632\u6b62\u8fd9\u4e00\u60c5\u51b5\u53d1\u751f\uff0cKoordiantor\u63d0\u4f9b\u4e86\u57fa\u4e8e\u5355\u673a\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565\u3002\n\u5355\u673a\u7ec4\u4ef6Koordlet\u4f1a\u4ee5\u79d2\u7ea7\u7c92\u5ea6\u6301\u7eed\u63a2\u6d4b\u6574\u673a\u5185\u5b58\u7684\u7528\u91cf\u60c5\u51b5\uff08Total-Available\uff09\uff0c\u5f53\u6574\u673a\u8d44\u6e90\u5185\u5b58\u7528\u91cf\u8f83\u9ad8\u65f6\uff0c\u4f1a\u5c06\u4f4e\u4f18\u5148\u7ea7\u7684BE\u7c7b\u578bPod\u9a71\u9010\uff0c\n\u4fdd\u969c\u9ad8\u4f18\u5148\u7ea7Pod\u7684\u670d\u52a1\u8d28\u91cf\u3002\u5728\u9a71\u9010\u8fc7\u7a0b\u4e2d\u4f1a\u9996\u5148\u9009\u62e9\u4f18\u5148\u7ea7(Pod.Spec.Priority)\u66f4\u4f4e\u7684Pod\u8fdb\u884c\u9a71\u9010\uff0c\u82e5\u4f18\u5148\u7ea7\u76f8\u540c\uff0c\n\u5219\u4f18\u5148\u9a71\u9010\u5185\u5b58\u8d44\u6e90\u7528\u91cf\u66f4\u591a\u7684Pod\uff0c\u76f4\u81f3\u6574\u673a\u5185\u5b58\u7528\u91cf\u964d\u4f4e\u5230\u914d\u7f6e\u7684\u5b89\u5168\u6c34\u4f4d\uff08evictThreshold\uff09\u4ee5\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7413).Z,width:"321",height:"221"})),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u5df2\u6b63\u786e\u5b89\u88c5\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002\u82e5\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://koordinator.sh/docs/installation"},"\u5b89\u88c5\u6587\u6863"),"\uff0c\u6240\u9700\u7684\u7248\u672c\u8981\u6c42\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v1.18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"koordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2265v0.3.0")))),(0,r.kt)("p",null,"\u8be5\u529f\u80fd\u7531\u5355\u673a\u7ec4\u4ef6Koordlet\u63d0\u4f9b\uff0c\u5bf9\u5e94\u7684feature-gate\u9ed8\u8ba4\u5173\u95ed\uff0c\u4f7f\u7528\u524d\u8bf7\u786e\u4fddkoordlet\u7684\u542f\u52a8\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"-feature-gates"),"\u4e2d\u5df2\u7ecf\u6dfb\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"BEMemoryEvict=true"),",\n\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/versions/v1.2.0/templates/koordlet.yaml#L36"},"\u53c2\u8003\u793a\u4f8b"),"\u3002"),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0bConfigMap\uff0c\u521b\u5efaconfigmap.yaml\u6587\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#ConfigMap slo-controller-config \u6837\u4f8b\u3002\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config # \u4ee5koord-manager\u5b9e\u9645\u914d\u7f6e\u7684\u540d\u5b57\u4e3a\u51c6\uff0c\u4f8b\u5982ack-slo-config\n  namespace: koordinator-system # \u547d\u540d\u7a7a\u95f4\u4ee5\u73af\u5883\u4e2d\u5b9e\u9645\u5b89\u88c5\u7684\u60c5\u51b5\u4e3a\u51c6\uff0c\u4f8b\u5982kube-system\ndata:\n  # \u5f00\u542f\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u529f\u80fd\u3002\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "memoryEvictThresholdPercent": 70\n      }\n    }\n')),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true; false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true\uff1a\u96c6\u7fa4\u5168\u5c40\u5f00\u542f\u5355\u673a\u5185\u5b58\u9a71\u9010\u7b56\u7565\u3002false\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u96c6\u7fa4\u5168\u5c40\u5173\u95ed\u5355\u673a\u5185\u5b58\u9a71\u9010\u7b56\u7565\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"memoryEvictThresholdPercent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0~100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6574\u673a\u5185\u5b58\u8d44\u6e90\u7528\u91cf\u767e\u5206\u6bd4\u6c34\u4f4d\uff0c\u8868\u793a\u89e6\u53d1\u9a71\u9010\u7684\u5185\u5b58\u9608\u503c\uff0c\u9ed8\u8ba4\u503c\u4e3a70\u3002"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5b89\u88c5\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u662f\u5426\u5b58\u5728ConfigMap\uff0c\u4ee5\u547d\u540d\u7a7a\u95f4",(0,r.kt)("inlineCode",{parentName:"p"},"koordinator-system"),"\u548cConfigMap\u540d\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\u4e3a\u4f8b\uff0c\u5177\u4f53\u4ee5\u5b9e\u9645\u5b89\u88c5\u914d\u7f6e\u4e3a\u51c6\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u5b58\u5728ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u4f7f\u7528PATCH\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff0c\u907f\u514d\u5e72\u6270ConfigMap\u4e2d\u5176\u4ed6\u914d\u7f6e\u9879\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e5\u4e0d\u5b58\u5728ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u521b\u5efaConfigmap\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f configmap.yaml\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0bYAML\u5185\u5bb9\uff0c\u521b\u5efabe-pod-demo.yaml\u6587\u4ef6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: be-pod-demo\n  labels:\n    koordinator.sh/qosClass: 'BE' #\u6307\u5b9aPod\u7684QoS\u7ea7\u522b\u4e3aBE\u3002\nspec:\n  containers:\n    - args:\n        - '-c'\n        - '1'\n        - '--vm'\n        - '1'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n  restartPolicy: Always\n  schedulerName: default-scheduler\n  # \u5f53ColocationProfile\u529f\u80fd\u5f00\u542f\u65f6\uff08\u9ed8\u8ba4\u542f\u7528\uff09\uff0cpriorityClassName\u662f\u5fc5\u586b\u7684\n  priorityClassName: koord-batch\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06be-pod-demo\u90e8\u7f72\u5230\u96c6\u7fa4\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f be-pod-demo.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770bbe-pod-demo\u72b6\u6001\uff0c\u7b49\u5f85Pod\u542f\u52a8\u5b8c\u6210\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod be-pod-demo\nNAME          READY   STATUS    RESTARTS   AGE\nbe-pod-demo   1/1     Running   0          7s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8282\u70b9\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/stress"},"stress\u5de5\u5177"),"\u542f\u52a8\u8fdb\u7a0b\uff0c\n\u786e\u4fdd\u6574\u673a\u5185\u5b58\u8d44\u6e90\u7528\u91cf\u88ab\u63d0\u5347\u5230\u9a71\u9010\u6c34\u4f4d\u4ee5\u4e0a\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"--vm-bytes"),"\u53c2\u6570\u8868\u793astress\u8fdb\u7a0b\u5360\u7528\u7684\u5185\u5b58\u91cf10GB\uff0c\u6d4b\u8bd5\u65f6\u53ef\u6839\u636e\u5b9e\u9645\u673a\u578b\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ stress --cpu 1 --vm 1 --vm-bytes 10G --vm-keep\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u89c2\u5bdfbe-pod-demo\u8fd0\u884c\u60c5\u51b5\uff0c\u53ef\u4ee5\u53d1\u73b0be-pod-demo\u5df2\u7ecf\u4e0d\u5b58\u5728\uff0c\u9a71\u9010\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7event\u67e5\u770b\u5230\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod be-pod-demo\nError from server (NotFound): pods "be-pod-demo" not found\n\n$ kubectl get event\nLAST SEEN   TYPE      REASON            OBJECT              MESSAGE\n46s         Normal    Killing           pod/be-pod-demo     Stopping container stress\n48s         Warning   evictPodSuccess   $you-pod-object     evict Pod:be-pod-demo, reason: EvictPodByNodeMemoryUsage, message: killAndEvictBEPods for node(${your-node-id}), need to release memory: 8077889699\n')))))}c.isMDXComponent=!0},7413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memory-evict-ca2e01d38aa26c5b97f014fdc5ccb1c9.svg"}}]);