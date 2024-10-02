"use strict";(self.webpackChunkelite_angular_lite=self.webpackChunkelite_angular_lite||[]).push([[448],{9448:(S,T,c)=>{c.r(T),c.d(T,{TechnicalModule:()=>y});var h=c(4755),m=c(2480),v=c(5226),d=c.n(v),a=c(9401),u=c(5580),e=c(2223),f=c(3583),g=c(3648),p=c(9151),x=c(430);function A(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"name is required"),"."))}function C(n,l){if(1&n&&(e.TgZ(0,"span",15),e.YNc(1,A,3,3,"span",16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.TechnicalForm.get("Name").errors?null:t.TechnicalForm.get("Name").errors.required)}}function F(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij("",e.lcZ(2,1,"Description is required"),"."))}function b(n,l){if(1&n&&(e.TgZ(0,"span",15),e.YNc(1,F,3,3,"span",16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.TechnicalForm.get("Description").errors?null:t.TechnicalForm.get("Description").errors.required)}}let Z=(()=>{class n{constructor(t,i,o,s,r){this.TechnicalService=t,this.Toaster=i,this.MatDilogRef=o,this.data=s,this.translate=r}ngOnInit(){this.InitialzeFor(),this.data&&this.FillTechnicalData()}InitialzeFor(){this.TechnicalForm=new a.cw({Name:new a.NI(null,a.kI.required),Description:new a.NI(null,a.kI.required),isActive:new a.NI(!1,a.kI.required)})}FillTechnicalData(){this.TechnicalService.GetTechnicalById(this.data).subscribe({next:t=>{this.TechnicalForm.setValue({Name:t.name,isActive:t.isActive,Description:t.description})}})}CreateTechnical(){this.data?this.TechnicalService.UpdateTechnical(this.data,this.TechnicalForm.value).subscribe({next:t=>{this.Toaster.success(this.translate.instant("Technical Updated Successfuly")),this.MatDilogRef.close(!0)}}):this.TechnicalService.CreateTechnical(this.TechnicalForm.value).subscribe({next:t=>{this.Toaster.success(this.translate.instant("Technical Created Successfuly")),this.MatDilogRef.close(!0)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.e),e.Y36(g._W),e.Y36(u.so),e.Y36(u.WI),e.Y36(p.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mange-technical"]],decls:33,vars:21,consts:[[1,"container-fluid","mt-5","p-3","position-relative"],["matDialogClose","",1,"position-absolute",2,"top","-39px","right","10px"],["position-absolute","",1,"mb-4"],[3,"formGroup"],[1,"form-group"],["for","fullName"],[1,"text-danger"],["type","text","formControlName","Name","placeholder","Enter full name",1,"form-control"],["class","ms-2 text-danger",4,"ngIf"],["formControlName","Description",1,"form-control"],[1,"form-group","form-check"],["type","checkbox","id","isActive","name","isActive","formControlName","isActive",1,"form-check-input"],["for","isActive",1,"form-check-label"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"ms-2","text-danger"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"mat-icon",1),e._uU(2,"close"),e.qZA(),e.TgZ(3,"h2",2),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"form",3)(7,"div",4)(8,"label",5),e._uU(9),e.ALo(10,"translate"),e.TgZ(11,"span",6),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",7),e.YNc(14,C,2,1,"span",8),e.qZA(),e.TgZ(15,"div",4)(16,"label",5),e._uU(17),e.ALo(18,"translate"),e.TgZ(19,"span",6),e._uU(20,"*"),e.qZA()(),e._UZ(21,"textarea",9),e.YNc(22,b,2,1,"span",8),e.qZA(),e.TgZ(23,"div",10),e._UZ(24,"input",11),e.TgZ(25,"label",12),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.TgZ(28,"div",13)(29,"button",14),e.NdJ("click",function(){return i.CreateTechnical()}),e._uU(30),e.ALo(31,"translate"),e.ALo(32,"translate"),e.qZA()()()()),2&t&&(e.xp6(4),e.hij(" ",e.lcZ(5,9,"Create New Technical")," "),e.xp6(2),e.Q6J("formGroup",i.TechnicalForm),e.xp6(3),e.hij("",e.lcZ(10,11,"name")," "),e.xp6(5),e.Q6J("ngIf",i.TechnicalForm.get("Name").invalid&&i.TechnicalForm.get("Name").touched),e.xp6(3),e.hij("",e.lcZ(18,13,"Description")," "),e.xp6(5),e.Q6J("ngIf",i.TechnicalForm.get("Description").invalid&&i.TechnicalForm.get("Description").touched),e.xp6(4),e.Oqu(e.lcZ(27,15,"IsActive")),e.xp6(3),e.Q6J("disabled",i.TechnicalForm.invalid),e.xp6(1),e.hij(" ",null==i.data?e.lcZ(31,17,"Create"):e.lcZ(32,19,"Update")," "))},dependencies:[h.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u,x.Hw,u.ZT,p.X$]}),n})();var _=c(9765);function D(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"i",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.DeleteTechnical(o.id))}),e.qZA()}}function N(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"th"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",7)(8,"i",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.OpenDilogForEdit(s.id))}),e.qZA(),e.YNc(9,D,1,0,"i",9),e.qZA()()}if(2&n){const t=l.$implicit,i=e.oxw();e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.Oqu(t.isActive?"Yes":"No"),e.xp6(3),e.Q6J("ngIf",i.AuthService.IsManger())}}const L=[{path:"",component:(()=>{class n{constructor(t,i,o,s,r){this.TechnicalService=t,this.dilog=i,this.ToasterService=o,this.translate=s,this.AuthService=r,this.Lang=localStorage.getItem("lang")}ngOnInit(){this.GetTechnicals()}GetTechnicals(){this.TechnicalService.GetTechnicals().subscribe({next:t=>{this.Technicals=t}})}ShowDilog(){this.dilog.open(Z,{disableClose:!0}).afterClosed().subscribe({next:i=>{i&&this.GetTechnicals()}})}OpenDilogForEdit(t){this.dilog.open(Z,{data:t,disableClose:!0}).afterClosed().subscribe({next:o=>{o&&this.GetTechnicals()}})}DeleteTechnical(t){d().fire({title:this.translate.instant("Are you sure?"),text:this.translate.instant("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:this.translate.instant("Yes, delete it"),cancelButtonText:this.translate.instant("Cancel")}).then(i=>{i.isConfirmed&&this.TechnicalService.DeleteTechnical(t).subscribe({next:o=>{this.ToasterService.success(this.translate.instant("Technical Deleted Successfully")),this.GetTechnicals()},error:o=>{d().fire({icon:"error",title:"Oops...",text:this.translate.instant("Something went wrong")})}})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.e),e.Y36(u.uw),e.Y36(g._W),e.Y36(p.sK),e.Y36(_.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-technical-list"]],decls:22,vars:17,consts:[[2,"overflow-x","auto"],[1,"d-flex","justify-content-end"],[1,"btn","btn-primary","m-1",3,"click"],[1,"table","table-hover"],[1,"bg-dark"],["scope","col",1,"text-light"],[4,"ngFor","ngForOf"],[1,"d-flex","gap-2"],[1,"fs-6","fa-solid","fa-pen-to-square","pointer",3,"click"],["class","fs-6 fa-solid fa-trash pointer",3,"click",4,"ngIf"],[1,"fs-6","fa-solid","fa-trash","pointer",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return i.ShowDilog()}),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"table",3)(6,"thead",4)(7,"tr")(8,"th",5),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"th",5),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"th",5),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"th",5),e._uU(18),e.ALo(19,"translate"),e.qZA()()(),e.TgZ(20,"tbody"),e.YNc(21,N,10,4,"tr",6),e.qZA()()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,7,"CreateTechnical")," "),e.xp6(2),e.uIk("dir","ar"===i.Lang?"rtl":"ltr"),e.xp6(4),e.Oqu(e.lcZ(10,9,"name")),e.xp6(3),e.Oqu(e.lcZ(13,11,"Description")),e.xp6(3),e.Oqu(e.lcZ(16,13,"IsActive")),e.xp6(3),e.Oqu(e.lcZ(19,15,"Actions")),e.xp6(3),e.Q6J("ngForOf",i.Technicals))},dependencies:[h.sg,h.O5,p.X$]}),n})(),canActivate:[c(652).p]}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(L),m.Bz]}),n})();var M=c(4493);let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.ez,U,a.UX,a.u5,M.m]}),n})()}}]);