import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/forms/cadastro/cadastro.component';
import { LoginComponent } from './components/forms/login/login.component';
import { BebidaFormComponent } from './components/forms/bebida-form/bebida-form.component';
import { NovaComidaComponent } from './pages/nova-comida/nova-comida.component';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento.component';
import { NovoEventoComponent } from './pages/novo-evento/novo-evento.component';
import { NovoFornecedorComponent } from './pages/novo-fornecedor/novo-fornecedor.component';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NovaBebidaComponent } from './pages/nova-bebida/nova-bebida.component';
import { BebidasComponent } from './components/pages/bebidas/bebidas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'funcionarios/new', component: NovoFuncionarioComponent },
  { path: 'eventos/new', component: NovoEventoComponent },
  { path: 'cardapio/comidas/new', component: NovaComidaComponent },
  { path: 'cardapio/bebidas/new', component: NovaBebidaComponent },
  { path: 'cardapio/bebidas', component: BebidasComponent },
  { path: 'agendamentos/new', component: NovoAgendamentoComponent },
  { path: 'fornecedores/new', component: NovoFornecedorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
