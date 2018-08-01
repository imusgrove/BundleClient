import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Donor } from './donor';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { DonorDashboardComponent, Donation } from './donor-dashboard.component';
import {APIURL} from '../../environments/environment.prod';

// import { HttpModule } from '@angular/http'


@Injectable()
export class DonorDashboardService { 

  constructor(private http: HttpClient) {}
  // donorUrl = 'http://localhost:3000/donation/createdonation';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'currentUser'
    })
  };
  getDonations() {
    return this.http.get<Donor>(`${APIURL}/donation/`);
  }
  getDonationById(id: number) {
    return this.http.get<Donor>(`${APIURL}/donation/${id}`, this.httpOptions)  ;
  }
  // createDonation(donor: Donor[]) {
  //   return this.http.post(this.donorUrl + '/createdonation' ,donor);
  // }
  // createDonation (donor: Donor): Observable<any> {
  //       return this.http.post<Donor>(this.donorUrl, donor, this.httpOptions)
  //         // .pipe( 
  //         //   // tap((donor:Donor) => this.log(`added donor w/ id=${donor.id}`)),
  //         //   catchError(this.handleError<Donor>('createDonation'))
  //         // );
  //     }
  createDonation (donation: Donor): Observable<Donation> {
    return this.http.post<Donation>(`{APIURL}/donation/createdonation`,donation, this.httpOptions)
      // .pipe(
      //   catchError(this.handleError('createDonation', donation))
      // );
  }
  updateDonation(donation: Donor): Observable<Donation> {
    return this.http.put<Donation>(`{APIURL}/donation/updatedonation`, donation.id , this.httpOptions)
  }
  deleteDonation(donation: Donor):  Observable<Donation> {
    return this.http.delete<Donation>(`{APIURL}/donation/deletedonation`, this.httpOptions);
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
      


  
  

  