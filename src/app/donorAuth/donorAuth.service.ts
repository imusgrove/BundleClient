import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
import { APIURL } from '../../../environments/environments.prod'

@Injectable()
export class DonorAuthService {
    url = APIURL


  constructor(private http: HttpClient, public router: Router) { }

  login(loginInfo) {
      return this.http.post(`https://tdm-bundleapi.herokuapp.com/donor/login`, loginInfo).subscribe(info => {
          let data = Object.values(info);
          localStorage.setItem("token", data[2]);
          localStorage.setItem("username", data[0].donor_username);
          localStorage.setItem("id", data[0].id);
          console.log(data)
      })
  }

  getDonor(id) {
      return this.http.get(`https://tdm-bundleapi.herokuapp.com/donor/getdonor/${id}`)
  }

  updateDonor(id, donorInfo) {
      return this.http.put(`https://tdm-bundleapi.herokuapp.com/donor/editdonor/${id}`, donorInfo)
  }

  deleteDonor(id) {
      return this.http.delete(`https://tdm-bundleapi.herokuapp.com/donor/deletedonor/${id}`)
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }
}
