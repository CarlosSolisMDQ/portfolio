import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, of, Subscription } from "rxjs";
import { map } from "rxjs";
import { UIService } from "./UIService.service";
import { Experience } from "../Experience";
import { Router } from "@angular/router";
import { Projects } from "../Projects";
import { Skill } from "../Skill";
import { Education } from "../Education";

@Injectable({
  providedIn: "root"
})
export class UserService {
currentUserSubject: BehaviorSubject<any>



userAutenticado: boolean;

postId: any;
tokenSubscription = new Subscription()


  constructor(private http: HttpClient, private router: Router, private uiService: UIService) {
    
    if (sessionStorage.getItem('currentUser') == null){
      this.userAutenticado = false;
    } else {
      this.userAutenticado = true;
    }
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  





  login(user: any): Observable<any> {
    return this.http.post("https://carlosportfolioap.herokuapp.com/auth/login", user).pipe(map(data => {
    sessionStorage.setItem('currentUser', JSON.stringify(data))
    this.currentUserSubject.next(data);
    this.userAutenticado = true;
    
    return data;
    }));
  }

  logOut(){
    
    sessionStorage.clear();
    //sessionStorage.removeItem('currentUser');
    this.userAutenticado = false;
    this.uiService.toggleAddTask();
    window.location.reload();
  }

  

  aboutEdit(aboutText: string): Observable<any>{
    //paso el parametro a literal y no s wrapper String porque el encodeuri no lo toma
    aboutText = encodeURIComponent(aboutText);
    return this.http.put<any>('https://carlosportfolioap.herokuapp.com/edit/about/2' + "?about=" + aboutText, {});
    
    //despues de luchar como un enano logre hacer funcionar el put que me daba un 
    //error de formato de req. Tengo que solucionar el tema de que hay que hacer un reload para
    //ver los cambios.
    //hice que el texto del about quede fijo en el id 2 because reasons porque mantuve el formato de listas para todas las entidades por fiaca.
  
    //actualizacion: para evitar errores con caracteres especiales voy a probar codificar el string
  
  
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

  imagesEdit(id: number, portada: String, foto: String): Observable<any>{
    return this.http.put<any>(`https://carlosportfolioap.herokuapp.com/edit/images/${id}` + "?portada=" + portada + "&foto=" + foto, {});
  }

  deleteExperience(id: number): Observable<Experience[]>{
    
    return this.http.delete<Experience[]>(`https://carlosportfolioap.herokuapp.com/experience/borrar/${id}`);
  }

  deleteProject(id: number): Observable<Projects[]>{
    return this.http.delete<Projects[]>(`https://carlosportfolioap.herokuapp.com/project/borrar/${id}`);
  }

  deleteSkill(id: number): Observable<Skill[]>{
    return this.http.delete<Skill[]>(`https://carlosportfolioap.herokuapp.com/skill/borrar/${id}`);
  }

  deleteEducation(id: number): Observable<Education[]>{
    return this.http.delete<Education[]>(`https://carlosportfolioap.herokuapp.com/education/borrar/${id}`)
  }

  educationAdd(escuela: String, carrera: String, fechaInicio: number, fechaFin: number): Observable<any>{
    return this.http.post<Education[]>(`https://carlosportfolioap.herokuapp.com/education/crear`, {"escuela": escuela, "carrera": carrera, "fechaInicio": fechaInicio, "fechaFin": fechaFin});
  }

  experienceAdd(empresa: String, puesto: String, fechaInicio: number, fechaFin: number): Observable<any>{
    return this.http.post<Experience[]>(`https://carlosportfolioap.herokuapp.com/experience/crear`, {"empresa": empresa, "puesto": puesto, "fechaInicio": fechaInicio, "fechaFin": fechaFin});
  }

  projectAdd(nombre: String, descripcion: String, imageURL: string): Observable<any>{
    return this.http.post<Projects[]>(`https://carlosportfolioap.herokuapp.com/project/crear`, {"nombre": nombre, "descripcion": descripcion, "imagen": imageURL});
  }

  skillAdd(porcentaje: number, habilidad: String): Observable<any>{
    return this.http.post<Skill[]>(`https://carlosportfolioap.herokuapp.com/skill/crear`, {"porcentaje": porcentaje, "habilidad": habilidad});
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  get autenticado(){
    return this.userAutenticado;
  }

  

  
}
