"use strict";(self.webpackChunkelite_angular_lite=self.webpackChunkelite_angular_lite||[]).push([[879],{3879:(N,d,s)=>{s.r(d),s.d(d,{TransactionModule:()=>L});var c=s(4755),h=s(2480),u=s(5580),C=s(5226),g=s.n(C),t=s(2223),Z=s(7776),f=s(9765),p=s(1261),v=s(3144);let T=(()=>{class n{constructor(e){this.HttpClient=e}GetTransactions(){return this.HttpClient.get(p.N.BaseUrl+"/CustomerTransaction/GetTransactions")}Deposit(e){return this.HttpClient.post(p.N.BaseUrl+"/CustomerTransaction/Deposit",e)}WithDraw(e){return this.HttpClient.post(p.N.BaseUrl+"/CustomerTransaction/Withdraw",e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=s(9151),A=s(3648),i=s(9401);const D=function(n,a){return[n,a]};function U(n,a){if(1&n&&(t.TgZ(0,"option",15),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",t.WLB(2,D,e.id,e.balance)),t.xp6(1),t.hij(" ",e.fullName," ")}}let x=(()=>{class n{constructor(e,o,r,l,W,w,J){this.data=e,this.CustomerService=o,this.AuthService=r,this.TransactionService=l,this.TransalteService=W,this.ToasterService=w,this.MatDilogRef=J,this.CustomerBalance=0}ngOnInit(){console.log(this.data),this.LoadCustomers()}LoadCustomers(){this.CustomerService.GetCustomers().subscribe({next:e=>{this.Customers=e,console.log(e)}})}OnCustomerChange(e){var r=e.target.value.split(",");this.CustomerBalance=r[1],this.CustomerId=r[0],console.log()}SaveTransaction(){var e={customerId:this.CustomerId,description:this.description,AppUserId:this.AuthService.GetUserId(),Amount:this.Amount};this.Amount&&this.description&&this.CustomerId&&(this.data.isDeposit?this.TransactionService.Deposit(e).subscribe({next:o=>{this.ToasterService.success(this.TransalteService.instant("Transaction Done Successful")),this.MatDilogRef.close(!0)},error:o=>{g().fire({icon:"error",title:"Oops...",text:this.TransalteService.instant("Something went wrong")})}}):this.TransactionService.WithDraw(e).subscribe({next:o=>{console.log(o),this.TransalteService.instant("Transaction Done Successful"),this.MatDilogRef.close(!0)},error:o=>{var r=o.error.message;r&&g().fire({icon:"error",title:"Oops...",text:this.TransalteService.instant(r)})}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.WI),t.Y36(Z.v),t.Y36(f.e),t.Y36(T),t.Y36(m.sK),t.Y36(A._W),t.Y36(u.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-deposit-withdraw-component"]],decls:34,vars:28,consts:[[1,"container","p-3"],[1,"text-center"],[1,"form-group"],["for","userSelect"],["id","userSelect",1,"form-control",3,"change"],["value","","selected","","disabled",""],["value","user1",3,"value",4,"ngFor","ngForOf"],["for","userBalance"],["name","CusotmerBalance","type","text","id","userBalance","placeholder","Enter User Balance","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","amount"],["name","amount","type","number","id","amount","placeholder","Enter Amount",1,"form-control",3,"ngModel","ngModelChange"],["for","description"],["name","description","id","description","rows","3","placeholder","Enter Transaction Description",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","btn-block","mt-2",3,"disabled","click"],["value","user1",3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2),t.ALo(3,"translate"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"form")(6,"div",2)(7,"label",3),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"select",4),t.NdJ("change",function(l){return o.OnCustomerChange(l)}),t.TgZ(11,"option",5),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.YNc(14,U,2,5,"option",6),t.qZA()(),t.TgZ(15,"div",2)(16,"label",7),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"input",8),t.NdJ("ngModelChange",function(l){return o.CustomerBalance=l}),t.qZA()(),t.TgZ(20,"div",2)(21,"label",9),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"input",10),t.NdJ("ngModelChange",function(l){return o.Amount=l}),t.qZA()(),t.TgZ(25,"div",2)(26,"label",11),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"textarea",12),t.NdJ("ngModelChange",function(l){return o.description=l}),t.qZA()(),t.TgZ(30,"div",13)(31,"button",14),t.NdJ("click",function(){return o.SaveTransaction()}),t._uU(32),t.ALo(33,"translate"),t.qZA()()()()),2&e&&(t.xp6(2),t.hij(" ",o.data.isDeposit?t.lcZ(3,12,"Deposit"):t.lcZ(4,14,"Withdraw")," "),t.xp6(6),t.Oqu(t.lcZ(9,16,"Select Customer")),t.xp6(4),t.hij(" ",t.lcZ(13,18,"Select Customer")," "),t.xp6(2),t.Q6J("ngForOf",o.Customers),t.xp6(3),t.Oqu(t.lcZ(18,20,"User Balance")),t.xp6(2),t.Q6J("ngModel",o.CustomerBalance),t.xp6(3),t.Oqu(t.lcZ(23,22,"Amount")),t.xp6(2),t.Q6J("ngModel",o.Amount),t.xp6(3),t.Oqu(t.lcZ(28,24,"Transaction Description")),t.xp6(2),t.Q6J("ngModel",o.description),t.xp6(2),t.Q6J("disabled",!o.CustomerId||!o.description||!o.Amount||o.Amount<=0),t.xp6(1),t.hij(" ",t.lcZ(33,26,"Execute Transaction")," "))},dependencies:[c.sg,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.JJ,i.JL,i.On,i.F,m.X$]}),n})();function S(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"th"),t._uU(4),t.qZA(),t.TgZ(5,"th"),t._uU(6),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.qZA(),t.TgZ(9,"th"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"th"),t._uU(13),t.qZA(),t.TgZ(14,"th"),t._uU(15),t.qZA()()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu("#"+e.id),t.xp6(2),t.Oqu(e.customerName),t.xp6(2),t.Oqu(e.userName),t.xp6(2),t.Oqu(e.transactionType),t.xp6(2),t.Oqu(t.xi3(11,7,e.transactionDate,"yyyy/MM/dd")),t.xp6(3),t.Oqu(e.amount),t.xp6(2),t.Oqu(e.description)}}const q=[{path:"",component:(()=>{class n{constructor(e,o){this.TransactionService=e,this.Matdilog=o,this.Lang=localStorage.getItem("lang")}ngOnInit(){this.GetTransactions()}GetTransactions(){this.TransactionService.GetTransactions().subscribe({next:e=>{this.Transactions=e,console.log(e)}})}OpenDepositWithDrawComponent(e){this.Matdilog.open(x,{data:{isDeposit:e}}).afterClosed().subscribe({next:r=>{r&&this.GetTransactions()}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T),t.Y36(u.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-customer-transactions"]],decls:34,vars:29,consts:[[2,"overflow-x","auto"],[1,"d-flex","justify-content-end"],[1,"btn","btn-success","m-1",3,"click"],[1,"btn","btn-primary","m-1",3,"click"],[1,"table","table-hover"],[1,"bg-dark"],["scope","col",1,"text-light"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.OpenDepositWithDrawComponent(!0)}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return o.OpenDepositWithDrawComponent(!1)}),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"table",4)(9,"thead",5)(10,"tr")(11,"th",6),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"th",6),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"th",6),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"th",6),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"th",6),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"th",6),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"th",6),t._uU(30),t.ALo(31,"translate"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,S,16,10,"tr",7),t.qZA()()()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,11,"Deposit")," "),t.xp6(3),t.hij(" ",t.lcZ(7,13,"Withdraw")," "),t.xp6(2),t.uIk("dir","ar"===o.Lang?"rtl":"ltr"),t.xp6(4),t.Oqu(t.lcZ(13,15,"Code")),t.xp6(3),t.hij(" ",t.lcZ(16,17,"Customer Name")," "),t.xp6(3),t.Oqu(t.lcZ(19,19,"User Name")),t.xp6(3),t.hij(" ",t.lcZ(22,21,"Transaction Type")," "),t.xp6(3),t.hij(" ",t.lcZ(25,23,"Transaction Date")," "),t.xp6(3),t.Oqu(t.lcZ(28,25,"Amount")),t.xp6(3),t.Oqu(t.lcZ(31,27,"Description")),t.xp6(3),t.Q6J("ngForOf",o.Transactions))},dependencies:[c.sg,c.uU,m.X$]}),n})(),canActivate:[s(652).p]}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(q),h.Bz]}),n})();var y=s(4493);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,b,y.m]}),n})()}}]);