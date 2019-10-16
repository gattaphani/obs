import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employeedesignation } from './employeedesignation.model';

import { NgForm} from '@angular/forms';
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-employeedesignation',
  templateUrl: './employeedesignation.component.html',
  styleUrls: ['./employeedesignation.component.scss']
})
export class EmployeedesignationComponent implements OnInit {
  employee: any;
  deleteRes: any;
  updatedRes: any;
  empDesignationlist: any;
  empDesignationDetails: any;
  empDesignationRes: any;
  designation:any;
  id:any;
//   public data1=[];
//   public show:boolean = false;
//   public buttonName:any = 'Show';



   value: boolean;
//   data; 
//  employee:any;
//  employeeDesignation;
//   isEditable:boolean = false;
//   reverse: boolean = false;

  

  constructor(private hrms:HrmsService) {
   
   }
//    employeedesignationlist:Employeedesignation[]=[{
     
//     "employeeDesignation": "Python"
//    },
//  {
//    "employeeDesignation": "IDM"
//  },
//  {
//    "employeeDesignation": "Service Now"
//  },
//  {
//    "employeeDesignation": "UI"
//  },
//  {
//    "employeeDesignation": "Java"
//  }]




//  saveBu(){
//   debugger;
//   this.value = false;
//   this.data = {
//     "employeeDesignation":this.employee,
   
//   }
//   this.employeedesignationlist.unshift(this.data);

//   this.employeeDesignation='';
 

// }
// editData(blist){
//   console.log(blist);
  
//   this.employee = blist.employeeDesignation;

// }
// saveData(){
//   var editD = {
//     "employeeDesignation":this.employee,
   
//   }
//   console.log(editD);
// }
// deleterow(index){
//   debugger;
//   if(index !== -1){
//     this.employeedesignationlist.splice(0,1);
//   }
//   else {
//   this.employeedesignationlist.splice(index,1);
//   }
// }

// cancelbulist(){
//   this.value=false;
  
// }
  ngOnInit() {
    this.getEmpDesignation();
   }
//   handleClick(event: Event) {
//     console.log('Button clicked', event)
//   }
//   toggle() {
//     this.show = !this.show;

   
//     if(this.show)  
//       this.buttonName = "Hide";
//     else
//       this.buttonName = "Show";
//   }
// ads API code here
setEmpDesignation(){
  var requestData = {
    "designation":[
            {
            "id":this.id,
            "designation":this.employee
    }
    ],
    "sessionId":"3121",
    "transactionType":"save"
}

  this.hrms.setEmployeeDesignation(requestData).subscribe((response:any) =>{
    this.empDesignationRes = response;
    console.log(this.empDesignationRes);
    if(this.empDesignationRes.message == "record added Successfully"){
      
      swal(this.empDesignationRes.message , "","success");
      this.getEmpDesignation();
    }
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");

  })
  this.id="",
  this.employee="",
  this.value = false;
}
getEmpDesignation(){
  var request = {
    "designation":[
           
    ],
    "sessionId":"3121",
    "transactionType":"getall"
}
   this.hrms.getEmployeeDesignation(request).subscribe(res =>{
    this.empDesignationDetails = res;
    this.empDesignationlist = this.empDesignationDetails.listDesignation;
    console.log(this.empDesignationDetails);
   })
}

saveUpdatedValues(bulist){
  console.log(bulist);
  var updateRequestData =
  {
    "designation":[
            {
            "id":bulist.id,
            "designation":bulist.designation
    }
    ],
    "sessionId":"3121",
    "transactionType":"update"
}
  this.hrms.updateEmpolyeeDesignation(updateRequestData).subscribe((res:any) =>{
    this.updatedRes = res;
    console.log(this.updatedRes);
    if(this.updatedRes.message == "record updated Successfully "){
      swal(this.updatedRes.message , "","success");
     
    }
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");
    this.getEmpDesignation();
  })
  
}

deleteDesignation(bulist){
  var deleteRequest = {
      "designationrequest" :{
              "id" : bulist.id,
              "designation" : bulist.designation
      },
      "transactionType" : "delete",
      "sessionId" : "132"
  }
  this.hrms.deleteEmpolyeeDesignation(deleteRequest).subscribe(data =>{
    this.deleteRes = data;
    if(this.deleteRes.statusMessage == "Successfully record deleted"){
      swal(this.deleteRes.statusMessage , "","success");
      this.getEmpDesignation();
    }
  })
}
cancelbulist(){
  this.value=false;
   
  }
}
