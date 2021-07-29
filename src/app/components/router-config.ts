import { UserComponent } from './user/user.component';
import { RealtiesComponent } from './realties/realties.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from "./home/home.component";
import { Routes } from '@angular/router';
import { RealtyComponent } from './realty/realty.component';
import { BillsComponent } from './bills/bills.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'realties',
        component: RealtiesComponent
    },
    {
        path: 'realty',
        component: RealtyComponent
    },
    {
        path: 'bills',
        component: BillsComponent
    },
    {
        path: 'bills',
        component: BillsComponent
    },
    {
        path: 'bills',
        component: BillsComponent
    },
    {
        path: 'bills',
        component: BillsComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
