import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { SwalUtils } from '../utils/swal-utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  login: Login = new Login()
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['parcial22@eam.edu.co'],
      password: ['654321']
    })

  }

  onLogin() {
    if (this.loginForm.valid) {
      this.extractData()
      this.loginService.login(this.login).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashtarjeta')
        SwalUtils.customMessageOk('Bienvenido','login Correcto')        
      }, (error) => {
        this.router.navigateByUrl('dashtarjeta')
        SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
        console.log(error);
        
      })      
    } else {
      this.router.navigateByUrl('dashtarjeta')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
    }
    console.log(this.loginForm);

  }

  extractData() {
    this.login.username = this.loginForm.get("email")?.value
    this.login.password = this.loginForm.value.password
  }

}
