import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { RegisterContainerComponent } from './components/register-container/register-container.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent
  },
  {
    path: 'login',
    component: LoginContainerComponent
  },
  {
    path: 'register',
    component: RegisterContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
