import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    var currentUser = this.userService.usuarioAutenticado;

    if(currentUser && currentUser.token){
      req = req.clone({
        setHeaders: {
          Autorization: `Bearer ${currentUser.token}`
        }
      })
    }
    console.log("interceptor: " + JSON.stringify(currentUser))
    return next.handle(req);
  }
}
