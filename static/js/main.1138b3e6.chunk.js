(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(4),r=t.n(s),i=t(3),o=t.n(i),l=t(5),u=t(6),p=(t(12),t(0)),j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=(n[1],function(){var e=Object(l.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/name/pakistan");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t=a,document.querySelector(".flag").src=a[0].flags.png.toString(),document.querySelector(".population").innerHTML=a[0].population,document.querySelector(".capitalName").innerHTML=a[0].capital[0],document.querySelector(".nationalLang").innerHTML=a[0].languages.urd,document.querySelector(".name").innerHTML=a[0].name.common,console.log(t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return setTimeout(c,10),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("img",{alt:"Pakistan Flag",className:"flag"}),Object(p.jsxs)("div",{children:["Country: ",Object(p.jsx)("span",{className:"name"})]}),Object(p.jsxs)("div",{className:"capital",children:["Capital: ",Object(p.jsx)("span",{className:"capitalName"})]}),Object(p.jsxs)("div",{className:"lang",children:["National Language: ",Object(p.jsx)("span",{className:"nationalLang"})]}),Object(p.jsxs)("div",{className:"pop",children:["Population: ",Object(p.jsx)("span",{className:"population",children:"0"})]})]})})},m=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(j,{})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1138b3e6.chunk.js.map