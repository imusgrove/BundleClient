import { Component } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DonorService} from './auth/donor-signup/donor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Sunshine's Bundles of Joy";
}
