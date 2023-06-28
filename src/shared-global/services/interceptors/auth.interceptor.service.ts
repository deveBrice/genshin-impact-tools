import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptorsService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authData = this.auth.token;
    console.log(authData)
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authData)
    });
    return next.handle(newRequest);
  }
}
