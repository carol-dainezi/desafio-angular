import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent {
  textoBotao: string = 'Editar Usuário';

  usuario!: Usuario;

  editar(usuario: Usuario) {
    const _id = usuario._id!;

    this.usuarioService.editarUsuario(_id, usuario).subscribe();
  }

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));

    this.usuarioService.buscarUsuario(_id).subscribe((item) => {
      this.usuario = item;
    });
  }
}
