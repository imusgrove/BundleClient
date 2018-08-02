import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { APIURL } from '../../environments/environment.prod'
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class DonorAuthService {
    url = 'http://localhost:3000'


  constructor(private http: HttpClient, public router: Router) { }

  login(loginInfo) {
      return this.http.post(`${APIURL}/donor/login`, loginInfo).subscribe(info => {
          let data = Object.values(info);
          localStorage.setItem("token", data[2]);
          localStorage.setItem("username", data[0].donor_username);
          localStorage.setItem("id", data[0].id);
          console.log(data)
      })
  }

  getDonor(id) {
      return this.http.get(`${APIURL}/donor/getdonor/${id}`)
  }

  deleteDonor(id) {
      return this.http.delete(`${APIURL}/donor/deletedonor/${id}`)
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }
}
