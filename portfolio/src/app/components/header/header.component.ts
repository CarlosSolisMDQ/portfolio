import { Component, OnInit, Input } from '@angular/core';
import { UIService } from 'src/app/services/UIService.service';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: String = "Portfolio";
  showLoginLogout: boolean = false;
  subscription?: Subscription;
  usuarioAutenticado: boolean = false;
  constructor(private uiService: UIService, private datosServicioPorfolio: PortfolioService, private userservice: UserService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showLoginLogout = value);
  }

  ngOnInit(): void {
    this.datosServicioPorfolio.fetchData().subscribe(data => console.log(data));
    this.usuarioAutenticado = this.userservice.autenticado;
  }

  toggleTask(){
    console.log("header toggleTask");
    this.uiService.toggleAddTask();
    
    
  }

  logOutButton(){
   
      this.userservice.logOut();
     
  }

  

}