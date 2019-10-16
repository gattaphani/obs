import { Component, OnInit } from '@angular/core';
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.scss']
})
export class SkillMasterComponent implements OnInit {

  
  constructor(private hrms:HrmsService) { }

  ngOnInit() {
  this.getSkillInfo();

  }

//skill starts
skill_name:any;
skill_id:any;

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
updateRes:any;
value:boolean;

masterList:any;
id:any;

//method save skillInfo
setSkillInfo()
{
  
var reqData={
  "listOfSkill" : [{
          "skill_id" : this.skill_id,
          "skill_name": this.skill_name,
          
  }],
  "transactionType" : "save"
}
this.hrms.setSkillMaster(reqData).subscribe((responce:any)=>{
  this.skillReq = responce;
  console.log(this.skillReq);
  if(this.skillReq.message == "Successfully record added")
  {
  
    swal(this.skillReq.message, "","success");
    this.getSkillInfo();
  }
},
error => 
  {
  swal("Duplicates are not allowed","","error");

  this.SkillArr = this.skillReq.listOfSkill;
  this.getSkillInfo();
 
});
this.skill_id="",
this.skill_name="",
this.value=false;

}

//method get skillInfo
getSkillInfo(){

var Requestdata={
  "listOfSkill" : [{
  
          
  }],
  "transactionType" : "getAll"
}
this.hrms.getSkillmaster(Requestdata).subscribe(responce=>{
this.skillinfolist=responce;
this.skillInfoList=this.skillinfolist.listOfSkill;
console.log(this.skillInfoList)
})

}

skillUpdatemaster(skilltable){
  console.log(skilltable);
  var updateRequestData = 
  {
    "listOfSkill" : [{
            "id" : skilltable.id,
            "skill_id" : skilltable.skill_id,
            "skill_name" : skilltable.skill_name
            
    }],
    "transactionType" : "update"
}


  this.hrms.updateSkillMaster(updateRequestData).subscribe((res:any) =>{
    this.masterList = res;
    console.log(this.masterList);
     if(this.masterList.message == "Successfully record updated"){
       swal(this.masterList.message, "","success");
       this.getSkillInfo();
     }
    },
    error => 
  {
  swal("Duplicates are not allowed","","error");
  this.getSkillInfo();
  })
  }

cancelbulist(){
   this.value=false;
    
   }





}
