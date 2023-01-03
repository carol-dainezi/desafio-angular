import { Component } from '@angular/core';
import { Fornecedor } from 'src/app/interfaces/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-novo-fornecedor',
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css'],
})
export class NovoFornecedorComponent {
  enviar(fornecedor: Fornecedor) {
    this.fornecedorService.salvarFornecedor(fornecedor).subscribe();
  }

  constructor(private fornecedorService: FornecedorService) {}
}
