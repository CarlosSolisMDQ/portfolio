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
        about:['', [Validators.required]],
          
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

      this.userService.aboutEdit(this.form.value.about).subscribe(data => console.log("aboutEdit"))
      
      //this.redirectTo('');

      //hacer que la edicion despliegue una alerta y que ponga un boton de volver
   }

   //me cansé de buscar un buen metodo para reiniciar el componente alimentado por la 
   //edicion haciando un reaload y una nueva peticion, al final aplico la vieja confiable de 
   //hacer un reload a la url y santo remedio.

   //eliminar esto y poner una alerta
   redirectTo(uri:string){
    this.router.navigate([uri])
  .then(() => {
    window.location.reload();
  });
   }

}