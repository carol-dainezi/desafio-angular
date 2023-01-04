import { Component } from '@angular/core';
import { Funcionario } from 'src/app/interfaces/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['../../listas.component.css'],
})
export class FuncionariosComponent {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.funcionarioService.listarFuncionarios().subscribe((items) => {
      console.log(items)
      this.funcionarios = items;
    });
  }
}
