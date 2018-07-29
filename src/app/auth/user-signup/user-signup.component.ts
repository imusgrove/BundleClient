import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from './user.service';
import { UserSignup } from './user-signup';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        // private alertService: AlertService
      ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

  //  convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    this.router.navigate(['/userlogin']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
