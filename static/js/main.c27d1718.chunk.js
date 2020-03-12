(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),u=n.n(o),c=n(1),s=n(5),i=n.n(s),l=n(3),d=n(13),m=n(7),f=n(2),p="SET_IS_LOADED",b="SET_IS_LOADING",y="SET_QUERY_SORT",E="SET_TODOS",O="DELETE_TODO",h=Object(c.b)(null,(function(e){return{setDeleteTodo:function(t){return e(function(e){return{type:O,index:e}}(t))}}}))((function(e){var t=e.id,n=e.title,r=e.completed,o=e.user,u=e.setDeleteTodo;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"title"},"".concat(t," ").concat(n)),r?a.a.createElement("p",{className:"completed"},"Yes"):a.a.createElement("p",{className:"not-completed"},"No"),o&&a.a.createElement("p",null,o.name),a.a.createElement("button",{type:"button",className:"button--close",onClick:function(){return u(t)}},"X"))})),j=Object(c.b)((function(e){return{todos:e.todosReducer.todos,query:e.queryReducer.query}}))((function(e){var t=e.todos,n=e.query,o=Object(r.useMemo)((function(){if(!t.length)return[];switch(n){case"title":return Object(f.a)(t).sort((function(e,t){return e.title.localeCompare(t.title)}));case"user":return Object(f.a)(t.sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0})));case"completed":return Object(f.a)(t.sort((function(e,t){return Number(e.completed)-Number(t.completed)})));case"reverse":return Object(f.a)(t.reverse());default:return t}}),[n,t]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Todo List"),a.a.createElement("ul",{className:"card-list"},o.map((function(e){return a.a.createElement("li",{className:"card-item",key:e.id},a.a.createElement(a.a.Fragment,null,a.a.createElement(h,e)))}))))}));n(26);function g(e){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){return g("https://jsonplaceholder.typicode.com/todos")},N=function(){return g("https://jsonplaceholder.typicode.com/users")},T=Object(c.b)((function(e){return{query:e.queryReducer.query}}),(function(e){return{setQuery:function(t){return e({type:y,query:t})}}}))((function(e){var t=e.setQuery;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("title")}},"Sort by title"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("user")}},"Sort by user"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("completed")}},"Sort by completed"),a.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("reverse")}},"Reverse"))})),q=Object(c.b)((function(e){return{isLoaded:e.loadReducer.isLoaded,isLoading:e.loadReducer.isLoading}}),(function(e){return{setIsLoaded:function(t){return e({type:p,isLoaded:t})},setIsLoading:function(t){return e({type:b,isLoading:t})},setTodos:function(t){return e(function(e){return{type:E,todos:Object(f.a)(e)}}(t))}}}))((function(e){var t=e.isLoaded,n=e.isLoading,r=e.setIsLoaded,o=e.setIsLoading,u=e.setTodos;function c(){return(c=Object(m.a)(i.a.mark((function e(){var t,n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),o(!0),e.next=4,Promise.all([L(),N()]);case 4:t=e.sent,n=Object(d.a)(t,2),a=n[0],c=n[1],u(a.map((function(e){return Object(l.a)({},e,{user:c.find((function(t){return t.id===e.userId}))})}))),o(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(T,null),!t&&a.a.createElement("button",{className:"button",type:"button",onClick:function(){return c.apply(this,arguments)}},"Press to start"),n?a.a.createElement("p",null,"Loading..."):a.a.createElement(j,null))})),k=n(4),R={isLoaded:!1,isLoading:!1},S={todos:[]},w={query:"id"},_=Object(k.b)({loadReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)({},e,{isLoaded:t.isLoaded});case b:return Object(l.a)({},e,{isLoading:t.isLoading});default:return e}},queryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{query:t.query};default:return e}},todosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)({},e,{todos:Object(f.a)(e.todos.filter((function(e){return e.id!==t.index})))});case E:return Object(l.a)({},e,{todos:Object(f.a)(t.todos)});default:return e}}}),x=Object(k.c)(_);u.a.render(a.a.createElement(c.a,{store:x},a.a.createElement(q,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c27d1718.chunk.js.map