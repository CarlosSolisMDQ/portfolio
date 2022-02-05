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

  //este conjunto de metodos consulta los json de mock, voy a mantener metodos y consultas individuales

  fetchDataEducation():Observable<any>{
    return this.http.get('./assets/mockJson/education.json');
  }

  fetchDataExperiences():Observable<any>{
    return this.http.get('./assets/mockJson/experiences.json');
  }

  fetchDataSkills():Observable<any>{
    return this.http.get('./assets/mockJson/skills.json');
  }

  fetchDataProjects():Observable<any>{
    return this.http.get('./assets/mockJson/projects.json');
  }
}
