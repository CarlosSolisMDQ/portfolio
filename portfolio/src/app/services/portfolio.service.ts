import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  //este metodo es para simular la consulta de la api. arreglar reemplazar los mock.ts por estos json

  fetchData():Observable<any>{
    return this.http.get('./assets/mockJson/prueba.json');
  }

  //consultas a los endpoint sin securizar

  fetchDataEducation():Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/education');
  }

  fetchDataExperiences():Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/experience');
  }

  fetchDataSkills():Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/skill');
  }

  fetchDataProjects():Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/project');
  }

  fetchAbout():Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/about');
  }

  fetchHeaderImages(): Observable<any>{
    return this.http.get('https://carlosportfolioap.herokuapp.com/images');
  }
}
