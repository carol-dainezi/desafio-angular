import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { Evento } from 'src/app/interfaces/Evento';
import { Usuario } from 'src/app/interfaces/Usuario';
import { EventoService } from 'src/app/services/evento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css'],
})
export class AgendamentoFormComponent {
  @Output() onSubmit = new EventEmitter<Agendamento>();
  agendamentoForm!: FormGroup;

  usuarios: Usuario[] = [];
  eventos: Evento[] = [];

  get idUsuario() {
    return this.agendamentoForm.get('idUsuario')!;
  }

  get idEvento() {
    return this.agendamentoForm.get('idEvento')!;
  }

  get data() {
    return this.agendamentoForm.get('data')!;
  }

  get hora() {
    return this.agendamentoForm.get('hora')!;
  }

  submit() {
    if (this.agendamentoForm.invalid) {
      return;
    }

    this.patchDatas();
    this.onSubmit.emit(this.agendamentoForm.value);
  }

  patchDatas() {
    let agendamento = this.agendamentoForm.getRawValue();
    let data = agendamento.data.split('-');
    let dataPatched = `${data[2]}/${data[1]}/${data[0]}`;

    this.agendamentoForm.patchValue({
      data: dataPatched,
    });
  }

  constructor(
    private usuarioService: UsuarioService,
    private eventoService: EventoService
  ) {}

  ngOnInit() {
    this.agendamentoForm = new FormGroup({
      idUsuario: new FormControl('', [Validators.required]),
      idEvento: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
    });

    this.usuarioService.listarUsuarios().subscribe((users) => {
      this.usuarios = users;
    });

    this.eventoService.listarEventos().subscribe((events) => {
      this.eventos = events;
    });
  }
}
