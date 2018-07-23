import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent implements OnInit {

  donorForm: FormGroup;
  //Form State
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.donorForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    }
    get username() {
      return this.donorForm.get('username')
    }
    get password() {
      return this.donorForm.get('password')
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

