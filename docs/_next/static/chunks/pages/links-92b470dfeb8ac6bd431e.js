_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{G7jT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/links",function(){return n("NpHO")}])},NpHO:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return p})),n.d(e,"default",(function(){return m}));var a=n("q1tI"),s=n.n(a),r=n("8Kt/"),o=n.n(r),i=n("YFqc"),l=n.n(i),c=n("R9S9"),u=s.a.createElement,d=function(t){var e=t.post;return u("div",{className:"text-xl"},e.linkNumber,e.draft&&u("div",{className:"italic text-xs text-gray-500"},"draft"))},p=!0;function m(t){var e=t.allPostsData,n=Object(a.useState)(!1),r=n[0],i=n[1],p=function(){return u(s.a.Fragment,null,e.filter((function(t){return t.link})).sort((function(t,e){return e.linkNumber-t.linkNumber})).map((function(t){return u(s.a.Fragment,{key:t.link},r?u("div",{className:"border rounded p-2 shadow"},u("a",{href:t.link},u(d,{post:t})),u("p",{className:"text-xs"},t.title),u(l.a,{href:"/post/[id]",as:"/post/".concat(t.id)},u("a",{className:"text-xs justify-end"},"(post)"))):u("a",{href:t.link,className:"border rounded p-2 shadow hover:bg-gray-300 hover:no-underline"},u(d,{post:t})))})))};return u(c.a,null,u(o.a,null,u("title",null,c.b)),u("section",{className:"mx-3 grid grid-cols-3 gap-1 items-center"},u("div",{className:"col-span-2"},u("p",null,"Links"),u("p",{className:"text-xs"},"Clique no bot\xe3o ao lado para ver os posts relacionados.")),u("div",{className:"col-span-1 text-right"},u("button",{className:"text-xs border rounded p-1 shadow",type:"button",onClick:function(){return i((function(t){return!t}))}},r?"- detalhes":"+ detalhes"))),u("section",r?{className:"m-3 grid grid-cols-2 gap-2 text-center sm:grid-cols-4"}:{className:"m-3 grid grid-cols-4 gap-2 text-center sm:grid-cols-6"},u(p,null)))}}},[["G7jT",0,1,2,3]]]);