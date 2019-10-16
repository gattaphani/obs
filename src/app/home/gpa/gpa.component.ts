import { Component, OnInit } from '@angular/core';
import { Gpaplan, Gpapremium } from './gpa.model';
import { NgForm} from '@angular/forms';
import { OrderPipe } from 'ngx-order-pipe';
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {


  deleteGpaDetails: any;
  editGpaDetails: any;
  gpaPlanId: any;
  gpasetDetails: any;
  gpaPlanType: any;
  gpalist: any;
  gpaDetails: any;
  empDesignationRes: any;
  id: any;
  totalPremium: any;
  gpaPremium: any;
  gpaPlan: any;
  value: boolean;
//   sortedCollection: any[];
//   order: string = 'gpaPlan'
//   value: boolean;
//   data; 
//   gpa: any;
//  gpaPremium;
//  totalPremium;
//   gpaPlan;
//   gpapremium: any;
//   totalpremium:any;
//   gpaplan: any;
//   isEditable:boolean = false;
//   reverse: boolean = false;


  
  

//   gpaplanlist: Gpaplan[] = [
//     {
//       'gpaPlan': 'Plan1',
//       'gpaPremium': 5500,
//       'totalPremium':1212,

//     },
//     {
//       'gpaPlan': 'Plan2',
//       'gpaPremium': 4500,
//       'totalPremium':1912,
//     },
//     {
//       'gpaPlan': 'Plan1',
//       'gpaPremium': 7500,
//       'totalPremium':1437,
//     }
  
  
//   ]
  constructor(private hrms:HrmsService){}
// {
// this.sortedCollection = orderpipe.transform(this. gpaplanlist, 'gpaPlan');
// console.log(this.sortedCollection);
// }

  ngOnInit() {  
    this.getGpa();
  }
    // saveBu(){
    //   debugger;
    //   this.value = false;
    //   this.data = {
    //     "gpaPlan":this.gpaplan,
    //     "gpaPremium":this.gpapremium,
    //     "totalPremium":this.totalPremium,

    //   }
    //   this.gpaplanlist.push(this.data);
    
    //   this.gpaPlan='';
    //   this.gpaPremium='';
    // this.totalPremium='';
    // }

    // editData(blist){
    //   console.log(blist);
    //   //this.listDetails = blist;
    //   this.gpa = blist.gpaPlan;
    //   this.gpaPremium= blist.gpaPremium;
    //   this.totalPremium= blist.totalPremium;
    // }
    // saveData(){
    //   var editD = {
    //     "gpaPlan":this.gpa,
    //     "gpaPremium":this.gpaPremium,
    //     "totalPremium":this.totalPremium,
    //   }
    //   console.log(editD);
    // }
    // deleterow(index){
    //   debugger;
    //   if(index !== -1){
    //     this.gpaplanlist.splice(0,1);
    //   }
    //   else {
    //   this.gpaplanlist.splice(index,1);
    //   }
    // }
    cancelgpalist(){
      this.value=false;
      
    }

    // setOrder(value: string) {
    //   if (this.order === value) {
    //   this.reverse = !this.reverse;
    //   }
      
    //   this.order = value;
    //   }
    // setGpa(){
    //   var requestData = {
    //     "gpaPlan":{
    //             "gpaPlanId":this.id,
    //             "gpaPlanType":this.gpaPlan,
    //             "gpaPremium":this.gpaPremium,
    //             "totalPremium":this.totalPremium
        
                
    //     },
    //     "sessionId":1223,
    //             "transactionType":"save"

    //    }
    //   this.hrms.setEmployeeDesignation(requestData).subscribe(response =>{
    //     this.empDesignationRes = response;
    //     console.log(this.empDesignationRes);
    //     if(this.empDesignationRes.statusMessage == "Success fully record added"){
    //       this.value = false;
    //       swal(this.empDesignationRes.statusMessage , "","success");
    //       this.getGpa();
    //     }
    //   })
    // }
    setGpa()
    {
var request={
  "gpaPlan" : [{
  "id":this.id,
  "gpaPlanType":this.gpaPlanType,
  "gpaPremium":this.gpaPremium,
  "totalPremium":this.totalPremium
                     }], 
                 "transactionType":"save",
                "sessionId" : "any String" 
  }


this.hrms.setGpaData(request).subscribe((res:any)=>{
  this.gpasetDetails = res;
  console.log(this.gpasetDetails);
   if(this.gpasetDetails.message == "Success fully record added"){
     
     swal(this.gpasetDetails.message,"","success")
     this.getGpa();
   }
  },
  error => 
  {
  swal("Duplicates are not allowed","","error");
  
  
})
this.id="",
this.gpaPlanType="",
this.gpaPremium="",
this.totalPremium="",
this.value=false;
    }
    getGpa(){
     var request={
		"gpaPlan" : [{
   
                   }], 
               "transactionType":"getall",
              "sessionId" : "any String" 
		}

       this.hrms.getGpaData(request).subscribe(res =>{
        this.gpaDetails = res;
        this.gpalist = this.gpaDetails.gpa;
        console.log(this.gpaDetails);
       })
    }
    saveUpdatedValues(gpalist){
      var request ={
        "gpaPlan":[{
                "id":gpalist.id,
                "gpaPlanType":gpalist.gpaPlanType,
                "gpaPremium":gpalist.gpaPremium,
                "totalPremium":gpalist.totalPremium

                
        }],
        "sessionId":1221,
                "transactionType":"update"
}
this.hrms.updateGpaData(request).subscribe((res:any) =>
{
  this.editGpaDetails = res;
  console.log(this.editGpaDetails);
  if(this.editGpaDetails.message == "Success fully record updated")
  {
    swal(this.editGpaDetails.message,"","success");
    this.getGpa();
  }
},
error => 
  {
  swal("Duplicates are not allowed","","error");
  this.getGpa();
})
this.value=false;
    }


    deleteGpa(gpalist){
      var request ={
        "gpaPlan":[{
                "gpaPlanId":gpalist.gpaPlanId
        }],
        "sessionId":1221,
                "transactionType":"delete"
}
this.hrms.deleteGpaData(request).subscribe(res=>{
  this.deleteGpaDetails = res;
  console.log(this.deleteGpaDetails);
  if(this.deleteGpaDetails.statusMessage == "Success fully record deleted"){
    swal(this.deleteGpaDetails.statusMessage,"","success");
    this.getGpa();
  }
})
    }
}
