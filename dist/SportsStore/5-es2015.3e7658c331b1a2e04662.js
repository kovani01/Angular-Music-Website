(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(n,t,e){"use strict";e.r(t),e.d(t,"AdminModule",function(){return M});var r=e("ofXK"),o=e("3Pt+"),i=e("tyNb"),b=e("fXoL"),a=e("hO0c");function c(n,t){if(1&n&&(b.Lb(0,"div",13),b.fc(1),b.Kb()),2&n){const n=b.Ub();b.yb(1),b.hc(" ",n.errorMessage," ")}}let d=(()=>{class n{constructor(n,t){this.router=n,this.auth=t}authenticate(n){n.valid?this.auth.authenticate(this.username,this.password).subscribe(n=>{n&&this.router.navigateByUrl("/admin/main"),this.errorMessage="Authentication Failed"}):this.errorMessage="Form Data Invalid"}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(i.b),b.Ib(a.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["ng-component"]],decls:23,vars:3,consts:[[1,"col","col1"],["class","bg-danger mt-2 text-center text-white",4,"ngIf"],[1,"p2"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],[1,"input"],["name","username","required","",1,"form-control","p-1",3,"ngModel","ngModelChange"],["type","password","name","password","required","",1,"form-control","p-1",3,"ngModel","ngModelChange"],[1,"text-center"],["routerLink","/",1,"btn1","btn-secondary"],[1,"btn3"],["type","submit",1,"btn2","btn-primary"],[1,"bg-danger","mt-2","text-center","text-white"]],template:function(n,t){if(1&n){const n=b.Mb();b.Lb(0,"div",0),b.Lb(1,"h3"),b.fc(2,"O.A.O \u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440"),b.Kb(),b.Kb(),b.ec(3,c,2,1,"div",1),b.Lb(4,"div",2),b.Lb(5,"form",3,4),b.Sb("ngSubmit",function(){b.bc(n);const e=b.ac(6);return t.authenticate(e)}),b.Lb(7,"div",5),b.Lb(8,"label"),b.fc(9,"\u041b\u043e\u0433\u0456\u043d"),b.Kb(),b.Lb(10,"div",6),b.Lb(11,"input",7),b.Sb("ngModelChange",function(n){return t.username=n}),b.Kb(),b.Kb(),b.Kb(),b.Lb(12,"div",5),b.Lb(13,"label"),b.fc(14,"\u041f\u0430\u0440\u043e\u043b\u044c"),b.Kb(),b.Lb(15,"div",6),b.Lb(16,"input",8),b.Sb("ngModelChange",function(n){return t.password=n}),b.Kb(),b.Kb(),b.Kb(),b.Lb(17,"div",9),b.Lb(18,"button",10),b.Lb(19,"div",11),b.fc(20,"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c"),b.Kb(),b.Kb(),b.Lb(21,"button",12),b.fc(22,"\u0412\u0432\u0456\u0439\u0442\u0438"),b.Kb(),b.Kb(),b.Kb(),b.Kb()}2&n&&(b.yb(3),b.Xb("ngIf",null!=t.errorMessage),b.yb(8),b.Xb("ngModel",t.username),b.yb(5),b.Xb("ngModel",t.password))},directives:[r.j,o.j,o.e,o.f,o.b,o.i,o.d,o.g,i.c],styles:[".p2[_ngcontent-%COMP%]{\n    padding:38px;\n    max-width: 70%;\n    margin-left: 15%;\n}\nbody[_ngcontent-%COMP%]{\n  background: #0f1a2b;\n  padding: 10px;\n  margin: 0;\n}\n.col1[_ngcontent-%COMP%]{\n  box-shadow: 0px 3px 19px -6px rgb(57 80 117);\n  padding: 8px 15px;\n  margin-bottom: 30px;\n  text-shadow: 0 0 11px #007bff;\n    color: #8bacf9;\n}\nlabel[_ngcontent-%COMP%]{\n    text-shadow: 0 0 11px #007bff;\n    color: #8bacf9;\n}\n.input[_ngcontent-%COMP%]{\n    color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n  padding: 1px 9px 1px 1px;\n}\ninput[_ngcontent-%COMP%]{\n    background-color: #0f1a2b;\n    padding: 5px;\n    margin: -5px -11px;\n    border-radius: 20px;\n    margin: 5px;\n}\n    .btn2[_ngcontent-%COMP%]{\n        padding: 10px 30px;\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n  z-index: 1;\n}\n.btn2[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn1[_ngcontent-%COMP%]{\n    padding: 10px 17px;   \n     margin: 10px 20px;\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n}\n.btn1[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n.btn1[_ngcontent-%COMP%]:before{\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 40px;\n  opacity: 0;\n  z-index: -1;\n  transition: 0.5s;\n}\n.btn1[_ngcontent-%COMP%]:hover:before{\n  filter: blur(20px);\n  opacity: 1;\n  animation: animate 8s linear infinite;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn3[_ngcontent-%COMP%]{\n  background-color: #0f1a2b;\n    padding: 5px;\n    margin: -5px -11px;\n    border-radius: 20px;\n}\n@media (max-width: 1200px) {\n    .p2[_ngcontent-%COMP%]{\n    max-width: 80%;\n    margin-left: 15%;\n}\n}\n@media (max-width: 1000px) {\n    .p2[_ngcontent-%COMP%]{\n    max-width: 90%;\n    margin-left: 15%;\n}\n}\n@media (max-width: 700px) {\n    .p2[_ngcontent-%COMP%]{\n    max-width: 100%;\n    margin-left: 15%;\n}\n}"]}),n})(),s=(()=>{class n{constructor(n,t){this.auth=n,this.router=t}logout(){this.auth.clear(),this.router.navigateByUrl("/")}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(a.a),b.Ib(i.b))},n.\u0275cmp=b.Cb({type:n,selectors:[["ng-component"]],decls:17,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col","col1","text-white"],[1,"navbar-brand"],[1,"row","mt-2",2,"margin-left","20%"],[1,"col-3"],["routerLink","/admin/main/products","routerLinkActive","active",1,"btn","btn2","btn-block"],["routerLink","/admin/main/orders","routerLinkActive","active",1,"btn","btn1","btn-block"],[1,"btn3"],[1,"btn","btn4","btn-block",3,"click"],[1,"btn5"],[1,"col-9",2,"color","#fff"]],template:function(n,t){1&n&&(b.Lb(0,"div",0),b.Lb(1,"div",1),b.Lb(2,"div",2),b.Lb(3,"a",3),b.fc(4,"O.A.O Music"),b.Kb(),b.Kb(),b.Kb(),b.Lb(5,"div",4),b.Lb(6,"div",5),b.Lb(7,"button",6),b.fc(8,"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438"),b.Kb(),b.Lb(9,"button",7),b.Lb(10,"div",8),b.fc(11,"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),b.Kb(),b.Kb(),b.Lb(12,"button",9),b.Sb("click",function(){return t.logout()}),b.Lb(13,"div",10),b.fc(14,"\u0412\u0438\u0439\u0442\u0438"),b.Kb(),b.Kb(),b.Kb(),b.Lb(15,"div",11),b.Jb(16,"router-outlet"),b.Kb(),b.Kb(),b.Kb())},directives:[i.c,i.d,i.f],styles:[".navbar-brand[_ngcontent-%COMP%]{\n  text-shadow: 0 0 11px #007bff;\n    color: #8bacf9;\n}   \n\n.btn1[_ngcontent-%COMP%]{\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n}\n.btn1[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n.btn1[_ngcontent-%COMP%]:before{\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 40px;\n  opacity: 0;\n  z-index: -1;\n  transition: 0.5s;\n}\n.btn1[_ngcontent-%COMP%]:hover:before{\n  filter: blur(20px);\n  opacity: 1;\n  animation: animate 8s linear infinite;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn3[_ngcontent-%COMP%]{\n  background-color: #0f1a2b;\n    padding: 5px;\n    margin: -5px -11px;\n    border-radius: 20px;\n}\n.btn2[_ngcontent-%COMP%]{\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n  z-index: 1;\n}\n.btn2[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn4[_ngcontent-%COMP%]{\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #f7ce18, #ff0707, #b87130, #9e0404) ;\n  background-size: 400%;\n  border-radius: 30px;\n}\n.btn4[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn5[_ngcontent-%COMP%]{\n  background-color: #0f1a2b;\n    padding: 5px;\n    margin: -5px -11px;\n    border-radius: 20px;\n}\n.col1[_ngcontent-%COMP%]{\n  box-shadow: 0px 3px 19px -6px rgb(57 80 117);\n  padding: 8px 15px;\n  margin-bottom: 30px;\n}"]}),n})(),g=(()=>{class n{constructor(n,t){this.router=n,this.auth=t}canActivate(n,t){return!!this.auth.authenticated||(this.router.navigateByUrl("/admin/auth"),!1)}}return n.\u0275fac=function(t){return new(t||n)(b.Pb(i.b),b.Pb(a.a))},n.\u0275prov=b.Eb({token:n,factory:n.\u0275fac}),n})();var p=e("jU2X");const f=function(n){return["/admin/main/products/edit",n]};function u(n,t){if(1&n){const n=b.Mb();b.Lb(0,"tr"),b.Lb(1,"td"),b.fc(2),b.Kb(),b.Lb(3,"td"),b.fc(4),b.Kb(),b.Lb(5,"td"),b.fc(6),b.Kb(),b.Lb(7,"td"),b.fc(8),b.Vb(9,"currency"),b.Kb(),b.Lb(10,"td"),b.Lb(11,"button",3),b.fc(12," \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 "),b.Kb(),b.Lb(13,"button",4),b.Sb("click",function(){b.bc(n);const e=t.$implicit;return b.Ub().deleteProduct(e.id)}),b.fc(14," \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 "),b.Kb(),b.Kb(),b.Kb()}if(2&n){const n=t.$implicit;b.yb(2),b.gc(n.id),b.yb(2),b.gc(n.name),b.yb(2),b.gc(n.category),b.yb(2),b.gc(b.Wb(9,5,n.price,"USD","symbol","2.2-2")),b.yb(3),b.Xb("routerLink",b.Yb(10,f,n.id))}}let l=(()=>{class n{constructor(n){this.repository=n}getProducts(){return this.repository.getProducts()}deleteProduct(n){this.repository.deleteProduct(n)}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(p.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["ng-component"]],decls:16,vars:1,consts:[[1,"table-sm","table-striped"],[4,"ngFor","ngForOf"],["routerLink","/admin/main/products/create",1,"btn","btn2","btn-primary"],[1,"btn","btn-sm","btn-warning","m-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(n,t){1&n&&(b.Lb(0,"table",0),b.Lb(1,"thead"),b.Lb(2,"tr"),b.Lb(3,"th"),b.fc(4,"ID"),b.Kb(),b.Lb(5,"th"),b.fc(6,"\u0406\u043c'\u044f"),b.Kb(),b.Lb(7,"th"),b.fc(8,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f"),b.Kb(),b.Lb(9,"th"),b.fc(10,"\u0426\u0456\u043d\u0430"),b.Kb(),b.Jb(11,"th"),b.Kb(),b.Kb(),b.Lb(12,"tbody"),b.ec(13,u,15,12,"tr",1),b.Kb(),b.Kb(),b.Lb(14,"button",2),b.fc(15," \u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\n"),b.Kb()),2&n&&(b.yb(13),b.Xb("ngForOf",t.getProducts()))},directives:[r.i,i.c],pipes:[r.c],styles:[".btn2[_ngcontent-%COMP%]{\n        padding: 10px 30px;\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n  z-index: 1;\n}\n.btn2[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\ntable[_ngcontent-%COMP%]{\n    color: #fff;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}"]}),n})();var m=e("4Sfc");let h=(()=>{class n{constructor(n,t,e){this.repository=n,this.router=t,this.editing=!1,this.product=new m.a,this.editing="edit"==e.snapshot.params.mode,this.editing&&Object.assign(this.product,n.getProduct(e.snapshot.params.id))}save(n){this.repository.saveProduct(this.product),this.router.navigateByUrl("/admin/main/products")}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(p.a),b.Ib(i.b),b.Ib(i.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"bg-primary1","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","category",1,"form-control",3,"ngModel","ngModelChange"],["name","description",1,"form-control",3,"ngModel","ngModelChange"],["name","price",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn2","m-1"],["type","reset","routerLink","/admin/main/products",1,"btn","btn4"],[1,"btn5"]],template:function(n,t){if(1&n){const n=b.Mb();b.Lb(0,"div",0),b.Lb(1,"h5"),b.fc(2),b.Kb(),b.Kb(),b.Lb(3,"form",1,2),b.Sb("ngSubmit",function(){b.bc(n);const e=b.ac(4);return t.save(e)}),b.Lb(5,"div",3),b.Lb(6,"label"),b.fc(7,"\u041d\u0430\u0437\u0432\u0430"),b.Kb(),b.Lb(8,"input",4),b.Sb("ngModelChange",function(n){return t.product.name=n}),b.Kb(),b.Kb(),b.Lb(9,"div",3),b.Lb(10,"label"),b.fc(11,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f"),b.Kb(),b.Lb(12,"input",5),b.Sb("ngModelChange",function(n){return t.product.category=n}),b.Kb(),b.Kb(),b.Lb(13,"div",3),b.Lb(14,"label"),b.fc(15,"\u041e\u043f\u0438\u0441"),b.Kb(),b.Lb(16,"textarea",6),b.Sb("ngModelChange",function(n){return t.product.description=n}),b.fc(17," "),b.Kb(),b.Kb(),b.Lb(18,"div",3),b.Lb(19,"label"),b.fc(20,"\u0426\u0456\u043d\u0430"),b.Kb(),b.Lb(21,"input",7),b.Sb("ngModelChange",function(n){return t.product.price=n}),b.Kb(),b.Kb(),b.Lb(22,"button",8),b.fc(23),b.Kb(),b.Lb(24,"button",9),b.Lb(25,"div",10),b.fc(26,"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"),b.Kb(),b.Kb(),b.Kb()}2&n&&(b.Ab("bg-warning",t.editing)("text-dark",t.editing),b.yb(2),b.hc("",t.editing?"Edit":"Create"," Product"),b.yb(6),b.Xb("ngModel",t.product.name),b.yb(4),b.Xb("ngModel",t.product.category),b.yb(4),b.Xb("ngModel",t.product.description),b.yb(5),b.Xb("ngModel",t.product.price),b.yb(1),b.Ab("btn-warning",t.editing),b.yb(1),b.hc(" ",t.editing?"Save":"Create"," "))},directives:[o.j,o.e,o.f,o.b,o.d,o.g,i.c],styles:[".bg-primary1[_ngcontent-%COMP%]{\n        border-radius: 10px;\n    }\n    label[_ngcontent-%COMP%]{\n        text-shadow: 0 0 11px #007bff;\n    color: #8bacf9;\n    }\n    .btn2[_ngcontent-%COMP%]{\n        padding: 7px 30px;\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4) ;\n  background-size: 400%;\n  border-radius: 30px;\n  z-index: 1;\n}\n.btn2[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn4[_ngcontent-%COMP%]{\n  color: #fff;\n  box-sizing: border-box;\n  border-width: 2px;\n  background: linear-gradient(90deg, #f7ce18, #ff0707, #b87130, #9e0404) ;\n  background-size: 400%;\n  border-radius: 30px;\n}\n.btn4[_ngcontent-%COMP%]:hover{\n  animation: animate 8s linear infinite;\n}\n\n@keyframes animate{\n  0%{\n    background-position: 0%;\n  }\n  100%{\n    background-position: 400%;\n  }\n}\n.btn5[_ngcontent-%COMP%]{\n  background-color: #0f1a2b;\n    padding: 5px;\n    margin: -5px -11px;\n    border-radius: 20px;\n}"]}),n})();var x=e("hf/X");function L(n,t){1&n&&(b.Lb(0,"tr"),b.Lb(1,"td",7),b.fc(2,"\u041d\u0435\u043c\u0430\u0454 \u0437\u0430\u043e\u0432\u043b\u0435\u043d\u044c"),b.Kb(),b.Kb())}function K(n,t){if(1&n&&(b.Lb(0,"tr"),b.Jb(1,"td",4),b.Lb(2,"td"),b.fc(3),b.Kb(),b.Lb(4,"td"),b.fc(5),b.Kb(),b.Kb()),2&n){const n=t.$implicit;b.yb(3),b.gc(n.product.name),b.yb(2),b.gc(n.quantity)}}function k(n,t){if(1&n){const n=b.Mb();b.Lb(0,"tr"),b.Lb(1,"td"),b.fc(2),b.Kb(),b.Lb(3,"td"),b.fc(4),b.Kb(),b.Lb(5,"th"),b.fc(6,"\u0422\u043e\u0432\u0430\u0440"),b.Kb(),b.Lb(7,"th"),b.fc(8,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"),b.Kb(),b.Lb(9,"td"),b.Lb(10,"button",8),b.Sb("click",function(){b.bc(n);const e=t.$implicit;return b.Ub().markShipped(e)}),b.fc(11," Ship "),b.Kb(),b.Lb(12,"button",9),b.Sb("click",function(){b.bc(n);const e=t.$implicit;return b.Ub().delete(e.id)}),b.fc(13," \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 "),b.Kb(),b.Kb(),b.Kb(),b.ec(14,K,6,2,"tr",10)}if(2&n){const n=t.$implicit;b.yb(2),b.gc(n.name),b.yb(2),b.gc(n.zip),b.yb(10),b.Xb("ngForOf",n.cart.lines)}}let y=i.e.forChild([{path:"auth",component:d},{path:"main",component:s,canActivate:[g],children:[{path:"products/:mode/:id",component:h},{path:"products/:mode",component:h},{path:"products",component:l},{path:"orders",component:(()=>{class n{constructor(n){this.repository=n,this.includeShipped=!1}getOrders(){return this.repository.getOrders().filter(n=>this.includeShipped||!n.shipped)}markShipped(n){n.shipped=!0,this.repository.updateOrder(n)}delete(n){this.repository.deleteOrder(n)}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(x.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["ng-component"]],decls:17,vars:3,consts:[[1,"form-check"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"table-sm"],["colspan","2"],[4,"ngIf"],["ngFor","",3,"ngForOf"],["colspan","5"],[1,"btn","btn-warning","m-1",3,"click"],[1,"btn","btn-danger",3,"click"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(b.Lb(0,"div",0),b.Lb(1,"label",1),b.Lb(2,"input",2),b.Sb("ngModelChange",function(n){return t.includeShipped=n}),b.Kb(),b.fc(3," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f "),b.Kb(),b.Kb(),b.Lb(4,"table",3),b.Lb(5,"thead"),b.Lb(6,"tr"),b.Lb(7,"th"),b.fc(8,"\u041d\u0430\u0437\u0432\u0430"),b.Kb(),b.Lb(9,"th"),b.fc(10,"Zip"),b.Kb(),b.Lb(11,"th",4),b.fc(12,"\u041a\u043e\u0448\u0438\u043a"),b.Kb(),b.Jb(13,"th"),b.Kb(),b.Kb(),b.Lb(14,"tbody"),b.ec(15,L,3,0,"tr",5),b.ec(16,k,15,3,"ng-template",6),b.Kb(),b.Kb()),2&n&&(b.yb(2),b.Xb("ngModel",t.includeShipped),b.yb(13),b.Xb("ngIf",0==t.getOrders().length),b.yb(1),b.Xb("ngForOf",t.getOrders()))},directives:[o.a,o.d,o.g,r.j,r.i],styles:["table[_ngcontent-%COMP%]{\n            color: #fff;\n        }"]}),n})()},{path:"**",redirectTo:"products"}]},{path:"**",redirectTo:"auth"}]),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({providers:[g],imports:[[r.b,o.c,y]]}),n})()}}]);