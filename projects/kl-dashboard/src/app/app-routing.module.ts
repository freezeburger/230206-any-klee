import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageGuard } from './core/guards/message.guard';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageInfosComponent } from './pages/page-infos/page-infos.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageMessageComponent } from './pages/page-message/page-message.component';

const routes: Routes = [
  {
    path:'messages',
    component:PageMessageComponent,
    canActivate:[MessageGuard]
  },
  {
    path:'infos',
    component:PageInfosComponent
  },
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'home',
    component:PageHomeComponent
  },
  {
    path:'**',
    component:PageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
