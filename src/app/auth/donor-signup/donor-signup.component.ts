import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-donor-signup',
  templateUrl: './donor-signup.component.html',
  styleUrls: ['./donor-signup.component.css']
})
export class DonorSignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      Username: '',
      Email: '',
      Password: '',
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
