import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
currentUserSubject: BehaviorSubject<any>

userAutenticado: boolean;


  constructor(private http: HttpClient) {
    
    if (sessionStorage.getItem('currentUser') == null){
      this.userAutenticado = false;
    } else {
      this.userAutenticado = true;
    }
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  //esto usa una restAPI de pruebas en https://reqres.in/ para simular el login con las credenciales "email": "eve.holt@reqres.in",    "password": "cityslicka"

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user).pipe(map(data => {
    sessionStorage.setItem('currentUser', JSON.stringify(data))
    this.currentUserSubject.next(data);
    
    this.userAutenticado = true;
    return data;
    }));
  }

  logOut(){
    window.location.reload();
    sessionStorage.clear();
    sessionStorage.removeItem('currentUser');
    this.userAutenticado = false;
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  get autenticado(){
    return this.userAutenticado;
  }

  
}
