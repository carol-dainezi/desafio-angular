import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from 'src/app/interfaces/Fornecedor';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css'],
})
export class FornecedorFormComponent {
  @Output() onSubmit = new EventEmitter<Fornecedor>();

  @Input() dadosFornecedor: Fornecedor | null = null;

  @Input() textoBotao!: string;

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
      _id: new FormControl(
        this.dadosFornecedor ? this.dadosFornecedor._id : null
      ),
      nome: new FormControl(
        this.dadosFornecedor ? this.dadosFornecedor.nome : '',
        [Validators.required]
      ),
      foto: new FormControl(
        this.dadosFornecedor ? this.dadosFornecedor.foto : '',
        [Validators.required]
      ),
      descricao: new FormControl(
        this.dadosFornecedor ? this.dadosFornecedor.descricao : '',
        [Validators.required]
      ),
    });
  }
}
