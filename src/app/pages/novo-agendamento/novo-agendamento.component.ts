import { Component } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css'],
})
export class NovoAgendamentoComponent {
  textoBotao: string = 'Agendar';

  enviar(agendamento: Agendamento) {
    this.agendamentoService.salvarAgendamento(agendamento).subscribe();
  }

  constructor(private agendamentoService: AgendamentoService) {}
}
