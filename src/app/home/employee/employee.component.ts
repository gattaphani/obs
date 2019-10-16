import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeClass } from './employee.model';
import { HrmsService } from '../services/hrms.service';
//import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  public pageSettings: Object;
  addEmpTemplate:boolean=false

  value:boolean;
  data:any;
  employee:any;
 Employee_Id:any;       
Employee_Name:any
Fixed_CTC:any;
CTC:any;
Total_CTC:any;


 empData :any= [{Id:19106,
           Name:"BALAJI",
           Fixed_CTC:12000,
           CTC:31000 ,
           Total_CTC:27000}];
  location: any;
  createdby: boolean;
  update: boolean;
  eid: any;
  loggeduser: string;


   constructor(private _router: Router , private paramroute:ActivatedRoute,private hrms:HrmsService, private dataservice:DataService) { 
    // this.dataservice.sendMessage.subscribe(empid=>this.Employee_Id=empid);
    // console.log("The Original message from data service"+this.Employee_Id);
    //this.dataservice.sendMessage(this.Employee_Id);
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
   }

   onBackButtonClick(): void 
   {
    this._router.navigate(['/employeedetails']);
    //this._router.navigateByUrl('/employeedetails');
  }
  cancel() {
     this.location.back(); 
  }

  addTemplate(){
    this.addEmpTemplate=true
  }
 
  updateData(data:any){
    this.empData.push(data)
  }

  employee_edit(id){
   this._router.navigateByUrl('/employeeedit');
  }

  savedata(){
    var data ={
      
      "Id":this.Employee_Id ,
      "Name":this.Employee_Name,
      "Fixed_CTC":this.Fixed_CTC,
      "CTC":this.CTC,
      "Total_CTC":this.Total_CTC
             
  
    }
    this.empData.push(data);
  }
  


deleteFieldValue(index) {
  debugger;     
this.empData.splice(index, 1);
 }
 ngOnInit() {
  this.getempdata();
  this.getEmployeeStatusData();
  this.getEmployeeStatusData();
  this.getRole();
  this.getgender();
  this.pageSettings = { pageSizes: true, pageSize: 12 };
}

// emp basic starts //
isUpdate:boolean;
emp_fname:any;
emp_mname:any;
emp_lname:any;
emp_dob:any;
emp_status:any;
emp_id:any;
emp_password:any;
emp_created:any;
emp_gender:any;
basicinfo:any;
delete_data:any;
emp_basic:any;
basicInfobyid:any;
updateempdata:any;
basicInfoDetails:any;
basicUnitObj:any;
created:any;
CREATEDBY2:any;
createdby2:any;
isUpdate1:boolean;
basicempstatus:any;
empbasicstatus:any;
empgender:any;
empgenderinfo:any;
createdby1:any;
employee_Status:any;
isUPDATEDBY:any;
employee_statuslist:any;
isupdateDependent:boolean;
isactive:boolean;
isave:any;
getRoleDetails:any;
roleManagemenList:any;

addSkillvalue(newUserForminfo){
newUserForminfo.reset();
//this.isUPDATEDBY=false;
this.isave=true;
this.update=false;

}


public empinobj=
{
          "id":"",
              "firstname" : "",
              "middlename" : "",
              "lastname" : "",
              "status" : "",
           "dob":"",
           "title" : "",
              "gender" : "",
              "password" : "",
              "employeeId" : "",
                      "updatedBy" : "",
                      "createdBy":""

}

//Get Employee Basic Info
getgenderdata:any;
getstatusdata:any;
empbasic:any;
empbasicinfo:any

getempdata(){
//this.isupdate=false;
var empinfo = 
{
  "employeeInfo" :[{

  }],
  "transactionType" : "getall"
}
 this.hrms.getempinfo(empinfo).subscribe(res =>{
this.empbasic =res;
this.empbasicinfo= this.empbasic.employeeInfo;
 console.log(this.empbasicinfo);
 for(let i=0;i<=this.empbasicinfo.length;i++){

  for(let j=0;j<this.empgenderinfo.length;j++){
  if(this.empbasicinfo[i].gender==this.empgenderinfo[j].id){
  this.getgenderdata=this.empgenderinfo[j].gender;
  console.log("GEnder details");
  console.log(this.getgenderdata);
  } 
  }
  this.empbasicinfo[i].gender=this.getgenderdata;
  console.log("Final Educational Details Array");
  console.log(this.empbasicinfo);
  }
  for(let i=0;i<=this.empbasicinfo.length;i++){

    for(let j=0;j<this.empbasicstatus.length;j++){
    if(this.empbasicinfo[i].status==this.empbasicstatus[j].id){
    
      this.getstatusdata=this.empbasicstatus[j].status;
    console.log("GEnder And Status details");
    console.log(this.getstatusdata);
    } 
    }
    this.empbasicinfo[i].status=this.getstatusdata;
    console.log("Final Educational Details Array");
    console.log(this.empbasicinfo);
    }

 })

}
addempUnit(newUserForminfo)
{
  newUserForminfo.reset();
}

