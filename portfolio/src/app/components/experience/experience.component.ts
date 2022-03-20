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

  id: number = 0;

  experiences: Experience[] = [];

  constructor(private dataRoute: ActivatedRoute, private route: Router, private datosServicioPorfolio: PortfolioService, private userservice: UserService) { }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataExperiences().subscribe(data => data.map((elem: any) => this.experiences.push(elem)));
    this.usuarioAutenticado = this.userservice.autenticado;
    //sacar el key del objeto para leer el backend, en este caso es "experiences"
  }

  passId(id: any){
    console.log("Id para editar: " + id);
    this.route.navigate(['/app-experience-edit', JSON.stringify(id)]);
  }
}