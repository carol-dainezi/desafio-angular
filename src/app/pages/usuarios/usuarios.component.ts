import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['..//../listas.component.css', './usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];

  async excluir(_id: string) {
    await this.usuarioService.excluirUsuario(_id).subscribe();

    window.location.reload();
  }

  async mudarPermissao(usuario: Usuario) {
    await this.usuarioService.mudarPermissoes(usuario).subscribe();

    window.location.reload();
  }

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe((items) => {
      console.log(items);
      this.usuarios = items;
    });
  }
}
