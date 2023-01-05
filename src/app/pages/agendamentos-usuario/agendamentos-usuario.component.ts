import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamentos-usuario',
  templateUrl: './agendamentos-usuario.component.html',
  styleUrls: ['./agendamentos-usuario.component.css'],
})
export class AgendamentosUsuarioComponent {
  _id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this._id = String(this.route.snapshot.paramMap.get('_id'));
  }
}
