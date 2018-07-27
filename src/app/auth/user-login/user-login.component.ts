import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,) 
       {}

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.userForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  // this.alertService.error(error);
                  this.loading = false;
              });
  }

  // userForm: FormGroup;
  // //Form State
  // loading = false;
  // success = false;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.userForm = this.fb.group({
  //     username: ['', [
  //       Validators.required
  //     ]],
  //     password: ['', [
  //       Validators.required
  //     ]]
  //   });
  //   }
  //   get username() {
  //     return this.userForm.get('username')
  //   }
  //   get password() {
  //     return this.userForm.get('password')
  //   }
  //   async submitHandler(){
  //     this.loading = true;

  //     const formValue = this.employerForm.value;
  //     try{
  //       await this.backend.collection('').add(formValue);
  //       this.success = true;
  //     }catch(err){
  //       console.log(err)
  //     }
  //     this.loading = false;
  //   }
   }
