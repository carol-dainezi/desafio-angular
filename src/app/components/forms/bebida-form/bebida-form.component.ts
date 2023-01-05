import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Bebida } from 'src/app/interfaces/Bebida';

@Component({
  selector: 'app-bebida-form',
  templateUrl: './bebida-form.component.html',
  styleUrls: ['./bebida-form.component.css'],
})
export class BebidaFormComponent {
  @Output() onSubmit = new EventEmitter<Bebida>();

  @Input() dadosBebida: Bebida | null = null;

  bebidaForm!: FormGroup;

  submit() {
    if (this.bebidaForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.bebidaForm.value);
  }

  get nome() {
    return this.bebidaForm.get('nome')!;
  }

  get foto() {
    return this.bebidaForm.get('foto')!;
  }

  get descricao() {
    return this.bebidaForm.get('descricao')!;
  }

  get preco() {
    return this.bebidaForm.get('preco')!;
  }

  ngOnInit(): void {
    this.bebidaForm = new FormGroup({
      _id: new FormControl(this.dadosBebida ? this.dadosBebida._id : ''),
      nome: new FormControl(this.dadosBebida ? this.dadosBebida.nome : '', [
        Validators.required,
      ]),
      foto: new FormControl(this.dadosBebida ? this.dadosBebida.foto : '', [
        Validators.required,
      ]),
      descricao: new FormControl(
        this.dadosBebida ? this.dadosBebida.descricao : '',
        [Validators.required]
      ),
      preco: new FormControl(this.dadosBebida ? this.dadosBebida.preco : '', [
        Validators.required,
      ]),
    });
  }
}
