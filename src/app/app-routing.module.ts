import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './pages/novo-usuario/novo-usuario.component';
import { LoginComponent } from './components/forms/login/login.component';
import { NovaComidaComponent } from './pages/nova-comida/nova-comida.component';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento.component';
import { NovoEventoComponent } from './pages/novo-evento/novo-evento.component';
import { NovoFornecedorComponent } from './pages/novo-fornecedor/novo-fornecedor.component';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NovaBebidaComponent } from './pages/nova-bebida/nova-bebida.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { EditarBebidaComponent } from './pages/editar-bebida/editar-bebida.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'funcionarios/new', component: NovoFuncionarioComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'eventos/new', component: NovoEventoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'cardapio/comidas/new', component: NovaComidaComponent },
  { path: 'cardapio/comidas', component: ComidasComponent },
  { path: 'cardapio/bebidas/new', component: NovaBebidaComponent },
  { path: 'cardapio/bebidas/editar/:_id', component: EditarBebidaComponent },
  { path: 'cardapio/bebidas', component: BebidasComponent },
  { path: 'agendamentos/new', component: NovoAgendamentoComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'fornecedores/new', component: NovoFornecedorComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: NovoUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
