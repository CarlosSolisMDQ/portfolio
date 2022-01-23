import { Component, OnInit } from '@angular/core';
import { SKILL } from 'src/app/mock-skill';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = SKILL;
  

  constructor() { }

  ngOnInit(): void {
  }

}