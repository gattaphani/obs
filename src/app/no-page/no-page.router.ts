import { Routes } from '@angular/router';
import { NoPageComponent } from './no-page.component';


export const NoPageRoute: Routes = [
    {path:'**',component:NoPageComponent}
]
   
  