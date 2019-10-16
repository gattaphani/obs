import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { HrmsService } from './../../../services/hrms.service';
import { DataService } from 'src/app/home/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public eid: any;
  loggeduser: string;


  constructor(private hrms:HrmsService,private dataservice: DataService) { 
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
  }

  ngOnInit() {
    this.getContactInformation();
    this.getStatus();
  }
  
  //contact info strats
  contactList:any;
  contactInfolist:any;
  contactinfoReq:any;
  transactionType:any;
  //updateRes:any;
  deletedcontactDetails:any;
  Email:any;
  personalMobileNo:any;
  current_Address_Line2:any;
  current_Address_Line1:any;
  alternate_mobileNo:any;
  current_City:any;
  current_State:any;
  current_Pin:any;
  permanent_Address_Line_1:any;
  emp_Id:any;
  //created_By:any;
  contactlist:any;
  savecontactres:any;
  //value: boolean;
  contactinfoArr:any;

  contactgetbyid:any;
  contactInfo:any;
  contactInfoDetails:any;
  empinfoarr:any;


  StateDetails:any;
  StateList:any;
  getcontactontable:any;
// Method for Save Contact Information
    setContactInformation() {
     
      
      var RequestData = {

        "empInfo" :  [{ 
                 "email":this.ContactInfo.email,
                 "personalMobileNo":this.ContactInfo.personalMobileNo,
                 "alternateMobileNo": this.ContactInfo.alternateMobileNo,
                 "currentAddressLine1": this.ContactInfo.currentAddressLine1,
                 "currentAddressLine2": this.ContactInfo.currentAddressLine2,
                 "currentCity": this.ContactInfo.currentCity,
                "currentState": this.ContactInfo.currentState,
                 "currentPin": this.ContactInfo.currentPin,
                 "permanentAddressLine1":this.ContactInfo.permanentAddressLine1,
                 "empId": this.eid,
                 "createdBy":this.loggeduser
             }],
       "transactionType" : "save"
     }
this.hrms.setContactInfo(RequestData).subscribe(responce=>{
  this.contactinfoReq = responce;
  //alert(this.contactinfoReq);
  console.log("Conatct details Saved ", this.contactinfoReq);
  if(this.contactinfoReq.message == "Successfully Record Saved"){
    
    swal(this.contactinfoReq.message, "","success");
     this.getContactInformation();
   }
  this.contactinfoArr = this.contactinfoReq.empInfo;
  this.getContactInformation();
})
  
    }
//method for get contact info
    getContactInformation() {
      var request = 
      {
        "empInfo" : [
          {
            "empId": this.eid
          }
          ],
        "transactionType" : "getAll"
      }
      // {
      //   "transactionType" : "getAll" 
      // }
      this.hrms.getContactInfo(request).subscribe(res =>{
     this.contactInfolist = res;
     this.contactList = this.contactInfolist.empContacts;
     console.log(this.contactList);


     for(let i=0;i<=this.contactList.length;i++){

      for(let j=0;j<this.StateList.length;j++){
      if(this.StateList[j].id==this.contactList[i].current_State){
      this.getcontactontable=this.StateList[j].stateName;
      console.log("Qualification details");
      console.log(this.getcontactontable);
      } 
      }
      this.contactList[i].current_State=this.getcontactontable;
      console.log("Final Educational ");
      console.log(this.contactList);
      }

      })
    }

    isUpdate:boolean;
//master get method for stateslist
getStatus() {
  var request =
    {
       
      "states":
       [{
        
       }],
            
      "sessionId":"1234",
       "transactionType": "getall"
       
      }
this.hrms.getStateListMaster(request).subscribe(res =>{
  this.StateDetails = res;
  this.StateList = this.StateDetails.statesList;
  console.log(this.StateList);
})
}

valueAdd(newUserFormcontact){
  newUserFormcontact.reset()
  this.isUpdate=false;
  this.createdby= true;
}

     //isUpdate = true;
     createdby= false;

     public ContactInfo= {
       "id":"",
       "email": "",
       "personalMobileNo":"",
       "alternateMobileNo": "",
       "currentAddressLine1":"",
       "currentAddressLine2": "",
       "currentCity":"",
       "currentState": "",
       "currentPin":"",
       "permanentAddressLine1": "",
       "empId": "",
       "createdBy": "",
       "updatedBy": "",
       "created_date":"",
       "updated_date":"",
       "flag":""
     }
    
    //method for edit  contact Info
       getdatabyId(Cilist){
         this.isUpdate = true;
    
        this.createdby = false;

         console.log(Cilist);
    
    
     var cid= Cilist.id;
     var getupdatedata = {
      
    
         "transactionType" : "getAll",
        "empInfo" : [{
                   "id" : cid
                     }]
        
      
    }
    
    this.hrms.getcontactbyId(getupdatedata).subscribe(res =>{
      this.contactgetbyid=res;
      this.contactInfoDetails=this.contactgetbyid.empContacts;
      this.ContactInfo=this.contactInfoDetails[0];
      console.log("this.ContactInfo",this.ContactInfo)
    })
    
  }
  //method for update contantInfo
  updateRes:any;
updateContactdetails(){

  var updateRequestData={
    

      "empInfo" : [{
               "email" : this.ContactInfo.email ,
              "personalMobileNo" : this.ContactInfo.personalMobileNo ,
              "alternateMobileNo" : this.ContactInfo.alternateMobileNo,
              "currentAddressLine1" : this.ContactInfo.currentAddressLine1,
              "currentAddressLine2" :  this.ContactInfo.currentAddressLine2,
              "currentCity" : this.ContactInfo.currentCity,
        
        "currentPin" :  this.ContactInfo.currentPin,
        "currentState" :this.ContactInfo.currentState,
        "permanentAddressLine1" : this.ContactInfo.permanentAddressLine1 ,
        "empId" : this.ContactInfo.empId ,
        "id" : this.ContactInfo.id,
        "updatedBy" : this.loggeduser
      }],
         
        "transactionType" : "update"
               
      }
        this.hrms.updateContactInfo(updateRequestData).subscribe(res =>{
             this.updateRes = res;
                
            console.log(this.updateRes);
            if(this.updateRes.message == "Successfully Record Updated"){
              swal(this.updateRes.message, "","success");
              this.getContactInformation();
            }
                 this.getContactInformation();
            })
       
      
  }

 //method for delete contactInfo

    deleteContactInformation(Cilist) {
      var deleteReq = {
 
        "empInfo" : [{
         "id" :Cilist.id,
         "updatedBy" : this.loggeduser
        }
      ],
         
         
         "transactionType" : "delete"
         
       }
    this.hrms.deleteContactInfo(deleteReq).subscribe(res =>{
    this.deletedcontactDetails = res;
    this.empinfoarr = this.deletedcontactDetails.empInfo;
    console.log(this.deletedcontactDetails);
    if(this.deletedcontactDetails.message == "Successfully Record Deleted"){
      swal(this.deletedcontactDetails.message, "","success");
      //this.getContactInformation();
    }
    this.getContactInformation();
    })
    }
//contacytInfo ends

}
