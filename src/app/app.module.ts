import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowUserChartsComponent } from './components/show-user-charts/show-user-charts.component';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  { path: '', component: AddUserComponent },
  { path: 'allusers', component: ShowUsersComponent },
  { path: 'usercharts', component: ShowUserChartsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUsersComponent,
    ShowUserChartsComponent,
  ],
  imports: [
    BrowserModule,FormsModule,MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

