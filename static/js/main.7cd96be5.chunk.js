(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=a(8),l=a(5),c=a(1),u=a(2),m=a(4),d=a(3),p=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=function(e){var t=e.name;return r.a.createElement("div",{className:"user__username"},r.a.createElement("strong",null,"Name:"),t)},g=(a(15),function(e){var t=e.todo,a=t.title,n=t.user,o=t.completed,i=t.id;return r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"Todo \u2116",i),r.a.createElement("p",{className:"user__name"},r.a.createElement(b,n)),r.a.createElement("p",{className:"user__title"},r.a.createElement("strong",null,"Title :"),a),r.a.createElement("p",null,r.a.createElement("strong",null,"Status:"),o?r.a.createElement("span",{className:"user__completed-true"},"done"):r.a.createElement("span",{className:"user__completed-false"},"in procces")),r.a.createElement("p",{className:"user__id"},"User id :",n.id))}),f=(a(16),function(e){var t=e.todoList;return r.a.createElement("div",{className:"todo__list"},t.map((function(e){return r.a.createElement(g,{todo:e,key:e.id})})))}),y=(a(17),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userId:"",title:"",completed:"",id:e.props.todoId,titleError:!1,userError:!1},e.handleChangeTitle=function(t){e.setState({title:t.target.value.replace(/[^a-z\s]/gi,""),titleError:!1})},e.handleChangeUser=function(t){e.setState({userId:+t.target.value,userError:!1})},e.resetForm=function(){e.setState((function(e){return{title:"",completed:"",userId:"",id:e.id+1}}))},e.handleStatus=function(t){"done"===t.target.value&&e.setState({completed:"done"}),"in procces"===t.target.value&&e.setState({completed:"in procces"})},e.handleSubmit=function(t){var a=e.state,n=a.title,r=a.userId,o=a.completed,i=a.id;t.preventDefault(),0!==n.length?r<1?e.setState({userError:!0}):(e.props.newTodo({title:n,user:p.find((function(e){return r===e.id})),completed:o,id:i+1}),e.resetForm()):e.setState({title:"",titleError:!0})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.userId,n=e.titleError,o=e.userError;return r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Write new todo",maxLength:30,value:t,onChange:this.handleChangeTitle}),n&&r.a.createElement("p",{className:"form__error"}," Write new todo")),r.a.createElement("label",null,r.a.createElement("select",{className:"form__select",value:a,onChange:this.handleChangeUser},r.a.createElement("option",{value:"",hidden:!0},"Choose a user"),p.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("br",null),o&&r.a.createElement("p",{className:"form__error"},"Choose a user")),r.a.createElement("select",{className:"form__status",onChange:this.handleStatus},r.a.createElement("option",{value:"",hidden:!0},"Choose a status"),r.a.createElement("option",{value:"done"},"done"),r.a.createElement("option",{value:"in process"},"in process")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"form__button"},"Add"))}}]),a}(r.a.Component)),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:h.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:p.find((function(t){return t.id===e.userId}))})}))},e.newTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[t])}}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),p.length)),r.a.createElement("div",null,r.a.createElement(y,{users:p,newTodo:this.newTodo,todoId:h.length}),r.a.createElement(f,{todoList:this.state.todos})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7cd96be5.chunk.js.map