(this["webpackJsonpchess-position-trainer"]=this["webpackJsonpchess-position-trainer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),s=n.n(c),r=(n(13),n(3)),i=n(4),l=n(6),u=n(7),h=(n(14),n(5)),m=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={fen:"",score:"",hideScore:!0,picked:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;return fetch("chess-positional-trainer/games.json").then((function(e){return e.json()})).then((function(t){e.setState({games:t.games});var n=e.getRandomInt(e.state.games.length);e.setState({fen:t.games[n].fen,score:t.games[n].score})})).catch((function(e){console.error(e)}))}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"evaluateChoice",value:function(e){var t=parseInt(this.state.score)/100;e===(t<-.5?-1:t>.5?1:0)?this.setState({picked:!0,correct:!0}):this.setState({picked:!0,correct:!1})}},{key:"render",value:function(){var e=this;return console.log(this.state.fen),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"POSITIONAL CHESS TRAINER"),o.a.createElement(m.a,{calcWidth:function(e){var t=e.screenWidth;e.screenHeight;return Math.min(.4*t,450)},position:this.state.fen,draggable:!1,orientation:"w"===this.state.fen.split(" ")[1]?"white":"black"}),this.state.picked?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Evaluate the position:"),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"evalButtons",type:"button",onClick:function(){e.evaluateChoice(1)}},"White is stronger"),o.a.createElement("button",{className:"evalButtons",type:"button",onClick:function(){e.evaluateChoice(0)}},"The position is equal"),o.a.createElement("button",{className:"evalButtons",type:"button",onClick:function(){e.evaluateChoice(-1)}},"Black is stronger"))),this.state.picked?o.a.createElement("div",null,o.a.createElement("h2",null,this.state.correct?"Correct!":"Incorrect"),o.a.createElement("p",{id:"score"},"Stockfish evaluation: "+parseInt(this.state.score)/100),o.a.createElement("p",null,this.state.fen),o.a.createElement("button",{type:"button",onClick:function(){var t=e.getRandomInt(e.state.games.length);e.setState({picked:!1,hideScore:!0,fen:e.state.games[t].fen,score:e.state.games[t].score})}},"Next")):null)}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cee29efa.chunk.js.map