import { AuthGuard } from './gaurds/auth.guard';
import { AuthService } from './services/auth.service';
import { IndexModule } from './index/index.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { routes} from './app.router';
import { TokenInterceptor } from './services/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './home/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes),
  ],
  //providers: [AuthService,AuthGuard],
  providers: [AuthService, AuthGuard,{ useClass: TokenInterceptor,provide:HTTP_INTERCEPTORS,multi: true},DataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
