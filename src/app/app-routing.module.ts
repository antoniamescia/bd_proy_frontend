import { NonAdminGuard } from './guards/non-admin.guard';
import { NonAdminViewComponent } from './components/non-admin/non-admin-view/non-admin-view.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminViewComponent } from './components/admin/admin-view/admin-view.component';
import { SignUpViewComponent } from './components/sign-up/sign-up-view/sign-up-view.component';
import { SignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './components/login/login-view/login-view.component';
import { ForgotPasswordViewComponent } from './components/forgot-password/forgot-password-view/forgot-password-view.component';
import { RequestFormComponent } from './components/non-admin/request-form/request-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginViewComponent },
  { path: 'registro', component: SignUpViewComponent },
  { path: 'recuperar-contrasena', component: ForgotPasswordViewComponent },
  { path: 'admin', component: AdminViewComponent, canActivate: [AdminGuard] },
  {path: 'gestion', component: NonAdminViewComponent, canActivate: [NonAdminGuard]},
  {path: 'solicitud', component: RequestFormComponent, canActivate: [NonAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
