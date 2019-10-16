import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  OBSLoginForm:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router) {}

  LoginAction(formData:any){
   if(this.authService.loginAction(formData)){
    this.routerNavigate.navigate(['dashboard']);
   }
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.login-content [data-toggle="flip"]').click(function() {
      	$('.login-box').toggleClass('flipped');
      	return false;
      });
      });


    this.OBSLoginForm = this.fb.group({
      'UserName': [null,Validators.required],
      'UserPassword': [null,Validators.required]
    });
  }

  //jquery
  
 

}
