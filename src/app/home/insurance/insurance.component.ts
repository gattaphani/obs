import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm } from '@angular/forms';
@Component({
 selector: 'app-insurance',
 templateUrl: './insurance.component.html',
 styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  
 constructor() { }
 private insurance:boolean =false;
 reverse: boolean = false;
addText:any;
key: string = 'name';
obj:any;
result;
EmpId;
EmpName;
InsurancePlan;
coverdays;
EmpAge;
EmpAgeBand;
EmpPremium;
SpouseAge;
SpouseAgeBand;
SpousePremium;
child1Age;
child1AgeBand;
child1Premium;
child2Age;
child2AgeBand;
child2Premium;
TotalGMCPremium;

 insuranceplan(){
    this.insurance=true;
 }
 public fieldArray:any=['18154','Dileep','plan1','300','25','20-25','5500','22','20-25','4500','2','1-10','2500','1','1-10','1500','8000']
 @ViewChild("form") form: any;
 public dataJson=[
   {  "EmpId": "18154","EmpName":"Dileep","InsurancePlan":"Plan1","coverdays":"300","EmpAge":"25","EmpAgeBand":"20-25","EmpPremium":"5500","SpouseAge":"25","SpouseAgeBand":"20-25","SpousePremium":"5500","child1Age":"25","child1AgeBand":"1-10","child1Premium":"2200","child2Age":"2","child2AgeBand":"1-10","child2Premium":"2200","TotalGMCPremium":"9900"},
   {  "EmpId": "18154","EmpName":"Dileep","InsurancePlan":"Plan2","coverdays":"300","EmpAge":"25","EmpAgeBand":"20-25","EmpPremium":"5500","SpouseAge":"25","SpouseAgeBand":"20-25","SpousePremium":"5500","child1Age":"25","child1AgeBand":"1-10","child1Premium":"2200","child2Age":"2","child2AgeBand":"1-10","child2Premium":"2200","TotalGMCPremium":"9900"}
  
  ]
  data:any;
 
 onSubmit() {
    if (this.form.valid) {
     console.log("Form Submitted!");
     this.form.reset();
   }
 }
 deleteFieldValue(index) {
   debugger;    
 this.dataJson.splice(index, 1);
  }
  sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 }

 saveText(){
 debugger;
 this.result = {
 "EmpId": this.EmpId,
 "EmpName": this.EmpName,
 "InsurancePlan":this.InsurancePlan,
"coverdays" :this.coverdays,

"EmpAge":this.EmpAge,
"EmpAgeBand":this.EmpAgeBand,

"EmpPremium":this.EmpPremium,

"SpouseAge":this.SpouseAge,
"SpouseAgeBand":this.SpouseAgeBand,
"SpousePremium":this.SpousePremium,
"child1Age":this.child1Age,
"child1AgeBand":this.child1AgeBand,
"child1Premium":this.child1Premium,
"child2Age":this.child2Age,
"child2AgeBand":this.child2AgeBand,
"child2Premium":this.child2Premium,

"TotalGMCPremium":this.TotalGMCPremium,

 }
 this.dataJson.push(this.result);
 this.EmpId='';
 this.EmpName='';
 this.InsurancePlan='';
 this.coverdays='';
 this.EmpAge='';
 this.EmpAgeBand='';
  this.EmpPremium='';
  this.SpouseAge='';
  this.SpouseAgeBand='';
  this.SpousePremium='';
  this.child1Age='';
  this.child1AgeBand='';
  this.child1Premium='';
  this.child2Age='';
  this.child2AgeBand='';
  this.child2Premium='';
  this.TotalGMCPremium='';
 
  }

resetFieldValue(){
 if (this.form.valid) {
   debugger;
    this.form.reset();
  }
}
data1:any;
saveMe(form:NgForm){
  debugger;
  this.data1=form;
  console.log(this.data1.value);
  this.dataJson.push(this.data1.value);
}


 ngOnInit(){
  
};

}




