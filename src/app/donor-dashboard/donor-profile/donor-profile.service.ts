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
  
  donor: Donor
  
  getDonors() {
    return this.http.get<Donor[]>(`${APIURL}/donor/`);
  }

  getDonorById(id: number): Observable<Donor>{
    return this.http.get<Donor>(`${APIURL}/donor/getdonor/` + id, this.httpOptions);
  }

  updateDonor(id, newInfo) {
    return this.http.put(`${APIURL}/donor/editdonor/${id}`, newInfo)
  }

  deleteDonor(id: number) {
    return this.http.delete(`${APIURL}/donor/deletedonor/` + id, this.httpOptions);
  }
}
