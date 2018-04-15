import { RoleFormComponent } from './role-form/role-form.component';
import { RoleComponent } from './role/role.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: RoleComponent,
    children: [
      { path: 'new', component: RoleFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
