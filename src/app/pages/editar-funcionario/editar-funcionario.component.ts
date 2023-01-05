import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/interfaces/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css'],
})
export class EditarFuncionarioComponent {
  textoBotao: string = 'Editar Funcionário';

  funcionario!: Funcionario;

  editar(funcionario: Funcionario) {
    const _id = funcionario._id!;

    this.funcionarioService.editarFuncionario(_id, funcionario).subscribe();
  }

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = this.route.snapshot.paramMap.get('_id')!;

    this.funcionarioService.buscarFuncionario(_id).subscribe((item) => {
      this.funcionario = item;
    });
  }
}
