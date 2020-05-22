(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),i=t(1),s=t(13),l=t(14),u=t(5),d=(t(26),t(27),t(3)),h=t(4),f=t(7),p=t(6),g=function(e){var n=e.id,t=e.name,a=e.email;return r.a.createElement("div",{className:"catcard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot profile",src:"https://robohash.org/".concat(n,"?set=set4&size=150x150")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},v=function(e){var n=e.catfriends;return console.log("CardList"),r.a.createElement("div",null," ",n.map((function(e,t){return r.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))," ")},m=function(e){e.searchfield;var n=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Cats",className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search for cat friends",onChange:n}))},E=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Cat Friends"))}}]),t}(a.Component),C=(t(28),function(){return function(e){var n;e({type:"REQUEST_CATS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:"REQUEST_CATS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_CATS_FAILED",payload:n})}))}}),w=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCats()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,a=e.catfriends,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",{className:"f1 tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(b,null),r.a.createElement(m,{searchChange:t}),r.a.createElement(E,null,r.a.createElement(v,{catfriends:c})))}}]),t}(a.Component),y=Object(u.b)((function(e){return{searchField:e.searchCats.searchField,catfriends:e.requestCats.catfriends,isPending:e.requestCats.isPending}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestCats:function(){return e(C())}}}))(w),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O={searchField:""},k={isPending:!1,catfriends:[],error:""},A=Object(s.createLogger)(),N=Object(i.c)({searchCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_CATS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_CATS_SUCCESS":return Object.assign({},e,{catfriends:n.payload,isPending:!1});case"REQUEST_CATS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(i.d)(N,Object(i.a)(l.a,A));c.a.render(r.a.createElement(u.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/catapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/catapp","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.8279ff74.chunk.js.map