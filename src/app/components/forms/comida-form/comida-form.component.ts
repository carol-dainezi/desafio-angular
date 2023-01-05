import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Comida } from 'src/app/interfaces/Comida';

@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css'],
})
export class ComidaFormComponent {
  @Output() onSubmit = new EventEmitter<Comida>();

  @Input() dadosComida: Comida | null = null;

  @Input() textoBotao!: string;

  comidaForm!: FormGroup;

  submit() {
    if (this.comidaForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.comidaForm.value);
  }

  get nome() {
    return this.comidaForm.get('nome')!;
  }

  get foto() {
    return this.comidaForm.get('foto')!;
  }

  get descricao() {
    return this.comidaForm.get('descricao')!;
  }

  get preco() {
    return this.comidaForm.get('preco')!;
  }

  ngOnInit(): void {
    this.comidaForm = new FormGroup({
      _id: new FormControl(this.dadosComida ? this.dadosComida._id : null),
      nome: new FormControl(this.dadosComida ? this.dadosComida.nome : '', [
        Validators.required,
      ]),
      foto: new FormControl(this.dadosComida ? this.dadosComida.foto : '', [
        Validators.required,
      ]),
      descricao: new FormControl(
        this.dadosComida ? this.dadosComida.descricao : '',
        [Validators.required]
      ),
      preco: new FormControl(this.dadosComida ? this.dadosComida.preco : '', [
        Validators.required,
      ]),
    });
  }
}
