import { Component, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent {
  enviar(usuario: Usuario) {
    this.usuarioService.salvarUsuario(usuario).subscribe();
  }

  constructor(private usuarioService: UsuarioService) {}
}
