(this.webpackJsonposa2=this.webpackJsonposa2||[]).push([[0],{18:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),o=n.n(l),u=n(13),s=n(14),i=n(16),m=n(15),c=n(17),d=function(e){var t=e.state,n=e.nameHandler,a=e.numberhandler,l=e.add;return r.a.createElement("form",{onSubmit:l},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:t.newName,onChange:n})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:t.newNumber,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},h=function(e){var t=e.state,n=e.onClick;return r.a.createElement("table",null,r.a.createElement("tbody",null,t.persons.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{type:"button",id:e.name,onClick:n},"Poista")))}))))},p=n(2),b=n.n(p),f=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).addPerson=function(e){e.preventDefault();var t={name:n.state.newName,number:n.state.newNumber};n.state.persons.some((function(e){return e.name===n.state.newName}))?n.setState({newName:"",newNumber:""}):b.a.post("/api/persons",t).then((function(e){b.a.get("/api/persons").then((function(e){n.setState({persons:e.data})}))}))},n.handleNameChange=function(e){n.setState({newName:e.target.value})},n.handleNUmberChange=function(e){n.setState({newNumber:e.target.value})},n.onClick=function(e){var t=n.state.persons.find((function(t){return t.name===e.target.getAttribute("id")}));window.confirm("Poistetaanko "+t.name+"?")&&b.a.delete("/api/persons/".concat(t.id)).then((function(e){var a=n.state.persons.filter((function(e){return e.name!==t.name}));n.setState({persons:a})}))},n.state={persons:[],newName:"",newNumber:""},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/persons").then((function(t){console.log(t.data),e.setState({persons:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(d,{state:this.state,nameHandler:this.handleNameChange,numberhandler:this.handleNUmberChange,add:this.addPerson}),r.a.createElement("h2",null,"Numerot"),r.a.createElement(h,{state:this.state,onClick:this.onClick}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.422c09d3.chunk.js.map