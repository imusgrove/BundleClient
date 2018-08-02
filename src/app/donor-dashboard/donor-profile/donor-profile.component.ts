import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControlName, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import{DonorProfileService} from './donor-profile.service';
import { first } from 'rxjs/operators';
import { DonorStateServiceService } from '../../services/donor-state-service.service';
import { Donor } from '../../auth/donor-signup/donor';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;
  submitted = false;
  donor: Donor
  
  constructor(private formBuilder: FormBuilder,private router: Router, private donorProfileservice: DonorProfileService, private FormControlName: FormControlName, public donorInfo: DonorStateServiceService) { }
  

  ngOnInit() {
    console.log(this.donorInfo);
    console.log(this.donor);

    this.profileForm = this.formBuilder.group({
      donor_fname: [''],
      donor_lname: [''],
      donor_username: [''],
      donor_email: [''],
      donor_password: [''],
      donor_address: [''],
      donor_city: [''],
      donor_state: [''],
      donor_zipCode: [''],
      donor_phoneNumber: [''],

    });
  //   this.profileForm = new FormGroup({
  //     donor_fname:FormControlName['donor_fname']
  //  });
    
  }
// convenience getter for easy access to form fields
get f() { return this.profileForm.controls; }


onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.profileForm.invalid) {
      return;
  }

  this.loading = true;
  this.donorProfileservice.updateDonor(this.profileForm.value)
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
              console.log(error);
          });
          
  }

  onDelete() {
    this.donorProfileservice.deleteDonor(this.donor.id)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/donorlogin']);
        },
        error => {
          console.log(error);
        }
      )
  }
}
