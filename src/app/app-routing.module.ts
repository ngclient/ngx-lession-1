import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: './users/users.module#UsersModule' },
  { path: 'role', loadChildren: './roles/roles.module#RolesModule' },
  { path: 'md1',  loadChildren: './module1/module1.module#Module1Module' },
  // lazy load route module user
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
