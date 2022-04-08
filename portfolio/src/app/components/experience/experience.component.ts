import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  usuarioAutenticado: boolean = false;

  

  experiences: Experience[] = [];

  constructor(private dataRoute: ActivatedRoute, private route: Router, private datosServicioPorfolio: PortfolioService, private userservice: UserService) { }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataExperiences().subscribe(data => this.experiences = data);
    this.usuarioAutenticado = this.userservice.autenticado;
    //sacar el key del objeto para leer el backend, en este caso es "experiences"
  }

  passId(id: any){
    console.log("Id para editar: " + id);
    this.route.navigate(['/app-experience-edit', JSON.stringify(id)]);
  }

  experienceDelete(exp: Experience){
    
    this.userservice.deleteExperience(exp.id!).subscribe(()=> this.experiences = this.experiences.filter(elem => elem.id !== exp.id!))
    
    //por alguna razon no puedo hacer que se ejecute una funcion dentro del subscribe 
    //para editar el array de experiencias. hasta que lo solucione le voy a dar un reload para mostrar los cambios
    //solucionado, el navegador trataba de parsear una respuesta que venía del server
    //en texto plano como si fuera un json, eso abortaba el subscribe()

    //bien, lpm empezó a funcionar y me elimina la tarjeta de experiencia 
    //de la vista sin hacer reload
    
    //voy a tener que eliminar todos las respuestas en string del server o pasarlas a json
    
    
  }
}