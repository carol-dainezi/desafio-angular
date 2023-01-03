import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { NovoEventoComponent } from './pages/novo-evento/novo-evento.component';
import { NovaComidaComponent } from './pages/nova-comida/nova-comida.component';
import { BebidaFormComponent } from './components/forms/bebida-form/bebida-form.component';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento.component';
import { NovoFornecedorComponent } from './pages/novo-fornecedor/novo-fornecedor.component';
import { LoginComponent } from './components/forms/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/forms/cadastro/cadastro.component';
import { NovaBebidaComponent } from './pages/nova-bebida/nova-bebida.component';
import { ComidaFormComponent } from './components/forms/comida-form/comida-form.component';
import { EventoFormComponent } from './components/forms/evento-form/evento-form.component';
import { FuncionarioFormComponent } from './components/forms/funcionario-form/funcionario-form.component';
import { FornecedorFormComponent } from './components/forms/fornecedor-form/fornecedor-form.component';
import { BebidasComponent } from './components/pages/bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    NovoFuncionarioComponent,
    NovoEventoComponent,
    NovaComidaComponent,
    NovoAgendamentoComponent,
    NovoFornecedorComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
    BebidaFormComponent,
    NovaBebidaComponent,
    ComidaFormComponent,
    EventoFormComponent,
    FuncionarioFormComponent,
    FornecedorFormComponent,
    BebidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
