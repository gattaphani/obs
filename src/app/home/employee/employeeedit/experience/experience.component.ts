import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import swal from 'sweetalert';
import { HrmsService } from 'src/app/home/services/hrms.service';
import { DataService } from 'src/app/home/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  subscription: Subscription;
  message: any;
 public eid:any;
  loggeduser: string;
  emp: any;
  constructor(private hrms:HrmsService, private dataservice:DataService, private paramroute:ActivatedRoute) {
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');

   }
  // getempId(){
    
  // }

  ngOnInit() {
    
    this.getEmpExp(); 
  }


// ----Employee Experience Details Starts---------------------------------------------
empexp : any;
empexpdetails :any;
saveRes :any;

//---getting employee details---------------------------------------------------
getEmpExp()
{
  var requestObj =
//   {
//     "employeeExperienceDetails" :[ {
         
    

            
//     }],
//              "transactionType":"getall",
//             "sessionId" : "any String" 
// } 

  {
    "employeeExperienceDetails" :[ {
            "employee_Id": this.eid

            
    }],
             "transactionType":"getById",
            "sessionId" : "any String" 
}
  

  this.hrms.getEmployeeExperienceDetails(requestObj).subscribe(response =>{
    this.empexp = response;
    this.empexpdetails = this.empexp.employeeExperienceDetails;
    console.log(this.empexp);

  })
}

//---adding employee experience----------------------------------------------------

company_name:any;
joining_date:any;
exit_date:any;
salary:any;
//location:any;
is_current_company:any;
//employee_Id:any;
first_Reference_Name:any;
first_Reference_Contact:any;
second_Reference_Name:any;
second_Reference_Contact:any;
sessionId:any;
created_date:any;
updated_date:any;




booleanValue = true;
EmpExpArr:any;

  saveEmpExp(){
    var savReqObj =
    
      {
        "employeeExperienceDetails" : 
        
        [ 
          {
                 "id":this.editemparrlist.id,
                 "company_name":this.editemparrlist.company_name,
                 "joining_date":this.editemparrlist.joining_date,
                 "exit_date":this.editemparrlist.exit_date,
                 "salary":this.editemparrlist.salary,
                 "location":this.editemparrlist.location,
                 "is_current_company":this.editemparrlist.is_current_company,
                 //"is_current_company":1,
                 "employee_Id":this.eid,
                 "first_Reference_Name":this.editemparrlist.first_Reference_Name,
                 "first_Reference_Contact":this.editemparrlist.first_Reference_Contact,
                 "second_Reference_Name":this.editemparrlist.first_Reference_Name,
                  "second_Reference_Contact":this.editemparrlist.first_Reference_Contact,
                 "created_by":this.loggeduser
          }
        ],
        
            "transactionType" : "save"
    }

    this.hrms.saveEmployeeExperienceDetails(savReqObj).subscribe(res =>{
      this.saveRes = res;
      console.log(this.saveRes);
      
        if(this.saveRes.message == "EmployeeExperienceDetails saved successfully")
        {
         swal(this.saveRes.message,"","success");
         this.getEmpExp();
       }
     //this.getEmpExp();
    })

  }

//---deleting employee experience---------------------------
deleteres:any;
details;
deleteEmpExpArr:any;


deleteEmpExp(emp)
{
var deleteReqObj =
{
"employeeExperienceDetails" :
[{
"id":emp.id,
 "updated_by":emp.updated_by
}],
  "transactionType":"delete",
  "sessionId" : "any String" 
}
this.hrms.deleteEmployeeExperienceDetails(deleteReqObj).subscribe(res => {
this.deleteres = res;

this.deleteEmpExpArr = this.deleteres.employeeExperienceDetails;
console.log(this.deleteres);

 if(this.deleteres.message == "EmployeeExperienceDetails deleted sucesfully")
 {
  swal(this.deleteres.message,"","success");
  this.getEmpExp();
 }
//this.getEmpExp();
})
}

