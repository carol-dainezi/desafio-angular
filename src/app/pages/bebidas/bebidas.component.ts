import { Component } from '@angular/core';
import { Bebida } from 'src/app/interfaces/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['../../listas.component.css'],
})
export class BebidasComponent {
  bebidas: Bebida[] = [];

  async excluir(_id: string) {
    await this.bebidaService.excluirBebida(_id).subscribe();

    window.location.reload();
  }

  constructor(private bebidaService: BebidaService) {}

  ngOnInit() {
    this.bebidaService.listarBebidas().subscribe((items) => {
      this.bebidas = items;
    });
  }
}
