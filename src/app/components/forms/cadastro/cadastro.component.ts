import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @Output() onSubmit = new EventEmitter<Usuario>();

  @Input() dadosUsuario: Usuario | null = null;

  @Input() textoBotao!: string;

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
      _id: new FormControl(this.dadosUsuario ? this.dadosUsuario._id : null),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '', [
        Validators.required,
      ]),
      cpf: new FormControl(this.dadosUsuario ? this.dadosUsuario.cpf : '', [
        Validators.required,
      ]),
      telefone: new FormControl(
        this.dadosUsuario ? this.dadosUsuario.telefone : '',
        [Validators.required]
      ),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : '', [
        Validators.required,
      ]),
      senha: new FormControl(this.dadosUsuario ? this.dadosUsuario.senha : '', [
        Validators.required,
      ]),
    });
  }
}
