import { Component, OnInit } from '@angular/core';
import { DonorAuthService } from '../../donorAuth/donorAuth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public donorAuthService: DonorAuthService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.donorAuthService.logout();
    console.log("logging out")
    this.router.navigate(["/donorlogin"]);
  }

}
