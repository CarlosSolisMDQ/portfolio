import { Component, OnInit } from '@angular/core';
import {Education} from "../../Education";

import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  usuarioAutenticado: boolean = false;

  educations: Education[] = [];

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { 
    
  }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataEducation().subscribe(data => this.educations = data);
    this.usuarioAutenticado = this.userservice.autenticado;
  }

  educationDelete(education:Education) {
    this.userservice.deleteEducation(education.id!).subscribe(() => this.educations = this.educations.filter(elem => elem.id !== education.id));
  }

}