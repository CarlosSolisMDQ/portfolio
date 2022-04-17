import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  form: FormGroup;

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

  addProject(){
    this.userService.projectAdd(this.form.value.nombre, this.form.value.descripcion, this.form.value.imagenURL).subscribe(() => alert("Project added"));
  }
}
