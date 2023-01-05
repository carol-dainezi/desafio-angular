import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent {
  textoBotao: string = 'Cadastrar-se';

  async enviar(usuario: Usuario) {
    await this.usuarioService.salvarUsuario(usuario).subscribe();

    this.router.navigate(['/']);
  }

  constructor(private usuarioService: UsuarioService, private router: Router) {}
}
