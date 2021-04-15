import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { User } from "src/app/models/user"


import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(
    fb: FormBuilder,
    private as: AuthService,
    private router: Router) {

    let loginFormControls = {
      username: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(loginFormControls)

  }

  ngOnInit(): void {
  }

  get myusername() { return this.loginForm.get('username') }
  get mypassword() { return this.loginForm.get('password') }

  loginUser() {

    let data = this.loginForm.value

    let user = new User()

    user.email = data.username
    user.password = data.password

    //envoi data vers API
    this.as.loginUser(user).subscribe(
      (result) => {
        let token = result.headers.get('Authorization').replace("Bearer ", "")
        
        localStorage.setItem("mytoken", token)

        this.router.navigateByUrl('/dashboard')
      }
      ,
      (error) => { console.log(error) }
    )

  }

}
