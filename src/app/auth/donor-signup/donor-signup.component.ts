import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DonorService } from './donor.service'


@Component({
  selector: 'app-donor-signup',
  templateUrl: './donor-signup.component.html',
  styleUrls: ['./donor-signup.component.css']
})
export class DonorSignupComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private donorService: DonorService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      donor_fname: ['', Validators.required],
      donor_email: ['', Validators.required],
      donor_lname: ['', Validators.required],
      donor_username: ['', Validators.required],
      donor_password: ['', [Validators.required, Validators.minLength(6)]],
      donor_address: ['', Validators.required],
      donor_city: ['', Validators.required],
      donor_state: ['', Validators.required],
      donor_zipCode: ['', Validators.required],
      donor_phoneNumber: ['', Validators.required],

    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.donorService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    console.log(data);
                    this.router.navigate(['/donorlogin']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
