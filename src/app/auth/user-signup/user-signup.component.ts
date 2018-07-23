import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  
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
