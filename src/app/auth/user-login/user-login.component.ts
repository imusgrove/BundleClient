import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userForm: FormGroup;
  //Form State
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    }
    get username() {
      return this.userForm.get('username')
    }
    get password() {
      return this.userForm.get('password')
    }
    // async submitHandler(){
    //   this.loading = true;

    //   const formValue = this.employerForm.value;
    //   try{
    //     await this.backend.collection('').add(formValue);
    //     this.success = true;
    //   }catch(err){
    //     console.log(err)
    //   }
    //   this.loading = false;
    // }
  }
