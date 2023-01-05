import { Component } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['../../listas.component.css'],
})
export class EventosComponent {
  eventos: Evento[] = [];

  async excluir(_id: string) {
    await this.eventoService.excluirEvento(_id).subscribe();

    window.location.reload();
  }

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.eventoService.listarEventos().subscribe((items) => {
      this.eventos = items;
    });
  }
}
