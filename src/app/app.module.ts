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
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  MatSelectModule, 
} from "@angular/material";


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
    UserProfileComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
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
    MatSelectModule
  ],
  exports: [
    FormsModule,
    BrowserModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }