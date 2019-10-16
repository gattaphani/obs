import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private routerNavigate: Router
  ) {}
  canActivate():boolean{
    if (this.authService.isAuthenticate()) {
      this.routerNavigate.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
