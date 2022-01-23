import { Component, OnInit, Input } from '@angular/core';
import { UIService } from 'src/app/services/UIService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: String = "Portfolio";
  showLoginLogout: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UIService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showLoginLogout = value);
  }

  ngOnInit(): void {
  }
  toggleTask(){
    console.log("header toggleTask");
    this.uiService.toggleAddTask();
  }

  

}