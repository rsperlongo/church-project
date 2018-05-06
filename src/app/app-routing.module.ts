import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { MembrosComponent } from './membros/membros.component';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
  
  { path:'login', component: LoginComponent},
  { path:'', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'membros', component: MembrosComponent},

  // { path: '', redirectTo: '/home', pathMatch: 'full'}
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
