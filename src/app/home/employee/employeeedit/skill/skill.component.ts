import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert';
import { HrmsService } from 'src/app/home/services/hrms.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from 'src/app/home/services';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
 public eid: any;
  loggeduser: any;

  constructor(private hrms:HrmsService,NgxPaginationModule:NgxPaginationModule,Ng2SearchPipeModule:Ng2SearchPipeModule, private dataservice:DataService) {
    this.eid=this.dataservice.paramId;
    this.loggeduser=localStorage.getItem('UserName');
   }

  ngOnInit() {
    this.getSkillInfomaster();
    this.getSkillInfo();
  }


//skill starts
updateRes:any;
skill_id:any;
level_id:any;
skillid:any;
employee_id:any;
created_by:any;
skillReq:any;
SkillArr :any;
skillinfolist:any;
skillInfoList:any;
deleteSkilldetails:any;
deleteSkillarr:any;
skillbyid:any;
SkillDetails:any;
update_by:any;
updateArr:any;

skillmasterlist:any;
skillmasterArray;

//method save skillInfo
setSkillInfo(){

var reqData=
{
        
"skillInfoModel":
[{
                

                
"skill_id":this.SKILLinfo.skill_id,
          
  "level_id" :this.SKILLinfo.level_id,
           
 "employee_id" :this.eid,
           
 "created_by" : this.loggeduser
        
}],

        
  
  "sessionId" :"14",
        
"transactionType" : "save"
  
  
}

this.hrms.setSkill(reqData).subscribe(responce=>{
  this.skillReq = responce;
  console.log(this.skillReq);
  if(this.skillReq.message =="Successfully record added"){
   
    swal(this.skillReq.message, "","success");
   // this.getSkillInfo();
   }
   //this.SkillArr = this.skillReq.getSkillInfoList;
   this.getSkillInfo();
  
 });
 
 
 }

//method get skillInfo

getSkillName:any;
getSkillInfo(){

var Requestdata=
{
  "skillInfoModel":[{
          "employee_id" : this.eid
           }],
          "sessionId" :"1234",
          
  "transactionType" : "getById"
  
  }
// {
      
//   "skillInfoModel" :[ {
  
                  
  
//   }],
//           "sessionId" : "1234",
  
//   "transactionType" : "getAll"
  
//   }
this.hrms.getSkill(Requestdata).subscribe(responce=>{
this.skillinfolist=responce;
this.skillInfoList=this.skillinfolist.getSkillInfoList;
console.log(this.skillInfoList);

for(let i=0;i<=this.skillInfoList.length;i++){

  for(let j=0;j<this.skillmasterArray.length;j++){
  if(this.skillmasterArray[j].id==this.skillInfoList[i].skill_id){
  this.getSkillName=this.skillmasterArray[j].skill_name;
  console.log("Skill name details");
  console.log(this.getSkillName);
  } 
  }
  this.skillInfoList[i].skill_id=this.getSkillName;
  console.log("skill Details Array");
  console.log(this.skillinfolist);
  }



})

}

//masterskill get method 
getSkillInfomaster(){

  var Requestdata={
    "listOfSkill" : [{
    
            
    }],
    "transactionType" : "getAll"
  }
  this.hrms.getSkillmaster(Requestdata).subscribe(responce=>{
  this.skillmasterlist=responce;
  this.skillmasterArray=this.skillmasterlist.listOfSkill;
  // this.skillName=this.skillMasterName
  console.log(this.skillmasterArray)
  })
  
  }

addSkillvalue(newUserForm1){
  newUserForm1.reset()
this.isUPDATEDBY=false;
this.CREATEDBY=true;
}
isUPDATEDBY=false;
CREATEDBY=true;

public SKILLinfo={
"skill_id":"",
          
    "level_id" :"",
             
   "employee_id" :"",
             
   "created_by" : "",
              
    "update_by" :"",
     "flag":"",
     "id":""
}

//method edit skillInfo
getdatabyID(tableData){

this.isUPDATEDBY=true;
this.CREATEDBY=false;

// this.SKILLinfo.employee_id=tableData.employee_id;
// this.SKILLinfo.skill_id=tableData.skill_id;
// this.SKILLinfo.level_id=tableData.level_id;
// this.SKILLinfo.created_by=tableData.created_by;
// this.SKILLinfo.update_by=tableData.update_by;
console.log(tableData);

 var skillid= tableData.id;

var GetUpdateData ={
      
  "skillInfoModel" :[ {
  
                  "id" :skillid
  
  }],
          "sessionId" : "1234",
  
  "transactionType" : "getById"
  
  }

this.hrms.getSkilbyId(GetUpdateData).subscribe(res =>{
 this.skillbyid=res;
 this.SkillDetails=this.skillbyid.getSkillInfoList;
 this.SKILLinfo=this.SkillDetails[0];
 console.log("this.SKILLinfo",this.SKILLinfo)
})
}

//method update skillInfo
updateSkilldetails(SKILLinfo){

var updaterequestData={
      
  "skillInfoModel":[{
                  

    "skill_id":this.SKILLinfo.skill_id,
          
    "level_id" :this.SKILLinfo.level_id,
             
   "employee_id" :this.SKILLinfo.employee_id,
   "created_by" :this.loggeduser, 
   "update_by" : this.loggeduser,
   "id":this.SKILLinfo.id
            
  }],
          
      
  "sessionId" :"14",
          
  "transactionType" : "update"
      
  
  }
  

  
      this.hrms.updateSkill(updaterequestData).subscribe(res =>{
           this.updateRes= res;
              
          console.log(this.updateRes);
          if(this.updateRes.message == "Successfully record updated"){
            swal(this.updateRes.message, "","success");
            this.getSkillInfo();
          }
               this.getSkillInfo();
          })
     
    
}
//skill Info ends




}
