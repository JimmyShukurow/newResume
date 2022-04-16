(function(){"use strict";var t={4001:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={},i=o,l=n(1001),u=(0,l.Z)(i,a,s,!1,null,null,null),c=u.exports,v=n(6482);r.Z.use(v.Z);var f=new v.Z({}),m=n(8345),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("span",{staticClass:"name-surname"},[t._v(" Jemshit Shukurov ")]),r("span",{staticClass:"profession"},[t._v(" Software Engineer & Developer ")]),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("div",{staticClass:"animeClass"},[r("img",{staticClass:"photo",attrs:{alt:"Vue logo",src:n(4937)}}),r("div",{staticClass:"menu-image ",attrs:{id:"menu1"}},[r("a",{staticClass:"fa fa-telegram",attrs:{href:"#"}})]),r("div",{staticClass:"menu-image  ",attrs:{id:"menu2"}},[r("a",{staticClass:"fa fa-twitter",attrs:{href:"#"}})]),r("div",{staticClass:"menu-image ",attrs:{id:"menu3"}},[r("a",{staticClass:"fa fa-github",attrs:{href:"https://github.com/JimmyShukurow",target:"_blank"}})]),r("div",{staticClass:"menu-image  ",attrs:{id:"menu4"}},[r("a",{staticClass:"fa fa-linkedin",attrs:{href:"https://www.linkedin.com/in/jemshit-shukurov/",target:"_blank"}})]),r("div",{staticClass:"menu-image  ",attrs:{id:"menu5"}},[r("a",{staticClass:"fa fa-vimeo",attrs:{href:"https://vimeo.com/573308795",target:"_blank"}})]),r("div",{staticClass:"menu-image  ",attrs:{id:"menu6"}},[r("a",{staticClass:"fa fa-youtube-play",attrs:{href:"https://www.youtube.com/channel/UCBM_vaLi6Ir-PEFu5gv5CKg",target:"_blank"}})])])])]),r("v-row",{staticClass:"extra"},[r("router-link",{attrs:{to:"/portfolio"}},[r("v-btn",{attrs:{color:"#385F73",dark:""}},[t._v(" portfolio ")])],1),r("router-link",{attrs:{to:"/resume"}},[r("v-btn",{attrs:{color:"#385F73",dark:""}},[t._v(" resume ")])],1)],1)],1)},p=[],h=null,b=null,g=null,y=null,w=null,_=null,C=120*Math.sqrt(2),k=Math.PI/180,x={menuOpen:function(){var t=100,e=100,n=Math.PI/6,r=Math.PI/3,a=document.getElementById("menu1"),s=document.getElementById("menu2"),o=document.getElementById("menu3"),i=document.getElementById("menu4"),l=document.getElementById("menu5"),u=document.getElementById("menu6"),c=0;function v(){c>=n?clearInterval(h):(c+=k,a.style.top=e+C*Math.cos(c)+"px",a.style.left=t+C*Math.sin(c)+"px")}function f(){c>=n+r?clearInterval(b):(c+=k,s.style.top=e+C*Math.cos(c)+"px",s.style.left=t+C*Math.sin(c)+"px")}function m(){c>=n+2*r?clearInterval(g):(c+=k,o.style.top=e+C*Math.cos(c)+"px",o.style.left=t+C*Math.sin(c)+"px")}function d(){c>=n+3*r?clearInterval(y):(c+=k,i.style.top=e+C*Math.cos(c)+"px",i.style.left=t+C*Math.sin(c)+"px")}function p(){c>=n+4*r?clearInterval(w):(c+=k,l.style.top=e+C*Math.cos(c)+"px",l.style.left=t+C*Math.sin(c)+"px")}function x(){c>=n+5*r?clearInterval(_):(c+=k,u.style.top=e+C*Math.cos(c)+"px",u.style.left=t+C*Math.sin(c)+"px")}clearInterval(h),clearInterval(b),clearInterval(g),clearInterval(y),clearInterval(w),clearInterval(_),h=setInterval(v,1),b=setInterval(f,1),g=setInterval(m,1),y=setInterval(d,1),w=setInterval(p,1),_=setInterval(x,1)}},I=x,Z={name:"MainView",components:{},mounted:function(){I.menuOpen()}},M=Z,V=n(3453),j=n.n(V),O=n(1146),E=n(7024),B=n(7894),S=(0,l.Z)(M,d,p,!1,null,"12c806b7",null),P=S.exports;j()(S,{VBtn:O.Z,VCol:E.Z,VRow:B.Z});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",{staticClass:"main"},[n("header",[n("a",{attrs:{href:"https://jimmyshukurow.github.io/Resume-Static/",target:"_blank",rel:"noopener noreferrer"}},[n("v-btn",[t._v(" old resume ")])],1),n("router-link",{attrs:{to:"/"}},[n("v-btn",[t._v(" get back ")])],1)],1),n("v-row",{attrs:{cols:"8"}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{attrs:{color:"#385F73",dark:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" Vuex Example Project ")]),n("v-card-subtitle",[t._v(" Project done using vue to demonstrate Vuex and its benefits. Very little Project. ")]),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[n("a",{attrs:{href:"https://jimmyshukurow.github.io/Vuex/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Details")])])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{attrs:{color:"#385F73",dark:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" Unlimited music now ")]),n("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[t._v(" Listen Now ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{attrs:{color:"#385F73",dark:""}},[n("v-card-title",{staticClass:"text-h5"},[t._v(" Unlimited music now ")]),n("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[t._v(" Listen Now ")])],1)],1)],1)],1)],1)],1)},F=[],T={name:"HomeView",components:{}},L=T,$=n(9996),D=n(5255),J=n(5234),U=(0,l.Z)(L,R,F,!1,null,"6a06c28e",null),q=U.exports;j()(U,{VBtn:O.Z,VCard:$.Z,VCardActions:D.h7,VCardSubtitle:D.Qq,VCardTitle:D.EB,VCol:E.Z,VContainer:J.Z,VRow:B.Z});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("v-container",[n("h1",[t._v("Jemshit Shukurov")]),n("h3",[t._v("Backend Developer")]),n("div",{staticClass:"buttons"},[n("router-link",{attrs:{to:"/"}},[n("v-btn",[t._v(" get back ")])],1),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openResume.apply(null,arguments)}}},[n("v-btn",[t._v(" Open Resume in pdf ")])],1)],1)])],1)},A=[],H={methods:{openResume:function(){window.open("Resume.pdf","_blank")}}},K=H,Q=(0,l.Z)(K,N,A,!1,null,"0e6c65c6",null),z=Q.exports;j()(Q,{VBtn:O.Z,VContainer:J.Z}),r.Z.use(m.Z);var G=[{path:"/",name:"main",component:P},{path:"/portfolio",name:"portfolio",component:q},{path:"/resume",name:"resume",component:z}],W=new m.Z({routes:G}),X=W;r.Z.config.productionTip=!1,new r.Z({vuetify:f,router:X,render:function(t){return t(c)}}).$mount("#app")},4937:function(t,e,n){t.exports=n.p+"img/photo.5dc7167d.jpeg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,s){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],s=t[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/newResume/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,o=r[0],i=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(e&&e(r);u<o.length;u++)s=o[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},r=self["webpackChunknewresume"]=self["webpackChunknewresume"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4001)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.6c2f0520.js.map