import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './components/bill/bill.component';
import { BillsComponent } from './components/bills/bills.component';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { RealtiesComponent } from './components/realties/realties.component';
import { RealtyComponent } from './components/realty/realty.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RandomGuard } from './auth/guards/random.guard';
import { LoginComponent } from './auth/containers/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secret-random-number',
    loadChildren: './random/random.module#RandomModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  { path: 'home', component: HomeComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'realties', component: RealtiesComponent },
  { path: 'realty', component: RealtyComponent },
  { path: 'bill', component: BillComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'report', component: ReportComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
