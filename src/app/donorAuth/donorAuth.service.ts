import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { APIURL } from '../../environments/environment.prod'

@Injectable()
export class DonorAuthService {
    url = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  login(donor_username: string, donor_password: string) {
    return this.http.post<any>(`${APIURL}/donor/login`, {donor_username: donor_username, donor_password: donor_password })
    
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
