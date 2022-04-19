import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-portada-edit',
  templateUrl: './header-portada-edit.component.html',
  styleUrls: ['./header-portada-edit.component.css']
})
export class HeaderPortadaEditComponent implements OnInit {

  form: FormGroup;

  id: number = 9 //el id que le quedó a la entrada de la imagenes

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private formbuilder: FormBuilder, private router: Router) { 

    this.form = this.formbuilder.group(
      {
        portada:['', []],
        foto:['', []]
          
      }
    )
  }

  ngOnInit(): void {

  }

  editImagesHeader(){

    if(this.form.value.portada == null){
      this.form.value.portada = "";
    } else if(this.form.value.foto == null){
      this.form.value.foto = ""
    }
    //esto es muy chapucero pero tengo que flitrar por si el ingreso de un 
    //input en blanco me tira un null y devolverlo a string vacio que es lo que pide el backend 


    this.userService.imagesEdit(this.id, this.form.value.portada, this.form.value.foto).subscribe(()=> this.router.navigate([""]));
  }

}
