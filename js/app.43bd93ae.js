(function(t){function e(e){for(var n,c,r=e[0],i=e[1],l=e[2],d=0,m=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-contact-list/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10ac":function(t,e,a){},4716:function(t,e,a){"use strict";a("10ac")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],c=(a("5c0b"),a("2877")),r={},i=Object(c["a"])(r,s,o,!1,null,null,null),l=i.exports,u=a("5f5b"),d=(a("f9e3"),a("2dd8"),a("f5df1"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 h2 text-muted mt-5"},[t._v("Список пользователей")]),a("div",{staticClass:"form-group col-12 mt-2"},[a("div",{staticClass:"row"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.search,expression:"search",modifiers:{lazy:!0}}],staticClass:"col-4 offset-2 form-control",attrs:{type:"search",placeholder:"Поиск",minlength:"2",required:""},domProps:{value:t.search},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchContact()},change:function(e){t.search=e.target.value}}}),a("button",{staticClass:"btn btn-sm btn-success col-1",on:{click:function(e){return t.searchContact()}}},[t._v(" Искать ")]),a("router-link",{staticClass:"btn btn-sm btn-outline-info ml-1",attrs:{tag:"button",to:"/new"}},[t._v(" Добавить ")]),a("button",{staticClass:"btn btn-sm btn-outline-primary ml-1",on:{click:function(e){return t.onEdit()}}},[t._v(" Редактировать ")]),a("button",{staticClass:"btn btn-sm btn-outline-danger ml-1",on:{click:function(e){return t.onDelete()}}},[t._v(" Удалить ")])],1),a("div",{staticClass:"row"},[t.canEdit&&!t.canDelete?a("div",{staticClass:"col mt-2 text-primary"},[t._v(" Кликните на пользователя для редактирования или нажмите повторно ")]):t._e(),t.canDelete&&!t.canEdit?a("div",{staticClass:"col mt-2 text-danger"},[t._v(" Кликните на пользователя для удаления или нажмите повторно ")]):t._e()]),a("table",{staticClass:"table table-bordered table-responsive-lg mt-2"},[a("thead",[a("tr",t._l(t.titles,(function(e){return a("th",{key:e,staticClass:"pointer",attrs:{scope:"col"},on:{click:function(a){return t.sortContacts(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),t.search?t._e():a("tbody",t._l(t.contacts,(function(e){return a("tr",{key:e.id,class:t.canEdit||t.canDelete?"pointer":"",on:{click:function(a){t.canEdit&&t.changeContact(e),t.canDelete&&t.deleteContact(e)}}},[a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.password))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.fullName))]),a("td",[t._v(t._s(e.status))]),a("td",[t._v(t._s(e.createDate))]),a("td",[t._v(t._s(e.changeDate))])])})),0),t.search?a("tbody",t._l(t.searchContacts,(function(e){return a("tr",{key:e.id,class:t.canEdit||t.canDelete?"pointer":"",on:{click:function(a){t.canEdit&&t.changeContact(e),t.canDelete&&t.deleteContact(e)}}},[a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.password))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.fullName))]),a("td",[t._v(t._s(e.status))]),a("td",[t._v(t._s(e.createDate))]),a("td",[t._v(t._s(e.changeDate))])])})),0):t._e()]),t.search?a("div",{staticClass:"col-6 offset-3 alert alert-success pointer",on:{click:function(e){return t.closeSearch()}}},[t._v(" Нажмите чтобы вернуться ко всем контактам ")]):t._e()])])])},p=[],f=(a("ac1f"),a("841c"),{data:function(){return{canEdit:!1,canDelete:!1,search:""}},computed:{contacts:function(){return this.$store.getters.contacts},searchContacts:function(){return this.$store.getters.searchContacts},titles:function(){return this.$store.getters.titles}},methods:{onEdit:function(){this.canDelete=!1,this.canEdit?this.canEdit=!1:this.canEdit=!0},onDelete:function(){this.canEdit=!1,this.canDelete?this.canDelete=!1:this.canDelete=!0},changeContact:function(t){this.$router.push("/contact/"+t.id)},deleteContact:function(t){this.$store.dispatch("deleteContact",t)},sortContacts:function(t){var e="";switch(t){case"Почта":e="email";break;case"Телефон":e="phone";break;case"Дата создания":e="createDate";break;case"Дата Изменения":e="changeDate";break;case"Статус":e="status";break;case"ФИО":e="fullName";break;case"Пароль":e="password"}this.$store.dispatch("sortContacts",e)},searchContact:function(){var t=this.search.toLowerCase();t.length>0&&this.$store.dispatch("searchContact",t)},closeSearch:function(){this.search=""}}}),v=f,h=(a("4716"),Object(c["a"])(v,m,p,!1,null,null,null)),C=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("table",{staticClass:"table table-bordered table-responsive-lg mt-2"},[a("thead",[a("tr",t._l(t.titles,(function(e){return a("th",{key:e,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",t._l(t.contacts,(function(e){return a("tr",{key:e.id},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"contact.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"contact.password"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.password},on:{input:function(a){a.target.composing||t.$set(e,"password",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"contact.phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.phone},on:{input:function(a){a.target.composing||t.$set(e,"phone",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"contact.fullName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fullName},on:{input:function(a){a.target.composing||t.$set(e,"fullName",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"contact.status"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.status},on:{input:function(a){a.target.composing||t.$set(e,"status",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.createDate,expression:"contact.createDate"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:e.createDate},on:{input:function(a){a.target.composing||t.$set(e,"createDate",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.changeDate,expression:"contact.changeDate"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:e.changeDate},on:{input:function(a){a.target.composing||t.$set(e,"changeDate",a.target.value)}}})])])})),0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("router-link",{staticClass:"btn btn-danger mr-1",attrs:{to:"/"}},[t._v("Отменить")]),a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.saveContact()}}},[t._v("Сохранить")])],1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 h2 text-muted mt-5"},[t._v("Редактировать контакт")])])}],b={data:function(){return{date:""}},computed:{id:function(){return parseInt(this.$route.params.id)},contacts:function(){var t=this.id;return this.$store.getters.contactById(t)},titles:function(){return this.$store.getters.titles},localeDate:function(){return new Date(this.date).toLocaleDateString()}},methods:{saveContact:function(){var t=this.contacts[0],e={id:t.id,email:t.email,phone:t.phone,password:t.password,fullName:t.fullName,status:t.status,createDate:t.createDate,changeDate:this.localeDate};this.$store.dispatch("saveContact",e),this.$router.push("/")}},created:function(){var t=this;this.intervalId=setInterval((function(){return t.date=Date.now()}),1e3)},beforeDestroy:function(){this.intervalId&&clearInterval(this.intervalId)}},w=b,D=Object(c["a"])(w,g,_,!1,null,null,null),y=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("form",{staticClass:"form",attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[a("div",{staticClass:"row"},[a("table",{staticClass:"table table-bordered table-responsive-lg mt-2"},[a("thead",[a("tr",t._l(t.titles,(function(e){return a("th",{key:e,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",[a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],staticClass:"form-control email",attrs:{id:"email",type:"email",required:""},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.password,expression:"contact.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",required:""},domProps:{value:t.contact.password},on:{input:function(e){e.target.composing||t.$set(t.contact,"password",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.phone,expression:"contact.phone"}],staticClass:"form-control",attrs:{id:"phone",type:"phone",required:""},domProps:{value:t.contact.phone},on:{input:function(e){e.target.composing||t.$set(t.contact,"phone",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.fullName,expression:"contact.fullName"}],staticClass:"form-control",attrs:{id:"fullName",type:"text",required:""},domProps:{value:t.contact.fullName},on:{input:function(e){e.target.composing||t.$set(t.contact,"fullName",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.status,expression:"contact.status"}],staticClass:"form-control",attrs:{id:"status",type:"text",required:""},domProps:{value:t.contact.status},on:{input:function(e){e.target.composing||t.$set(t.contact,"status",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.createDate,expression:"contact.createDate"}],staticClass:"form-control",attrs:{disabled:"",id:"createDate",type:"text"},domProps:{value:t.contact.createDate},on:{input:function(e){e.target.composing||t.$set(t.contact,"createDate",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.changeDate,expression:"contact.changeDate"}],staticClass:"form-control",attrs:{disabled:"",id:"changeDate",type:"text"},domProps:{value:t.contact.changeDate},on:{input:function(e){e.target.composing||t.$set(t.contact,"changeDate",e.target.value)}}})])])])])]),a("div",{staticClass:"row"},[t.errors.length?a("div",{staticClass:"col"},[a("b",[t._v("Пожалуйста исправьте указанные ошибки:")]),a("ul",t._l(t.errors,(function(e){return a("li",{key:e,staticClass:"text-danger"},[t._v(t._s(e))])})),0)]):t._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("router-link",{staticClass:"btn btn-danger mr-1",attrs:{to:"/",tag:"button"}},[t._v("Отменить")]),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Сохранить")])],1)])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 h2 text-muted mt-5"},[t._v("Добавить контакт")])])}],$={data:function(){return{contact:{email:"",password:"",phone:"",fullName:"",status:"",createDate:"",changeDate:""},date:"",errors:[]}},computed:{titles:function(){return this.$store.getters.titles},localeDate:function(){return new Date(this.date).toLocaleDateString()}},methods:{checkForm:function(){this.createContact()},createContact:function(){var t=this.$store.getters.contacts.length+1,e={id:t,email:this.contact.email,phone:this.contact.phone,password:this.contact.password,fullName:this.contact.fullName,status:this.contact.status,createDate:this.localeDate,changeDate:this.contact.changeDate};this.$store.dispatch("createContact",e),this.$router.push("/")}},created:function(){var t=this;this.intervalId=setInterval((function(){return t.date=Date.now()}),1e3)},beforeDestroy:function(){this.intervalId&&clearInterval(this.intervalId)}},E=$,k=Object(c["a"])(E,N,x,!1,null,null,null),O=k.exports;n["default"].use(d["a"]);var T=[{path:"/",name:"Searchlist",component:C},{path:"/contact/:id",props:!0,name:"EditContact",component:y},{path:"/new",name:"CreateContact",component:O}],P=new d["a"]({mode:"history",base:"/vue-contact-list/",routes:T}),S=P,A=a("2f62"),j=(a("4de4"),a("caad"),a("fb6a"),a("45fc"),a("a434"),a("d3b7"),a("07ac"),a("25f0"),a("2532"),{state:{contacts:[{id:1,email:"antonov@mail.ru",password:"zxc",phone:"8-910-910-91-10",fullName:"Антонов Антон Анатольевич",status:"admin",createDate:"09.11.2020",changeDate:"09.11.2020"},{id:2,email:"petrov@mail.ru",password:"abc",phone:"8-910-910-91-11",fullName:"Петров Петр Петрович",status:"client",createDate:"09.11.2020",changeDate:"09.11.2020"},{id:3,email:"ivanov@mail.ru",password:"123",phone:"8-910-910-91-12",fullName:"Иванов Иван Иванович",status:"partner",createDate:"09.11.2020",changeDate:"09.11.2020"}],searchContacts:[],titles:["Почта","Пароль","Телефон","ФИО","Статус","Дата создания","Дата изменения"]},mutations:{DELETE_CONTACT:function(t,e){var a=t.contacts.filter((function(t){return t.id!=e}));t.contacts=a},CREATE_CONTACT:function(t,e){t.contacts.push(e)},SAVE_CONTACT:function(t,e){var a=e.id-1,n=t.contacts.slice();n.splice(a,1,e),t.contacts=n},SORT_CONTACTS:function(t,e){var a=t.contacts.sort((function(t,a){return t[e]>a[e]?1:-1}));t.contacts=a},SEARCH_CONTACT:function(t,e){var a=e,n=t.contacts.filter((function(t){return Object.values(t).some((function(t){return t.toString().toLowerCase().includes(a)}))}));t.searchContacts=n}},actions:{deleteContact:function(t,e){var a=t.commit;a("DELETE_CONTACT",e.id)},createContact:function(t,e){var a=t.commit;a("CREATE_CONTACT",e)},saveContact:function(t,e){var a=t.commit;a("SAVE_CONTACT",e)},sortContacts:function(t,e){var a=t.commit;a("SORT_CONTACTS",e)},searchContact:function(t,e){var a=t.commit;a("SEARCH_CONTACT",e)}},getters:{contacts:function(t){return t.contacts},titles:function(t){return t.titles},contactById:function(t){return function(e){return t.contacts.filter((function(t){return t.id===e}))}},searchContacts:function(t){return t.searchContacts}}});n["default"].use(A["a"]);var I=new A["a"].Store({modules:{contacts:j}});n["default"].use(u["a"]),n["default"].config.productionTip=!1,new n["default"]({router:S,store:I,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.43bd93ae.js.map