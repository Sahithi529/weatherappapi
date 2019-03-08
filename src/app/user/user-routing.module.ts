import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppGuard } from '../app.guard';


const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path:'profile',
  pathMatch: 'full',
  component: ProfileComponent,
  canActivate: [AppGuard]
},
{
  path:'login',
  pathMatch: 'full',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
