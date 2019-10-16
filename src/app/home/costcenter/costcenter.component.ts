import { Component, OnInit } from '@angular/core';
import { Costcenter } from './costcenter.model';
import { NgForm} from '@angular/forms';
import { HttpRequest } from '@angular/common/http';
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-costcenter',
  templateUrl: './costcenter.component.html',
  styleUrls: ['./costcenter.component.scss']
})
export class CostcenterComponent implements OnInit {
  deletedDetails: any;
  id: any;
  costCenterCode: any;
  updateRes: any;
  coscentergetlist: any;
  costCenterList: any;
  costcenterRes: any;
  value: boolean;
  // public data1=[];
  // public show:boolean = false;
  // public buttonName:any = 'Show';


  //new code starts here
//   value: boolean;
//   data; 
//   cost:any;
//   costCenter;
//   isEditable:boolean = false;
//   reverse: boolean = false;

//   order: string = 'info.name';
 
  

  constructor(private hrms:HrmsService) {
       }
//    costcenterlist:Costcenter[]=[{
     
//     "costCenter": "9000"
//    },
//  {
//    "costCenter": "9001"
//  },
//  {
//    "costCenter": "9002"
//  },
//  {
//    "costCenter": "9003"
//  },
//  {
//    "costCenter": "9004"
//  },
// ]




//  saveBu(){
//   debugger;
//   this.value = false;
//   this.data = {
//     "costCenter":this.cost,
   
//   }
//   this.costcenterlist.unshift(this.data);

//   this.costCenter='';
 

// }
// editData(blist){
//   console.log(blist);
//   //this.listDetails = blist;
//   this.cost = blist.costCenter;

// }
// saveData(){
//   var editD = {
//     "costCenter":this.cost,
   
//   }
//   console.log(editD);
// }
// deleterow(index){
//   debugger;
//   if(index !== -1){
//     this.costcenterlist.splice(0,1);
//   }
//   else {
//   this.costcenterlist.splice(index,1);
//   }
// }

cancelbulist(){
  this.value=false;
  
}
clear(){
  this.costCenterCode="";
}
  ngOnInit() {  
    this.getCostCenter();
   }
//   handleClick(event: Event) {
//     console.log('Button clicked', event)
//   }
//   toggle() {
//     this.show = !this.show;

//     // CHANGE THE NAME OF THE BUTTON.
//     if(this.show)  
//       this.buttonName = "Hide";
//     else
//       this.buttonName = "Show";
//   }

//   setOrder(value: string) {
//     if (this.order === value) {
//       this.reverse = !this.reverse;
//     }

//     this.order = value;

// }

//Api code starts here

setCostcenterData(){
var requestData = {
        

  "costCenter" : [{
          
  
          "costCenterCode":this.costCenterCode
  
  },
  ],
          
  "sessionId" : "124",
  
  
  "transactionType" : "save"
  
  }
  this.hrms.setCostcenter(requestData).subscribe((responce:any) =>{
    this.costcenterRes = responce;
    console.log(this.costcenterRes);
    if(this.costcenterRes.message == "Successfully record added"){
      this.value = false;
      swal(this.costcenterRes.message, "","success");
      this.getCostCenter();
    }
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");
  this.getCostCenter()
  })
  this.costCenterCode="";
  this.value=false;
}
getCostCenter() {
  var request = 
       {
        

"costCenter" : [{
        

}],
        
"sessionId" : "124",


"transactionType" : "get"

}
  this.hrms.getCostcenter(request).subscribe(res =>{
 this.costCenterList = res;
 this.coscentergetlist = this.costCenterList.listOfCostCenter;
 console.log(this.costCenterList);
  })
}
saveUpdateValues(bulist){
  console.log(bulist);
  var updateRequestData = {
    "costCenter" :[{
            "id" : bulist.id,
            "costCenterCode" : bulist.costCenterCode
    }],
 
    "sessionId" : "123",
    "transactionType" : "update"
  }
 
  this.hrms.updateCostCenter(updateRequestData).subscribe((res:any) =>{
    this.updateRes = res;
    console.log(this.updateRes);
      if(this.updateRes.message == "Successfully record updated"){
      swal(this.updateRes.message, "","success");
        this.getCostCenter();
      }
    },
    error => 
    {
    swal("Duplicates are not allowed","","error");
    this.getCostCenter();
    

  })
  }
//   deleteCostCenter(bulist) {
//   var deleteReq = {
//     "costCenter" : {
//              "id" : bulist.id,
//              "costCenterCode" : bulist.costCenterCode
//     },
//     "sessionId" : "123",
//             "transactionType" : "delete"
// }
// this.hrms.deleteCostCenter(deleteReq).subscribe(res =>{
// this.deletedDetails = res;
// console.log(this.deletedDetails);
// if(this.deletedDetails.statusMessage == "Successfully record deleted"){
// swal(this.deletedDetails.statusMessage, "","success");
// this.getCostCenter();
// }
// })

//   }

}
