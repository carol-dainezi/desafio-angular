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
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';
import { EditarComidaComponent } from './pages/editar-comida/editar-comida.component';
import { EditarFornecedorComponent } from './pages/editar-fornecedor/editar-fornecedor.component';
import { EditarEventoComponent } from './pages/editar-evento/editar-evento.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EditarAgendamentoComponent } from './pages/editar-agendamento/editar-agendamento.component';
import { AgendamentosUsuarioComponent } from './pages/agendamentos-usuario/agendamentos-usuario.component';
import { AgendamentosEventoComponent } from './pages/agendamentos-evento/agendamentos-evento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'funcionarios/new', component: NovoFuncionarioComponent },
  { path: 'funcionarios/editar/:_id', component: EditarFuncionarioComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'eventos/new', component: NovoEventoComponent },
  { path: 'eventos/editar/:_id', component: EditarEventoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'cardapio/comidas/new', component: NovaComidaComponent },
  { path: 'cardapio/comidas/editar/:_id', component: EditarComidaComponent },
  { path: 'cardapio/comidas', component: ComidasComponent },
  { path: 'cardapio/bebidas/new', component: NovaBebidaComponent },
  { path: 'cardapio/bebidas/editar/:_id', component: EditarBebidaComponent },
  { path: 'cardapio/bebidas', component: BebidasComponent },
  { path: 'agendamentos/new', component: NovoAgendamentoComponent },
  { path: 'agendamentos/editar/:_id', component: EditarAgendamentoComponent },
  {
    path: 'agendamentos/usuario/:_id',
    component: AgendamentosUsuarioComponent,
  },
  {
    path: 'agendamentos/evento/:_id',
    component: AgendamentosEventoComponent,
  },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'fornecedores/new', component: NovoFornecedorComponent },
  { path: 'fornecedores/editar/:_id', component: EditarFornecedorComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: NovoUsuarioComponent },
  { path: 'usuarios/editar/:_id', component: EditarUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
