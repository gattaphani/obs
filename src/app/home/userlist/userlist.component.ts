import { Component, OnInit } from '@angular/core';
import { Userlist } from './user.model';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private orderpipe : OrderPipe )
   { 
    {
      this.sortedCollection = orderpipe.transform(this.userlistarray, 'userList');
      console.log(this.sortedCollection);
      }
   }

  ngOnInit() 
  {

  }
   
  sortedCollection: any[];
  value: boolean;
  data;
  order: string = 'userList';
 

 
 isEditable:boolean = false;
 reverse: boolean = false;

id:any;
idList;
idlist:any;

user:any;
userList;
userlist:any;

role:any;
roleList;
rolelist:any;

email:any;
emailList;
emaillist:any;

mobile:any;
mobileList;
mobilelist:any;


 userlistarray: Userlist[] = 
 [
  {
    'idList':1,
    'userList': 'Anil',
    'roleList':'HR Admin',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
    
  },
  {
    'idList':2,
    'userList': 'Deva',
    'roleList':'Recruiter',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
    
    
  },
  {
    'idList':3,
    'userList': 'Gopal',
    'roleList':'officer',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  },
  {
    'idList':4,
    'userList': 'Mahendra',
    'roleList':'HR Associates',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  },
  {
    'idList':5,
    'userList': 'Rajesh',
    'roleList':'ADMIN',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  },
  {
    'idList':6,
    'userList': 'Ramesh',
    'roleList':'IT Associates',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  },
  {
    'idList':7,
    'userList': 'Ramesh',
    'roleList':'IT Admin',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  },
  {
    'idList':8,
    'userList': 'Ramesh',
    'roleList':'BDM',
    'emailList':'phani.gatta@gmail.com',
    'mobileList':9502626896
  }


]

 saveButton()
 {
  debugger;
  this.value = false;
  this.data = 
  {
    "userList":this.userlist,
    "idList":this.idlist,
    "roleList":this.rolelist,
    "emailList":this.emaillist,
    "mobileList":this.mobilelist
  }
  this.userlistarray.unshift(this.data);

    this.userList='';
    this.idList='';
    this.roleList='';
    this.emailList='';
    this.mobileList='';
    
 }


 
editState(blist)
{
  console.log(blist);
  this.userlist = blist.userList;
  this.idlist = blist.idList;
  this.rolelist = blist.roleList;
  this.emaillist = blist.emailList;
  this.mobilelist = blist.mobileList;
}

saveState()
  {
    var editD = 
    {
      "userList":this.user,
      "idList":this.id,
      "roleList":this.role,
      "emailList":this.email,
      "mobileList":this.mobile
      
    }
    console.log(editD);
  }

  deleterow(index){
    debugger;
    if(index !== -1){
      this.userlistarray.splice(0,1);
    }
    else 
    {
    this.userlistarray.splice(index,1);
    }
  }
  canceluserlist()
  {
    this.value=false;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}



