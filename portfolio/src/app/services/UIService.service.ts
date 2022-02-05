import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showLoginLogout: boolean = true;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    console.log(this.showLoginLogout);
    this.showLoginLogout = !this.showLoginLogout;    
    this.subject.next(this.showLoginLogout);
    
    
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
