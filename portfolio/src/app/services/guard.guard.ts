import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let currentUser = this.userService.usuarioAutenticado;
    if(currentUser && currentUser.token){
      return true;
    } else {


//aca los guards limitan la visivilidad de componentes si no estas autenticado te reenvian 
//al login, hay que modificar esto para que solo sean visibles las paginas de edicion.

      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
