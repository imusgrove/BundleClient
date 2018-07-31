import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { UserLoginComponent } from '../user-login/user-login.component';
// import { UserSignupComponent } from '../user-signup/user-signup.component';
import { DonorLoginComponent } from '../donor-login/donor-login.component';
import { DonorSignupComponent } from '../donor-signup/donor-signup.component'


const routes: Routes = [
  // { path: 'userlogin', component: UserLoginComponent},
  // { path: 'usersignup', component: UserSignupComponent},
  { path: 'donorsignup', component: DonorSignupComponent},
  { path: 'donorlogin', component: DonorLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
