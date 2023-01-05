import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css'],
})
export class EditarEventoComponent {
  textoBotao: string = 'Editar Evento';

  evento!: Evento;

  editar(evento: Evento) {
    const _id = evento._id!;

    this.eventoService.editarEvento(_id, evento).subscribe();
  }

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.eventoService.buscarEvento(_id).subscribe((item) => {
      this.evento = item;
    });
  }
}
