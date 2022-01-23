import { Component, OnInit } from '@angular/core';
import { ABOUT } from 'src/app/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: String = ABOUT;

  constructor() { }

  ngOnInit(): void {
  }

}