import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    var currentUser = this.userService.usuarioAutenticado;

    if(currentUser && currentUser.token){
      if(currentUser.token != null){
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + currentUser.token)  })
      }
      
    }
    console.log("interceptor req:" + JSON.stringify(req));
    return next.handle(req);
  }
}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}];
