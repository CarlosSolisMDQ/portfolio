import { Component, OnInit } from '@angular/core';
import {Education} from "../../Education";
import { EDUCATION } from '../../mock-education';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = EDUCATION;

  constructor(private datosServicioPorfolio: PortfolioService) { }

  ngOnInit(): void {
    //this.datosServicioPorfolio.fetchDataEducation().subscribe(data => data.education.map((elem: any) => this.educations.push(elem)));
  }

}