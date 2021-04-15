import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup

  constructor(
    fb: FormBuilder,
    private as: AuthService,
    private router: Router) {

    let registerFormControls = {
      adresse: new FormControl('', [
        Validators.required,
      ]),
      nom: new FormControl('', [
        Validators.required,
      ]),
      prenom: new FormControl('', [
        Validators.required,
      ]),
      pseudo: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required
      ])
    }

    this.registerForm = fb.group(registerFormControls)

  }

  ngOnInit(): void {
  }

  get mynom() { return this.registerForm.get('nom') }
  get myprenom() { return this.registerForm.get('prenom') }
  get myadesse() { return this.registerForm.get('adresse') }
  get mypseudo() { return this.registerForm.get('pseudo') }
  get myemail() { return this.registerForm.get('email') }
  get mypassword() { return this.registerForm.get('password') }
  get myrepassword() { return this.registerForm.get('repassword') }

  registerUser() {

    let data = this.registerForm.value

    let user = new User()

    user.email = data.email
    user.password = data.password
    user.adresse = data.adresse
    user.nom = data.nom
    user.prenom = user.prenom
    user.pseudo = data.pseudo
    user.email = data.email
    user.password = data.password

    //envoi data vers API
    this.as.registerUser(user).subscribe(
      result => this.router.navigateByUrl('/login'),
      error => console.log(error)
    )

  }

}
