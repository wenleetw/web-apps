(this["webpackJsonpweb-apps"]=this["webpackJsonpweb-apps"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),l=(n(19),n(20),n(13)),i=n(9),s=n(12);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=a.a.createContext(),p=function(e,t){var n;switch(t.type){case"add":return n=[].concat(Object(s.a)(e),[{id:e.length+1,text:t.value,completed:!1}]),localStorage.setItem("todos",JSON.stringify(n)),n;case"delete":return n=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("todos",JSON.stringify(n)),n;case"completed":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),n=m({},e),localStorage.setItem("todos",JSON.stringify(n)),m({},e)}));case"init":return JSON.parse(t.value);case"reset":return localStorage.removeItem("todos"),t.payload;default:return e}},f=function(e){var t=e.items;return console.log(t),t&&0===t.length?a.a.createElement("div",null):t.map((function(e){return a.a.createElement(b,Object.assign({key:e.id},e))}))},b=function(e){var t=e.id,n=e.completed,c=e.text,o=Object(r.useContext)(d);return a.a.createElement("div",{className:"row justify-content-center m-1"},a.a.createElement("div",{className:"col-md-6",style:{textDecoration:n?"line-through":""},onClick:function(){return o({type:"completed",payload:t})}},"\xa0",c,"\xa0"),a.a.createElement("div",{className:"col-md-2"},a.a.createElement("button",{className:"btn-danger btn-circle",onClick:function(){return o({type:"delete",payload:t})}},"\xa0x\xa0")))},v=function(e){var t=Object(r.useRef)(),n=Object(r.useReducer)(p,[]),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){t.current.focus();var e=localStorage.getItem("todos")?localStorage.getItem("todos"):[];i({type:"init",value:e})}),[]),a.a.createElement(d.Provider,{value:i},a.a.createElement("div",{className:"container bg-light shadow-light pb-4 mb-4"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"fit pb-4"},a.a.createElement("img",{src:"https://picsum.photos/1140/280?random",alt:""}),a.a.createElement("br",null)),a.a.createElement("div",{className:"col-md-6 text-center"},a.a.createElement("input",{className:"form-control",type:"text",ref:t,onKeyPress:function(e){"Enter"===e.key&&(i({type:"add",value:t.current.value}),t.current.value="")}})),a.a.createElement("div",{className:"col-md-3"},a.a.createElement("button",{className:"btn-light btn-circle",onClick:function(){i({type:"add",value:t.current.value}),t.current.value="",t.current.focus()}},"\xa0+\xa0"),a.a.createElement("button",{className:"btn btn-light",onClick:function(){return i({type:"reset",payload:[]})}},"Reset"),a.a.createElement("br",null),a.a.createElement("br",null))),a.a.createElement(f,{items:o})))};n(3);var y=function(){return a.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);o.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.3ada5733.chunk.js.map