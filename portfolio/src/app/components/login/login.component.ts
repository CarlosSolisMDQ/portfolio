import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  
  nombreUsuario: string ="";
  password: string="";


  //hay que combiar esto a nombreusuario

  constructor(private userService: UserService, private formbuilder: FormBuilder, private router: Router ) {
    this.form = this.formbuilder.group(
      {
        nombreUsuario:['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        deviceInfo: this.formbuilder.group({
          // deviceId:["1234567890"],
          // deviceType: ["DEVICE_TYPE_ANDROID"],
          // notificationToken: ["23423484errtty4545"]
        })  
      }
    )
  }

  login() {

    //funcionando el login, por laburar de memoria me había olvidado que estaba validando
    //credenciales con el nombreUsuario en lugar del Email.
    
    const user = {email: this.nombreUsuario, password: this.password};
    this.userService.login(this.form.value).subscribe( data => {
      console.log("data: " + JSON.stringify(data));
      this.router.navigate(['/']);
  });

}

get Email(){
  return this.form.get('email');
}

get Password(){
  return this.form.get('password');
}


} 
