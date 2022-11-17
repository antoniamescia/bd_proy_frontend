import { SignUpViewComponent } from './components/sign-up/sign-up-view/sign-up-view.component';
import { SignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './components/login/login-view/login-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: LoginViewComponent},
  {path: 'registro', component: SignUpViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
