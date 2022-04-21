import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {
  form: FormGroup;
  aboutText: String;

  

  constructor(private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 
    this.aboutText = "";
    

    this.form = this.formbuilder.group(
      {
        about:['', [Validators.required, Validators.maxLength(250)]],
          
      }
    )
  }

  ngOnInit(): void {
  }

  get about(): any {
    return this.form.get('about');
  }

  editAbout() {
    console.log("edit-about: " + this.form.value.about);

      this.userService.aboutEdit(this.form.value.about).subscribe(()=> this.router.navigate([""]))
      
      
   }

   //esta funcion quedó sin uso;

   redirectTo(uri:string){
    this.router.navigate([uri])
  .then(() => {
    window.location.reload();
  });
   }

}