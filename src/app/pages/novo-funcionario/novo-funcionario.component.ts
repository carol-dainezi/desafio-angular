import { Component } from '@angular/core';
import { Funcionario } from 'src/app/interfaces/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css'],
})
export class NovoFuncionarioComponent {
  enviar(funcionario: Funcionario) {
    this.funcionarioService.salvarFuncionario(funcionario).subscribe();
  }

  constructor(private funcionarioService: FuncionarioService) {}
}
