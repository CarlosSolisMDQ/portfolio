import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.css']
})
export class ProjectsEditComponent implements OnInit {

  form: FormGroup;

  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 

    this.form = this.formbuilder.group(
      {
        nombre:['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        imagenURL: ['', [Validators.required]]
        
      }
    )
  }

  ngOnInit(): void {
  }

  get nombre(): any {
    return this.form.get('nombre');
  }

  get descripcion(): any {
    return this.form.get('descripcion');
  }
  
  get imagenURL(): any {
    return this.form.get('imagenURL');
  }

  editProject(){
    this.userService.projectEdit(this.id, this.form.value.nombre, this.form.value.descripcion, this.form.value.imagenURL).subscribe(()=> this.router.navigate([""]));
  }

}
