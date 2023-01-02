import { Component } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.css'],
})
export class NovoEventoComponent {
  enviar(evento: Evento) {
    this.eventoService.salvarEvento(evento).subscribe();
  }

  constructor(private eventoService: EventoService) {}
}
