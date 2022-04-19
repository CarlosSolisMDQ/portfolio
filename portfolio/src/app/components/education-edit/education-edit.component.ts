import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  form: FormGroup;

  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!); 

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 
    this.form = this.formbuilder.group(
      {
        escuela:['', [Validators.required]],
        carrera: ['', [Validators.required]],
        fechaInicio: ['', [Validators.required]],
        fechaFin: ['', [Validators.required]]
      }
    )

  }

  ngOnInit(): void {
  }

  public editEducation(){
    console.log("edit----education " + this.form.value.escuela);

    this.userService.educationEdit(this.id, this.form.value.escuela, this.form.value.carrera, this.form.value.fechaInicio, this.form.value.fechaFin).subscribe(()=> this.router.navigate([""]));
    
    //this.router.navigate(['']);

    //hacer que la edicion despliegue una alerta y que ponga un boton de volver

}

redirectTo(uri:string){
  this.router.navigate([uri])
.then(() => {
  window.location.reload();
});

}
}
