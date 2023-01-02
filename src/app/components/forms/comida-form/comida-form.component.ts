import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Comida } from 'src/app/interfaces/Comida';

@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css'],
})
export class ComidaFormComponent {
  @Output() onSubmit = new EventEmitter<Comida>();

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
      nome: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
    });
  }
}
