import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from 'src/app/interfaces/Fornecedor';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css'],
})
export class FornecedorFormComponent {
  @Output() onSubmit = new EventEmitter<Fornecedor>();

  fornecedorForm!: FormGroup;

  get nome() {
    return this.fornecedorForm.get('nome')!;
  }
  get foto() {
    return this.fornecedorForm.get('foto')!;
  }
  get descricao() {
    return this.fornecedorForm.get('descricao')!;
  }

  submit() {
    if (this.fornecedorForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.fornecedorForm.value);
  }

  ngOnInit() {
    this.fornecedorForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
    });
  }
}
