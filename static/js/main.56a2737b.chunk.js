(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),i=n(2),s=n(4),h=n(3),u=n(5),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.ChangeField,n=e.AlphabeticOrder;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue ",type:"search",name:"robot",placeholder:"search robot",onChange:t}),r.a.createElement("h4",null,"In Ascending Alphabetical Order ?"),r.a.createElement("input",{type:"checkbox",name:"checked",onClick:n}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"500px"}},e.children)},f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opsss! Something went wrong!"):this.props.children}}]),t}(a.Component),g=(n(15),n(17),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).ChangeField=function(t){e.setState({searchField:t.target.value})},e.AlphabeticOrder=function(){e.setState(function(e){return{checked:!e.checked}})},e.Compare=function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase(),r=0;return n>a?r=1:n<a&&(r=-1),r},e.state={robots:[],searchField:"",checked:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=e.checked,o=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())});return console.log(o),a?o.sort(this.Compare):console.log(a),t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"bg"},r.a.createElement("h1",null,"Robot Friends"),r.a.createElement(b,{ChangeField:this.ChangeField,AlphabeticOrder:this.AlphabeticOrder})),r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(d,{robots:o})))):r.a.createElement("h1",null,"Loading ... ")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.56a2737b.chunk.js.map