import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticatorService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth=this.injector.get(AuthenticatorService);
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${auth.getToken()}`}
    });
    return next.handle(tokenizedReq);
  }

}