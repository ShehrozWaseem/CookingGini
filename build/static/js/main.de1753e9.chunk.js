(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(29),r=c.n(i),s=(c(38),c(8)),j=c(14),d=(c(39),c(9)),o=c(4),l=c(1),u=Object(n.createContext)(),b=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(d.a)(Object(d.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(d.a)(Object(d.a)({},e),{},{mode:t.payload});default:return e}};function O(e){var t=e.children,c=Object(n.useReducer)(b,{color:"#58249c",mode:"white"}),a=Object(o.a)(c,2),i=a[0],r=a[1];return Object(l.jsx)(u.Provider,{value:Object(d.a)(Object(d.a)({},i),{},{changeColor:function(e){r({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){r({type:"CHANGE_MODE",payload:e})}}),children:t})}function h(){var e=Object(n.useContext)(u);if(void 0===e)throw new Error("useTheme() must be inside a theme provider");return e}c(41);var p=c.p+"static/media/dlt.1129c53a.svg",x=c.p+"static/media/edit.9d5342f1.svg",f=c(24);c(54);f.a.initializeApp({apiKey:"AIzaSyCrOPbOEerY1R9K4XdOaApffwxLBIMhs1g",authDomain:"react-d2186.firebaseapp.com",databaseURL:"https://react-d2186-default-rtdb.firebaseio.com",projectId:"react-d2186",storageBucket:"react-d2186.appspot.com",messagingSenderId:"387905155266",appId:"1:387905155266:web:7763be8e93958915894b5b"});var m=f.a.firestore();function v(e){var t=e.recipes,c=h().mode;if(0===t.length)return Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("h3",{children:"No results found"})});return Object(l.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(l.jsxs)("div",{className:"card ".concat(c),children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:[e.cookingTime," to make"]}),Object(l.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(l.jsx)(s.b,{className:"link",to:"/recipes/".concat(e.id),children:"Cook this"}),Object(l.jsx)("img",{className:"delete",alt:"delete icon",src:p,onClick:function(){return t=e.id,void m.collection("recipes").doc(t).delete();var t}}),Object(l.jsx)(s.c,{to:"/edit/".concat(e.id),children:Object(l.jsx)("img",{className:"edit",alt:"edit icon",src:x})})]},e.id)}))})}var g=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),s=r[0],j=r[1],u=Object(n.useState)(null),b=Object(o.a)(u,2),O=b[0],h=b[1];return Object(n.useEffect)((function(){j(!0);var e=m.collection("recipes").onSnapshot((function(e){if(e.empty)h("No Recipe founded"),j(!1);else{console.log(e.docs);var t=[];e.docs.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),a(t),j(!1)}}),(function(e){h(e.message),j(!0)}));return function(){return e()}}),[]),Object(l.jsxs)("div",{children:[s&&Object(l.jsx)("p",{className:"loading",children:"Loading data..."}),O&&Object(l.jsx)("p",{className:"error",children:O}),c&&Object(l.jsx)(v,{recipes:c})]})},N=c(33),k=c(27),C=c.n(k),S=c(32);c(48);var y=function(e){var t=e.editCheck,c=e.data;console.log(c);var a=Object(n.useState)(t?c.title:""),i=Object(o.a)(a,2),r=i[0],s=i[1],d=t?c.cookingTime.replace(" minutes",""):"",u=Object(n.useState)(d),b=Object(o.a)(u,2),O=b[0],h=b[1],p=Object(n.useState)(t?c.method:""),x=Object(o.a)(p,2),f=x[0],v=x[1],g=Object(n.useState)(""),k=Object(o.a)(g,2),y=k[0],E=k[1],w=Object(n.useState)(t?c.ingredients:[]),I=Object(o.a)(w,2),L=I[0],R=I[1],A=Object(n.useState)(!1),M=Object(o.a)(A,2),T=M[0],D=M[1],q=Object(n.useRef)(),U=Object(j.f)(),G=function(){var e=Object(S.a)(C.a.mark((function e(n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a={title:r,ingredients:L,method:f,cookingTime:O+" minutes"},e.prev=2,t){e.next=7;break}return e.next=6,m.collection("recipes").add(a);case 6:U.push("/");case 7:if(!t){e.next=11;break}return e.next=10,m.collection("recipes").doc(c.id).update(a);case 10:U.push("/");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),B=L.map((function(e){return t?Object(l.jsxs)("em",{className:"changeArray",onClick:function(){return function(e){var t=L.filter((function(t){return t!==e}));R(t)}(e)},children:[e,"   "]},e):Object(l.jsxs)("i",{children:[e," "]},e)}));return Object(l.jsx)("div",{className:"create",children:Object(l.jsxs)("form",{onSubmit:G,children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:t?"Update Title":"Title"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:r,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:t?"Update Ingredients":"Ingredients"}),T&&Object(l.jsx)("h6",{children:"Ingredient already added !"}),Object(l.jsxs)("div",{className:"ingredients",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return E(e.target.value)},value:y,ref:q}),Object(l.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var t=y.trim();t&&!L.includes(t)&&(R((function(e){return[].concat(Object(N.a)(e),[t])})),D(!1),q.current.focus(),E("")),L.includes(t)&&(D(!0),q.current.focus())},children:"Add"})]}),Object(l.jsxs)("p",{children:["Current Ingredients: ",B]}),t&&Object(l.jsx)("p",{children:"Click on an ingredient to delete it"})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:t?"Update Cooking Time (Minutes)":"Cooking Time (Minutes)"}),Object(l.jsx)("input",{type:"number",onChange:function(e){return h(e.target.value)},value:O,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:t?"Update Method":"Method"}),Object(l.jsx)("textarea",{onChange:function(e){return v(e.target.value)},value:f,required:!0})]}),Object(l.jsx)("button",{type:"submit",children:t?"Edit":"Submit"})]})})};function E(e){var t=e.recipe;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"page-title",children:t.title}),Object(l.jsxs)("p",{children:[t.cookingTime," to make..."]}),Object(l.jsxs)("ul",{children:["Ingredients: ",t.ingredients.map((function(e){return Object(l.jsx)("li",{children:e},e)}))]}),Object(l.jsx)("p",{className:"method",children:t.method}),Object(l.jsx)(s.b,{className:"aaa",to:"/edit/".concat(t.id),children:"EDIT"})]},t.id)}c(49);var w=function(){var e=Object(j.h)().id,t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],b=s[1],O=Object(n.useState)(null),p=Object(o.a)(O,2),x=p[0],f=p[1];Object(n.useEffect)((function(){b(!0),m.collection("recipes").doc(e).get().then((function(t){t.exists?(i(Object(d.a)({id:e},t.data())),b(!1)):(b(!1),f("Recipe not exists"))}))}),[e]);var v=h().mode;return Object(l.jsxs)("div",{className:"recipe ".concat(v),children:[u&&Object(l.jsx)("p",{className:"loading",children:"Loading Data..."}),x&&Object(l.jsx)("p",{className:"error",children:x}),a&&Object(l.jsx)(E,{recipe:a})]})};var I=function(){var e=Object(j.g)().search,t=new URLSearchParams(e).get("q"),c=Object(n.useState)(null),a=Object(o.a)(c,2),i=a[0],r=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),b=u[0],O=u[1],h=Object(n.useState)(null),p=Object(o.a)(h,2),x=p[0],f=p[1];return Object(n.useEffect)((function(){O(!0),m.collection("recipes").get().then((function(e){var c=[];e.forEach((function(e){e.data().title.toLowerCase().includes(t.toLowerCase())&&c.push(Object(d.a)({id:e.id},e.data()))})),O(!1),r(c)})).catch((function(e){f(e.message)}))}),[t]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"page-title",children:['Recipes Including: "',t,'"']}),b&&Object(l.jsx)("p",{className:"loading",children:"Loading data..."}),x&&Object(l.jsx)("p",{className:"error",children:x}),i&&Object(l.jsx)(v,{recipes:i})]})};c(50),c(51);function L(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(j.f)();return Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.push("/search?q=".concat(c)),a("")},children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("input",{type:"text",id:"search",onChange:function(e){return a(e.target.value)},placeholder:"search",required:!0,value:c})]})})}function R(){var e=h().color;return Object(l.jsx)("div",{className:"navbar",style:{background:e},children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(s.b,{to:"/",className:"brand",children:Object(l.jsx)("h1",{children:"Cooking Ginni"})}),Object(l.jsx)(L,{}),Object(l.jsx)(s.b,{to:"/create",children:"Create Recipe"})]})})}c(52);var A=c.p+"static/media/mode-icon.651cf792.svg";function M(){var e=h(),t=e.changeColor,c=e.changeMode,n=e.mode;return Object(l.jsxs)("div",{className:"theme-selector",children:[Object(l.jsx)("div",{className:"mode-toggle",children:Object(l.jsx)("img",{src:A,onClick:function(){c("dark"===n?"white":"dark")},alt:"B/W toggler",style:{filter:"dark"===n?"invert(100%)":"invert(20%)"}})}),Object(l.jsx)("div",{className:"theme-buttons",children:["#58249c","#249c6b","#b70233"].map((function(e){return Object(l.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}function T(){var e=Object(j.h)().id,t=Object(j.g)().pathname,c=t.includes("edit")&&t.includes(e),a=Object(n.useState)(!1),i=Object(o.a)(a,2),r=i[0],s=i[1],u=Object(n.useState)(null),b=Object(o.a)(u,2),O=b[0],h=b[1],p=Object(n.useState)(null),x=Object(o.a)(p,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){s(!0),m.collection("recipes").doc(e).get().then((function(t){var c=Object(d.a)({id:e},t.data());h(c),s(!1)})).catch((function(e){v(e.message)}))}),[e]),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("p",{className:"loading",children:"Loading data..."}),f&&Object(l.jsx)("p",{className:"error",children:f}),O&&Object(l.jsx)(y,{editCheck:c,data:O})]})}var D=function(){var e=h().mode;return Object(l.jsx)("div",{className:"App ".concat(e),children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(R,{}),Object(l.jsx)(M,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(g,{})}),Object(l.jsx)(j.a,{path:"/create",children:Object(l.jsx)(y,{})}),Object(l.jsx)(j.a,{path:"/search",children:Object(l.jsx)(I,{})}),Object(l.jsx)(j.a,{path:"/edit/:id",children:Object(l.jsx)(T,{})}),Object(l.jsx)(j.a,{path:"/recipes/:id",children:Object(l.jsx)(w,{})})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{children:Object(l.jsx)(D,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.de1753e9.chunk.js.map