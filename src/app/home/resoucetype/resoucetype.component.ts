
import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { NgForm } from '@angular/forms';
import { Resourcetype } from './resource.model';
import swal from 'sweetalert';
import { HrmsService } from '../services/hrms.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-resoucetype',
  templateUrl: './resoucetype.component.html',
  styleUrls: ['./resoucetype.component.scss']
})
export class ResoucetypeComponent implements OnInit {

  

  
  order: string = 'resourceType'
  value: boolean;
  data; 
  resource: any;

  
  
  resourcetype: any;
  isEditable:boolean = false;
  reverse: boolean = false;
  // public businessUnit = {};

  // resourcetypelist:Resourcetype[] = [
  //   {
  //     'resourceType': 'Permanant',
     
  //   },
  //   {
  //     'resourceType': 'Contract',
    
  //   },
  

  // ]
  
  constructor(private hrms:HrmsService)
{
// this.sortedCollection = orderpipe.transform(this. resourcetypelist, 'resourceType');
// console.log(this.sortedCollection);

}

  
  ngOnInit() 
  {
    this.getResource();
  }
  


  

  // saveBu(){
  //   debugger;
  //   this.value = false;
  //   this.data = {
  //     "resourceType":this.resourcetype,
     
  //   }
  //   this.resourcetypelist.push(this.data);

  //   this.resourceType='';
    
  
  // }
  // editData(blist){
  //   console.log(blist);
  //   //this.listDetails = blist;
  //   this.resource = blist.resourceType;
  
  // }
  // saveData(){
  //   var editD = {
  //     "resourceType":this.resource,
   
  //   }
  //   console.log(editD);
  // }
  // deleterow(index){
  //   debugger;
  //   if(index !== -1){
  //     this.resourcetypelist.splice(0,1);
  //   }
  //   else {
  //   this.resourcetypelist.splice(index,1);
  //   }
  // }
  
  // cancelrtlist(){
  //   this.value=false;
    
  // }
  // setOrder(value: string) {
  //   if (this.order === value) {
  //   this.reverse = !this.reverse;
  //   }
    
  //   this.order = value;
  //   }



//--Get Resource--------------------
getResourceDetails:any;
getResourceList:any;
getResource()
{
  var getresrequest =
  {
    "resourceTypes":[
            {
            
            }
    ],
    "transactionType":"getAll"
}
  this.hrms.getResourceType(getresrequest).subscribe(res =>{
    this.getResourceDetails = res;
    console.log(this.getResourceDetails);
    this.getResourceList = this.getResourceDetails.resourceTypeList;
    console.log(this.getResourceList);
    
  })
}



//--Set Resource--------------------
res:any;
setResourceTypeReq:any;

setResource(){
  var requestsaveData = 
  {
    "resourceTypes":[
            {
                    
                    "resourceTypeName":this.res
                    
            }
    ],
    "transactionType":"save"
}
  
this.hrms.setResourceType(requestsaveData).subscribe((response:any) =>
  {
this.setResourceTypeReq = response;
console.log(this.setResourceTypeReq);


if(this.setResourceTypeReq.message == "Resource Type saved successfully")
{
 swal(this.setResourceTypeReq.message, "","success");
 this.getResource();
}
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");
})

this.res="";
this.getResource();
this.value=false;

}

//----updateSeparation--------------------
updateResResp:any;
updateResRespListArr:any
updateResource(rtlist)
{
  
  var updateResRequestData = 
  {
    "resourceTypes":[
            {
                    "id":rtlist.id,
                    "resourceTypeName":rtlist.resourceTypeName
                    
            }
    ],
    "transactionType":"update"
}

 
  this.hrms.updateResourceType(updateResRequestData).subscribe((res:any) =>{
    this.updateResResp = res;
    this.updateResRespListArr=this.updateResResp.employmentDetailsList;
    console.log(this.updateResResp);
    if(this.updateResResp.message == "Resource Type updated successfully"){
  
      swal(this.updateResResp.message, "","success");
      this.getResource();
    }
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");
  })
  this.getResource();
}


cancelrtlist()
  {
    this.value=false;
  }

}

