import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bebida } from 'src/app/interfaces/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-editar-bebida',
  templateUrl: './editar-bebida.component.html',
  styleUrls: ['./editar-bebida.component.css'],
})
export class EditarBebidaComponent {
  textoBotao: string = 'Editar Bebida';

  bebida!: Bebida;

  editar(bebida: Bebida) {
    const _id = bebida._id!;

    this.bebidaService.editarBebida(_id, bebida).subscribe();
  }

  constructor(
    private bebidaService: BebidaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.bebidaService.buscarBebida(_id).subscribe((item) => {
      this.bebida = item;
    });
  }
}
