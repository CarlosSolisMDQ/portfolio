import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/Projects';

import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  projects: Projects[] = [];

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataProjects().subscribe(data => data.map((elem: any) => this.projects.push(elem)));
    this.usuarioAutenticado = this.userservice.autenticado;
  }

}