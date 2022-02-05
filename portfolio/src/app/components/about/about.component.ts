import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ABOUT } from 'src/app/About';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  
  about: String = ABOUT;

  constructor(private userservice: UserService) { 
    
    
    console.log("about component usuarioautenticado: " + (this.userservice.userAutenticado))
  }

  ngOnInit(): void {

     this.usuarioAutenticado = this.userservice.autenticado;
  }

}