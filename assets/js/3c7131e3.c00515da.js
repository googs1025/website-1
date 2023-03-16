"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[666],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1080:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Fine-grained CPU Orchestration",c={unversionedId:"user-manuals/fine-grained-cpu-orchestration",id:"version-v1.1/user-manuals/fine-grained-cpu-orchestration",title:"Fine-grained CPU Orchestration",description:"Fine-grained CPU Orchestration is an ability of koord-scheduler for improving the performance of CPU-sensitive workloads.",source:"@site/versioned_docs/version-v1.1/user-manuals/fine-grained-cpu-orchestration.md",sourceDirName:"user-manuals",slug:"/user-manuals/fine-grained-cpu-orchestration",permalink:"/docs/user-manuals/fine-grained-cpu-orchestration",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/fine-grained-cpu-orchestration.md",tags:[],version:"v1.1",lastUpdatedBy:"Joseph",lastUpdatedAt:1678958357,formattedLastUpdatedAt:"3/16/2023",frontMatter:{},sidebar:"docs",previous:{title:"Load Aware Descheduling",permalink:"/docs/user-manuals/load-aware-descheduling"},next:{title:"Resource Reservation",permalink:"/docs/user-manuals/resource-reservation"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Global Configuration via plugin args",id:"global-configuration-via-plugin-args",level:3},{value:"Configure by Node",id:"configure-by-node",level:3},{value:"CPU bind policy",id:"cpu-bind-policy",level:4},{value:"NUMA allocate strategy",id:"numa-allocate-strategy",level:4},{value:"Use Fine-grained CPU Orchestration",id:"use-fine-grained-cpu-orchestration",level:2}],u={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fine-grained-cpu-orchestration"},"Fine-grained CPU Orchestration"),(0,o.kt)("p",null,"Fine-grained CPU Orchestration is an ability of koord-scheduler for improving the performance of CPU-sensitive workloads."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"There is an increasing number of systems that leverage a combination of CPUs and hardware accelerators to support\nlatency-critical execution and high-throughput parallel computation. A high-performance environment is expected in\nplenty of applications including in telecommunications, scientific computing, machine learning, financial services, and\ndata analytics."),(0,o.kt)("p",null,"However, pods in the Kubernetes cluster may interfere with others' running when they share the same physical resources\nand both demand many resources. The sharing of CPU resources is almost inevitable. e.g. SMT threads (i.e. logical\nprocessors) share execution units of the same core, and cores in the same chip share one last-level cache. The resource\ncontention can slow down the running of these CPU-sensitive workloads, resulting in high response latency (RT)."),(0,o.kt)("p",null,"To improve the performance of CPU-sensitive workloads, koord-scheduler provides a mechanism of fine-grained CPU\norchestration. It enhances the CPU management of Kubernetes and supports detailed NUMA-locality and CPU exclusions."),(0,o.kt)("p",null,"For more information, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/designs/fine-grained-cpu-orchestration"},"Design: Fine-grained CPU orchestration"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"global-configuration-via-plugin-args"},"Global Configuration via plugin args"),(0,o.kt)("p",null,"Fine-grained CPU orchestration is ",(0,o.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-scheduler config."),(0,o.kt)("p",null,"For users who need deep insight, please configure the rules of fine-grained CPU orchestration by modifying the ConfigMap\n",(0,o.kt)("inlineCode",{parentName:"p"},"koord-scheduler-config")," in the helm chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-scheduler-config\n  ...\ndata:\n  koord-scheduler-config: |\n    apiVersion: kubescheduler.config.k8s.io/v1beta2\n    kind: KubeSchedulerConfiguration\n    profiles:\n      - schedulerName: koord-scheduler\n      - pluginConfig:\n        - name: NodeNUMAResource\n          args:\n            apiVersion: kubescheduler.config.k8s.io/v1beta2\n            kind: NodeNUMAResourceArgs\n            # The default CPU Binding Policy. The default is FullPCPUs\n            # If the Pod belongs to LSE/LSR Prod Pods, and if no specific CPU binding policy is set, \n            # the CPU will be allocated according to the default core binding policy.\n            defaultCPUBindPolicy: FullPCPUs\n            # the scoring strategy\n            scoringStrategy:\n              # the scoring strategy ('MostAllocated', 'LeastAllocated')\n              # - MostAllocated(default): prefer the node with the least available resources\n              # - LeastAllocated: prefer the node with the most available resources\n              type: MostAllocated\n              # the weights of each resource type\n              resources:\n              - name: cpu\n                weight: 1\n        plugins:\n          # enable the NodeNUMAResource plugin\n          preFilter:\n            enabled:\n              - name: NodeNUMAResource\n          filter:\n            enabled:\n              - name: NodeNUMAResource\n              ...\n          score:\n            enabled:\n              - name: NodeNUMAResource\n                weight: 1\n              ...\n          reserve:\n            enabled:\n              - name: NodeNUMAResource\n          preBind:\n            enabled:\n              - name: NodeNUMAResource\n")),(0,o.kt)("p",null,"The koord-scheduler takes this ConfigMap as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/scheduling/config/"},"scheduler Configuration"),".\nNew configurations will take effect after the koord-scheduler restarts."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultCPUBindPolicy"),(0,o.kt)("td",{parentName:"tr",align:null},"The default CPU Binding Policy. The default is FullPCPUs. If the Pod belongs to LSE/LSR Prod Pods, and if no specific CPU binding policy is set, the CPU will be allocated according to the default CPU binding policy. The optional values are FullPCPUs and SpreadByPCPUs"),(0,o.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scoringStrategy"),(0,o.kt)("td",{parentName:"tr",align:null},"the scoring strategy, including MostAllocated and LeastAllocated"),(0,o.kt)("td",{parentName:"tr",align:null},">= v0.6.0")))),(0,o.kt)("h3",{id:"configure-by-node"},"Configure by Node"),(0,o.kt)("p",null,"Users can set CPU binding policy and NUMA Node selection policy separately for Node."),(0,o.kt)("h4",{id:"cpu-bind-policy"},"CPU bind policy"),(0,o.kt)("p",null,"The label ",(0,o.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/cpu-bind-policy")," constrains how to bind CPU logical CPUs when scheduling.\nThe following is the specific value definition:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"None or empty value"),(0,o.kt)("td",{parentName:"tr",align:null},"does not perform any policy"),(0,o.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FullPCPUsOnly"),(0,o.kt)("td",{parentName:"tr",align:null},"requires that the scheduler must allocate full physical cores. Equivalent to kubelet CPU manager policy option full-pcpus-only=true."),(0,o.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SpreadByPCPUs"),(0,o.kt)("td",{parentName:"tr",align:null},"requires that the schedler must evenly allocate logical CPUs across physical cores."),(0,o.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,o.kt)("p",null,"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/cpu-bind-policy")," in the node's label, it will be executed according to the policy configured by the Pod or koord-scheduler."),(0,o.kt)("h4",{id:"numa-allocate-strategy"},"NUMA allocate strategy"),(0,o.kt)("p",null,"The label ",(0,o.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy")," indicates how to choose satisfied NUMA Nodes when scheduling.",(0,o.kt)("br",{parentName:"p"}),"\n","The following is the specific value definition:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MostAllocated"),(0,o.kt)("td",{parentName:"tr",align:null},"MostAllocated indicates that allocates from the NUMA Node with the least amount of available resource."),(0,o.kt)("td",{parentName:"tr",align:null},">= v.0.6.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LeastAllocated"),(0,o.kt)("td",{parentName:"tr",align:null},"LeastAllocated indicates that allocates from the NUMA Node with the most amount of available resource."),(0,o.kt)("td",{parentName:"tr",align:null},">= v.0.6.0")))),(0,o.kt)("p",null,"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet.koordinator.sh/cpu-manager-policy")," are defined, ",(0,o.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy")," is used first."),(0,o.kt)("h2",{id:"use-fine-grained-cpu-orchestration"},"Use Fine-grained CPU Orchestration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," deployment with the YAML file below.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Fine-grained CPU Orchestration allows pods to bind CPUs exclusively. To use fine-grained CPU orchestration, pods should set a label of ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/qos#definition"},"QoS Class"),") and specify the cpu binding policy.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-lsr\n  labels:\n    app: nginx-lsr\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-lsr\n  template:\n    metadata:\n      name: nginx-lsr\n      labels:\n        app: nginx-lsr\n        koordinator.sh/qosClass: LSR # set the QoS class as LSR, the binding policy is FullPCPUs by default\n        # in v0.5, binding policy should be specified.\n        # e.g. to set binding policy as FullPCPUs (prefer allocating full physical CPUs of the same core):\n        #annotations:\n          #scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"FullPCPUs\"}'\n    spec:\n      schedulerName: koord-scheduler # use the koord-scheduler\n      containers:\n      - name: nginx\n        image: nginx\n        resources:\n          limits:\n            cpu: '2'\n          requests:\n            cpu: '2'\n      priorityClassName: koord-prod\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Deploy the ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," deployment and check the scheduling result.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f nginx-deployment.yaml\ndeployment/nginx-lsr created\n$ kubectl get pods -o wide | grep nginx\nnginx-lsr-59cf487d4b-jwwjv   1/1     Running   0       21s     172.20.101.35    node-0   <none>         <none>\nnginx-lsr-59cf487d4b-4l7r4   1/1     Running   0       21s     172.20.101.79    node-1   <none>         <none>\nnginx-lsr-59cf487d4b-nrb7f   1/1     Running   0       21s     172.20.106.119   node-2   <none>         <none>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check the CPU binding results of pods on ",(0,o.kt)("inlineCode",{parentName:"li"},"scheduling.koordinator.sh/resource-status")," annotations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod nginx-lsr-59cf487d4b-jwwjv -o jsonpath=\'{.metadata.annotations.scheduling\\.koordinator\\.sh/resource-status}\'\n{"cpuset":"2,54"}\n')),(0,o.kt)("p",null,"We can see that the pod ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx-lsr-59cf487d4b-jwwjv")," binds 2 CPUs, and the IDs are 2,54, which are the logical\nprocessors of the ",(0,o.kt)("strong",{parentName:"p"},"same")," core."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Change the binding policy in the ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," deployment with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-lsr\n  labels:\n    app: nginx-lsr\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-lsr\n  template:\n    metadata:\n      name: nginx-lsr\n      labels:\n        app: nginx-lsr\n        koordinator.sh/qosClass: LSR # set the QoS class as LSR\n      annotations:\n        # set binding policy as SpreadByPCPUs (prefer allocating physical CPUs of different cores)\n        scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"SpreadByPCPUs\"}'\n    spec:\n      schedulerName: koord-scheduler # use the koord-scheduler\n      containers:\n      - name: nginx\n        image: nginx\n        resources:\n          limits:\n            cpu: '2'\n          requests:\n            cpu: '2'\n      priorityClassName: koord-prod\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx")," deployment and check the scheduling result.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f nginx-deployment.yaml\ndeployment/nginx-lsr created\n$ kubectl get pods -o wide | grep nginx\nnginx-lsr-7fcbcf89b4-rkrgg   1/1     Running   0       49s     172.20.101.35    node-0   <none>         <none>\nnginx-lsr-7fcbcf89b4-ndbks   1/1     Running   0       49s     172.20.101.79    node-1   <none>         <none>\nnginx-lsr-7fcbcf89b4-9v8b8   1/1     Running   0       49s     172.20.106.119   node-2   <none>         <none>\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check the new CPU binding results of pods on ",(0,o.kt)("inlineCode",{parentName:"li"},"scheduling.koordinator.sh/resource-status")," annotations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod nginx-lsr-7fcbcf89b4-rkrgg -o jsonpath=\'{.metadata.annotations.scheduling\\.koordinator\\.sh/resource-status}\'\n{"cpuset":"2-3"}\n')),(0,o.kt)("p",null,"Now we can see that the pod ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx-lsr-59cf487d4b-jwwjv")," binds 2 CPUs, and the IDs are 2,3, which are the logical\nprocessors of the ",(0,o.kt)("strong",{parentName:"p"},"different")," core."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"(Optional) Advanced configurations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  labels:\n    # koordinator QoS class of the pod. (use 'LSR' or 'LSE' for binding CPUs)\n    koordinator.sh/qosClass: LSR\n  annotations:\n    # `resource-spec` indicates the specification of resource scheduling, here we need to set `preferredCPUBindPolicy`.\n    # `preferredCPUBindPolicy` indicating the CPU binding policy of the pod ('None', 'FullPCPUs', 'SpreadByPCPUs')\n    # - None: perform no exclusive policy\n    # - FullPCPUs(default): a bin-packing binding policy, prefer allocating full physical cores (SMT siblings)\n    # - SpreadByPCPUs: a spread binding policy, prefer allocating logical cores (SMT threads) evenly across physical cores (SMT siblings)\n    scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"FullPCPUs\"}'\n")))}h.isMDXComponent=!0}}]);