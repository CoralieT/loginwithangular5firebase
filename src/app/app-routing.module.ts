import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './component/home-page/home-page.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import{RegisterPageComponent} from './component/register-page/register-page.component';
import {PrivatePageComponent} from './component/private-page/private-page.component';
import {NotFoundPageComponent} from './component/not-found-page/not-found-page.component';
const routes: Routes = [

  {path:'', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'private', component: PrivatePageComponent},
  {path:'**', component: NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
