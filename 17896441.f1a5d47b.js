(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(158),c=a(155),i=a(150),m=a(152),o=a(153);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){var n=[],l=[];function i(){var i=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){var m=0,o=!1;for(l=document.getElementsByClassName(e);m<l.length&&!o;){var s=l[m],d=s.href,v=decodeURIComponent(d.substring(d.indexOf("#")+1));i.id===v&&(r&&r.classList.remove(t),s.classList.add(t),c(s),o=!0),m+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},v=a(151),E=a.n(v),u=a(128),g=a.n(u);function p(e){var t=e.headings;return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(f,{headings:t})))}function f(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(i.a)().siteConfig,n=void 0===a?{}:a,o=n.url,d=n.title,v=e.content,u=v.metadata,f=u.description,h=u.title,_=u.permalink,N=u.editUrl,b=u.lastUpdatedAt,w=u.lastUpdatedBy,k=u.version,y=v.frontMatter,C=y.image,x=y.keywords,L=y.hide_title,O=y.hide_table_of_contents,I=h?h+" | "+d:d,j=o+Object(m.a)(C);return Object(c.a)(C)||(j=C),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,I),l.a.createElement("meta",{property:"og:title",content:I}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),x&&x.length&&l.a.createElement("meta",{name:"keywords",content:x.join(",")}),C&&l.a.createElement("meta",{property:"og:image",content:j}),C&&l.a.createElement("meta",{property:"twitter:image",content:j}),C&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),_&&l.a.createElement("meta",{property:"og:url",content:o+_}),_&&l.a.createElement("link",{rel:"canonical",href:o+_})),l.a.createElement("div",{className:E()("container padding-vert--lg",g.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:E()("col",(t={},t[g.a.docItemCol]=!O,t))},l.a.createElement("div",{className:g.a.docItemContainer},l.a.createElement("article",null,k&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k)),!L&&l.a.createElement("header",null,l.a.createElement("h1",{className:g.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(v,null))),(N||b||w)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},N&&l.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(b||w)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",b&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*b).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*b).toLocaleDateString()),w&&" "),w&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,w)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:u})))),!O&&v.rightToc&&l.a.createElement(p,{headings:v.rightToc}))))}}}]);