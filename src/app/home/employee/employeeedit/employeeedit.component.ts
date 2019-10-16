import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HrmsService } from '../../services/hrms.service';
import { identifierModuleUrl } from '@angular/compiler';
import swal from 'sweetalert';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.scss']
})
export class EmployeeeditComponent implements OnInit {
 


eid:any;

  subscription: Subscription;
  constructor(private hrms:HrmsService,private paramroute: ActivatedRoute, private dataservice:DataService,private route:Router) { 
   
    // this.eid = this.paramroute.snapshot.paramMap.get('employee_Id');
    // console.log("Snapshot", this.eid);
    this.paramroute.params.subscribe(Response=>{
      this.eid= parseInt(Response['employee_Id']);
      console.log("The message from Employee Edit sibling "+this.eid);
     
      this.dataservice.sendMessage(this.eid);
      
    });
   
  }

  ngOnInit() {
   
  }
 
  // basicinfofun(){
  //   this.route.navigateByUrl('/employeeedit/basicinfo', this.eid);
  // }

  // education(){
  //   this.route.navigateByUrl('/employeeedit/experience', this.eid);
  // }
}
  

