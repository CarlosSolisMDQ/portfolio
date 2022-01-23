import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { EXPERIENCE } from 'src/app/mock-experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = EXPERIENCE;

  constructor() { }

  ngOnInit(): void {
  }

}