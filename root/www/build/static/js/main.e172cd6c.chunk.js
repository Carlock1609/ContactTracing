(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/spinner.2c9683e0.gif"},45:function(e,a,t){e.exports=t(75)},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=t(2),s=t(7),i=t(5),u=t(6),m=t.n(u),d=t(9),E=t(11),p=t.n(E),h=t(77),b=function(e,a){return function(t){var n=Object(h.a)();t({type:"SET_ALERT",payload:{msg:e,alertType:a,id:n}}),setTimeout((function(){return t({type:"REMOVE_ALERT",payload:n})}),5e3)}},v=function(e){e?p.a.defaults.headers.common["x-auth-token"]=e:delete p.a.defaults.headers.common["x-auth-token"]},f=function(){return function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&v(localStorage.token),e.prev=1,e.next=4,p.a.get("/api/auth");case 4:t=e.sent,a({type:"USER_LOADED",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()},g=Object(i.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:"CLEAR_PROFILE"}),e({type:"LOGOUT"})}}})((function(e){var a=e.auth,t=a.isAuthenticated,l=a.loading,c=e.logout,s=r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",{className:"nav-item mt-1"},r.a.createElement(o.b,{className:"nav-link",to:"/dashboard"},r.a.createElement("i",{className:"fas fa-user mr-1"})," "," ","DASHBOARD",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/journal"},"JOURNAL")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"#"},"SEARCH")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/resources"},"RESOURCES")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/contact-us"},"CONTACT US")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement(o.b,{onClick:c,className:"nav-link",to:"#"},"LOGOUT")))),i=r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("br",null),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"ABOUT")),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/resources"},"RESOURCES")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/contact-us"},"CONTACT US")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login"},"LOGIN")),r.a.createElement("span",{id:"nav_dot"},"-"),r.a.createElement("hr",{id:"navHr"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/register"},"REGISTER")),r.a.createElement("br",null)));return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid mb-0"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{id:"header_div",className:"display-4"},"CONTACT TRACING HEALTH JOURNAL"))),r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("button",{className:"navbar-toggler navbar-light mx-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"}),r.a.createElement("span",{id:"toggle_icon"},"MENU")),!l&&r.a.createElement(n.Fragment,null,t?s:i)))})),y=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement("section",{className:"container-fluid text-center"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},"WELCOME"),r.a.createElement(o.b,{to:"/register",id:"landing_btn",className:"btn btn-outline-dark"},"Sign Up"),r.a.createElement(o.b,{to:"/login",id:"landing_btn",className:"btn btn-outline-dark"},"Login"))))})),N=t(15),O=t(4),A=t(17),w=t(1),R=t.n(w),j=function(e){var a=e.setAlert,t=e.register,l=e.isAuthenticated,c=Object(n.useState)({name:"",email:"",password:"",password2:""}),i=Object(A.a)(c,2),u=i[0],E=i[1],p=u.name,h=u.email,b=u.password,v=u.password2,f=function(e){return E(Object(O.a)(Object(O.a)({},u),{},Object(N.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),b!==v?a("Passwords do not match","danger"):t({name:p,email:h,password:b});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"container-fluid text-center"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Sign Up"),r.a.createElement("form",{className:"form",onSubmit:function(e){return g(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",value:p,placeholder:"Name here...",onChange:function(e){return f(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",value:h,placeholder:"Email address...",onChange:function(e){return f(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",minLength:"6",value:b,placeholder:"Password here...",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password2",minLength:"6",value:v,placeholder:"Password again...",onChange:function(e){return f(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-outline-dark",value:"Register"}))),r.a.createElement("p",{className:"my-1"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Sign In")))))};j.protoTypes={setAlert:R.a.func.isRequired,register:R.a.func.isRequired,isAuthenticated:R.a.bool};var C=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:b,register:function(e){var a=e.name,t=e.email,n=e.password;return function(){var e=Object(d.a)(m.a.mark((function e(r){var l,c,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},c=JSON.stringify({name:a,email:t,password:n}),e.prev=2,e.next=5,p.a.post("/api/users",c,l);case 5:o=e.sent,r({type:"REGISTER_SUCCESS",payload:o.data}),r(f()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(s=e.t0.response.data.errors)&&s.forEach((function(e){return r(b(e.msg,"danger"))})),r({type:"REGISTER_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}})(j),S=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,a){return function(){var t=Object(d.a)(m.a.mark((function t(n){var r,l,c,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:a}),t.prev=2,t.next=5,p.a.post("/api/auth",l,r);case 5:c=t.sent,n({type:"LOGIN_SUCCESS",payload:c.data}),n(f()),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),(o=t.t0.response.data.errors)&&o.forEach((function(e){return n(b(e.msg,"danger"))})),n({type:"LOGIN_FAIL"});case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var a=e.login,t=e.isAuthenticated,l=Object(n.useState)({email:"",password:""}),c=Object(A.a)(l,2),i=c[0],u=c[1],E=i.email,p=i.password,h=function(e){return u(Object(O.a)(Object(O.a)({},i),{},Object(N.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(E,p);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return t?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"container-fluid text-center"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Login"),r.a.createElement("form",{className:"form",onSubmit:function(e){return b(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",value:E,placeholder:"Email address...",onChange:function(e){return h(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",minLength:"6",value:p,placeholder:"Password here...",onChange:function(e){return h(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-outline-dark",value:"Login"}))),r.a.createElement("p",{className:"my-1"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Sign Up")))))})),k=Object(i.b)((function(e){return{alerts:e.alert}}))((function(e){var a=e.alerts;return null!==a&&a.length>0&&a.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))})),x=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/calendar-entry"},"Add Calender Entry"))},_=t(42),T=(t(73),function(){return r.a.createElement("div",null,r.a.createElement(_.a,null))}),D=function(){return function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("api/dashboard");case 3:t=e.sent,a({type:"GET_DASHBOARD",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"DASHBOARD_ERROR",payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},L=Object(i.b)(null,{deleteCalendar:function(e){return function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.delete("api/dashboard/calendar/".concat(e));case 3:n=a.sent,t({type:"UPDATE_CALENDAR",payload:n.data}),t(b("Calendar entry removed","success")),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t({type:"DASHBOARD_ERROR",payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var a=e.calendar,t=e.deleteCalendar,l=a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.time),r.a.createElement("td",null,e.choice),r.a.createElement("td",null,e.notes),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t(e._id)},className:"btn btn-dark"},"Delete")))}));return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Calendar"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"date"),r.a.createElement("th",null,"time"),r.a.createElement("th",null,"choice"),r.a.createElement("th",null,"notes"))),r.a.createElement("tbody",null,l)),r.a.createElement(T,null))})),I=function(e){var a=e.dashboard.calendar;return r.a.createElement("div",null,r.a.createElement(L,{calendar:a}))},U=Object(i.b)(null,{addJournal:function(e,a){return function(){var t=Object(d.a)(m.a.mark((function t(n){var r,l,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={headers:{"Content-Type":"application/json"}},t.next=4,p.a.put("/api/dashboard/journal",e,r);case 4:l=t.sent,n({type:"UPDATE_CALENDAR",payload:l.data}),n(b("Journal entry added","success")),a.push("/dashboard"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),(c=t.t0.response.data.errors)&&c.forEach((function(e){return n(b(e.msg,"danger"))})),n({type:"DASHBOARD_ERROR",payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(s.g)((function(e){var a=e.addJournal,t=e.history,l=Object(n.useState)({date:"",time:"",activity:"",location:"",choice1:"",choice2:"",contact:"",notes:""}),c=Object(A.a)(l,2),o=c[0],s=c[1],i=o.date,u=o.time,m=o.activity,d=o.location,E=o.choice1,p=o.choice2,h=o.contact,b=o.notes,v=function(e){return s(Object(O.a)(Object(O.a)({},o),{},Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o,t)}},r.a.createElement("div",{id:"journal_form"},r.a.createElement("h5",{id:"form_holder"},"Date/Time: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-1"},r.a.createElement("input",{type:"date",name:"date",value:i,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-1"},r.a.createElement("input",{type:"time",name:"time",value:u,onChange:function(e){return v(e)}}))),r.a.createElement("h5",{id:"form_holder"},"Activity/Location: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 mb-1"},r.a.createElement("input",{type:"text",name:"activity",value:m,onChange:function(e){return v(e)},placeholder:"Activity here..."})),r.a.createElement("div",{className:"col-lg-6 col-md-6 mb-1"},r.a.createElement("input",{type:"text",name:"location",value:d,onChange:function(e){return v(e)},placeholder:"Location here..."}))),r.a.createElement("h5",{id:"form_holder"},"Did you wear a mask: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-1"},r.a.createElement("select",{name:"choice1",value:E,onChange:function(e){return v(e)}},r.a.createElement("option",{value:"wore_mask"},"Wore Mask"),r.a.createElement("option",{value:"did_not"},"Did not wear Mask")))),r.a.createElement("h5",{id:"form_holder"},"Did others wear a mask: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-1"},r.a.createElement("select",{name:"choice2",value:p,onChange:function(e){return v(e)}},r.a.createElement("option",{value:"wore_mask"},"Wore Mask"),r.a.createElement("option",{value:"did_not"},"Did not wear Mask")))),r.a.createElement("h5",{id:"form_holder"},"Contact with COVID: "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("textarea",{type:"text",name:"contact",placeholder:"Any contact with COVID here...",value:h,onChange:function(e){return v(e)}}))),r.a.createElement("h5",{id:"form_holder"},"Other notes: "),r.a.createElement("div",{className:"row mb-1"},r.a.createElement("div",{className:"col-12"},r.a.createElement("textarea",{type:"text",name:"notes",placeholder:"Any notes here...",value:b,onChange:function(e){return v(e)}}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-outline-dark",type:"submit"},"Submit"))))))}))),H=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",null,"CREATE A JOURNAL ENTRY")),r.a.createElement(U,null),r.a.createElement("hr",null))},F=t(39),G=t.n(F),J=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:G.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."}))},M=Object(i.b)((function(e){return{auth:e.auth,dashboard:e.dashboard}}),{getCurrentDashboard:D})((function(e){var a=e.getCurrentDashboard,t=e.auth.user,l=e.dashboard,c=l.dashboard,s=l.loading;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement(n.Fragment,null,null===c||s?r.a.createElement(J,null):r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Welcome ",t&&t.name),null!==c?r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement("div",{id:"calenderDiv"},r.a.createElement(n.Fragment,null,r.a.createElement(I,{dashboard:c}))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{id:"journalDiv"},c.journal.length>0?r.a.createElement(n.Fragment,null,r.a.createElement(H,{dashboard:c})):r.a.createElement("div",null,r.a.createElement(n.Fragment,null,r.a.createElement(H,{dashboard:c})),r.a.createElement("h4",null,"No Journal entries")))):r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"You have not Registered yet"),r.a.createElement(o.b,{to:"/register"},"Register"))))})),P=Object(i.b)(null,{addCalendar:function(e,a){return function(){var t=Object(d.a)(m.a.mark((function t(n){var r,l,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={headers:{"Content-Type":"application/json"}},t.next=4,p.a.put("/api/dashboard/calendar",e,r);case 4:l=t.sent,n({type:"UPDATE_CALENDAR",payload:l.data}),n(b("Calendar entry added","success")),a.push("/dashboard"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),(c=t.t0.response.data.errors)&&c.forEach((function(e){return n(b(e.msg,"danger"))})),n({type:"DASHBOARD_ERROR",payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(s.g)((function(e){var a=e.addCalendar,t=e.history,l=Object(n.useState)({date:"",time:"",choice:"",notes:""}),c=Object(A.a)(l,2),o=c[0],s=c[1],i=o.date,u=o.time,m=o.choice,d=o.notes,E=function(e){return s(Object(O.a)(Object(O.a)({},o),{},Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o,t)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{type:"date",name:"date",value:i,onChange:function(e){return E(e)},required:!0})),r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{type:"time",name:"time",value:u,onChange:function(e){return E(e)},required:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("select",{name:"choice",value:m,onChange:function(e){return E(e)},required:!0},r.a.createElement("option",{value:"wore_mask"},"Stayed Home"),r.a.createElement("option",{value:"did_not"},"Deliveries"),r.a.createElement("option",{value:"did_not"},"Symptoms")))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("textarea",{type:"text",name:"notes",value:d,onChange:function(e){return E(e)},required:!0,placeholder:"Notes here..."}))),r.a.createElement("button",{className:"btn btn-outline-dark",type:"submit"},"Submit")))}))),B=Object(i.b)(null,{deleteJournal:function(e){return function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.delete("api/dashboard/journal/".concat(e));case 3:n=a.sent,t({type:"UPDATE_CALENDAR",payload:n.data}),t(b("Journal entry removed","success")),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t({type:"DASHBOARD_ERROR",payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var a=e.dashboard;e.deleteJournal;return console.log(a),r.a.createElement("div",null,"test")})),V=Object(i.b)((function(e){return{dashboard:e.dashboard}}),{getCurrentDashboard:D})((function(e){var a=e.getCurrentDashboard,t=e.dashboard,l=t.dashboard;t.loading;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement(n.Fragment,null,r.a.createElement(B,{dashboard:l}))})),q=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-5"},"ABOUT"),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("em",{id:"about_body"},"Thank you for visiting us!",r.a.createElement("br",null),r.a.createElement("br",null),"This journal was designed with the goal of helping the health departments and our health care providers across our country gather data to slow the transmission of    COVID-19.",r.a.createElement("br",null),r.a.createElement("br",null),"Contact tracing is a tool that has been used by health departments for years to monitor diseases such as tuberculosis and HIV by being able to quickly identify a persons exposure and then provide information and assistance.",r.a.createElement("br",null),r.a.createElement("br",null),"If you should ever be notified that you or someone you know has been exposed to COVID-19 we hope your use of this journal proves beneficial in assisting a contact tracer to advise those who may become ill.",r.a.createElement("br",null),r.a.createElement("br",null),"It is our hope that with communities and families working together to compile information, there will be fewer cases of infection.",r.a.createElement("br",null),r.a.createElement("br",null),"We hope you find this tool useful and that you stay safe and healthy!")),r.a.createElement("div",{className:"ml-5 mt-5"},r.a.createElement("p",null,r.a.createElement("b",null,"Sincerely"),", ")),r.a.createElement("div",{className:"ml-5 mt-3"},r.a.createElement("img",{src:"https://www.ustogethertrace.com/wp-content/uploads/2020/06/Picture1-300x84.png",alt:"US Together Logo"})),r.a.createElement("hr",null))},W=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-5"},"Resources"),r.a.createElement("div",{id:"resourcesDiv",className:"container mt-5"},r.a.createElement("h4",null,"FOR MORE INFORMATION VISIT:"),r.a.createElement("h4",null,"COVIDACTNOW.ORG"),r.a.createElement("h4",null,"CDC.GOV/CORNAVIRUS/2019"),r.a.createElement("p",null,r.a.createElement("b",null,"\xa9 2020 UStogether All Rights Reserved")),r.a.createElement("hr",{className:"mt-4"})))},Y=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-5"},"CONTACT US"),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h5",null,"EMAIL: development@email.com"),r.a.createElement("h5",null,"PHONE: 1-800-379-1511"),r.a.createElement("a",{id:"facebook_link",href:"https://www.facebook.com/US-together-104235761324547/?view_public_for=104235761324547"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("hr",null)))},z=t(44),K=Object(i.b)((function(e){return{auth:e.auth}}))((function(e){var a=e.component,t=e.auth,n=t.isAuthenticated,l=t.loading,c=Object(z.a)(e,["component","auth"]);return r.a.createElement(s.b,Object.assign({},c,{render:function(e){return n||l?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/login"})}}))})),Q=t(16),X=t(40),Z=t(41),$=t(43),ee=[],ae={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},te={dashboard:null,loading:!0,error:{}},ne=Object(Q.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_ALERT":return[].concat(Object($.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"USER_LOADED":return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(O.a)(Object(O.a)(Object(O.a)({},e),n),{},{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(O.a)(Object(O.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},dashboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"GET_DASHBOARD":case"UPDATE_CALENDAR":return Object(O.a)(Object(O.a)({},e),{},{dashboard:n,loading:!1});case"DASHBOARD_ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:n,loading:!1,dashboard:null});case"CLEAR_PROFILE":return Object(O.a)(Object(O.a)({},e),{},{dashboard:null,loading:!1});default:return e}}}),re=[Z.a],le=Object(Q.createStore)(ne,{},Object(X.composeWithDevTools)(Q.applyMiddleware.apply(void 0,re)));t(74);localStorage.token&&v(localStorage.token);var ce=function(){return Object(n.useEffect)((function(){le.dispatch(f())}),[]),r.a.createElement(i.a,{store:le},r.a.createElement(o.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(s.b,{exact:!0,path:"/",component:y}),r.a.createElement("section",{className:"container-fluid"},r.a.createElement(k,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",component:S}),r.a.createElement(s.b,{exact:!0,path:"/register",component:C}),r.a.createElement(s.b,{exact:!0,path:"/about",component:q}),r.a.createElement(s.b,{exact:!0,path:"/resources",component:W}),r.a.createElement(s.b,{exact:!0,path:"/contact-us",component:Y}),r.a.createElement(K,{exact:!0,path:"/dashboard",component:M}),r.a.createElement(K,{exact:!0,path:"/calendar-entry",component:P}),r.a.createElement(K,{exact:!0,path:"/journal",component:V}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e172cd6c.chunk.js.map