saveemployeeInfo(){
var request=

{
  "employeeInfo" :[{
      
          "firstname" : this.empinobj.firstname,
          "middlename" : this.empinobj.middlename,
          "lastname" : this.empinobj.lastname,
          "status" : this.empinobj.status,
       "dob":this.empinobj.dob,
          "gender" : this.empinobj.gender,
          "title" : this.empinobj.title,
          "employeeId" : this.empinobj.employeeId,
                  "createdBy" : this.loggeduser
  }],
  "transactionType" : "save"
}

// {
//   "employeeInfo" :[{
//                   "firstname" : this.empinobj.firstname,
//                   "middlename" : this.empinobj.middlename,
//                   "lastname" : this.empinobj.lastname,
//                   "status" : this.empinobj.status,
//                "dob":this.empinobj.dob,
//                   "gender" : this.empinobj.gender,
//                  // "password" : this.empinobj.password,
//                   "createdBy":this.loggeduser,
//                   "employeeId" : this.empinobj.employeeId,
                
//   }],
//   "transactionType" : "save"
// }
this.hrms.saveempinfo(request).subscribe(res =>{
  this.basicinfo =res;
  //this.businesdetails= this.businesinfo.listCourse;

  console.log(this.basicinfo);
if(this.basicinfo.message == "Successfully record added"){
swal(this.basicinfo.message, "", "success");

this.getempdata();
}
},
error => 
  {
  swal("Duplicates are not allowed!","","error");
  
  this.getempdata();
     })

  
}


deleteemp(empbasic: { id: any; }){
  var reguest1={
    "employeeInfo" :[{
           "id":empbasic.id

    }],
    "transactionType" : "delete"

  }
    this.hrms.deleteempinfo(reguest1).subscribe(response=>{
      this.delete_data=response;
      console.log(this.delete_data);
      if(this.delete_data.statusMessage == "Success fully record deleted"){
         swal(this.delete_data.statusMessage, "","success");
        
        
        }
        this.getempdata();
    })
    
    }
    updateempinfo(){
      // this.isupdate = false;
      var updateempreq={
        "employeeInfo" :[{
               "id":this.empinobj.id,
                "firstname" : this.empinobj.firstname,
                "middlename" : this.empinobj.middlename,
                "lastname" : this.empinobj.lastname,
                "status" : this.empinobj.status,
             "dob":this.empinobj.dob,
                "gender" : this.empinobj.gender,
                //"password" : this.empinobj.password,
                "employeeId" : this.empinobj.employeeId,
                    
        }],
        "transactionType" : "update"

        
}
      this.hrms.updateempinfo(updateempreq).subscribe(res =>{
        this.updateempdata = res;
        console.log(this.updateempdata);
         if(this.updateempdata.message == "Successfully record added")
         {
            swal(this.updateempdata.message, "","success");
          //   this.getdependentData();
           
      this.getempdata();
         }
        },
        error => 
        {
        swal("Duplicates are not allowed","","error");
        this.getempdata();
      })
    
      
    
     }

    //  addBasic()
    //  {
       
    //  }

     getbyIdbasicdata(empbasic: { id: any; }){

      this.createdby=false;
      this.isUpdate = true;
      
     
  
  
      var empdataid= empbasic.id;
     
      
      var GetUpdatebasicInfo ={
        "employeeInfo" :[{
               "id":empdataid
               
               
        }],
        "transactionType" : "getById"

        
}
      
      
      this.hrms.getbyIdempinfo(GetUpdatebasicInfo).subscribe(res =>{
       this.basicInfobyid=res;
       this.basicInfoDetails=this.basicInfobyid.employeeInfo;
       
       this.empinobj=this.basicInfoDetails[0];
       console.log("this.basicUnitObj",this.empinobj);
      })
      }
      getgender(){
        var genderinfo={
     
          "gender":[
           {
           
           }
          ],
          
           "transactionType": "getall"
          }
          this.hrms.getGenderinfo(genderinfo).subscribe(res =>{
            this.empgender=res;
            this.empgenderinfo=this.empgender.genderList;
            console.log(this.empgenderinfo);
          })
        

      }
      getEmployeeStatusData(){
        var request={
       
          "transactionType": "getall"
      }
      this.hrms.getEmployeeStatusMaster(request).subscribe(response=>{
        this.employee_Status = response; 
        this.employee_statuslist= this.employee_Status.employeeStatusList;
        console.log("Employee Status");
        console.log(this.employee_statuslist);
      })
      
      }
      getRole(){
        var request = {
              
          "transactionType" : "getAll"
      }
      
      this.hrms.getRoleManagement(request).subscribe(res=>{
        this.getRoleDetails = res;
        this.roleManagemenList = this.getRoleDetails.roleManagementList;
        console.log(this.getRoleDetails);
      })
      }
      
  

//emp Basic ends//


}






