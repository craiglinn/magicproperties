import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { LandlorddashboardComponent } from './components/landlorddashboard/landlorddashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'adminDashboard',
    component: AdmindashboardComponent
  },
  {
    path: 'landlordDashboard',
    component: LandlorddashboardComponent
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
