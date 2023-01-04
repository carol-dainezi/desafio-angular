import { Component } from '@angular/core';
import { Fornecedor } from 'src/app/interfaces/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['../../listas.component.css'],
})
export class FornecedoresComponent {
  fornecedores: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit() {
    this.fornecedorService.listarFornecedores().subscribe((items) => {
      this.fornecedores = items;
    });
  }
}
