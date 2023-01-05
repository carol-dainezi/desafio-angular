import { Component } from '@angular/core';
import { Comida } from 'src/app/interfaces/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['../../listas.component.css'],
})
export class ComidasComponent {
  comidas: Comida[] = [];

  async excluir(_id: string) {
    await this.comidaService.excluirComida(_id).subscribe();

    window.location.reload();
  }

  constructor(private comidaService: ComidaService) {}

  ngOnInit() {
    this.comidaService.listarComidas().subscribe((items) => {
      this.comidas = items;
    });
  }
}
