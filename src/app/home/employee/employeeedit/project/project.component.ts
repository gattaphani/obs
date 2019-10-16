import { Component, OnInit } from '@angular/core';
import { HrmsService } from './../../../services/hrms.service';
import swal from 'sweetalert';
import { DataService } from 'src/app/home/services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
 public eid: any;
  loggeduser: string;

  constructor(private hrms:HrmsService, private dataservice:DataService) {
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
   }

  ngOnInit() {
    this.getProject();
  }

  projectDetailsLi:any;
  projectDetails:any;
  projectDetailsList:any;
  projectsave:any;

  valueAdd(newUserFormProject){
    newUserFormProject.reset();
    this.isUpdate=false;
  }

  getProject(){
    var jsonData =
    {
      "projectDetailsList" : [{
              "employeeId" : this.eid
                   
                         }], 
                     "transactionType":"getAll"
     }
  //    {
     
  //     "transactionType":"getAll"
  // }
    this.hrms.getProjectDetails(jsonData).subscribe(response =>{
      this.projectDetails = response;
      this.projectDetailsLi = this. projectDetails.projectDetailsList;
      console.log("Project Details List", this.projectDetailsList);
    })
    
    }
    setProject(){
  
      var requestObj = {
        "projectDetailsList" : [{
                      "projectName":this.projectDetailss.projectName,
                                      "contractId":this.projectDetailss.contractId,
                                      "rateId":this.projectDetailss.rateId,
                                      "employeeId":this.eid,
                                      "startDate":this.projectDetailss.startDate,
                                      "endDate":this.projectDetailss.endDate,
                                      "billingId":this.projectDetailss.billingId,
                                      "projectTechStack":this.projectDetailss.projectTechStack,
                                      "customer":this.projectDetailss.customer,
                                      "location":this.projectDetailss.location,
                                      "gstApplicable":this.projectDetailss.gstApplicable,
                                      "projectType":this.projectDetailss.projectType,
                                      "projectStatus":this.projectDetailss.projectStatus,
                                      "bdmContact":this.projectDetailss.bdmContact,
                                      "isInternal":this.projectDetailss.isInternal,
                                      "createdBy":this.loggeduser
                                  
                                     
                           }], 
                       "transactionType":"save"
      }
      this.hrms.setProjectDetails(requestObj).subscribe(response =>{
        this.projectsave = response;
        this.projectDetailsList = this.projectsave.projectDetailsList;
        console.log(this.projectsave);
        if(this.projectsave.statusMessage == "ProjectDetails has saved successfully"){
          swal(this.projectsave.statusMessage,"","success");
          this.getProject();
        }
        
      })
    }
    
   // isUpdate = false;
    public projectDetailss = {
      "id":"",
      "projectName":"",
      "contractId":"",
      "rateId":"",
      "employeeId":"",
      "startDate":"",
      "endDate":"",
      "billingId":"",
      "projectTechStack":"",
      "customer":"",
      "location":"",
      "gstApplicable":"",
      "projectType":"",
      "projectStatus":"",
      "bdmContact":"",
      "isInternal":"",
      "createdBy":"",
      "updatedBy":""
    };
    isUpdate:boolean;
    projectGetById:any;
    projectdetailsupdate:any;
    projectdelete:any;
    
    getdatabyId1(user){
      this.isUpdate = true;
    
      console.log(user);
    
     
      var pid = user.id;
      var getupdatedata = {
        "projectDetailsList" : [{
                "id": pid
                     
                           }], 
                       "transactionType":"getAll",
                     
      }
      this.hrms.getprojectbyId(getupdatedata).subscribe(res =>{
        this.projectGetById = res;
        this.projectDetails = this.projectGetById.projectDetailsList;
        this.projectDetailss = this.projectDetails[0];
        console.log("this.projectDetailss",this.projectDetailss);
        
        
      })
    }
    updateprojdata(){
     
      var updatereq = {
        "projectDetailsList" : [{
                "id":this.projectDetailss.id,
                     "projectName":this.projectDetailss.projectName,
                                      "contractId":this.projectDetailss.contractId,
                                      "rateId":this.projectDetailss.rateId,
                                      "employeeId":this.projectDetailss.employeeId,
                                      "startDate":this.projectDetailss.startDate,
                                      "endDate":this.projectDetailss.endDate,
                                      "billingId":this.projectDetailss.billingId,
                                      "projectTechStack":this.projectDetailss.projectTechStack,
                                      "customer":this.projectDetailss.customer,
                                      "location":this.projectDetailss.location,
                                      "gstApplicable":this.projectDetailss.gstApplicable,
                                      "projectType":this.projectDetailss.projectType,
                                      "projectStatus":this.projectDetailss.projectStatus,
                                      "bdmContact":this.projectDetailss.bdmContact,
                                      "isInternal":this.projectDetailss.isInternal,
                                      "updatedBy":this.loggeduser
                           }], 
                       "transactionType":"update",
                      "sessionId" : "any String" 
      }
      this.hrms.updateproject(updatereq).subscribe(response =>{
        this.projectdetailsupdate = response;
        console.log(this.projectdetailsupdate);
        if(this.projectdetailsupdate.statusMessage == "ProjectDetails has updated successfully")
        swal(this.projectdetailsupdate.statusMessage,"","success")
        this.getProject();
      })
    }
  
    deleteproj(user){
      // alert(user.id);
    var deletep =
    {
      "projectDetailsList" : [{
                                                  "id":user.id
                                       
                                        
                            
                             }], 
                         "transactionType":"delete"
        }
    this.hrms.deleteproject(deletep).subscribe(response =>{
      this.projectdelete = response;
      console.log(this.projectdelete);
      // if(this.projectdelete.statusMessage == "ProjectDetails has deactivated successfully"){
      //  swal(this.projectdelete.statusMessage, "","success");
      //   this.getProject();
      // }
      this.getProject();
     
    })
    }
}  