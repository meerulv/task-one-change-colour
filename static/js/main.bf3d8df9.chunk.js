(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(65)},48:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(22),c=a.n(r),o=(a(48),a(41)),i=a(21),s=a(14),u=a(15),m=a(18),h=a(16),d=a(19),E=a(66),g=a(67),v=a(68),p=a(69),b=a(70),f=a(71),k=function(e){return n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement(g.a,{top:!0,width:"100%",src:"https://i1.creativecow.net/u/107592/paints_more_usethisonesmall.jpg",alt:"Card image cap"}),n.a.createElement(v.a,null,n.a.createElement(p.a,null,n.a.createElement("h6",{className:"card-title"},"Change Modal's Colour On Click")),n.a.createElement(b.a,null),n.a.createElement(f.a,null),n.a.createElement("a",{className:"btn btn-default float-right",href:"/change-colour"},"See More"))))};var O=function(){return n.a.createElement("div",{className:"container mt-5 pt-5"},n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,n.a.createElement("span",{class:"glyphicon glyphicon-tasks"}," ")," React.Js Tasks"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(k,null))))},C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O,null))}}]),t}(n.a.Component),j=a(7),w=a(72),y=a(73),N=a(74),B=a(75),S=a(76),T=a(77),M=a(78),R=a(86),x=a(79),A=a(80),J=a(81),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggle=a.toggle.bind(Object(j.a)(a)),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(w.a,{color:"light",light:!0,expand:"md",fixed:"top"},n.a.createElement(y.a,{href:"/"},"Digi-X / Lunch and Learn"),n.a.createElement(N.a,{onClick:this.toggle}),n.a.createElement(B.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(S.a,{className:"ml-auto",navbar:!0},n.a.createElement(T.a,null,n.a.createElement(M.a,{href:"/abouts/"},"About")),n.a.createElement(R.a,{nav:!0,inNavbar:!0},n.a.createElement(x.a,{nav:!0,caret:!0},"Tasks"),n.a.createElement(A.a,{right:!0},n.a.createElement(J.a,null,n.a.createElement("a",{href:"/change-colour"}," Change Colours")),n.a.createElement(J.a,{divider:!0}),n.a.createElement(J.a,null,n.a.createElement("a",{href:"/"}," See All Tasks"))))))))}}]),t}(n.a.Component),L=a(40),W=a(85),q=a(82),I=a(83),_=a(84),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(W.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(q.a,{toggle:this.toggle},this.props.title),n.a.createElement(I.a,null,this.props.colour," is selected."),n.a.createElement(_.a,null,n.a.createElement(L.a,{color:"primary",onClick:this.toggle},"Close"))))}}]),t}(n.a.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).ColourModalRef=function(e){var t=e.toggle;a.showModal=t},a.handleClick=function(e){console.log(e.target.getAttribute("id"));var t=a.getColours()[e.target.getAttribute("id")];a.setState({colour:t.value}),a.showModal()},a.state={colour:"No colour Selected"},a.handleClick=a.handleClick.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getColours",value:function(){return[{key:"primary",value:"Blue"},{key:"danger",value:"Red"},{key:"warning",value:"Yellow",requireDarkBg:!0},{key:"light",value:"White",requireDarkBg:!0},{key:"dark",value:"Black"},{key:"info",value:"Cloud Blue"}]}},{key:"render",value:function(){return n.a.createElement("div",{className:"container mt-5 pt-5"},n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,"Task: Change Colour"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 mb-4"},n.a.createElement("h6",{className:"card-title"},"OBJECTIVES:"),n.a.createElement("hr",null),n.a.createElement("ol",null,n.a.createElement("li",null,"To create components for the folowing items:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Modal"),n.a.createElement("li",null,"Buttons")),n.a.createElement("li",null,"To change colour based on clicking buttons."))),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h6",{className:"card-title"},"RESULT:"),n.a.createElement("hr",null),this.getColours().map(function(e,t){var a=this;return n.a.createElement(L.a,{key:t,id:t,className:"m-3 btn-lg",color:e.key,onClick:function(e){return a.handleClick(e)}},e.value)},this),n.a.createElement(U,{colour:this.state.colour,title:this.state.colour,ref:this.ColourModalRef}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);var X=n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(D,null),n.a.createElement(i.a,{exact:!0,path:"/",component:C}),n.a.createElement(i.a,{path:"/change-colour",component:V})));c.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.bf3d8df9.chunk.js.map