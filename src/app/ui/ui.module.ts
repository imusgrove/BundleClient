import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, FooterComponent, LayoutComponent]
})
export class UiModule { }
