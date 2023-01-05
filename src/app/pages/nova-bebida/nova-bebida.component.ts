import { Component } from '@angular/core';
import { Bebida } from 'src/app/interfaces/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-nova-bebida',
  templateUrl: './nova-bebida.component.html',
  styleUrls: ['./nova-bebida.component.css'],
})
export class NovaBebidaComponent {
  textoBotao: string = 'Cadastrar Bebida';

  enviar(bebida: Bebida) {
    this.bebidaService.salvarBebida(bebida).subscribe();
  }

  constructor(private bebidaService: BebidaService) {}
}
