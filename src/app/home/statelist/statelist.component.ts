import { Component, OnInit } from '@angular/core';
import { Statelist } from './statelist.model';
import { OrderPipe } from 'ngx-order-pipe';
import { HrmsService } from '../services/hrms.service';
import  swal  from 'sweetalert';


@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.scss']
})
export class StatelistComponent implements OnInit {

 
  deleteStateRes: any;
  updateRes: any;
  statelist: any;
  StateList: any;
  StateDetails: any;
  StateRes: any;
  value: boolean;
  constructor(private hrms:HrmsService)
   {
    // this.sortedCollection = orderpipe.transform(this.statelistarray, 'stateList');
    // console.log(this.sortedCollection);
    }

  ngOnInit() 
  {
   this.getStateListData();
  }
  getStateListData() {
    var request ={
       
      "states":
       [],
            
      "sessionId":"1234",
       "transactionType": "getAll"
       
      }
  this.hrms.getStateListMaster(request).subscribe(res =>{
    this.StateDetails = res;
    this.StateList = this.StateDetails.statesList;
    console.log(this.StateDetails);
  })
  }

  
updateStateData(state) {
  var requestData =  {
       
    "states":
     [{
      "stateName":state.stateName,
      "id":state.id
     }],
          
    "sessionId":"1234",
     "transactionType": "update"
     
    }
this.hrms.updateStateListMaster(requestData).subscribe(response =>{
  this.StateRes = response;
  console.log(this.StateRes);
  if(this.StateRes.message == "Successfully record updated"){
    this.value = false;
     swal(this.StateRes.message, "","success");
     this.getStateListData();
  }
},
error => 
  {
  swal("Duplicates are not allowed","","error");
  this.getStateListData();
})
}



//   sortedCollection: any[];
//   order: string = 'stateList';
//   value: boolean;
//   data;
//  state:any;
//  stateList;
//  statelist:any;

//  isEditable:boolean = false;
//  reverse: boolean = false;


//  user: Statelist = { stateList: '' };

//  statelistarray: Statelist[] = 
//  [
//   {
//     'stateList': 'Karnataka',
    
//   },
//   {
//     'stateList': 'Rajasthan',
    
//   },
//   {
//     'stateList': 'Kerala',
    
//   },
//   {
//     'stateList': 'Andhra Pradesh'
    
//   }


// ]

//  saveButton()
//  {
//   debugger;
//   this.value = false;
//   this.data = 
//   {
//     "stateList":this.statelist,
//   }
//   this.statelistarray.unshift(this.data);

//     this.stateList='';
//  }


 
// editState(blist)
// {
//   console.log(blist);
//   this.statelist = blist.stateList;
// }

// saveState()
//   {
//     var editD = 
//     {
//       "stateList":this.state,
//     }
//     console.log(editD);
//   }

//   deleterow(index){
//     debugger;
//     if(index !== -1){
//       this.statelistarray.splice(0,1);
//     }
//     else 
//     {
//     this.statelistarray.splice(index,1);
//     }
//   }
stateName:any;
  cancelstatelist()
  {
    
    this.value=false;
  }

//   setOrder(value: string) {
//     if (this.order === value) {
//       this.reverse = !this.reverse;
//     }

//     this.order = value;
//   }
//api code starts here

setState() {
  var requestData = {
       
"states":
 [{
  "stateName":this.statelist
 }],
      
"sessionId":"1234",
 "transactionType": "save"
 
}
this.hrms.saveStateListMaster(requestData).subscribe((response:any) =>{
  this.StateRes = response;
  console.log(this.StateRes);
  if(this.StateRes.message == "Successfully record added")
  {
    this.value = false;
     swal("Record Added", "","success");
    this.getStateListData();
  }
},
error => 
  {
  swal("Duplicates are not allowed","","error");

  this.statelist=""
  this.getStateListData();
})
this.statelist=""
this.value=false
}



// getStatus() {
//   var request ={
//     "states" :{
//     }, 
//              "transactionType" : "getAll",
//     "sessionId" : "132"
// }
// this.hrms.getStatusList(request).subscribe(res =>{
//   this.StateDetails = res;
//   this.StateList = this.StateDetails.statesList;
//   console.log(this.StateDetails);
// })
// }

// saveUpdateValues(state){
// // console.log(state);
// var updateRequestData = {
//   "states" :{
//           "id" : state.id,
//           "stateName" : state.stateName
//   },
// "transactionType" : "update",
//   "sessionId" : "132"
// }
// this.hrms.updateStateList(updateRequestData).subscribe((res:any) =>{
//   this.updateRes = res;
//   console.log(this.updateRes);
//    if(this.updateRes.message =="Successfully record updated"){
//       swal(this.updateRes.message, "","success");
    
//    }
//   },
//   error => 
//   {
//   swal("Duplicates are not allowed","","error");
//   this.getStatus();
// })
// }

// deleteSate(state){
//   var deleteRequest = {
//     "states" :{
//             "id" : state.id,
//             "stateName" : state.stateName
//     },
// "transactionType" : "delete",
//     "sessionId" : "132"
// }
// this.hrms.deleteStateList(deleteRequest).subscribe(data => {
//   this.deleteStateRes = data;
//   if(this.deleteStateRes.statusMessage == "Successfully record deleted"){
//     // swal(this.deleteStateRes.statusMessage,"","success");
//     // this.getStatus();
//   }
// })

// }


}
