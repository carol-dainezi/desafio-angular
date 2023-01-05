import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css'],
})
export class EditarAgendamentoComponent {
  textoBotao: string = 'Editar Agendamento';

  agendamento!: Agendamento;

  editar(agendamento: Agendamento) {
    const _id = agendamento._id!;

    this.agendamentoService.editarAgendamento(_id, agendamento).subscribe();
  }

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {}
}
