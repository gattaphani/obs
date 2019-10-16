import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Employeestatus } from './employee.model';
import { OrderPipe } from 'ngx-order-pipe';
import { HrmsService } from '../services/hrms.service';
import swal from 'sweetalert';


// import {Costcenter} from './businessunit.model'

@Component({
     selector: 'app-employeestatus',
     templateUrl: './employeestatus.component.html',
     styleUrls: ['./employeestatus.component.scss']
   })
   export class EmployeestatusComponent implements OnInit {

    value: boolean;
    data; 
    employee: any;
    employeeStatus;
    sortedCollection: any[];
    
    employeestatus: any;
    isEditable:boolean = false;
    reverse: boolean = false;
    order: string = 'employeeStatus';
    
      
      
    
    employeestatuslist: Employeestatus[] = 
    [
      {
        'employeeStatus': 'Application Development',
      },
      {
        'employeeStatus': 'Support',
      },
      {
        'employeeStatus': 'IDM'
      }
    
    
    ]
    constructor(private orderpipe: OrderPipe,private hrms:HrmsService )
     {
      this.sortedCollection = orderpipe.transform(this.employeestatuslist, 'employeeStatus');
      //console.log(this.sortedCollection);
      
      }
    
    ngOnInit() {
      this.getEmployeeStatusData();
    }
    
    //Master data for Employee Status
    employee_statuslist:any;
    employee_Status:any;
    
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
    
    //Employee Status Save 
    employee_status_data:any
    employee_status_response:any
    employee_status_message:any
    setEmployeeStatusData(){
      var request=
        {
          "employeeStatus": [
              {
                      "status" : this.employee_status_data
              }
      
          ],
          "transactionType": "save"
      }
      
    this.hrms.saveEmployeeStatusMaster(request).subscribe((response:any)=>{
    this.employee_status_response= response;
    if(this.employee_status_response.message == "Record successfully saved")
    {
          swal(this.employee_status_response.message, "","success");
          this.getEmployeeStatusData();
     }
        },
        error => 
        {
        swal("Duplicates are not allowed","","error");
        
         this.getEmployeeStatusData();
    
    })

    this.employee_status_data="";

    this.value=false;
    }
    
    //Employee Status update
    employee_status_update:any
    updateEmployeeStatusData(employee){
      var request=
      {
        "employeeStatus": [
            {
                "id": employee.id,
                "status": employee.status
            }
        ],
        "transactionType": "update"
    }
      
    this.hrms.updateEmployeeStatusMaster(request).subscribe((response:any)=>{
    this.employee_status_update= response;
    if(this.employee_status_update.message == "Record Successfully updated")
    {
          swal(this.employee_status_update.message, "","success");
          this.getEmployeeStatusData();
         }
        },
         error => 
        {
        swal("Duplicates are not allowed","","error");
         this.getEmployeeStatusData();
    })
    this.value=false;
    }
    
    
    saveBu(){
      debugger;
      this.value = false;
      this.data = {
        "employeeStatus":this.employeestatus,
      
      }
      this.employeestatuslist.unshift(this.data);
    
      this.employeeStatus='';
    
    }
    editData(blist){
      console.log(blist);
      //this.listDetails = blist;
      this.employee = blist.employeeStatus;
    
    }
    saveData(){
      var editD = {
        "employeeStatus":this.employee
      }
      console.log(editD);
    }
    deleterow(index){
      debugger;
      if(index !== -1){
        this.employeestatuslist.splice(0,1);
      }
      else {
      this.employeestatuslist.splice(index,1);
      }
    }
    
    cancelbulist(){
      this.value=false;
      
    }
    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }
    
      this.order = value;
    
    }
    }
    