(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(5),a=n.n(u),c=n(1),s=n(3),i=n.n(s),l=n(4),d=n(12),m=n(6),f=function(e){var t=e.id,n=e.title,r=e.completed,u=e.user,a=e.deleteTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"title"},"".concat(t," ").concat(n)),r?o.a.createElement("p",{className:"completed"},"Yes"):o.a.createElement("p",{className:"not-completed"},"No"),u&&o.a.createElement("p",null,u.name),o.a.createElement("button",{type:"button",className:"button--close",onClick:function(){return a(t)}},"X"))},p=n(13),b="SET_IS_LOADED",y="SET_IS_LOADING",E="SET_QUERY_SORT",h="SET_TODOS",g="DELETE_TODO",v=Object(c.b)((function(e){return{todos:e.todosReducer.todos,query:e.queryReducer.query}}),(function(e){return{setDeleteTodo:function(t){return e(function(e){return{type:g,index:e}}(t))}}}))((function(e){var t=e.todos,n=e.query,u=e.setDeleteTodo,a=Object(r.useMemo)((function(){if(!t.length)return[];switch(n){case"title":return t.sort((function(e,t){return e.title.localeCompare(t.title)}));case"user":return t.sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0}));case"completed":return t.sort((function(e,t){return Number(e.completed)-Number(t.completed)}));case"reverse":return t.reverse();default:return t}}),[n,t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Todo List"),o.a.createElement("ul",{className:"card-list"},a.map((function(e){return o.a.createElement("li",{className:"card-item",key:e.id},o.a.createElement(f,Object.assign({},e,{deleteTodo:u})))}))))}));n(26);function L(e){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){return L("https://jsonplaceholder.typicode.com/todos")},N=function(){return L("https://jsonplaceholder.typicode.com/users")},T=Object(c.b)((function(e){return{query:e.queryReducer.query}}),(function(e){return{setQuery:function(t){return e({type:E,query:t})}}}))((function(e){var t=e.setQuery;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("title")}},"Sort by title"),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("user")}},"Sort by user"),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("completed")}},"Sort by completed"),o.a.createElement("button",{className:"button",type:"button",onClick:function(){return t("reverse")}},"Reverse"))})),q=Object(c.b)((function(e){return{isLoaded:e.loadReducer.isLoaded,isLoading:e.loadReducer.isLoading}}),(function(e){return{setIsLoaded:function(t){return e({type:b,isLoaded:t})},setIsLoading:function(t){return e({type:y,isLoading:t})},setTodos:function(t){return e(function(e){return{type:h,todos:Object(p.a)(e)}}(t))}}}))((function(e){var t=e.isLoaded,n=e.isLoading,r=e.setIsLoaded,u=e.setIsLoading,a=e.setTodos;function c(){return(c=Object(m.a)(i.a.mark((function e(){var t,n,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,Promise.all([j(),N()]).finally((function(){return r(!0)}));case 3:t=e.sent,n=Object(d.a)(t,2),o=n[0],c=n[1],a(o.map((function(e){return Object(l.a)({},e,{user:c.find((function(t){return t.id===e.userId}))})}))),u(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(v,null)):o.a.createElement("button",{className:"button",type:"button",onClick:function(){return c.apply(this,arguments)}},"Press to start"),n&&o.a.createElement("p",null,"Loading..."))})),k=n(2),R={isLoaded:!1,isLoading:!1},S={todos:[]},w={query:"id"},_=Object(k.b)({loadReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)({},e,{isLoaded:t.isLoaded});case y:return Object(l.a)({},e,{isLoading:t.isLoading});default:return e}},queryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{query:t.query};default:return e}},todosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{todos:e.todos.filter((function(e){return e.id!==t.index}))};case h:return{todos:t.todos};default:return e}}}),x=Object(k.c)(_);a.a.render(o.a.createElement(c.a,{store:x},o.a.createElement(q,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.197d8627.chunk.js.map