import { Component, OnInit } from '@angular/core';

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
    this.datosServicioPorfolio.fetchDataSkills().subscribe(data => this.skills = data);
    this.usuarioAutenticado = this.userservice.autenticado;
  }

  skillDelete(skill: Skill){
    this.userservice.deleteSkill(skill.id!).subscribe(() => this.skills = this.skills.filter(elem => elem.id !== skill.id))
  }

}