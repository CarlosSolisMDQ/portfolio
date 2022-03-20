import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from 'src/app/About';
import { UserService } from 'src/app/services/user.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  
  about: About[] = [];
  //recupero el about en un array porque reusé el codigo en el backend y me lo tira así.
  //ahora solo tengo que capturar el unico idem del array con el texto
  texto: String = "";
  

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { 
    
    console.log("about component usuarioautenticado: " + (this.userservice.userAutenticado))
  }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchAbout().subscribe(data => data.map((elem: any) => this.about.push(elem)))
    
     this.usuarioAutenticado = this.userservice.autenticado;
  }

}