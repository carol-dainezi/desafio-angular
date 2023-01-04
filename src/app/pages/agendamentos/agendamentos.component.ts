import { Component } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['..//../listas.component.css', './agendamentos.component.css'],
})
export class AgendamentosComponent {
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {
    this.agendamentoService.listarAgendamentos().subscribe((items) => {
      this.agendamentos = items;
    });
  }
}
