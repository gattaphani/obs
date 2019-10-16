import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  getPassportCenter(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(private http:HttpClient) { }

host_url:any="http://192.168.7.64:";
//ankamma rao services


//Sub Business Unit

setSubbusinessunit(requestObject) {
  //return this.http.post(this.host_url+"8089/obs/subbusinessunit/set",requestObject);
  return this.http.post("http://192.168.5.207:8021/set",requestObject);
}

getSubbusinessUnit(requestObject){
  
  //return this.http.post(this.host_url+"8089/obs/subbusinessunit/get ",requestObject);
  return this.http.post("http://192.168.5.207:8021/get",requestObject);
}
getSubbusinessinfo(requestObject1){
  //return this.http.post(this.host_url+"8089/obs/subbusinessunit/get ",requestObject1);
  return this.http.post("http://192.168.5.207:8021/get",requestObject1);
}
updateSubbusinessUnit(updateReqObj){
  //return this.http.post(this.host_url+"8089/obs/subbusinessunit/set ",updateReqObj);
  return this.http.post("http://192.168.5.207:8021/set",updateReqObj);
}
deleteSubbusinessUnit(deleteReqObj){
  return this.http.post("http://192.168.5.207:8021/set",deleteReqObj);
}

// Cost Center 

setCostcenter(costcenterReqObj) {
  //return this.http.post(this.host_url+"8089/obs/costcenterservice/set",costcenterReqObj);
  return this.http.post("http://192.168.7.41:8013/set",costcenterReqObj);
}

getCostcenter(costcenterReqObj) {
  //return this.http.post(this.host_url+"8089/obs/costcenterservice/get",costcenterReqObj);
  return this.http.post("http://192.168.7.41:8013/get",costcenterReqObj);
}
updateCostCenter(updatedData){
  //return this.http.post(this.host_url+"8089/obs/costcenterservice/set",updatedData);
  return this.http.post("http://192.168.7.41:8013/set",updatedData);
}

deleteCostCenter(deleteData){
  //return this.http.post(this.host_url+"8089/obs/ojas-obs-online/costcenter/set",deleteData);
  return this.http.post("http://192.168.7.41:8013/set",deleteData);
}

// Business Unit

setBusinessunit(busiessunitReqObj){
  //return this.http.post(this.host_url+"8089/obs/businessUnit/set",busiessunitReqObj);
  return this.http.post("http://192.168.5.207:8087/set",busiessunitReqObj);
}

getBusinesinfo(busiessunitReqObj){
  //return this.http.post(this.host_url+"8089/obs/businessUnit/get",busiessunitReqObj);
  return this.http.post("http://192.168.5.207:8087/get",busiessunitReqObj);
}
updateBusinessunit(buupdateReqObj){
  //return this.http.post(this.host_url+"8089/obs/businessUnit/set",buupdateReqObj);
  return this.http.post("http://192.168.5.207:8087/set",buupdateReqObj);
}
deleteBusiness(buDeleteReqObj){
  //return this.http.post(this.host_url+"8089/obs/ojas-obs-online/businessUnit/service/set",buDeleteReqObj);
  return this.http.post("http://192.168.5.207:8087/set",buDeleteReqObj);
}
//ankamma rao services ends

// nagaraj services 

//Employee Designation

setEmployeeDesignation(EmpDesignationReqObj){
  //return this.http.post(this.host_url+"8089/obs/designation/set",EmpDesignationReqObj);
  return this.http.post("http://192.168.5.207:8011/set",EmpDesignationReqObj);
}

getEmployeeDesignation(EmpDesignationReqObj){
  //return this.http.post(this.host_url+"8089/obs/designation/get",EmpDesignationReqObj);
  return this.http.post("http://192.168.5.207:8011/get",EmpDesignationReqObj);
}

updateEmpolyeeDesignation(updatedData){
  //return this.http.post(this.host_url+"8089/obs/designation/set",updatedData);
  return this.http.post("http://192.168.5.207:8011/set",updatedData);
}

deleteEmpolyeeDesignation(deleteData){
  //return this.http.post(this.host_url+"8089/obs/designation/set",deleteData);
  return this.http.post("http://192.168.5.207:8011/set",deleteData);
}
//Employee Designation Ends

// Passport Center

setPassportCeneter(PassportReqObj){
  //return this.http.post(this.host_url+"8089/obs/passportService/set",PassportReqObj);
  return this.http.post("http://192.168.7.41:8012/set",PassportReqObj);
}

getPassportCeneter(PassportReqObj){
  //return this.http.post(this.host_url+"8089/obs/passportService/get",PassportReqObj);
  return this.http.post("http://192.168.7.41:8012/get",PassportReqObj);
}
updatePassportCenter(PassportupdateObj){
  //return this.http.post(this.host_url+"8089/obs/passportService/set",PassportupdateObj);
  return this.http.post("http://192.168.7.41:8012/set",PassportupdateObj);
}
deletepassportCenter(PassportdeleteObj){
  //return this.http.post(this.host_url+"8089/obs/passportService/set",PassportdeleteObj);
  return this.http.post("http://192.168.7.41:8012/set",PassportdeleteObj);
}

// Passport center Ends

//skill starts

setSkillMaster(skillmasterReqObj){
  //return this.http.post(this.host_url+"8089/obs/skill/set",skillmasterReqObj)
  return this.http.post("http://192.168.5.207:8023/set",skillmasterReqObj)
}
getSkillmaster(getskillmasterReqObj){
  //return this.http.post(this.host_url+"8089/obs/skill/get",getskillmasterReqObj)
  return this.http.post("http://192.168.5.207:8023/get",getskillmasterReqObj)
}
updateSkillMaster(updateskillmasterReqObj){
  //return this.http.post(this.host_url+"8089/obs/skill/set",updateskillmasterReqObj)
  return this.http.post("http://192.168.5.207:8023/set",updateskillmasterReqObj)
}
deleteSkillMaster(deleteskillmasterReqObj){
  //return this.http.post(this.host_url+"8089/obs/skill/set",deleteskillmasterReqObj)
  return this.http.post("http://192.168.5.207:8023/set",deleteskillmasterReqObj)
}
//skill ends

// role management

setRoleManagement(RoleReqObj){
  //return this.http.post(this.host_url+"8089/obs/RoleManagement/set",RoleReqObj);
  return this.http.post("http://192.168.5.207:8020/set",RoleReqObj);
}
getRoleManagement(RoleGetReqObj){
  //return this.http.post(this.host_url+"8089/obs/RoleManagement/get",RoleGetReqObj);
  return this.http.post("http://192.168.5.207:8020/get",RoleGetReqObj);
}
updateRoleManagement(RoleUpdate){
  //return this.http.post(this.host_url+"8089/obs/RoleManagement/set",RoleUpdate);
  return this.http.post("http://192.168.5.207:8020/set",RoleUpdate);
}
dleteRoleManagement(RoleDelete){
  //return this.http.post(this.host_url+"8089/obs/RoleManagement/set",RoleDelete);
  return this.http.post("http://192.168.5.207:8020/set",RoleDelete);
}

//role management


//skill starts
setSkill(skillReqObj){
  return this.http.post("http://192.168.2.96:8094/set",skillReqObj)
  //return this.http.post(this.host_url+"8089/obs/employeeskillsdetails/set",skillReqObj)
}
getSkill(getskillReqObj){
  //return this.http.post(this.host_url+"8089/obs/employeeskillsdetails/get",getskillReqObj)
  return this.http.post("http://192.168.2.96:8094/get",getskillReqObj)
}
updateSkill(updateskillReqObj){
  return this.http.post("http://192.168.2.96:8094/set",updateskillReqObj)
}
deleteSkill(deleteskillReqObj){
  return this.http.post("http://192.168.2.96:8094/set",deleteskillReqObj)
}
getSkilbyId(editskillReg){
  return this.http.post("http://192.168.2.96:8094/get",editskillReg)
}

//skill ends

//certification strats
setCertification(certificationReqObj){
  //return this.http.post(this.host_url+"8089/obs/certifications/setCertificationDetails",certificationReqObj)
  return this.http.post("http://192.168.2.96:8888/setCertificationDetails",certificationReqObj)
}

getCertification(getcertificationReqObj){
  //return this.http.post(this.host_url+"8089/obs/certifications/getCertificationDetails",getcertificationReqObj)
  return this.http.post("http://192.168.2.96:8888/getCertificationDetails",getcertificationReqObj)
}
updateCertification(updatecertificationReqObj){
 // return this.http.post(this.host_url+"8089/obs/certifications/setCertificationDetails",updatecertificationReqObj)
 return this.http.post("http://192.168.2.96:8888/setCertificationDetails",updatecertificationReqObj)
}
deleteCertification(deletecertificationReqObj){
  //return this.http.post(this.host_url+"8089/obs/certifications/setCertificationDetails",deletecertificationReqObj)
  return this.http.post("http://192.168.2.96:8888/setCertificationDetails",deletecertificationReqObj)
}
getCertificationbyId(editcertificationReg){
  //return this.http.post(this.host_url+"8089/obs/certifications/getCertificationDetails",editcertificationReg)
  return this.http.post("http://192.168.2.96:8888/getCertificationDetails",editcertificationReg)
}
//certification ends



//contact starts
 setContactInfo(contactReqObj){
  //return this.http.post(this.host_url+"8089/obs/employeecontactinfo/set",contactReqObj)
  return this.http.post("http://192.168.2.40:8091/set",contactReqObj)
}
getContactInfo(getConReqObj){
  //return this.http.post(this.host_url+"8089/obs/employeecontactinfo/get",getConReqObj)
  return this.http.post("http://192.168.2.40:8091/get",getConReqObj)
}
updateContactInfo(updateConReqObj){
  //return this.http.post(this.host_url+"8089/obs/employeecontactinfo/set",updateConReqObj)
  return this.http.post("http://192.168.2.40:8091/set",updateConReqObj)
}
deleteContactInfo(deleteConReqObj){
 // return this.http.post(this.host_url+"8089/obs/employeecontactinfo/set",deleteConReqObj)
 return this.http.post("http://192.168.2.40:8091/set",deleteConReqObj)
}
getcontactbyId(editConReg){
  //return this.http.post(this.host_url+"8089/obs/employeecontactinfo/get",editConReg)
  return this.http.post("http://192.168.2.40:8091/get",editConReg)
}
//contact ends


//nagaraj Api's end 


  // setSubbusinessunit(requestObject) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",requestObject);
  // }

  // getSubbusinessUnit(requestObject){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/get",requestObject);
  // }
  // updateSubbusinessUnit(updateReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",updateReqObj);
  // }
  // deleteSubbusinessUnit(deleteReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/service/subbusinessunit/set",deleteReqObj);
  // }

  // setCostcenter(costcenterReqObj) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",costcenterReqObj);
  // }

  // getCostcenter(costcenterReqObj) {
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/get",costcenterReqObj);
  // }
  // updateCostCenter(updatedData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",updatedData);
  // }

  // deleteCostCenter(deleteData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/costcenter/set",deleteData);
  // }

  // setBusinessunit(busiessunitReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",busiessunitReqObj);
  // }

  //getBusinessunit(busiessunitReqObj){
    //return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/get",busiessunitReqObj);
  //}
  // updateBusinessunit(buupdateReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",buupdateReqObj);
  // }
  // deleteBusiness(buDeleteReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/businessUnit/service/set",buDeleteReqObj);
  // }
  // setEmployeeStatus(EmpStatusReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/obs/emplyoeestatus/set",EmpStatusReqObj);
  // }
   

// bu starts services-----

getBusinessunit(businesinfo){
  //"http://192.168.2.96:8087/set"

 // "http://192.168.2.96:8087/set"

  

  //return this.http.post(this.host_url+"8089/obs/employeebu/get",businesinfo);
  return this.http.post("http://192.168.5.96:8087/get",businesinfo);
}
savebusinesunit(savebusines){
 // return this.http.post(this.host_url+"8089/obs/employeebu/set",savebusines);
 return this.http.post("http://192.168.2.96:8087/set",savebusines);
}
deletebusinessunit(deleteBusinessUnitObj){
  //return this.http.post(this.host_url+"8089/obs/employeebu/set",deleteBusinessUnitObj);
  return this.http.post("http://192.168.2.96:8087/set",deleteBusinessUnitObj);
}
updatebusinesunit(updatebusinesobj){
  //return this.http.post(this.host_url+"8089/obs/employeebu/set",updatebusinesobj);
  return this.http.post("http://192.168.2.96:8087/set",updatebusinesobj);
}
getbyIdbusines(updatebusinesobj){
  //return this.http.post(this.host_url+"8089/obs/emplyeebu/get",updatebusinesobj);
  return this.http.post("http://192.168.2.96:8087/get",updatebusinesobj);
}

// bu ends-----------



  getEmployeeStatus(EmpStatusReqObj){
    return this.http.post(this.host_url+"8089/obs/ojas-obs-online/obs/emplyoeestatus/get",EmpStatusReqObj);
  }
  updateEmployeeStatus(updateEmpStatus){
    return this.http.post(this.host_url+"8089/obs/ojas-obs-online/obs/emplyoeestatus/set",updateEmpStatus);
  }
  deleteEmployeeStatus(deleteEmpStatus){
    return this.http.post(this.host_url+"8089/obs/ojas-obs-online/obs/emplyoeestatus/set",deleteEmpStatus);
  }
  setEmployeeStatus(EmpStatusReqObj){
    return this.http.post(this.host_url+"8089/obs/ojas-obs-online/obs/emplyoeestatus/set",EmpStatusReqObj);
  }

  // setEmployeeDesignation(EmpDesignationReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",EmpDesignationReqObj);
  // }

  // getEmployeeDesignation(EmpDesignationReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/get",EmpDesignationReqObj);
  // }

  // updateEmpolyeeDesignation(updatedData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",updatedData);
  // }

  // deleteEmpolyeeDesignation(deleteData){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/designation/service/set",deleteData);
  // }
  // setPassportCeneter(PassportReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportReqObj);
  // }

  // getPassportCeneter(PassportReqObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/get",PassportReqObj);
  // }
  // updatePassportCenter(PassportupdateObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportupdateObj);
  // }
  // deletepassportCenter(PassportdeleteObj){
  //   return this.http.post("http://192.168.1.95:8080/ojas-obs-online/passport/set",PassportdeleteObj);
  // }

  //state List

setStateList(StateReqObj){
  return this.http.post(this.host_url+"8089/obs/states/set",StateReqObj);
}
 getStatusList(StategetReqObj){
   return this.http.post(this.host_url+"8089/obs/states/get",StategetReqObj);
 }
 updateStateList(updatestateData){
   return this.http.post(this.host_url+"8089/obs/states/set",updatestateData);
 }
 deleteStateList(deleteStateData){
   return this.http.post(this.host_url+"8089/obs/states/set",deleteStateData);
 }

 //StateList

//GPA data 
 setGpaData(GpaReqObj){
 // return this.http.post(this.host_url+"8089/obs/gpa/set",GpaReqObj);
 return this.http.post("http://192.168.7.41:8018/set",GpaReqObj);
}
 getGpaData(GpagetReqObj){
  // return this.http.post(this.host_url+"8089/obs/gpa/get",GpagetReqObj);
  return this.http.post("http://192.168.7.41:8018/get",GpagetReqObj);
 }
 updateGpaData(GpaupdateReqObj){
   //return this.http.post(this.host_url+"8089/obs/gpa/set",GpaupdateReqObj);
   return this.http.post("http://192.168.7.41:8018/set",GpaupdateReqObj);
 }
 deleteGpaData(GpadeleteData){
   //return this.http.post(this.host_url+"8089/obs/gpa/set",GpadeleteData);
   return this.http.post("http://192.168.7.41:8018/set",GpadeleteData);
 }


 setEmployeeEducation(EmpSaveData){
   return this.http.post(this.host_url+"8089/obs/ojas-obs-online/education/set",EmpSaveData);
 }
 getEmployeeEducation(EmpEduGetData){
   return this.http.post(this.host_url+"8088/obs/ojas-obs-online/education/get",EmpEduGetData);
 }
 updatedEmployeeEducation(EmpEduUpdateData){
   return this.http.post(this.host_url+"8089/obs/ojas-obs-online/education/set",EmpEduUpdateData);
 }
 deleteEmployeeEducation(EmpEduDeleteData){
   return this.http.post(this.host_url+"8089/obs/ojas-obs-online/education/set",EmpEduDeleteData);
 }
//  setRoleManagement(RoleReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleReqObj);
//  }
//  getRoleManagement(RoleGetReqObj){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/get",RoleGetReqObj);
//  }
//  updateRoleManagement(RoleUpdate){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleUpdate);
//  }
//  dleteRoleManagement(RoleDelete){
//    return this.http.post("http://192.168.1.95:8080/ojas-obs-online/role/set",RoleDelete);
//  }



//skill starts

//  setSkillMaster(skillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",skillmasterReqObj)
// }
// getSkillmaster(getskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/get",getskillmasterReqObj)
// }
// updateSkillMaster(updateskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",updateskillmasterReqObj)
// }
// deleteSkillMaster(deleteskillmasterReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/skill/set",deleteskillmasterReqObj)
// }


//skill ends


//  //contact starts
//  setContactInfo(contactReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",contactReqObj)
// }
// getContactInfo(getConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/get",getConReqObj)
// }
// updateContactInfo(updateConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",updateConReqObj)
// }
// deleteContactInfo(deleteConReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/set",deleteConReqObj)
// }
// getcontactbyId(editConReg){
//   return this.http.post("http://192.168.6.186:8089/obs/employeecontactinfo/get",editConReg)
// }
// //contact ends



// //certification starts
// setCertification(certificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",certificationReqObj)
// }
// getCertification(getcertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/getCertificationDetails",getcertificationReqObj)
// }
// updateCertification(updatecertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",updatecertificationReqObj)
// }
// deleteCertification(deletecertificationReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/setCertificationDetails",deletecertificationReqObj)
// }
// getCertificationbyId(editcertificationReg){
//   return this.http.post("http://192.168.6.186:8089/obs/certifications/getCertificationDetails",editcertificationReg)
// }
// //certification ends

//skill starts
// setSkill(skillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",skillReqObj)
// }
// getSkill(getskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/get",getskillReqObj)
// }
// updateSkill(updateskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",updateskillReqObj)
// }
// deleteSkill(deleteskillReqObj){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/set",deleteskillReqObj)
// }
// getSkilbyId(editskillReg){
//   return this.http.post("http://192.168.6.186:8089/obs/employeeskilldetails/get",editskillReg)
// }

//skill ends






// emp basic--------

getempinfo(basicempinfo){
  //return this.http.post(this.host_url+"8089/obs/employeeInfo/get",basicempinfo);
  return this.http.post("http://192.168.7.191:8093/obs/employeeInfo/get",basicempinfo);
}
saveempinfo(saveempobj){
  return this.http.post("http://192.168.7.191:8093/obs/employeeInfo/set",saveempobj);
}
deleteempinfo(deleteempobj){
  return this.http.post("http://192.168.7.191:8093/obs/employeeInfo/set",deleteempobj)
}
getbyIdempinfo(updateempobj){
  return this.http.post("http://192.168.7.191:8093/obs/employeeInfo/get",updateempobj);
}
updateempinfo(updateempinfoobj){
  return this.http.post("http://192.168.7.191:8093/obs/employeeInfo/set",updateempinfoobj);
}
getempstatus(statusempobj){
  return this.http.post(this.host_url+"8089/obs/EmployeeStatus/get",statusempobj);
}
getGenderinfo(getgenderobj){
  //return this.http.post(this.host_url+"8089/obs/genders/get",getgenderobj);
  return this.http.post("http://192.168.7.41:8010/get",getgenderobj);
}
// emp basic ends ---------//


//----Employee Experience Details ------------http://192.168.6.186:8089
getEmployeeExperienceDetails(getEmpExperienceObj)
{
  
  //return this.http.post(this.host_url+"8089/obs/EmployeeExperienceDetails/get",getEmpExperienceObj);
  return this.http.post("http://192.168.2.96:8092/get",getEmpExperienceObj);
}

saveEmployeeExperienceDetails(setEmpExperienceObj)
{
  //return this.http.post(this.host_url+"8089/obs/EmployeeExperienceDetails/set",setEmpExperienceObj);
  return this.http.post("http://192.168.2.96:8092/set",setEmpExperienceObj);
}

editEmpExpDetails(editEmpExpobj)
{
  //return this.http.post(this.host_url+"8089/obs/EmployeeExperienceDetails/get",editEmpExpobj);
  return this.http.post("http://192.168.2.96:8092/get",editEmpExpobj);
}

updateEmployeeExperienceDetails(updateEmpExperienceObj)
{
  //return this.http.post(this.host_url+"8089/obs/EmployeeExperienceDetails/set",updateEmpExperienceObj);
  return this.http.post("http://192.168.2.96:8092/set",updateEmpExperienceObj);
}

deleteEmployeeExperienceDetails(deleteEmpExperienceObj)
{
  //return this.http.post(this.host_url+"8089/obs/EmployeeExperienceDetails/set",deleteEmpExperienceObj);
  return this.http.post("http://192.168.2.96:8092/set",deleteEmpExperienceObj);
}

//----Employee Experience ends--------------



//----Employee KYE Details  Starts-----------

getEmployeeKyeDetails(getEmpkyeObj)
{
  //return this.http.post(this.host_url+"8089/obs/kye/get",getEmpkyeObj);
  return this.http.post("http://192.168.2.96:7070/get",getEmpkyeObj);
}

saveEmployeeKyeDetails(saveEmpKyeObj)
{
  //return this.http.post(this.host_url+"8089/obs/kye/set",saveEmpKyeObj);
  return this.http.post("http://192.168.2.96:7070/set",saveEmpKyeObj);
}

editEmployeeKyeDetails(editkyeobj)
{
  //return this.http.post(this.host_url+"8089/obs/kye/set",editkyeobj);
  return this.http.post("http://192.168.2.96:7070/get",editkyeobj);
}

updateEmployeeKyeDetails(updatekyeobj)
{
  //return this.http.post(this.host_url+"8089/obs/kye/set",updatekyeobj);
  return this.http.post("http://192.168.2.96:7070/set",updatekyeobj);
}

deleteEmployeeKyeDetails(deleteEmpKyeObj)
{
  //return this.http.post(this.host_url+"8089/obs/kye/set",deleteEmpKyeObj);
  return this.http.post("http://192.168.2.96:7070/set",deleteEmpKyeObj);
}

 //----Employee KYE Ends------------



//  //----Employee Education Ends------------
 
 //start dependent details
getdependentdetails(dependentdetailsResobj){
  
  //return this.http.post(this.host_url+"8089/obs/DependentDetailsService/get",dependentdetailsResobj);
  return this.http.post("http://192.168.2.96:8090/get",dependentdetailsResobj);
}
savedependentdetails(saveddependentdetailsResObj){
  //return this.http.post(this.host_url+"8089/obs/DependentDetailsService/set",saveddependentdetailsResObj);
  return this.http.post("http://192.168.2.96:8090/set",saveddependentdetailsResObj);
}
deletedependentdetails(deletedependentdetailsResObj){
  //return this.http.post(this.host_url+"8089/obs/DependentDetailsService/set",deletedependentdetailsResObj);
  return this.http.post("http://192.168.2.96:8090/set",deletedependentdetailsResObj);
}
updatedependentdetails(updatedependentdetailsResObj){
  //return this.http.post(this.host_url+"8089/obs/DependentDetailsService/set",updatedependentdetailsResObj);
  return this.http.post("http://192.168.2.96:8090/set",updatedependentdetailsResObj);
}
//endsdependent details



//start bank deatils
getbankserverdetails(getbankdetailsResobj){
  
  //return this.http.post(this.host_url+"8089/obs/BankDetails/get",getbankdetailsResobj);
  return this.http.post("http://192.168.2.40:9000/get",getbankdetailsResobj);
 
 }
 savebankdetails(savebankdetailsResobj){
 //return this.http.post(this.host_url+"8089/obs/BankDetails/set",savebankdetailsResobj);
 return this.http.post("http://192.168.2.40:9000/set",savebankdetailsResobj);
 
 }
  deletebankdetails(deletebankdetailsResObj){
   //return this.http.post(this.host_url+"8089/obs/BankDetails/set",deletebankdetailsResObj);
   return this.http.post("http://192.168.2.40:9000/set",deletebankdetailsResObj);
  }
  updatebankdetails(updatebankdetailsResObj){
    //return this.http.post(this.host_url+"8089/obs/BankDetails/set",updatebankdetailsResObj);
    return this.http.post("http://192.168.2.40:9000/set",updatebankdetailsResObj);
  }
 
  //ends bank detail

 //onboarding details stars
  getonboardingdetails(onboardingdetailsResObj){
  //return this.http.post(this.host_url+"8089/obs/employmentDetails/get",onboardingdetailsResObj);
  return this.http.post("http://192.168.2.96:8084/get",onboardingdetailsResObj);
  }
  saveonboardingdetails(saveonboardingdetailsResObj){
  //return this.http.post(this.host_url+"8089/obs/employmentDetails/set",saveonboardingdetailsResObj);
  return this.http.post("http://192.168.2.96:8084/set",saveonboardingdetailsResObj);
 }
 deleteOnboardingdetails(deleteOnboardingdetailsResObj){
   //return this.http.post(this.host_url+"8089/obs/employmentDetails/set",deleteOnboardingdetailsResObj)
   return this.http.post("http://192.168.2.96:8084/set",deleteOnboardingdetailsResObj)
 }
 updateonboardingdetails( updateonboardingdetailsResObj){
   //return this.http.post(this.host_url+"8089/obs/employmentDetails/set",updateonboardingdetailsResObj)
   return this.http.post("http://192.168.2.96:8084/set",updateonboardingdetailsResObj)
 }
 //onboarding details ends
 //project starts

getProjectDetails(projectReqObj){
  //return this.http.post(this.host_url+"8089/obs/projectDetails/get",projectReqObj);
  return this.http.post("http://192.168.2.96:8083/get",projectReqObj);
}
setProjectDetails(setProjectReqObj){
  //return this.http.post(this.host_url+"8089/obs/projectDetails/set",setProjectReqObj);
  return this.http.post("http://192.168.2.96:8083/set",setProjectReqObj);
}
getprojectbyId(projectbyid){
  //return this.http.post(this.host_url+"8089/obs/projectDetails/get",projectbyid);
  return this.http.post("http://192.168.2.96:8083/get",projectbyid);
}
deleteproject(projdelete){
  //return this.http.post(this.host_url+"8089/obs/projectDetails/set",projdelete);
  return this.http.post("http://192.168.2.96:8083/set",projdelete);
}
updateproject(projupdate){
  //return this.http.post(this.host_url+"8089/obs/projectDetails/set",projupdate);
  return this.http.post("http://192.168.2.96:8083/set",projupdate);
} 
//project ends

//vishal services

//Employee Status Master API

getEmployeeStatusMaster(stateListReq){
  //return this.http.post(this.host_url+"8089/obs/EmployeeStatus/get",stateListReq);
  return this.http.post("http://192.168.5.207:8017/get",stateListReq);
}
updateEmployeeStatusMaster(updatestateListReq){
  //return this.http.post(this.host_url+"8089/obs/EmployeeStatus/set",updatestateListReq);
  return this.http.post("http://192.168.5.207:8017/set",updatestateListReq);
}

deleteEmployeeStatusMaster(deletetateListReq){
  //return this.http.post(this.host_url+"8089/obs/EmployeeStatus/set",deletetateListReq);
  return this.http.post("http://192.168.5.207:8017/set",deletetateListReq);
}

saveEmployeeStatusMaster(savestateListReq){
  //return this.http.post(this.host_url+"8089/obs/EmployeeStatus/set",savestateListReq);
  return this.http.post("http://192.168.5.207:8017/set",savestateListReq);
}

//Employee Status Master API Ended



//Master API for StateList Started Working

getStateListMaster(stateListReq){
  //return this.http.post(this.host_url+"8089/obs/states/get",stateListReq);
  return this.http.post("http://192.168.7.41:8014/get",stateListReq);
}
updateStateListMaster(updatestateListReq){
  //return this.http.post(this.host_url+"8089/obs/states/set",updatestateListReq);
  return this.http.post("http://192.168.7.41:8014/set",updatestateListReq);
}

deleteStateListMaster(deletetateListReq){
 // return this.http.post(this.host_url+"8089/obs/states/set",deletetateListReq);
 return this.http.post("http://192.168.7.41:8014/set",deletetateListReq);
}

saveStateListMaster(savestateListReq){
  //return this.http.post(this.host_url+"8089/obs/states/set",savestateListReq);
  return this.http.post("http://192.168.7.41:8014/set",savestateListReq);
}
//Master API for StateList Ended

 
//----Employee Title Details Starts----------

getEmpTitleDetails(getEmptitleObj)
{
 // return this.http.post(this.host_url+"8089/obs/employeetitle/get",getEmptitleObj);
 return this.http.post("http://192.168.2.96:8095/get",getEmptitleObj);
}

saveEmpTitleDetails(saveEmpTiltle)
{
  //return this.http.post(this.host_url+"8089/obs/employeetitle/set",saveEmpTiltle);
  return this.http.post("http://192.168.2.96:8095/set",saveEmpTiltle);
}

editEmpTitleDetails(editTitlebj)
{
  //return this.http.post(this.host_url+"8089/obs/employeetitle/get",editTitlebj);
  return this.http.post("http://192.168.2.96:8095/get",editTitlebj);
}

updateEmpTitleDetails(updateTitleobj)
{
  //return this.http.post(this.host_url+"8089/obs/employeetitle/set",updateTitleobj);
  return this.http.post("http://192.168.2.96:8095/set",updateTitleobj);
}

deleteEmpTitleDetails(deleteEmpTitleObj)
{
  //return this.http.post(this.host_url+"8089/obs/employeetitle/set",deleteEmpTitleObj);
  return this.http.post("http://192.168.2.96:8095/set",deleteEmpTitleObj);
}

 //----Employee Title Ends------------



 //----Employee Education starts------------

getEmpEduDetails(getEmpEduObj)
{
  //return this.http.post(this.host_url+"8089/obs/employeeEducationDetails/get",getEmpEduObj);
  return this.http.post("http://192.168.7.41:8525/get",getEmpEduObj);
}

saveEmpEduDetails(saveEmpEdu)
{
  //return this.http.post(this.host_url+"8089/obs/employeeEducationDetails/set",saveEmpEdu);
  return this.http.post("http://192.168.7.41:8525/set",saveEmpEdu);
}

editEmpEduDetails(editEduobj)
{
  //return this.http.post(this.host_url+"8089/obs/employeeEducationDetails/get",editEduobj);
  return this.http.post("http://192.168.7.41:8525/get",editEduobj);
}

updateEmpEduDetails(updateEduobj)
{
  //return this.http.post(this.host_url+"8089/obs/employeeEducationDetails/set",updateEduobj);
  return this.http.post("http://192.168.7.41:8525/set",updateEduobj);
}

deleteEmpEduDetails(deleteEmpEduObj)
{
  //return this.http.post(this.host_url+"8089/obs/employeeEducationDetails/set",deleteEmpEduObj);
  return this.http.post("http://192.168.7.41:8525/set",deleteEmpEduObj);
}
 //----Employee Education Ends------------

//Employee Education Master Data Start

getEmpEduQualification(getempQualification){
  //return this.http.post(this.host_url+"8089/obs/educationdetails/get",getempQualification);
  return this.http.post("http://192.168.7.41:8016/get",getempQualification);
}
saveEmpEducationalQualification(saveEmpQual){
  //return this.http.post(this.host_url+"8089/obs/educationdetails/set",saveEmpQual);
  return this.http.post("http://192.168.7.41:8016/set",saveEmpQual);
}
updateEmpEducationalQualification(updateEmpQual){
  //return this.http.post(this.host_url+"8089/obs/educationdetails/set",updateEmpQual);
  return this.http.post("http://192.168.7.41:8016/set",updateEmpQual);
}
deleteEmpEducationalQualification(deleteEmpQual){
  //return this.http.post(this.host_url+"8089/obs/educationdetails/set",deleteEmpQual);
  return this.http.post("http://192.168.7.41:8016/set",deleteEmpQual);
}
//Employee Education Master Data End

//C:\Users\gphaneendra\Desktop\update_obs6\zuul-auth-ojas-parent\ui-parent\ui-web\src\main\web\src\app\home\businessunit

//Phani
 
 //-----Separation Starts------------------
 getSeperationType(getSeperationResObj)
 {
   //return this.http.post(this.host_url+"8089/obs/separationType/get",getSeperationResObj);
   return this.http.post("http://192.168.5.207:8019/get",getSeperationResObj);
 }

 updateSeperationType(updateSeperationResObj)
 {
   //return this.http.post(this.host_url+"8089/obs/separationType/set",updateSeperationResObj);
   return this.http.post("http://192.168.5.207:8019/set",updateSeperationResObj);
 }

 saveSeperationType(saveSeperationResObj)
 {
  //return this.http.post(this.host_url+"8089/obs/separationType/set",saveSeperationResObj);
  return this.http.post("http://192.168.5.207:8019/set",saveSeperationResObj);
 }

 deleteSeperationType(deleteSeperationResObj)
 {
   //return this.http.post(this.host_url+"8089/obs/separationType/set",deleteSeperationResObj);
   return this.http.post("http://192.168.5.207:8019/set",deleteSeperationResObj);
 }

//-----Separation Ends------------------


  //--Resource type starts--------------


  getResourceType(resgetReqObj)
  {
    //return this.http.post(this.host_url+"8089/obs/resourceType/get",resgetReqObj);
    return this.http.post("http://192.168.5.207:8022/obs/resourceType/get",resgetReqObj);
  }
  setResourceType(ressaveReqObj)
  {
    //return this.http.post(this.host_url+"8089/obs/resourceType/set",ressaveReqObj);
    return this.http.post("http://192.168.5.207:8022/obs/resourceType/set",ressaveReqObj);
  }
  updateResourceType(resupdateObj)
  {
    //return this.http.post(this.host_url+"8089/obs/resourceType/set",resupdateObj);
    return this.http.post("http://192.168.5.207:8022/obs/resourceType/set",resupdateObj);
  }

  //--Resource type ends--------------

}


