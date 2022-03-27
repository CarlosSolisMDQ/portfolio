import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
currentUserSubject: BehaviorSubject<any>

userAutenticado: boolean;

postId: any;


  constructor(private http: HttpClient) {
    
    if (sessionStorage.getItem('currentUser') == null){
      this.userAutenticado = false;
    } else {
      this.userAutenticado = true;
    }
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  
//ya esta funcionando la autenticacion del heroku
  login(user: any): Observable<any> {
    return this.http.post("https://carlosportfolioap.herokuapp.com/auth/login", user).pipe(map(data => {
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

  aboutEdit(aboutText: String): Observable<any>{
    return this.http.put<any>('https://carlosportfolioap.herokuapp.com/edit/about/2' + "?about=" + aboutText, {});
    
    //despues de luchar como un enano logre hacer funcionar el put que me daba un 
    //error de formato de req. Tengo que solucionar el tema de que hay que hacer un reload para
    //ver los cambios.
    //hice que el texto del about quede fijo en el id 2 because reasons porque mantuve el formato de listas para todas las entidades por fiaca.
  }

  experienceEdit(id: number, empresa: String, puesto: String, fechaInicio: number, fechaFin: number): Observable<any>{
    return this.http.put<any>(`https://carlosportfolioap.herokuapp.com/edit/experience/${id}` + "?empresa=" + empresa + "&puesto=" + puesto + "&fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin, {});
  }

  educationEdit(id: number, escuela: String, carrera: String, fechaInicio: number, fechaFin: number): Observable<any>{
    return this.http.put<any>(`https://carlosportfolioap.herokuapp.com/edit/education/${id}` + "?escuela=" + escuela + "&carrera=" + carrera + "&fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin, {});
  }

  projectEdit(id: number, nombre: String, descripcion: String, imageURL: string): Observable<any>{
    return this.http.put<any>(`https://carlosportfolioap.herokuapp.com/edit/project/${id}` + "?nombre=" + nombre + "&descripcion=" + descripcion + "&imageURL=" + imageURL, {});
  }

  skillEdit(id: number, porcentaje: number, habilidad: String): Observable<any>{
    return this.http.put<any>(`https://carlosportfolioap.herokuapp.com/edit/skills/${id}` + "?porcentaje=" + porcentaje + "&habilidad=" + habilidad, {});
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  get autenticado(){
    return this.userAutenticado;
  }

  

  
}
