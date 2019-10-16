import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor() { }
  private value:boolean =false;
 
  private smsEnable:boolean =false;
  private smsDisable:boolean =false;
  private maildisable:boolean =false;
  private mailEnable:boolean =false;
  emailEnable(){
 
    this.mailEnable=true;
  }
   msgEnable(){
     this.smsEnable=true;
  }
  emailDisable(){
 
    this.maildisable=true;
  }
  msgDisable(){
     this.smsDisable=true;
  }
  
 

  ngOnInit() {
  }


}
