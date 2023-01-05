import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/interfaces/Funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
})
export class FuncionarioFormComponent {
  @Output() onSubmit = new EventEmitter<Funcionario>();

  @Input() dadosFuncionario: Funcionario | null = null;

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
      _id: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario._id : ''
      ),
      nome: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.nome : '',
        [Validators.required]
      ),
      foto: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.foto : '',
        [Validators.required]
      ),
      idade: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.idade : '',
        [Validators.required]
      ),
      cargo: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.cargo : '',
        [Validators.required]
      ),
      naturalidade: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.naturalidade : '',
        [Validators.required]
      ),
      anoAdmissao: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.anoAdmissao : '',
        [Validators.required]
      ),
      hobbie: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.hobbie : '',
        [Validators.required]
      ),
    });
  }
}
