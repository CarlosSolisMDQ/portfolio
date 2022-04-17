import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {

  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 
    this.form = this.formbuilder.group(
      {
        empresa:['', [Validators.required]],
        puesto: ['', [Validators.required]],
        fechaInicio: ['', [Validators.required]],
        fechaFin: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  addExperience(){
    this.userService.experienceAdd(this.form.value.empresa, this.form.value.puesto, this.form.value.fechaInicio, this.form.value.fechaFin).subscribe(() => alert("Success"));
  }

}
