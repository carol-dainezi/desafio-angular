import { Component, EventEmitter, Output } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css'],
})
export class EventoFormComponent {
  @Output() onSubmit = new EventEmitter<Evento>();

  eventoForm!: FormGroup;

  get nome() {
    return this.eventoForm.get('nome')!;
  }
  get foto() {
    return this.eventoForm.get('foto')!;
  }
  get descricao() {
    return this.eventoForm.get('descricao')!;
  }
  get dataInicio() {
    return this.eventoForm.get('dataInicio')!;
  }
  get dataFim() {
    return this.eventoForm.get('dataFim')!;
  }
  get horaInicio() {
    return this.eventoForm.get('horaInicio')!;
  }
  get horaFim() {
    return this.eventoForm.get('horaFim')!;
  }

  submit() {
    if (this.eventoForm.invalid) {
      return;
    }
    this.patchDatas();
    this.onSubmit.emit(this.eventoForm.value);
  }

  patchDatas() {
    let evento = this.eventoForm.getRawValue();

    let dataInicio = evento.dataInicio.split('-');
    let dataInicioPatched = `${dataInicio[2]}/${dataInicio[1]}/${dataInicio[0]}`;

    let dataFim = evento.dataFim.split('-');
    let dataFimPatched = `${dataFim[2]}/${dataFim[1]}/${dataFim[0]}`;

    this.eventoForm.patchValue({
      dataInicio: dataInicioPatched,
      dataFim: dataFimPatched,
    });
  }

  ngOnInit() {
    this.eventoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      dataInicio: new FormControl('', [Validators.required]),
      dataFim: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaFim: new FormControl('', [Validators.required]),
    });
  }
}
