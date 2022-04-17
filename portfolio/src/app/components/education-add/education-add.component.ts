import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  form: FormGroup;

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

  addEducation(){
    this.userService.educationAdd(this.form.value.escuela, this.form.value.carrera, this.form.value.fechaInicio, this.form.value.fechaFin).subscribe(() => alert("Success"));
  }

}
