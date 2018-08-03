import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DonorAuthService } from '../../donorAuth/donorAuth.service';
import { AuthGuard } from '../authGuard/auth.guard';
import { DonorStateServiceService } from '../../services/donor-state-service.service';



@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent implements OnInit {

    donor_username: string;
    donor_password: string;

  constructor(private donorAuthService: DonorAuthService, public router: Router) {}

  ngOnInit() {}

  onSubmit() {
      var loginInfo = { donor: {
          donor_username: this.donor_username,
          donor_password: this.donor_password
      }}
      this.donorAuthService.login(loginInfo);
      this.router.navigate(["/donordashboard"]);
  }
}
  