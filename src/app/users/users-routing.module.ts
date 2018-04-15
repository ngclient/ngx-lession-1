import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'list', component: UserGridComponent },
      { path: 'new', component: UserFormComponent },
      { path: ':id/edit', component: UserFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
