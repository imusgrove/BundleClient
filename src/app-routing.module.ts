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
<<<<<<< HEAD
import { DonorDashboardComponent } from './app/donor-dashboard/donor-dashboard.component';
import { AboutComponent } from './app/ui/about/about.component';
import {ContactComponent} from './app/ui/contact/contact.component';
=======
import { DonorDashboardComponent } from './app/donor-dashboard/donor-dashboard.component'
import { UserDashboardComponent } from './app/user-dashboard/user-dashboard.component';
>>>>>>> e86f2e8242898cca428d39e93dc9e2d08b0ca683

const routes: Routes = [  
  {path: '', redirectTo: 'userlogin', pathMatch: 'full'},
  {path: 'userlogin', component: UserLoginComponent},
  {path: 'donorlogin', component: DonorLoginComponent},
  {path: 'usersignup', component: UserSignupComponent},
  {path: 'donorsignup', component: DonorSignupComponent},   
  {path: 'donordashboard', component: DonorDashboardComponent},
<<<<<<< HEAD
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent} 
=======
  {path: 'userdashboard', component: UserDashboardComponent}, 
>>>>>>> e86f2e8242898cca428d39e93dc9e2d08b0ca683
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
