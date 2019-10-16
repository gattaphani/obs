import { Component, OnInit } from '@angular/core';
import { Maritalstatus } from './maritalstatus.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-maritalstatus',
  templateUrl: './maritalstatus.component.html',
  styleUrls: ['./maritalstatus.component.scss']
})
export class MaritalstatusComponent implements OnInit {
  public data1=[];
  public show:boolean = false;
  public buttonName:any = 'Show';


  //new code starts here
  value: boolean;
  data; 
  marital:any;
  maritalStatus;
  isEditable:boolean = false;
  reverse: boolean = false;

  

  constructor() {
   
   }
   maritalstatuslist:Maritalstatus[]=[{
     
    "maritalStatus": "Widow"
   },
 {
   "maritalStatus": "Divorcee"
 },
 {
   "maritalStatus": "Single parent"
 },
 {
   "maritalStatus": "Married"
 },
 {
   "maritalStatus": "Single"
 }]




 saveBu(){
  debugger;
  this.value = false;
  this.data = {
    "maritalStatus":this.marital,
   
  }
  this.maritalstatuslist.unshift(this.data);

  this.maritalStatus='';
 

}
editData(blist){
  console.log(blist);
  //this.listDetails = blist;
  this.marital = blist.maritalStatus;

}
saveData(){
  var editD = {
    "maritalStatus":this.marital,
   
  }
  console.log(editD);
}
deleterow(index){
  debugger;
  if(index !== -1){
    this.maritalstatuslist.splice(0,1);
  }
  else {
  this.maritalstatuslist.splice(index,1);
  }
}

cancelbulist(){
  this.value=false;
  
}
  ngOnInit() {
  }
  handleClick(event: Event) {
    console.log('Button clicked', event)
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
