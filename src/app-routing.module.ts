import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './app/auth/auth.component';
import { DonorLoginComponent } from './app/auth/donor-login/donor-login.component';
import { UserLoginComponent } from './app/auth/user-login/user-login.component';
import { UserSignupComponent } from './app/auth/user-signup/user-signup.component';
import { DonorSignupComponent } from './app/auth/donor-signup/donor-signup.component';
import { AppModule } from './app/app.module';
import { AuthRoutingModule } from './app/auth/auth-routing/auth-routing.module';
import { DonorDashboardComponent } from './app/donor-dashboard/donor-dashboard.component'
import { UserDashboardComponent } from './app/user-dashboard/user-dashboard.component';

const routes: Routes = [  
  {path: '', redirectTo: 'userlogin', pathMatch: 'full'},
  {path: 'userlogin', component: UserLoginComponent},
  {path: 'donorlogin', component: DonorLoginComponent},
  {path: 'usersignup', component: UserSignupComponent},
  {path: 'donorsignup', component: DonorSignupComponent},   
  {path: 'donordashboard', component: DonorDashboardComponent},
  {path: 'userdashboard', component: UserDashboardComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
