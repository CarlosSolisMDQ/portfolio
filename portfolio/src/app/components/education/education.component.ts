import { Component, OnInit } from '@angular/core';
import {Education} from "../../Education";
import { EDUCATION } from '../../mock-education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = EDUCATION;

  constructor() { }

  ngOnInit(): void {
  }

}