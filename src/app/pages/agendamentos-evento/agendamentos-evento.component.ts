import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamentos-evento',
  templateUrl: './agendamentos-evento.component.html',
  styleUrls: ['./agendamentos-evento.component.css'],
})
export class AgendamentosEventoComponent {
  _id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id')!;
  }
}
