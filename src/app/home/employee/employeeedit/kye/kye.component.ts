import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { HrmsService } from 'src/app/home/services/hrms.service';
import { DataService } from 'src/app/home/services';

@Component({
  selector: 'app-kye',
  templateUrl: './kye.component.html',
  styleUrls: ['./kye.component.scss']
})
export class KyeComponent implements OnInit {
public eid:any;
  loggeduser: string;
  constructor(private hrms:HrmsService, private dataservice:DataService) {
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
   }

  ngOnInit() {
    this.getEmpKye();
    this.getPassportCenter();
  }

//---Employee KYE details starts--------------

//--- getting Employee KYE details-------------------
Location:any;
empkye:any;
empkyearr:any;
savepassport:any;
getEmpKye()
{
var reqObj =
{
  "kye" :
  [{
"employee_Id": this.eid
  }],
  "transactionType"     :  "getAll"
} 
// {
//         "kye" :
//         [{

//         }],
//         "transactionType"     :  "getAll"
// }

this.hrms.getEmployeeKyeDetails(reqObj).subscribe(res =>{
this.empkye = res;
console.log(this.empkye);
this.empkyearr = this.empkye.kyeList;
//console.log("welcome to KYE");
 //console.log(this.empkye.kyeList[5].place_of_issue);
 for(let i=0;i<=this.empkyearr.length;i++){
   for(let j=0;j<this.passportCenterList.length;j++){
    if(this.passportCenterList[j].id==this.empkyearr[i].place_of_issue){
     this.savepassport=this.passportCenterList[j].centerName;
     console.log("Loop for Place");
     console.log(this.savepassport);
    }
   }
   this.empkyearr[i].place_of_issue=this.savepassport;
 }


})
}


//-- Getting Passport Deatails -------------
passportCenterDetails:any;
passportCenterList:any;
passport:any;
sample:any;
getPassportCenter() {
  var request =
  {
    "passportList":[
   ],

"sessionId" : "323",
"transaactionType" : "getall"
}
  this.hrms.getPassportCeneter(request).subscribe(res =>{
    this.passportCenterDetails = res;
    //this.sample= this.passportCenterDetails.passportList;
    this.passportCenterList = this.passportCenterDetails.passportList;
    console.log(this.passportCenterList);
  })
}


//num = this.passport.id



//-- Getting Passport Deatails -------------


//--- saving Employee KYE details-------------------
savekyeres:any;
savekyeresarr:any;
kYE_Type:any;
uan:any;
kYE_address:any;
passport_no:any;
passport_date_of_Issue:any;
passport_date_of_expiry:any;
place_of_issue:any;
passport_address:any;
//employee_Id:any;
///created_by:any;
value:boolean




saveEmpKye()
{
var savereqObj =
{
"kye" :[{
           "id"                      :  this.empkyedetails.id,
           "kYE_Type"                :  this.empkyedetails.kYE_Type,
           "uan"                     :  this.empkyedetails.uan,
           "kYE_address"             :  this.empkyedetails.kYE_address,
           "passport_no"             :  this.empkyedetails.passport_no,
           "passport_date_of_Issue"  :  this.empkyedetails.passport_date_of_Issue,
           "passport_date_of_expiry" :  this.empkyedetails.passport_date_of_expiry,
           "place_of_issue"          :  this.empkyedetails.place_of_issue,
           "passport_address"        :  this.empkyedetails.passport_address,
           "employee_Id"             :  this.eid,
           "created_by"              :  this.loggeduser
}],
           "transactionType"     :  "save"
}
this.hrms.saveEmployeeKyeDetails(savereqObj).subscribe(res => {
this.savekyeres = res;
console.log(this.savekyeres);


if(this.savekyeres.message == "record added successfully")
    {
     swal(this.savekyeres.message,"","success");
     this.getEmpKye();
   }
   this.getEmpKye();
})

}

//--- deleting Employee KYE details-------------------
deleteKye;any;
deleteKyearr:any;
isCreated:boolean=false
deleteEmpKye(kye)
{
var deleteReqKye = 
{
"kye" :[{
      "id"                      :  kye.id,
      
      "updated_by"              : this.loggeduser
}],
      "transactionType"     :  "delete"
}

this.hrms.deleteEmployeeKyeDetails(deleteReqKye).subscribe (res => {
this.deleteKye = res;
console.log(this.deleteKye);
this.deleteKyearr = this.deleteKye.kye;

 if(this.deleteKye.message == "record deleted successfully")
 {
  swal(this.deleteKye.message,"","success");
  this.getEmpKye();
 }
  this.getEmpKye();
})
}

//--- Updating Employee KYE details-------------------

editkye:any;
editkyearr:any;
kye:any;
isUpdate:boolean


addeditkye(newUserFormKye)
{
newUserFormKye.reset();
this.isUpdate = false;
this.isCreated = true;

}

public empkyedetails = 
{
"id"                      :  "",
"kYE_Type"                :  "",
"uan"                     :  "",
"kYE_address"             :  "",
"passport_no"             :  "",
"passport_date_of_Issue"  :  "",
"passport_date_of_expiry" :  "",
"place_of_issue"          :  "",
"passport_address"        :  "",
"employee_Id"             :  "",
"created_by"              :  "",
"updated_by"              :  ""
}


//----edit kye details----------------------------------------------------
editkyeDetails:any;
editkyebyid(kye)
{
this.isUpdate = true;
this.isCreated = false;
var kyeid = kye.id;
var editempkyeobj = 
{
"kye" :[{
                "id"                      :  kyeid
             
     }],
             "transactionType"     :  "getAll"
}

this.hrms.editEmployeeKyeDetails(editempkyeobj).subscribe(res => {
this.editkye = res;
this.editkyeDetails = this.editkye.kyeList;
this.empkyedetails = this.editkyeDetails[0];
console.log("this.empkyedetails",this.empkyedetails);

})
}

//----update kye details----------------------------------------------------
updatekyeres:any;
updatekyeresarr:any;

updatekye(kye)
{
var updatekyereq =
{
     "kye" :[{
    "id"                      :  this.empkyedetails.id,
    "kYE_Type"                :  this.empkyedetails.kYE_Type,
    "uan"                     :  this.empkyedetails.uan,
   "kYE_address"             :  this.empkyedetails.kYE_address,
   "passport_no"             :  this.empkyedetails.passport_no,
    "passport_date_of_Issue"  :  this.empkyedetails.passport_date_of_Issue,
   "passport_date_of_expiry" :  this.empkyedetails.passport_date_of_expiry,
   "place_of_issue"          :  this.empkyedetails.place_of_issue,
    "passport_address"        :  this.empkyedetails.passport_address,
   "employee_Id"             :  this.empkyedetails.employee_Id,
   "updated_by"              :  this.loggeduser
}],
"transactionType"     :  "update"
}
this.hrms.updateEmployeeKyeDetails(updatekyereq).subscribe(updateres =>{
this.updatekyeres = updateres;
console.log(this.updatekyeres);
this.updatekyeresarr = this.updatekyeres.kye;


if(this.updatekyeres.message == "record updated successfully")
    {
     swal(this.updatekyeres.message,"","success");
     this.getEmpKye();
   }
this.getEmpKye();
})
}


//---- KYE details  Ends----------------------------------------------




}
