import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class InterceptorService implements HttpInterceptor {

 

  constructor(private userService: UserService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{



    var currentUser = this.userService.usuarioAutenticado;

    if(currentUser && currentUser.token){
      if(currentUser.token != null){
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + currentUser.token)  })
      }
      
    }
    //esto es un experimento, voy a tratar de capturar un error 401 (unauthorized) 
    //y usarlo para desloguear el usuario por expiracion del token
    //alea iacta est.


    console.log("interceptor req:" + JSON.stringify(req));
    return next.handle(req).pipe(
      catchError(
        (err, caught) => {
          if (err.status === 401){
            
            this.handleAuthError();
            return of(err);
          }
          throw err;
        }
      )
    );
  }
  private handleAuthError() {
    sessionStorage.clear();
    this.router.navigate([""]).then(() => {window.location.reload();})
    
    //bien, solucionado un poblemita que me recargaba la pagina de 
    //edicion despues de invocar esta funcion había dejado un window.reload en 
    //la funcion logout.
    
  }
  }

  

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}];
