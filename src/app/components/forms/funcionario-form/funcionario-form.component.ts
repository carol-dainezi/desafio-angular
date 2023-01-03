import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/interfaces/Funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
})
export class FuncionarioFormComponent {
  @Output() onSubmit = new EventEmitter<Funcionario>();

  funcionarioForm!: FormGroup;

  get nome() {
    return this.funcionarioForm.get('nome')!;
  }
  get foto() {
    return this.funcionarioForm.get('foto')!;
  }
  get idade() {
    return this.funcionarioForm.get('idade')!;
  }
  get cargo() {
    return this.funcionarioForm.get('cargo')!;
  }
  get naturalidade() {
    return this.funcionarioForm.get('naturalidade')!;
  }
  get anoAdmissao() {
    return this.funcionarioForm.get('anoAdmissao')!;
  }
  get hobbie() {
    return this.funcionarioForm.get('hobbie')!;
  }

  submit() {
    if (this.funcionarioForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.funcionarioForm.value);
  }

  ngOnInit() {
    this.funcionarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      naturalidade: new FormControl('', [Validators.required]),
      anoAdmissao: new FormControl('', [Validators.required]),
      hobbie: new FormControl('', [Validators.required]),
    });
  }
}
