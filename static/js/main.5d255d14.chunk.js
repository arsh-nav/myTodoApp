(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,o){t.exports=o(22)},17:function(t,e,o){},20:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),l=o(8),s=o.n(l),i=(o(17),o(2)),c=o(3),r=o(5),u=o(4),h=o(6),m=o(9),d=o(1),f=function(){function t(e,o,a,n){Object(i.a)(this,t),this.title=o,this.completed=a,this.id=n,this.store=e}return Object(c.a)(t,[{key:"toggle",value:function(){this.completed?this.store.itemsTotal++:this.store.itemsTotal--,this.completed=!this.completed,1===this.store.flagActive?this.store.showActive():2===this.store.flagActive&&this.store.showCompleted()}}]),t}();Object(d.g)(f,{title:d.l,completed:d.l,toggle:d.d});var p=function(){function t(){Object(i.a)(this,t),this.todos=[],this.lastID=0,this.itemsTotal=0,this.completedItems=[],this.notCompletedItems=[],this.allItems=[],this.flag=!1,this.flagActive=0}return Object(c.a)(t,[{key:"addTodo",value:function(t){this.flag&&(this.todos=this.allItems,this.flag=!1),this.todos.push(new f(this,t,!1,this.lastID++)),this.itemsTotal=this.itemsNum(),this.saveTodos(),1===this.flagActive?(this.showActive(),this.flagActive=0):2===this.flagActive&&(this.showCompleted(),this.flagActive=0)}},{key:"delACompleted",value:function(t){this.todos=this.todos.filter(function(e){return t!==e.id}),this.itemsTotal=this.itemsNum(),this.saveTodos()}},{key:"clearCompleted",value:function(){this.todos=this.todos.filter(function(t){return!t.completed}),this.saveTodos()}},{key:"showAll",value:function(){this.todos=this.allItems,this.flag=!1,this.flagActive=0}},{key:"showActive",value:function(){this.completedItems=this.allItems.filter(function(t){return t.completed}),this.todos=this.allItems.filter(function(t){return!t.completed}),this.allItems=[].concat(Object(m.a)(this.completedItems),Object(m.a)(this.todos)),this.flag=!0,this.flagActive=1}},{key:"showCompleted",value:function(){this.notCompletedItems=this.allItems.filter(function(t){return!t.completed}),this.todos=this.allItems.filter(function(t){return t.completed}),this.allItems=[].concat(Object(m.a)(this.notCompletedItems),Object(m.a)(this.todos)),this.flag=!0,this.flagActive=2}},{key:"saveTodos",value:function(){this.allItems=this.todos}},{key:"itemsNum",value:function(){var t=0;return this.todos.map(function(e){e.completed||t++}),t}},{key:"showFooter",value:function(){return 0!==this.todos.length}}]),t}();Object(d.g)(p,{todos:d.l,addTodo:d.d,itemsTotal:d.l,time:d.l,pauseClock:d.d,startClock:d.d,clearCompleted:d.d,delACompleted:d.d,itemsNum:d.d,showFooter:d.d});var v=new p,g=o(7),b=(o(20),function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={value:""},o.handleKeyDown=function(t){13===t.keyCode&&(t.preventDefault(),""!==o.state.value.trim()&&v.addTodo(o.state.value),o.setState({value:""}))},o}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("header",null,n.a.createElement("h1",null,"todo"),n.a.createElement("input",{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})},onKeyDown:function(e){return t.handleKeyDown(e)},type:"text",className:"new-todo",placeholder:"what needs to be done"}))}}]),e}(a.Component)),j=function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).onToggle=function(){o.props.todo.toggle()},o}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.todo;return n.a.createElement("div",null,n.a.createElement("li",{className:t.completed?"completed":" "},n.a.createElement("div",{className:"view"},n.a.createElement("input",{onChange:this.onToggle,type:"checkbox",className:"toggle",value:"on",checked:t.completed}),n.a.createElement("label",null,t.title),n.a.createElement("div",null,n.a.createElement("button",{className:"destry",onClick:function(){return v.delACompleted(t.id)},style:{float:"right",transform:"translateY(-40px)",marginRight:"10px"}},n.a.createElement("img",{src:"Icons/cancel.png",style:{maxWidth:"25px"}}))))))}}]),e}(a.Component);Object(d.g)(j,{TodoItem:g.a});var O=j,w=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("footer",{class:"footer"},n.a.createElement("span",{class:"todo-count"},n.a.createElement("strong",null,v.itemsTotal)," item left"),n.a.createElement("ul",{class:"filters"},n.a.createElement("li",{onClick:function(){return v.showAll()}},n.a.createElement("a",{class:"selected",href:"#/"},"All")),n.a.createElement("li",{onClick:function(){return v.showActive()}},n.a.createElement("a",{href:"#/"},"Active")),n.a.createElement("li",{onClick:function(){return v.showCompleted()}},n.a.createElement("a",{href:"#/"},"Completed"))),n.a.createElement("button",{class:"clear-completed",onClick:function(){return v.clearCompleted()}},"Clear completed"))}}]),e}(a.Component);Object(d.g)(w,{TodoFooter:g.a});var y=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"callback",value:function(){if(0!==v.allItems.length)return n.a.createElement(w,null)}},{key:"render",value:function(){return n.a.createElement("section",{className:"main"},n.a.createElement("ul",{className:"todo-list"},v.todos.map(function(t){return n.a.createElement(O,{todo:t})}),this.callback()))}}]),e}(a.Component);Object(d.g)(y,{TodoItems:g.a});var k=y,E=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{id:"todoapp",className:"todoapp"},n.a.createElement(b,null),n.a.createElement(k,null))}}]),e}(a.Component);Object(d.g)(E,{App:g.a});var C=E;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.5d255d14.chunk.js.map