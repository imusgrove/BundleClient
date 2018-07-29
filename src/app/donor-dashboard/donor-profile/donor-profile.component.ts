import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      donor_fname: ['', Validators.required],
      donor_email: ['', Validators.required],
      donor_lname: ['', Validators.required],
      donor_username: ['', Validators.required],
      donor_password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
