import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControlName, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import{DonorProfileService} from './donor-profile.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {
  profileGroup: FormGroup;
  loading = false;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private donorProfileservice: DonorProfileService, private FormControlName: FormControlName) { }

  ngOnInit() {
    
    // this.profileGroup = this.formBuilder.group({
    //   donor_fname: [''],
    //   donor_email: [''],
    //   donor_lname: [''],
    //   donor_username: [''],
    //   donor_password: [''],
    //   donor_address: [''],
    //   donor_city: [''],
    //   donor_state: [''],
    //   donor_zipCode: [''],
    //   donor_phoneNumber: [''],

    // });
    this.profileGroup = new FormGroup({
      donor_fname:FormControlName['donor_fname']
   });
    
  }
// convenience getter for easy access to form fields
get f() { return this.profileGroup.controls; }


onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.profileGroup.invalid) {
      return;
  }

  this.loading = true;
  this.donorProfileservice.updateDonor(this.profileGroup.value)
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