//---editing employee experience------------------------------------------
editemp:any;
editemparr:any;

public editemparrlist = 
{
           "id":"",
            "company_name":"",
            "salary":"",
            "location":"",
            "joining_date":"",
            "exit_date":"",
            "is_current_company":"",
            "employee_Id":"",
            "first_Reference_Name":"",
            "first_Reference_Contact":"",
            "second_Reference_Name":"",
            "second_Reference_Contact":"",
            "updated_by":"",
            "created_by":"",
            "created_date":"",
            "updated_date":""
          
}

//--Add Button----------------
isUpdate:boolean
isCreated:boolean=false;
addempexp(newUserFormEmpExp)
{
newUserFormEmpExp.reset();
this.isUpdate = false;
this.isCreated = true;

}


editempexpbyid(emp)
{
console.log(emp);


// this.editemparrlist.employee_Id=emp.employee_Id;
// this.editemparrlist.company_name=emp.company_name;
// this.editemparrlist.salary=emp.salary;
// this.editemparrlist.location=emp.location;
// this.editemparrlist.joining_date=emp.joining_date;
// this.editemparrlist.exit_date=emp.exit_date;
// this.editemparrlist.is_current_company=emp.is_current_company;

// this.editemparrlist.first_Reference_Name=emp.first_Reference_Name;
// this.editemparrlist.second_Reference_Name=emp.second_Reference_Name;
// this.editemparrlist.second_Reference_Contact=emp.second_Reference_Contact;
// this.editemparrlist.updated_by=emp.updated_by;
// this.editemparrlist.created_by=emp.created_by;
// this.editemparrlist.created_date=emp.created_date;
// this.editemparrlist.updated_date=emp.updated_date;

this.isUpdate = true;
this.isCreated = false;
var empid = emp.id;
var editempexpobj = 
{
"employeeExperienceDetails" :[ {
  "id":empid


  
}],
   "transactionType":"getById",
  "sessionId" : "any String" 
}

this.hrms.editEmpExpDetails(editempexpobj).subscribe(res => {
this.editemp = res;
this.editemparr = this.editemp.employeeExperienceDetails;
this.editemparrlist = this.editemparr[0];
console.log("this.editemparrlist",this.editemparrlist);

})
}



//---updating employee experience------------------------

 updateres:any;
 updateEmpExpArr:any;
 newUserFormExp:any;
 


 updateEmpExp(emp)
 {
   
  var updateReqObj =
  {
  "employeeExperienceDetails" :
  [{
    
          "id":this.editemparrlist.id,
          "company_name":this.editemparrlist.company_name,
          "salary":this.editemparrlist.salary,
          "location":this.editemparrlist.location,
          "joining_date":this.editemparrlist.joining_date,
          "exit_date":this.editemparrlist.exit_date,
          "is_current_company":this.editemparrlist.is_current_company,
          "employee_Id":this.editemparrlist.employee_Id,
          "first_Reference_Name":this.editemparrlist.first_Reference_Name,
          "first_Reference_Contact":this.editemparrlist.first_Reference_Contact,
          "second_Reference_Name":this.editemparrlist.first_Reference_Name,
          "second_Reference_Contact":this.editemparrlist.first_Reference_Contact,
          "updated_by":this.loggeduser
  }],
            "transactionType":"update",
           "sessionId" : "any String" 
 
      
}
this.hrms.updateEmployeeExperienceDetails(updateReqObj).subscribe(res => {
  this.updateres = res;
  console.log(this.updateres);
  // this.updateEmpExpArr = this.updateres.employeeExperienceDetails;
  // console.log(this.updateEmpExpArr);
   if(this.updateres.message == "EmployeeExperienceDetails updated successfully")
       {
        swal(this.updateres.message,"","success");
        this.getEmpExp();
      }
     //this.getEmpExp();
})

}




}
