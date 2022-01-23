import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/Projects';
import { PROJECTS } from 'src/app/mock.projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}