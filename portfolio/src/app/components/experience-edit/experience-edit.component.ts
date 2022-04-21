import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  form: FormGroup;

  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!); 

  //nota, el valor que retorn esto no puede ser nulo, así que pongo una exclamacion para avisarle
  //al compilador que el valor no puede ser nulo.

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 

    this.form = this.formbuilder.group(
      {
        empresa:['', [Validators.required, Validators.maxLength(250)]],
        puesto: ['', [Validators.required, Validators.maxLength(250)]],
        fechaInicio: ['', [Validators.required]],
        fechaFin: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    
  }

  get empresa(): any {
    return this.form.get('empresa');
  }

  get puesto(): any {
    return this.form.get('puesto');
  }

  get fechaInicio(): any {
    return this.form.get('fechaInicio');
  }

  get fechaFin(): any {
    return this.form.get('fechaFin');
  }

  

  public editExperience(){
      console.log("edit----experience " + this.form.value.empresa);

      this.userService.experienceEdit(this.id, this.form.value.empresa, this.form.value.puesto, this.form.value.fechaInicio, this.form.value.fechaFin).subscribe(()=> this.router.navigate([""]))
      

  }

  //esta funcion quedó sin uso

  redirectTo(uri:string){
    this.router.navigate([uri])
  .then(() => {
    window.location.reload();
  });

}
}
