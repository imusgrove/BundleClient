import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './app/auth/auth.component';
import { DonorLoginComponent } from './app/auth/donor-login/donor-login.component';
import { UserSignupComponent } from './app/auth/user-signup/user-signup.component';
import { DonorSignupComponent } from './app/auth/donor-signup/donor-signup.component';
import { AppModule } from './app/app.module';
import { AuthRoutingModule } from './app/auth/auth-routing/auth-routing.module';

const routes: Routes = [  
  {path: '', redirectTo: 'userlogin', pathMatch: 'full'},
  {path: 'donorlogin', component: DonorLoginComponent},
  {path: 'usersignup', component: UserSignupComponent},
  {path: 'donorsignup', component: DonorSignupComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
