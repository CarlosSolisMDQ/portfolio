import { Component, OnInit } from '@angular/core';
import { SKILL } from 'src/app/mock-skill';
import { Skill } from 'src/app/Skill';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  skills: Skill[] = [];
  

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchDataSkills().subscribe(data => data.skill.map((elem: any) => this.skills.push(elem)));
    this.usuarioAutenticado = this.userservice.autenticado;
  }

}