import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Bebida } from 'src/app/interfaces/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
})
export class BebidasComponent {
  bebidas: Bebida[] = [];

  constructor(private bebidaService: BebidaService) {}

  ngOnInit() {
    this.bebidaService.listarBebidas().subscribe((items) => {
      console.log(items);
      this.bebidas = items;
    });
  }
}
