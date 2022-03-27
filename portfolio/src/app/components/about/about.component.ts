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
  aboutResult: String = "";
  //recupero el about en un array porque reusé el codigo en el backend y me lo tira así.
  //ahora solo tengo que capturar el unico idem del array con el texto en la variable aboutresult
  texto: String = "";
  

  constructor(private datosServicioPorfolio: PortfolioService, private userservice: UserService) { 
    
    //console.log("about component usuarioautenticado: " + (this.userservice.userAutenticado))
  }

  ngOnInit(): void {
    
    //mi primera solucion fue rescatar el about en un array y llamar al primer elemento en el html
    //luego lo termine de asignar acá en el archivo ts.
    //this.datosServicioPorfolio.fetchAbout().subscribe(data => data.map((elem: any) => this.about.push(elem)))
    
    this.datosServicioPorfolio.fetchAbout().subscribe(data => this.aboutResult= data[0].about );

     this.usuarioAutenticado = this.userservice.autenticado;
  }

}