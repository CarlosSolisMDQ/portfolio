import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { EXPERIENCE } from 'src/app/mock-experience';
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

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataExperiences().subscribe(data => data.experience.map((elem: any) => this.experiences.push(elem)));
    this.usuarioAutenticado = this.userservice.autenticado;
  }

}