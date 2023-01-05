import { Component } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css'],
})
export class EditarAgendamentoComponent {
  textoBotao: string = 'Editar Agendamento';

  editar(agendamento: Agendamento) {
    console.log(agendamento);
  }
}
