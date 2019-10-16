
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../gaurds/login.guard';

export const Indexroutes: Routes = [
    {path:'',component:IndexComponent,canActivate:[LoginGuard],
    children:[
    {path:'login',component:LoginComponent},
    {path:'sing-up',component:SignUpComponent},
    {path:'forgot',component:ForgotComponent},
    ]
   }
]