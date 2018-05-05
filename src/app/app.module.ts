import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembrosComponent } from './membros/membros.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { MembrosDetalhesComponent } from './membros-detalhes/membros-detalhes.component';
import { MembrosService } from './membros.service';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MensagensService } from './mensagens.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MembrosComponent,
    HeaderComponent,
    MembrosDetalhesComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MembrosService, MensagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
