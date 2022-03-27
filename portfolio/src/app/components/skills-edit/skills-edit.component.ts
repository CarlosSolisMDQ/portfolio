import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  form: FormGroup;

  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 

    this.form = this.formbuilder.group(
      {
        porcentaje:['', [Validators.required]],
        habilidad: ['', [Validators.required]]
        
      }
    )
  }

  ngOnInit(): void {
  }

  get porcentaje(): any {
    return this.form.get('porcentaje');
  }

  get habilidad(): any {
    return this.form.get('habilidad');
  }

  editSkill(){

    console.log("skillEdit: " + this.form.value.porcentaje);
    this.userService.skillEdit(this.id, this.form.value.porcentaje, this.form.value.habilidad).subscribe(data => console.log("skillEdit"));

  }

}
