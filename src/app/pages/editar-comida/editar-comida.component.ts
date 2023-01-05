import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comida } from 'src/app/interfaces/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: ['./editar-comida.component.css'],
})
export class EditarComidaComponent {
  textoBotao: string = 'Editar Comida';

  comida!: Comida;

  editar(comida: Comida) {
    const _id = comida._id!;

    this.comidaService.editarBebida(_id, comida).subscribe();
  }

  constructor(
    private comidaService: ComidaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.comidaService.buscarComida(_id).subscribe((item) => {
      this.comida = item;
    });
  }
}
