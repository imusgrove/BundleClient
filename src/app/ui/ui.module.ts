import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatButtonToggleModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatRadioModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTooltipModule, MatListModule, MatOptionModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
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
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    // LayoutModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule
  ],
  declarations: [NavbarComponent, FooterComponent, LayoutComponent, AboutComponent, ContactComponent],

  exports: [NavbarComponent, FooterComponent, LayoutComponent, AboutComponent, ContactComponent]
})

export class UiModule { }
