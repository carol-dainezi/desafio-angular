import { Component } from '@angular/core';
import { Comida } from 'src/app/interfaces/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-nova-comida',
  templateUrl: './nova-comida.component.html',
  styleUrls: ['./nova-comida.component.css'],
})
export class NovaComidaComponent {
  textoBotao: string = 'Cadastrar Comida';

  enviar(comida: Comida) {
    this.comidaService.salvarComida(comida).subscribe();
  }

  constructor(private comidaService: ComidaService) {}
}
