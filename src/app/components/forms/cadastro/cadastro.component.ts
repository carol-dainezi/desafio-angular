import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @Output() onSubmit = new EventEmitter<Usuario>();

  usuarioForm!: FormGroup;

  visibilidade: boolean = false;

  submit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.usuarioForm.value);
  }

  get nome() {
    return this.usuarioForm.get('nome')!;
  }

  get cpf() {
    return this.usuarioForm.get('cpf')!;
  }
  get telefone() {
    return this.usuarioForm.get('telefone')!;
  }
  get email() {
    return this.usuarioForm.get('senha')!;
  }
  get senha() {
    return this.usuarioForm.get('senha')!;
  }

  mostrarSenha() {
    this.visibilidade = !this.visibilidade;
  }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }
}
