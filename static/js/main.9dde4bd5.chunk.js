(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(15),a(1)),i=a(2),l=a(4),h=a(3),m=a(5),u=(a(16),a(17),a(6)),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.handleOnClick,className:"character"},r.a.createElement("img",{alt:"https://placehold.it/200",src:"./images/".concat(this.props.character,".png"),name:this.props.character}))}}]),t}(n.Component),p=["butters","cartman","chef","commander","kenny","lemmiwinks","mackey","mrsclaridge","mrstotch","randymarsh","terrance","tweak"];var f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state=p.map(function(e){return Object(u.a)({},e,!1)}),a.handleOnClick=function(e){a.state[e.target.name]?(p.map(function(e){a.setState(Object(u.a)({},e,!1))}),a.props.handleLoss()):(a.setState(Object(u.a)({},e.target.name,!0)),a.props.handleGoodClick(),a.render())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}(p).map(function(t){return r.a.createElement(d,{handleOnClick:e.handleOnClick,character:t})}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={message:"LET'S GO!",score:0},a.handleLoss=function(){a.setState({message:"YOU LOSE, LOSER!",score:0}),a.render()},a.handleGoodClick=function(){a.setState({score:a.state.score+1,message:"Good Guess!"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("span",null,"Clicky Game!"),r.a.createElement("div",null,this.state.message),r.a.createElement("div",null,"Score: ",this.state.score)),r.a.createElement(f,{handleGoodClick:this.handleGoodClick,handleLoss:this.handleLoss}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.9dde4bd5.chunk.js.map