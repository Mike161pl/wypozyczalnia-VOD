"use strict";(self.webpackChunkwypo_yczalnia_vod=self.webpackChunkwypo_yczalnia_vod||[]).push([[993],{7993:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var s=a(4880),t=a(1523),r=a(1413),c=a(4165),i=a(5861),l=a(885),o=a(2791),d=a(2336),u=a(3872),h=a(7834),p=a(6453),m=a(184);function f(e){var n=(0,h.Z)(),a=(0,l.Z)(n,2),s=a[0],t=a[1],f=(0,o.useState)(s.email),x=(0,l.Z)(f,2),j=x[0],v=x[1],Z=(0,o.useState)(""),b=(0,l.Z)(Z,2),N=b[0],g=b[1],k=(0,o.useState)(!1),y=(0,l.Z)(k,2),w=y[0],z=y[1],S=(0,o.useState)({email:"",password:""}),C=(0,l.Z)(S,2),E=C[0],_=C[1],D=(0,o.useState)(!1),O=(0,l.Z)(D,2),T=O[0],W=O[1],I=Object.values(E).filter((function(e){return e})).length,U=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){var a,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),z(!0),e.prev=2,a={idToken:s.token,email:j,returnSecureToken:!0},N&&(a.password=N),e.next=7,p.Z.post("accounts:update",a);case 7:r=e.sent,t({email:r.data.email,token:r.data.idToken,userId:r.data.localId}),W(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.response);case 15:z(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){(0,u.o)(j)?_((0,r.Z)((0,r.Z)({},E),{},{email:""})):_((0,r.Z)((0,r.Z)({},E),{},{email:"Niepoprawny email"}))}),[j]),(0,o.useEffect)((function(){N.length>=4||!N?_((0,r.Z)((0,r.Z)({},E),{},{password:""})):_((0,r.Z)((0,r.Z)({},E),{},{password:"Wymagane 4 znaki"}))}),[N]),(0,m.jsxs)("form",{onSubmit:U,children:[T?(0,m.jsx)("div",{className:"alert alert-success",children:"Dane zapisane"}):null,(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Email"}),(0,m.jsx)("input",{type:"email",value:j,onChange:function(e){return v(e.target.value)},className:"form-control ".concat(E.email?"is-invalid":"is-valid")}),(0,m.jsx)("div",{className:"invalid-feedback",children:E.email}),(0,m.jsx)("div",{className:"valid-feedback",children:"Wszystko gra!"})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Has\u0142o"}),(0,m.jsx)("input",{type:"password",value:N,onChange:function(e){return g(e.target.value)},className:"form-control ".concat(E.password?"is-invalid":"")}),(0,m.jsx)("div",{className:"invalid-feedback",children:E.password})]}),(0,m.jsx)(d.Z,{loading:w,disabled:I,children:"Zapisz"})]})}var x=a(7411),j=a(379),v=a(4392);function Z(e){var n=(0,h.Z)(),a=(0,l.Z)(n,1)[0],r=(0,s.$B)().url,d=(0,o.useState)([]),u=(0,l.Z)(d,2),p=u[0],f=u[1],Z=(0,o.useContext)(v.Z),b=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){var n,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("/movies.json");case 3:n=e.sent,s=(0,j.d)(n.data).filter((function(e){return e.user_id===a.userId})),f(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.delete("/movies/".concat(n,".json?auth=").concat(a.token));case 3:f(p.filter((function(e){return e.id!==n}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){b()}),[]),(0,m.jsxs)("div",{children:[p?(0,m.jsxs)("table",{className:"table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Nazwa"}),(0,m.jsx)("th",{children:"Status"}),(0,m.jsx)("th",{children:"Opcje"})]})}),(0,m.jsx)("tbody",{children:p.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:1==e.status?(0,m.jsx)("span",{className:"badge bg-success text-light",children:"Dost\u0119pny"}):(0,m.jsx)("span",{className:"badge bg-secondary text-light",children:"Niedost\u0119pny"})}),(0,m.jsxs)("td",{children:[(0,m.jsx)(t.rU,{to:"/profil/filmy/edytuj/".concat(e.id),className:"btn btn-warning",children:"Edytuj"}),(0,m.jsx)("button",{onClick:function(){return N(e.id)},className:"ml-2 btn btn-danger",children:"Usu\u0144"})]})]},e.id)}))})]}):(0,m.jsx)("p",{children:"Nie masz jeszcze \u017cadnego filmu."}),(0,m.jsx)(t.rU,{to:"".concat(r,"/dodaj"),className:"ml-1 btn btn-".concat(Z.color),children:"Dodaj film"})]})}function b(e){var n=(0,s.$B)(),a=n.path,r=n.url;return(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h2",{children:"M\xf3j profil"})}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("ul",{className:"nav nav-tabs",children:[(0,m.jsx)("li",{className:"nav-item",children:(0,m.jsx)(t.OL,{className:"nav-link",exact:!0,to:"".concat(r),children:"Profil"})}),(0,m.jsx)("li",{className:"nav-item",children:(0,m.jsx)(t.OL,{className:"nav-link",to:"".concat(r,"/filmy"),children:"Twoje Filmy"})})]}),(0,m.jsx)("div",{className:"pt-4",children:(0,m.jsxs)(s.rs,{children:[(0,m.jsx)(s.AW,{path:"".concat(a,"/filmy"),component:Z}),(0,m.jsx)(s.AW,{path:"".concat(a),component:f})]})})]})]})}}}]);
//# sourceMappingURL=993.15d66c83.chunk.js.map