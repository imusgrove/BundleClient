import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DonorLoginComponent } from './auth/donor-login/donor-login.component';
import { DonorSignupComponent } from './auth/donor-signup/donor-signup.component';
// import { UserLoginComponent } from './auth/user-login/user-login.component';
// import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { DonorProfileComponent } from './donor-dashboard/donor-profile/donor-profile.component';
// import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule, FormControlName } from '@angular/forms';
import { 
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule, 
  MatListModule, 
  MatOptionModule,
  MatSelectModule,
} from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { DonorAuthService } from './donorAuth/donorAuth.service'
import { DonorService } from './auth/donor-signup/donor.service'
import { DialogDataExampleDialog } from './donor-dashboard/donor-dashboard.component'
import { AuthGuard } from './auth/authGuard/auth.guard';
// import { UserService } from './auth/user-signup/user.service';
import { DonorProfileService } from './donor-dashboard/donor-profile/donor-profile.service';
import { DonorDashboardService } from './donor-dashboard/donor-dashboard.service';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DonorLoginComponent,
    DonorSignupComponent,
    // UserLoginComponent,
    // UserSignupComponent,
    DonorDashboardComponent,
    UserDashboardComponent,
    DonorProfileComponent,
    // UserProfileComponent,
    DialogDataExampleDialog,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // LayoutModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    UiModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    BrowserModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,

  ],
  providers: [AuthService, DonorAuthService, DonorService, 
    AuthGuard, DonorProfileService, DonorDashboardService, DonorAuthService ],
  bootstrap: [AppComponent],
  entryComponents: [ DialogDataExampleDialog ]

})
export class AppModule { }