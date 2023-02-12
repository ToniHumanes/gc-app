import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      loadChildren: () => import('../app/public/pages/login/modules/login-module.module').then(m => m.LoginModule)
    },
    {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
