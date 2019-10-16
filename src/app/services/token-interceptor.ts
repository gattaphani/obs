import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      // headers: new HttpHeaders({
      //   'Content-Type': 'text/plain;charset=UTF-8',
      //   'Authorization': ` ${this.auth.getToken()}`
      // })
      setHeaders: {
        Authorization: ` ${this.auth.getToken()}`
      }
    })
    return next.handle(request);
  }
}
