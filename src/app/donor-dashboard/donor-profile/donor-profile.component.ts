import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorProfileService } from './donor-profile.service';
import { first } from 'rxjs/operators';
import { DonorStateServiceService } from '../../services/donor-state-service.service';
import { Donor } from '../../auth/donor-signup/donor';
import { DonorAuthService } from '../../donorAuth/donorAuth.service';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {
  
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phonenumber: string;
  array: Object[] = [];
  
  constructor(public donorAuthService: DonorAuthService, private router: Router) { }
  

  ngOnInit() {

    this.getDonorInfo();
    console.log(localStorage)
  }

  getDonorInfo() {
    this.donorAuthService.getDonor(localStorage.id).subscribe(data => {
      let userInfo = Object.values(data);
      console.log(userInfo)
      this.firstname = userInfo[1],
      this.lastname = userInfo[2],
      this.username = userInfo[3],
      this.email = userInfo[5]
    })
  }

// onSubmit() {
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.profileForm.invalid) {
//       return;
//   }

//   this.loading = true;
//   this.donorProfileservice.updateDonor(this.profileForm.value)
//       .pipe(first())
//       .subscribe(
//           data => {
//               // this.alertService.success('Registration successful', true);
//               console.log(data);
//               this.router.navigate(['/donorlogin']);
//           },
//           error => {
//               // this.alertService.error(error);
//               this.loading = false;
//               console.log(error);
//           });     
//   }

  onDelete() {
    this.donorAuthService.deleteDonor(localStorage.id).subscribe(data => {
      this.array.push(data);
    })
    console.log("User deleted");
    this.router.navigate(["/donorlogin"]);
    localStorage.clear();
  }
}
