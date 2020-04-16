(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(1),c=a(9),r=(a(0),a(158)),b={id:"getting-started",title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},i={id:"getting-started",title:"\u5feb\u901f\u5f00\u59cb",description:"React Go \u662f\u4e00\u5957\u7528\u4e8e\u5f00\u53d1 React \u9879\u76ee\u7684\u5de5\u5177\u548c\u5e93\uff0c\u5176\u6838\u5fc3 `@react-go/scripts` \u662f\u7528\u4e8e\u5f00\u53d1\u548c\u6253\u5305\u7684\u811a\u624b\u67b6\u5de5\u5177\u3002",source:"@site/docs/getting-started.md",permalink:"/docs/getting-started",editUrl:"https://github.com/react-go/react-go.github.io/blob/website/docs/getting-started.md",sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar:"someSidebar",next:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/folder-structure"}},p=[{value:"\u4f7f\u7528\u6a21\u677f",id:"\u4f7f\u7528\u6a21\u677f",children:[]},{value:"\u624b\u52a8\u914d\u7f6e",id:"\u624b\u52a8\u914d\u7f6e",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Go \u662f\u4e00\u5957\u7528\u4e8e\u5f00\u53d1 React \u9879\u76ee\u7684\u5de5\u5177\u548c\u5e93\uff0c\u5176\u6838\u5fc3 ",Object(r.b)("inlineCode",{parentName:"p"},"@react-go/scripts")," \u662f\u7528\u4e8e\u5f00\u53d1\u548c\u6253\u5305\u7684\u811a\u624b\u67b6\u5de5\u5177\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@react-go/scripts")," \u5c01\u88c5\u4e86 webpack\u3001Babel\u3001ESLint \u7b49\u914d\u7f6e\uff0c\u5927\u90e8\u5206\u914d\u7f6e\u5185\u5bb9\u53c2\u8003\u81ea ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"Create React App"),"\u3002webpack \u914d\u7f6e\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-chain")," \u6765\u751f\u6210\uff0c\u5e76\u5bf9\u5916\u66b4\u9732\u63a5\u53e3\u4ee5\u4fbf\u7528\u6237\u4fee\u6539 webpack \u914d\u7f6e\u9879\u3002"),Object(r.b)("h2",{id:"\u4f7f\u7528\u6a21\u677f"},"\u4f7f\u7528\u6a21\u677f"),Object(r.b)("p",null,"\u76ee\u524d\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u677f\u9879\u76ee ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-go/template-default"}),"template-default"),"\uff0c\u53ef\u4ee5\u5c06\u672c\u9879\u76ee clone \u5230\u672c\u5730\u540e\u4f7f\u7528\uff0c\u6216\u8005\u5728\u8be5\u9879\u76ee\u7684 GitHub \u9875\u9762\u70b9\u51fb \u201cUse this template\u201d \u6309\u94ae\u521b\u5efa\u65b0\u9879\u76ee\u3002"),Object(r.b)("h2",{id:"\u624b\u52a8\u914d\u7f6e"},"\u624b\u52a8\u914d\u7f6e"),Object(r.b)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("p",null,"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"p"},"@react-go/scripts"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install @react-go/scripts\n\n# yarn\nyarn add @react-go/scripts\n")),Object(r.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"scripts")," \u5b57\u6bb5\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": "react-go start",\n    "build": "react-go build"\n  }\n}\n')),Object(r.b)("p",null,"\u7136\u540e\u6309\u7167\u76ee\u5f55\u8981\u6c42\u4e2d\u7684",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/folder-structure"}),"\u76ee\u5f55\u7ed3\u6784"),"\u65b0\u5efa\u5fc5\u9700\u7684\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u672c\u5730\u670d\u52a1\u6216\u6784\u4ef6\u9879\u76ee\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm run start")," \u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm run build")," \u6784\u5efa\u9879\u76ee")))}o.isMDXComponent=!0}}]);