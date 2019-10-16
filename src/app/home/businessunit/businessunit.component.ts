import { Component, OnInit } from '@angular/core';
import { Businessunit } from './businessunit.model';
import { NgForm} from '@angular/forms';
import {Costcenter} from './businessunit.model'
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-businessunit',
  templateUrl: './businessunit.component.html',
  styleUrls: ['./businessunit.component.scss']
})
export class BusinessunitComponent implements OnInit {
  BudeleteDetails: any;
  buupdateDetails: any;
  id: any;
  value: boolean;
  coscentergetlist: any;
  costCenterList: any;
  costCenterId: any;
  businessUnitName: any;
  businessUnitList: any;
  businessUnitlist: any;
  businessunitDetails: any;
  businessunitRes: any;
  // value: boolean;
  // data: Businessunit; 
  // business: any;
  // costCenter: string;
  // businessUnit: string;
  // costcenter: any;
  // businessunit: any;
  // isEditable:boolean = false;
  // reverse: boolean = false;
  // costcenterlist: Costcenter[] = [
  //   {costCenter2: 13000},
  //   {costCenter2: 12000},
  //   {costCenter2: 11000},
  //   {costCenter2: 141516},
  //   {costCenter2: 171819}
    
    
  // ]
  // businessunitlist: Businessunit[] = [
  //   {
  //     'businessUnit': 'Application Development',
  //     'costCenter': 13000
  //   },
  //   {
  //     'businessUnit': 'Support',
  //     'costCenter': 12000
  //   },
  //   {
  //     'businessUnit': 'IDM',
  //     'costCenter': 11000
  //   }


  // ]
  constructor(private hrms:HrmsService) { }

  
  ngOnInit() {
    this.getBusinessunit();
    this.getCostCenter();
    
  }

  // saveBu(){
  //   debugger;
  //   this.value = false;
  //   this.data = {
  //     "businessUnit":this.businessunit,
  //     "costCenter":this.costcenter,
  //   }
  //   this.businessunitlist.unshift(this.data);

  //   this.businessUnit='';
  //   this.costCenter='';
  
  // }
  // editData(blist: { businessUnit: any; costCenter: any; }){
  //   console.log(blist);
  //   this.business = blist.businessUnit;
  //   this.costCenter = blist.costCenter;
  // }
  // saveData(){
  //   var editD = {
  //     "businessUnit":this.business,
  //     "costCenter":this.costCenter
  //   }
  //   console.log(editD);
  // }
  // deleterow(index: number){
  //   debugger;
  //   if(index !== -1){
  //     this.businessunitlist.splice(0,1);
  //   }
  //   else {
  //   this.businessunitlist.splice(index,1);
  //   }
  // }
  cancelbulist(){
    this.value=false;
    
  }
  clear(){
    this.businessUnitName="";
    this.costCenterId="";
  }
 
 setBusinessunit() {
   var requestData = {
      "businessUnit" :[{
              "businessUnitName" :this.businessUnitName,
              "costCenterId" : this.costCenterId
      }],
      "transactionType" : "save",
      "sessionId" : "132"
   }
   this.hrms.setBusinessunit(requestData).subscribe((response:any) =>{
     this.businessunitRes = response;
     console.log(this.businessunitRes);
     if(this.businessunitRes.message == "Successfully record added"){
      
       swal(this.businessunitRes.message,"","success");
       this.getBusinessunit();
     }
    },
    error => 
    {
    swal("Duplicates are not allowed","","error");
    this.getBusinessunit();
   })
   this.businessUnitName="",
   this.costCenterId="",
   this.value=false;
 }
 
getBusinessunit() {
  var request = {
    "businessUnit" :[{
            
    }],
     "transactionType":"getAll"
}
   
this.hrms.getBusinesinfo(request).subscribe(res =>{
  this.businessunitDetails = res;
  this.businessUnitList = this.businessunitDetails.businessUnitList;
  console.log(this.businessunitDetails);
})
  }
  //costcenter get
  getCostCenter() {
    var request = {
        

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
  saveUpdatedBuData(bulist){
    var burequest = {
      "businessUnit" :[{
              "id": bulist.id,
              "businessUnitName" :bulist.businessUnitName,
              "costCenterId" : bulist.costCenterId
      }],
      "transactionType" : "update",
      "sessionId" : "132"
}
this.hrms.updateBusinessunit(burequest).subscribe((res:any) =>{
  this.buupdateDetails = res;
  console.log(this.buupdateDetails);
  if(this.buupdateDetails.message == "Successfully record updated"){
    swal(this.buupdateDetails.message, "","success");
    this.getBusinessunit();
  }
  
},
error => 
{
swal("Duplicates are not allowed","","error");
this.getBusinessunit();
})

  }
  deleteBuData(bulist){
    var budeletereq ={
      "businessUnit" :{
              "id": bulist.id,
              "businessUnitName" :bulist.businessUnitName,
              "costCenterId" : bulist.costCenterId
      },
      "transactionType" : "delete",
      "sessionId" : "132"
}
this.hrms.deleteBusiness(budeletereq).subscribe(res =>{
  this.BudeleteDetails = res;
  console.log(this.BudeleteDetails);
  if(this.BudeleteDetails.statusMessage == "Success fully record deleted"){
    //swal(this.BudeleteDetails.statusMessage,"","success");
    this.getBusinessunit();
  }
})
  }
}