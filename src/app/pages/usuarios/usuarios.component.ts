import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['..//../listas.component.css', './usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe((items) => {
      console.log(items);
      this.usuarios = items;
    });
  }
}
