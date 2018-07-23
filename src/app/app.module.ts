import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DonorLoginComponent } from './auth/donor-login/donor-login.component';
import { DonorSignupComponent } from './auth/donor-signup/donor-signup.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { DonorProfileComponent } from './donor-dashboard/donor-profile/donor-profile.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DonorLoginComponent,
    DonorSignupComponent,
    UserLoginComponent,
    UserSignupComponent,
    DonorDashboardComponent,
    UserDashboardComponent,
    DonorProfileComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
