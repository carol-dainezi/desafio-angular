import { Component, Input } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { Evento } from 'src/app/interfaces/Evento';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { EventoService } from 'src/app/services/evento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['..//../listas.component.css', './agendamentos.component.css'],
})
export class AgendamentosComponent {
  @Input() idUsuario?: string;
  usuario?: Usuario;

  @Input() idEvento?: string;
  evento?: Evento;

  for: string = 'let agendamentos of todosOsAgendamentos';

  todosOsAgendamentos: Agendamento[] = [];
  agendamentosPorUsuario: Agendamento[] = [];
  agendamentosPorEvento: Agendamento[] = [];

  async excluir(_id: string) {
    await this.agendamentoService.excluirAgendamento(_id).subscribe();

    window.location.reload();
  }

  constructor(
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private eventoService: EventoService
  ) {}

  ngOnInit() {
    this.agendamentoService.listarAgendamentos().subscribe((items) => {
      this.todosOsAgendamentos = items;
    });

    if (this.idUsuario) {
      this.agendamentoService
        .listarAgendamentosPorUsuario(this.idUsuario)
        .subscribe((items) => {
          this.agendamentosPorUsuario = items;
        });

      this.usuarioService.buscarUsuario(this.idUsuario).subscribe((item) => {
        this.usuario = item;
      });
    }

    if (this.idEvento) {
      this.agendamentoService
        .listarAgendamentosPorEvento(this.idEvento)
        .subscribe((items) => {
          this.agendamentosPorEvento = items;
        });

      this.eventoService.buscarEvento(this.idEvento).subscribe((item) => {
        this.evento = item;
      });
    }
  }
}
