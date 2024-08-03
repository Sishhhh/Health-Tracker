import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowUserChartsComponent } from './components/show-user-charts/show-user-charts.component';

const routes: Routes = [
  { path: '', component: AddUserComponent },
  { path: 'allusers', component: ShowUsersComponent },
  { path: 'usercharts', component: ShowUserChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
