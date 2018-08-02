import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Donor} from "./donor-profile";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {APIURL} from '../../../environments/environment.prod'


@Injectable()
export class DonorProfileService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'currentUser'
    })
  };
  baseUrl: string = 'http://localhost:3000/donor';
  donor: Donor
  getDonors() {
    return this.http.get<Donor[]>(this.baseUrl);
  }

  getDonorById(id: number): Observable<Donor>{
    return this.http.get<Donor>(`${APIURL}/donation/getdonor/` + id, this.httpOptions);
  }

  updateDonor(id: number): Observable<Donor> {
    return this.http.put<Donor>(`${APIURL}/donation/editdonor/` + id, this.httpOptions)
  }
  deleteDonor(id: number) {
    return this.http.delete(`${APIURL}/donation/editdonor`, this.httpOptions);
  }
}
