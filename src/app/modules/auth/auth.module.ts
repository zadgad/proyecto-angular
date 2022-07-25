import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LoggeadoGuard} from './guards/loggeado.guard';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AuthRoutingModule],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthService, LoggeadoGuard]
})
export class AuthModule {}
