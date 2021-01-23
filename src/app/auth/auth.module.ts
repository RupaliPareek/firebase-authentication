import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { RegisterContainerComponent } from './components/register-container/register-container.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [AuthContainerComponent,LoginContainerComponent, RegisterContainerComponent, UserInfoComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
