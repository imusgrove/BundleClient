import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Donor } from './donor';
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

  constructor(private http: HttpClient,) {}

  getDonations() {
    return this.http.get<Donor>(this.donorUrl);
  }
  getDonationById(id: number) {
    return this.http.get<Donor>(this.donorUrl + '/' + id);
  }
  createDonation(donor: Donor[]) {
    return this.http.post(this.donorUrl + 'createdonation/' ,donor);
  }
  updateDonation(donor: Donor){
    return this.http.put(this.donorUrl + '/' + donor.id, donor)
  }
  deleteDonation(id: number) {
    return this.http.delete(this.donorUrl + '/' + id);
  }

//   /** GET heroes from the server */
//   getDonations (): Observable<Donor[]> {
//     return this.http.get<Donor[]>(this.donorUrl)
//       .pipe(
//         catchError(this.handleError('getDonations', []))
//       );
//   }
// //////// Save methods //////////

//   /** POST: add a new hero to the database */
//   addDonation (donor: Donor): Observable<Donor> {
//     return this.http.post<Donor>(this.donorUrl, donor, httpOptions)
//       .pipe(
//         catchError(this.handleError('addDonation', donor))
//       );
//   }

//   /** DELETE: delete the hero from the server */
//   deleteDonation (id: number): Observable<{}> {
//     const url = `${this.donorUrl}/${id}`; // DELETE api/heroes/42
//     return this.http.delete(url, httpOptions)
//       .pipe(
//         catchError(this.handleError('deleteDonation'))
//       );
//   }

//   /** PUT: update the hero on the server. Returns the updated hero upon success. */
//   updateDonation (donor: Donor): Observable<Donor> {
//     httpOptions.headers =
//       httpOptions.headers.set('Authorization', 'my-new-auth-token');

//     return this.http.put<Donor>(this.donorUrl, donor, httpOptions)
//       .pipe(
//         catchError(this.handleError('updateDonation', donor))
//       );
//       }
 }
      


  
  

  