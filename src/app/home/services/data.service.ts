// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable()
// export class DataService {

//   private messageSource = new BehaviorSubject("Employee Id");
//   currentMessage = this.messageSource.asObservable();

//   constructor() { }

//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }

// }

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DataService {
  public paramId: any;
  // constructor(private paramroute:ActivatedRoute){
   
  //   this.paramroute.params.subscribe(Response=>{
  //     this.eid= parseInt(Response['employee_Id']);
  //     console.log("The message from data service "+this.eid);
    
  //   });
  //   this.sendMessage(this.eid);
  // }
 
  changeMessage(eid: any) {
    throw new Error("Method not implemented.");
  }
    private subject = new Subject<any>();

    sendMessage(message: any) {
     this.paramId=message;
       // this.subject.next({ text: message });
    }

    clearMessage(){
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    
}