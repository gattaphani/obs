import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { HrmsService } from 'src/app/home/services/hrms.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/home/services';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  public eid: any;
  loggeduser: string;

  message(arg0: string, message: any) {
    throw new Error("Method not implemented.");
  }
  isupdate: boolean;
  createdby: boolean;
  update: boolean;
  empid: string;


  constructor(private hrms:HrmsService,private dataservice:DataService, private paramroute:ActivatedRoute) {
     this.loggeduser=localStorage.getItem('UserName');
     this.eid=this.dataservice.paramId;
  }
  ngOnInit() {
    this.dataservice.getMessage().subscribe(Response=>{
      this.message= Response.text;
     console.log("Message from the Basic Info Component", this.message);
   });

  

    this.getempdata();
    this.getEmployeeStatusData();
    this.getEmployeeStatusData();
    this.getRole();

    this.getgender();
  

    this.getgender()

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

 

 
 basicempstatus:any;
 empbasicstatus:any;
 empgender:any;
 empgenderinfo:any;
 createdby1:any;
 employee_Status:any;
 
 employee_statuslist:any;
 
 isactive:boolean;
 isave:any;
 getRoleDetails:any;
 roleManagemenList:any;
 title:any;

 addempUnit(newUserForminfo){
  newUserForminfo.reset();


 }


 public empinobj=
{
            "id": "",
                "firstname" : "",
                "middlename" : "",
                "lastname" : "",
                "status" : "",
             "dob":"",
                "gender" : "",
                "title" : "",
                "employeeId" : "",
                        "updatedBy" : "",
                        "createdBy": ""

}

//Get Employee Basic Info
getgenderdata:any;
getstatusdata:any;
empbasic:any;
empbasicinfo:any;
employeeStatusList:any;
getstatusontable:any;
getroleontable:any;
 getempdata(){

 
  //this.isupdate=false;

  //this.isupdate=false;
  

  var empinfo = 
  {

    "employeeInfo" :[{
          "employeeId" : this.eid

    }],
    "transactionType" : "getbyid"
    
}
   this.hrms.getempinfo(empinfo).subscribe(res =>{
  this.empbasic =res;
  this.empbasicinfo= this.empbasic.employeeInfo;
   console.log(this.empbasicinfo);
  
    

   for(let i=0;i<=this.empbasicinfo.length;i++){

    for(let j=0;j<this.employee_statuslist.length;j++){
    if(this.employee_statuslist[j].id==this.empbasicinfo[i].status){
    this.getstatusontable=this.employee_statuslist[j].status;
    console.log("Qualification details");
    console.log(this.getstatusontable);
    } 
    }
    this.empbasicinfo[i].status=this.getstatusontable;
    console.log("Final Educational ");
    console.log(this.empbasicinfo);
    }

    for(let i=0;i<=this.empbasicinfo.length;i++){

      for(let j=0;j<this.roleManagemenList.length;j++){
      if(this.roleManagemenList[j].id==this.empbasicinfo[i].title){
      this.getroleontable=this.roleManagemenList[i].roleName;
      console.log("Qualification details");
      console.log(this.getroleontable);
      } 
      }
      this.empbasicinfo[i].title=this.getroleontable;
      console.log("Final Educational ");
      console.log(this.empbasicinfo);
      }
   })
  
}

addSkillvalue(newUserForminfo){
  newUserForminfo.reset()
this.isUPDATEDBY=false;
this.CREATEDBY=true;
}
isUPDATEDBY=false;
CREATEDBY=true;

saveemployeeInfo(){
  var request={
    "employeeInfo" :[{
                    //"id":this.empinobj.id,
                    "firstname" : this.empinobj.firstname,
                    "middlename" : this.empinobj.middlename,
                    "lastname" : this.empinobj.lastname,
                     "status" : this.empinobj.status,
                    //"status" :2,
                    "dob":this.empinobj.dob,
                    "gender" : this.empinobj.gender,
                     "title" : this.empinobj.title,
                     //"gender":
                    //"title":6,
                    "createdBy":this.loggeduser,
                    "employeeId" : this.empinobj.employeeId,
                  
    }],
    "transactionType" : "save"
  }
  this.hrms.saveempinfo(request).subscribe(res =>{
    this.basicinfo =res;
    //this.businesdetails= this.businesinfo.listCourse;

    console.log(this.basicinfo);
  if(this.basicinfo.message == "Successfully record updated"){
  swal(this.basicinfo.message, "", "success");
 
  }
},
error => 
  {
  swal(this.basicinfo.message,"","error");
  
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
        if(this.delete_data.message == "Successfully record deleted"){
           swal(this.delete_data.message, "","success");
          
          
          }
          this.getempdata();
      })
      
      }
      updateempinfo(){
      
      
        var updateempreq={
          "employeeInfo" :[{

            "id":this.empinobj.id,
            "firstname": this.empinobj.firstname,
            "middlename": this.empinobj.middlename,
            "lastname": this.empinobj.lastname,
            "status": this.empinobj.status,
            "dob": this.empinobj.dob,
            "gender": this.empinobj.gender,
            "title": this.empinobj.title,
            "employeeId": this.empinobj.employeeId
           

          }],
          "transactionType" : "update"
  
          
  }
  //       {
  //         "employeeInfo" :[{
  //               "id": this.empinobj.id,
  //                 "firstname" : this.empinobj.firstname,
  //                 "middlename" : this.empinobj.middlename,
  //                 "lastname" : this.empinobj.lastname,
  //                 "status" : this.empinobj.status,
  //              "dob": this.empinobj.dob,
  //                 "gender" : this.empinobj.gender,
  //                 "title" : this.empinobj.title,
  //                 "employeeId" : this.empinobj.employeeId
                      
  //         }],
  //         "transactionType" : "update"
  
          
  // }
        this.hrms.updateempinfo(updateempreq).subscribe(res =>{
          this.updateempdata = res;
          console.log(this.updateempdata);
           if(this.updateempdata.message == "Successfully record updated")
           {
              swal(this.updateempdata.message, "","success");
            //   this.getdependentData();
            this.getempdata();
            
           }
           error => 
  {
  
  
  this.getempdata();
     }
           
          
        })
        
        
      
       }

      //  addBasic()
      //  {
         
      //  }

       getbyIdbasicdata(empbasic: { id: any; }){

        
        this.isUPDATEDBY=true;
       this.CREATEDBY=false;
        
       
    
    
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

      //get Gender Master
        getgender(){

          var genderinfo={
       
            "gender":[{

              }],
            
             "transactionType": "getall"
            }

            this.hrms.getGenderinfo(genderinfo).subscribe(res =>{
              this.empgender=res;
              this.empgenderinfo=this.empgender.genderList;
              console.log("Selected Gender data",this.empgenderinfo);
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
