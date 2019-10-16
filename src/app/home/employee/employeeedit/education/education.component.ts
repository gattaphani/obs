import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { HrmsService } from 'src/app/home/services/hrms.service';
import { DataService } from 'src/app/home/services';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public eid: any;
  loggeduser: string;

  constructor(private hrms:HrmsService, private dataservice:DataService) {
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
   }
username:any;
  ngOnInit() {
    this.getEmpEdu();
    //this.username=localStorage.getItem("UserName");
   this.getEmployeeQualification();
  }
  

  
// //----Employee Education details Ends--------------------

//----Getting Employee Education Details--------------------
getempedu:any;
getempeduarr:any;
Qualification_value:any;

getEmpEdu()
{
var reqtitle = 
{
  "employeeEducationDetailsList" :[
          {
            "employeeId": this.eid
          }
  ],
  
  "transactionType":"getAll"
 
}

this.hrms.getEmpEduDetails(reqtitle).subscribe(res =>{
this.getempedu = res;
this.getempeduarr = this.getempedu.employeeEducationDetailsList;
console.log("Employee Education get");
console.log(this.getempeduarr);
for(let i=0;i<=this.getempeduarr.length;i++){

  for(let j=0;j<this.EmpQualArray.length;j++){
      if(this.getempeduarr[i].qualification==this.EmpQualArray[j].id){
        this.Qualification_value=this.EmpQualArray[j].educationType;
        console.log("Qualification details");
        console.log(this.Qualification_value);
     
      }   
  }
  this.getempeduarr[i].qualification=this.Qualification_value;
  console.log("Final Educational Details Array");
  console.log(this.getempeduarr);
   
 
}



})
}

//--Saving Employee Education  Details----------------

isCreatedEduby:boolean=false;
isUpdatedEduby:boolean=false;
saveEmpEduObj:any;
saveEmpEduarr:any;

employeeIdEdu: any;
qualification:any;
year_of_passing :any;
percentage_marks: any;
institution_name: any;
flagEdu: boolean;
createdByEdu:any;
updatedByEdu: any;
createdDate: any;
updatedDate: any;

clickaddEdu(EmpEducationForm)
{
  EmpEducationForm.reset();
this.isCreatedEduby=true;
this.isUpdatedEduby=false;
}

saveEmpEdu()

{
  //var user="user";
   var saveempeduobj = 
  {
   "employeeEducationDetailsList" :[
{
      
"employeeId": this.eid,
"qualification": this.editEduEmp.qualification,
"year_of_passing": this.editEduEmp.year_of_passing,
"percentage_marks": this.editEduEmp.percentage_marks,
"institution_name": this.editEduEmp.institution_name,
"createdBy": this.loggeduser,
// "createdDate": this.editEduEmp.createdDate,
// "updatedDate": this.editEduEmp.updatedDate,
"id":this.editEduEmp.id
}
],

"transactionType":"save"

}
this.hrms.saveEmpEduDetails(saveempeduobj).subscribe(res => {
this.saveEmpEduObj = res;
this.saveEmpEduarr = this.saveEmpEduObj.employeeEducationDetailsList;
if(this.saveEmpEduObj.message == "Employee Education Details have been saved"){
  swal(this.saveEmpEduObj.message, "","success");
}
console.log(this.saveEmpEduObj);
this.getEmpEdu();
})

}


//--Deleting Employee Education Details ----------------

deleteEmpObj:any;
deleteEmpEduarr:any;
deleteEmpEdu(edu)
{
var deleteEmpEduObj = 
{
  "employeeEducationDetailsList" :[
    {
     "id": edu.id
     
    }],
  
  "transactionType":"delete"
}

  this.hrms.deleteEmpEduDetails(deleteEmpEduObj).subscribe (res => {
  this.deleteEmpObj = res;
  console.log(this.deleteEmpObj);
  this.deleteEmpEduarr = this.deleteEmpObj.employeeEducationDetailsList;
  if(this.deleteEmpObj.message == "Employee Education Details have been deleted"){
    swal(this.deleteEmpObj.message, "","success");
    
  }
  this.getEmpEdu();
})
}

// Employee Qualification Details 

EmpQualObject:any;
EmpQualArray;
EmpQualification: [];
Qualification: [];

// Qualification_n: [];

getEmployeeQualification(){
  var QualificationRequest=
  {"listEmployeeEducations" : [ {
  }],
  
  "transactionType" :"getall"
  }
this.hrms.getEmpEduQualification(QualificationRequest).subscribe(response=>{
this.EmpQualObject=response;

this.EmpQualArray = this.EmpQualObject.listCourse;
// for(let i=0; i< this.EmpQualArray.length; i++){
//   //console.log(this.EmpQualArray[i].degree); //use i instead of 0
//   this.EmpQualification = this.EmpQualArray[i];
//  // this.Qualification_n.push(this.EmpQualArray[i]);
//   //console.log("List of EmpQualification");
//   console.log(this.EmpQualification['id']);
//   console.log(this.EmpQualification['degree']);
// }
this.Qualification=this.EmpQualification;
//console.log(this.EmpQualObject);
console.log(this.EmpQualArray);
})
}


// //----Editing Employee Education  Details-----------------------

public editEduEmp = 
{
"id" : "",
"employeeId" : "",
"qualification": "",
"year_of_passing":"",
"percentage_marks":"",
"institution_name":"",
"flagEdu":"",
"updatedbyEdu" : "",
"createdbyEdu":"",
"createdDate":"",
"updatedDate":""
}

editEmpEdu:any;
editEmpEduarr:any;
empEmpEdudetails:any;
updatedEduby:any;

editEmpEduId(edu)
{
this.isUpdatedEduby = true;
this.isCreatedEduby = false;

var eduid = edu.id;
var editEmpEduobj = 
{
  "employeeEducationDetailsList" :[
      {
      "id": eduid
     
  }    
  ],
  
  "transactionType":"getAll"
}

this.hrms.editEmpEduDetails(editEmpEduobj).subscribe(res => {
this.editEmpEdu = res;
this.editEmpEduarr = this.editEmpEdu.employeeEducationDetailsList;
this.editEduEmp = this.editEmpEduarr[0];

console.log("this.empEmpEdudetails",this.editEduEmp);

})
}

//----Updating Employee Education details-----------------------
updateedures:any;
updateEduarr:any;

updateEdu(EmpEducationForm)
{
  var user="user";
var updateEduObj = 
{
  "employeeEducationDetailsList" :[
    {
     "id": this.editEduEmp.id,
      "employeeId": this.editEduEmp.employeeId,
      "qualification": this.editEduEmp.qualification,
      "year_of_passing": this.editEduEmp.year_of_passing,
      "percentage_marks": this.editEduEmp.percentage_marks,
      "institution_name": this.editEduEmp.institution_name,
      "flag": true,
      "updatedBy": this.loggeduser
    }],
  
  "transactionType":"update"
}

this.hrms.updateEmpEduDetails(updateEduObj).subscribe(updateEdu =>{
 this.updateedures = updateEdu;
 console.log(this.updateedures);
 this.updateEduarr = this.updateedures.employeeEducationDetailsList;
 if(this.updateedures.message == "Employee Education Details have been updated"){
  swal(this.updateedures.message, "","success");
  
}
 this.getEmpEdu();

})
EmpEducationForm.reset();

}

//----Employee Education details Ends--------------------






}
