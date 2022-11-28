import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginViewComponent } from './components/login/login-view/login-view.component';
import { SignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';
import { SignUpViewComponent } from './components/sign-up/sign-up-view/sign-up-view.component';
import { ForgotPasswordViewComponent } from './components/forgot-password/forgot-password-view/forgot-password-view.component';
import { AdminViewComponent } from './components/admin/admin-view/admin-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginViewComponent,
    SignUpFormComponent,
    SignUpViewComponent,
    ForgotPasswordViewComponent,
    AdminViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
