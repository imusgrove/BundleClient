import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DonorAuthService } from '../../donorAuth/donorAuth.service';
import { AuthGuard } from '../authGuard/auth.guard';



@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent implements OnInit {

  donorForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private donorAuthService: DonorAuthService,
    ) {}

  ngOnInit() {
      this.donorForm = this.formBuilder.group({
          donor_username: ['', Validators.required],
          donor_password: ['', Validators.required]
      });

      // reset login status
      this.donorAuthService.logout();

      // get return url from route parameters or default to '/'
<<<<<<< HEAD
      this.returnUrl = this.route.snapshot.queryParams['/about'] || '/';
=======
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/donordashboard';
>>>>>>> icd
  }

  // convenience getter for easy access to form fields
  get f() { return this.donorForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.donorForm.invalid) {
          return;
      }

      this.loading = true;
      this.donorAuthService.login(this.f.donor_username.value, this.f.donor_password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  // this.alertService.error(error);
                  this.loading = false;
              });
  }
  }

