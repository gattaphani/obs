import { Injectable } from "@angular/core";
import { HrmsService } from '../home/services/hrms.service';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders, HttpResponse,HttpEvent,HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  // userData: any;
  accessToken: any;
  responseData:any;
  constructor(private obj:HrmsService,private http:HttpClient) {}

  public isAuthenticate(): boolean {
    //method return true or false based on login credential
   const userData=localStorage.getItem('userData');
    if(userData && userData.length>0){
      return true;
    }
    else{
    return false;
    }
  }
  //url:any="http://192.168.6.186:8089/login";
  //url:any="http://192.168.7.64:8089/login";
  url:any="http://192.168.2.167:8081/login";

  public async loginAction(postData){

    var userObj={username:postData.UserName,password:postData.UserPassword}
  
  //  var body:string = "";

  // this.http.post
    this.http
      .post(this.url, userObj)
      .subscribe(
        (res: HttpResponse<any>) => {
            //var tokenres=res['authorization'];
                console.log(res['authorization']);
                localStorage.setItem('userData',res['authorization']);
                localStorage.setItem("UserName",postData.UserName);
  console.log(localStorage.getItem('UserName'));

        }
      );
      // var responseData = {'UserName':'ojas','UserPassword':'ojas','tokenAccess':'454dsfdfs45187'};
      
      return true;
    }
  
  /*
    let main_headers = {};
    let header = {'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'}
    this.http.post(this.url,
      userObj,
      {'headers' : 
      new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'})
      .subscribe(response => {
        const keys = response.headers.keys();
        let headers = keys.map(key => {
          `${key}: ${response.headers.get(key)}`
            main_headers[key] = response.headers.get(key)
           }
          );
         console.log(main_headers['X-Token'])
      });

 */




    //api connection
  //  this.obj.loginAction(userObj).subscribe(response =>{
    //  this.responseData = response;
    //  console.log(response)
   //})

    
   
  public SignUp(postData) {
    //registraion api
  }
  public async logOutAction() {
    //session/local storage clear
    await localStorage.removeItem('userData');
    await localStorage.removeItem('UserName');
    await localStorage.clear();
    return true;
  }

  public async getUserdata(){
    
    const userData=sessionStorage.getItem('userData');
    return JSON.parse(userData)
  }

  public getToken(): string {
    return localStorage.getItem('userData');
  }

  public  getEmployeeData():any{
    var res= this.http.get('http://192.168.6.186:8089/backend/user');
    return res;
  }

  // async getEmployeeData(){
  //   this.accessToken= localStorage.getItem('userData')
  //   let headers = new Headers();
  //   headers.append('content-Type','application/json');
  //   headers.append('Authorization',+ this.accessToken);

  //   var res = this.http.get('').toPromise()
  //   return res.json();
  // }
}
