import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Donation } from './donation';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { DonorDashboardComponent } from './donor-dashboard.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DonorDashboardService { 
  donorUrl = 'https://localhost3000/donations';  // URL to web api

  constructor(private http: HttpClient, private handleError: HandleError) {}

  // getDonations() {
  //   return this.http.get<Donor>(this.donorUrl);
  // }
  // getDonationById(id: number) {
  //   return this.http.get<Donor>(this.donorUrl + '/' + id);
  // }
  // createDonation(donor: Donor[]) {
  //   return this.http.post(this.donorUrl + 'createdonation/' ,donor);
  // }
  // updateDonation(donor: Donor){
  //   return this.http.put(this.donorUrl + '/' + donor.id, donor)
  // }
  // deleteDonation(id: number) {
  //   return this.http.delete(this.donorUrl + '/' + id);
  // }

  
  getDonations (): Observable<Donation[]> {
    return this.http.get<Donation[]>(this.donorUrl)
      .pipe(
        catchError(this.handleError('getDonations', []))
      );
  }

  getDonationByUserId (userId): Observable<Donation[]> {
    return this.http.get<Donation[]>(this.donorUrl)
    .pipe(
      catchError(this.handleError('getDonationByUserId', []))
    )
  }
//////// Save methods //////////

  
  createDonation (donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(this.donorUrl, donation, httpOptions)
      .pipe(
        catchError(this.handleError('createDonation', donation))
      );
  }

  
  deleteDonation (id: number): Observable<{}> {
    const url = `${this.donorUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteDonation'))
      );
  }

  
  updateDonation (donation: Donation): Observable<Donation> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Donation>(this.donorUrl, donation, httpOptions)
      .pipe(
        catchError(this.handleError('updateDonation', donation))
      );
      }
 }
      


  
  

  