(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n(8),r=n.n(o),d=n(3),i=n(6);n(4);var s=function(){return Object(c.jsx)("header",{children:"Todo List App"})};var l=function(e){var t=e.addTodo,n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],d=o[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"flex-container",children:[Object(c.jsx)("input",{className:"input",id:"add",type:"text",placeholder:"What to do?",onChange:function(e){d((function(t){return e.target.value}))},maxLength:"16"}),Object(c.jsx)("button",{className:"search-button",onClick:function(){t(r,document.querySelector("#add"))},children:"Add"})]})})};var j=function(e){var t=e.todo,n=e.index,a=e.markCard,o=e.deleteCard;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"div-header",children:Object(c.jsxs)("h4",{children:["To do: ",n+1]})}),Object(c.jsx)("div",{className:"div-body",children:Object(c.jsx)("h3",{className:t.done?"complete":"incomplete",children:t.msg})}),Object(c.jsxs)("div",{className:"div-footer",children:[Object(c.jsx)("button",{className:"mark-btn",onClick:function(){a(n)},children:"Mark"}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){o(n)},children:"Delete"})]})]})};var u=function(e){var t=e.todo,n=e.markCard,a=e.deleteCard,o=t.map((function(e,t){return Object(c.jsx)(j,{todo:e,index:t,markCard:n,deleteCard:a},e.id)}));return Object(c.jsx)("div",{className:"todo-list",children:o})};var b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("todo");e&&o(JSON.parse(e))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(s,{}),Object(c.jsx)(l,{addTodo:function(e,t){var c=Object(d.a)(n),a={id:c.length+1,msg:e,done:!1};c.push(a),o((function(e){return c})),localStorage.setItem("todo",JSON.stringify([].concat(Object(d.a)(n),[a]))),t.value="";var r=document.querySelector(".div-body").clientWidth;document.getElementsByTagName("h3").clientWidth>r&&console.log("Preveliko je")}}),Object(c.jsx)("div",{className:"todo-list",children:Object(c.jsx)(u,{todo:n,markCard:function(e){var t=Object(d.a)(n);t[e].done=!t[e].done,o((function(e){return t})),localStorage.setItem("todo",JSON.stringify(t))},deleteCard:function(e){var t=Object(d.a)(n);t.splice(e,1),o((function(e){return t})),localStorage.setItem("todo",JSON.stringify(t))}})})]})};r.a.render(Object(c.jsx)(b,{}),document.querySelector("#app"))},4:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.a6609835.chunk.js.map