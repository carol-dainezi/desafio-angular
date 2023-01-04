import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/Login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  login!: Login;

  visibilidade: boolean = false;

  enviar() {
    if (this.loginForm.invalid) {
      return;
    }

    this.login = this.loginForm.value;

    console.log(this.login);

    this.loginService.fazerLogin(this.login).subscribe();

    this.router.navigate('/');
  }

  mostrarSenha() {
    this.visibilidade = !this.visibilidade;
  }

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }
}
