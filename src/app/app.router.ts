import { Routes } from '@angular/router';
import { Indexroutes } from './index/index.router';
import { HomeRoutes } from './home/home.router';
import { NoPageRoute } from './no-page/no-page.router';

export const routes: Routes = [...HomeRoutes, ...Indexroutes, ...NoPageRoute]