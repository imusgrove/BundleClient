import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../auth.service'
import { UserSignup } from './user-signup';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  
  myForm: FormGroup;
  userSignUp: UserSignup

  constructor(public fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: '',
      Username: '',
      Email: '',
      Password: '',
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
  // onSignup(form: NgForm){
  //   const username = form.value.username;
  //   const password = form.value.password;
  //   const email = form.value.email;
  // }
  onSubmit() {
    // this.authService.addUser(this.userSignUp)
    // .subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
  }
}
