import { Component, OnInit } from '@angular/core';
import { HrmsService } from './../../../services/hrms.service';
import swal from 'sweetalert';
import { DataService } from 'src/app/home/services';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements OnInit {

  public eid:any;
  loggeduser: string;
  constructor(private hrms:HrmsService,private dataservice:DataService) { 
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
  }

  ngOnInit() {
    this.getemploymentdetails();
    this.getResource();
    this.getSeparation();

  }

//employment details starts
employmentdetailsss:any;
onboarding:any
onboardingdetails:any;
deleteonboarding:any;

isupdateDependent:boolean;
createdByDependent:boolean;
onboard_details:any;
onboard_details_by_id:any;
onboardRes:any;

//employment details starts
onboardingdropdown:any;
getemploymentdetails(){
  var employmentdetailss=
  {
    "employmentDetails":[{
    "employeeId": this.eid
    }],
    "transactionType" : "getAll"
    
    }
 this.hrms.getonboardingdetails(employmentdetailss).subscribe(response =>{
   this.employmentdetailsss = response;
   this.onboarding = this.employmentdetailsss.employmentDetailsList;
 console.log(this.onboarding);


 for(let i=0;i<=this.onboarding.length;i++){

  for(let j=0;j<this.getResourceList.length;j++){
  if(this.getResourceList[j].id==this.onboarding[i].resourceType){
  this.onboardingdropdown=this.getResourceList[j].resourceTypeName;
  console.log("Qualification details");
  console.log(this.onboardingdropdown);
  } 
  }
  this.onboarding[i].resourceType=this.onboardingdropdown;
  console.log("Final Educational ");
  console.log(this.onboarding);
  }

 
 })
 }

 //---getSeparation-------------
separationDetailsList:any;
separationDetails:any;
separationTypedropdown:any;
  getSeparation() {
    var requestgetObj =
    {
      "separationType":[
              
              ],
              "sessionId":"1234",
              "transactionType":"getall"
      }
    this.hrms.getSeperationType(requestgetObj).subscribe(res =>{
      this.separationDetails = res;
      console.log(this.separationDetails);
      this.separationDetailsList = this.separationDetails.separationTypeList;
      console.log(this.separationDetailsList);


      for(let i=0;i<=this.onboarding.length;i++){

        for(let j=0;j<this.separationDetailsList.length;j++){
        if(this.separationDetailsList[j].separationTypeId==this.onboarding[i].separationType){
        this.separationTypedropdown=this.separationDetailsList[j].separationType;
        console.log("Qualification details");
        console.log(this.separationTypedropdown);
        } 
        }
        this.onboarding[i].separationType=this.separationTypedropdown;
        console.log("Separation Type ");
        console.log(this.onboarding);
        }

    })
  }
 //---getSeparation ENDS------------

 saveemploymentdetails(){
   var user="user";


    var saveemploymentdetailss = 
  
    {
      "employmentDetails":[ {
        "employeeId":this.eid,
        "joiningDate":this.onboarddetailsss.joiningDate,
        "resourceType":this.onboarddetailsss.resourceType,
        "bondStatus": this.onboarddetailsss.bondStatus,
        "resignationDate":this.onboarddetailsss.resignationDate,
        "exitDate":this.onboarddetailsss.exitDate,
       "separationType":this.onboarddetailsss.separationType,
    
        "createdBy":this.loggeduser
    }],
    
    "transactionType":"save"
}
  this.hrms.saveonboardingdetails(saveemploymentdetailss).subscribe(response =>{
    this.onboardingdetails = response;
          console.log(this.onboardingdetails);
       if(this.onboardingdetails.message == "Data is inserted successfully"){
          swal(this.onboardingdetails.message, "","success");
          // this.getemploymentdetails();
         }
         this.getemploymentdetails();
     })
     
    // this.getemploymentdetails();

}

// Master data for Resourse Type
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



deleteOnbording(onboard){
var deleteemployee={
  "employmentDetails":[ {
    "id":onboard.id,
   "updatedBy":this.loggeduser

    
}],

"transactionType":"delete"
}
this.hrms.deleteOnboardingdetails(deleteemployee).subscribe(res=>{
  this.deleteonboarding=res;
   if(this.deleteonboarding.message == "Data is deleted successfully"){
    swal(this.deleteonboarding.message, "","success");
     this.getemploymentdetails();
   }
 

})

}


getboardingdetailsbyId(onboard){
  this.isupdateDependent = true;
  this.createdByDependent = false;
   var onboardid = onboard.id;
   var boardingdetailsbyid={
    
    "employmentDetails":[
      {
          "id":onboardid
      }
    ],
  
   "transactionType":"getALL"
  
  }


  this.hrms.getonboardingdetails(boardingdetailsbyid).subscribe(response =>{
    this.onboard_details = response;
    this.onboard_details_by_id = this.onboard_details.employmentDetailsList;
    this.onboarddetailsss = this.onboard_details_by_id[0];
    console.log("this.onboarddetailsss",this.onboarddetailsss);
      
  
  })

 }
 updateonboardingdetailss(){
   var user=user;
   
  var updatenboarddetails=  {"employmentDetails":[ {
            "id":this.onboarddetailsss.id,
            "employeeId":this. onboarddetailsss.employeeId,
            "resourceType":this. onboarddetailsss.resourceType,
            "bondStatus": this.onboarddetailsss.bondStatus,
            "resignationDate":this.onboarddetailsss.resignationDate,
            "exitDate":this.onboarddetailsss.exitDate,
            "separationType":this.onboarddetailsss.separationType,
            
            "updatedBy":this.loggeduser

            
        }],
        
        "transactionType":"update"
}
this.hrms. updateonboardingdetails(updatenboarddetails).subscribe(res =>{
  this.onboardRes = res;
  console.log(this.onboardRes);
     if(this.onboardRes.message == "Data is updated successfully"){
       swal(this.onboardRes.message, "","success");
       this.getemploymentdetails();
     }
})
this.getemploymentdetails();
}


public onboarddetailsss={
  "id":"",
  "employeeId": "",
  "joiningDate": "",
  "resourceType": "",
  "bondStatus": "",
  "resignationDate": "",
  "exitDate": "",
  "separationType": "",

  "createdBy": "",
  "updatedBy": ""
}



// ends onboarding details 



OnSave(newUserFormOnboard){
  newUserFormOnboard.reset();
  this.createdByDependent=true;
  this.isupdateDependent=false;
}







}
