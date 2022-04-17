import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {

  form: FormGroup;

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

  addSkill(){
    this.userService.skillAdd(this.form.value.porcentaje, this.form.value.habilidad).subscribe(() => alert('Success'));
  }

}
