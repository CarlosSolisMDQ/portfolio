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

  fetchDataEducation():Observable<any>{
    return this.http.get('./assets/mockJson/education.json');
  }
}
