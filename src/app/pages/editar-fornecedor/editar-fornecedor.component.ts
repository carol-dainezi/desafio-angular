import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from 'src/app/interfaces/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css'],
})
export class EditarFornecedorComponent {
  textoBotao: string = 'Editar Fornecedor';

  fornecedor!: Fornecedor;

  editar(fornecedor: Fornecedor) {
    const _id = fornecedor._id!;

    this.fornecedorService.editarFornecedor(_id, fornecedor).subscribe();
  }

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.fornecedorService.buscarFornecedor(_id).subscribe((item) => {
      this.fornecedor = item;
    });
  }
}
