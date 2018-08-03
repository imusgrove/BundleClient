import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Donor } from './donation';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Donation, CustomDonor } from './donor-dashboard.component';
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

  //get all donations by donor id
  getDonations(): Observable<CustomDonor[]> {
    return this.http.get<CustomDonor[]>(`${APIURL}/donation/`, this.httpOptions);
  }


  // getDonationById(id: number) {
  //   return this.http.get<Donor>(`${APIURL}/donation/${id}`, this.httpOptions)  ;
  // }
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
  createDonation (donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`${APIURL}/donation/createdonation`, donation,this.httpOptions)
      // .pipe(
      //   catchError(this.handleError('createDonation', donation))
      // );
  }
  updateDonation(donation: Donor): Observable<Donation> {
    return this.http.put<Donation>(`${APIURL}/donation/updatedonation`, donation, this.httpOptions)
  }

  deleteDonation(id) {
    return this.http.delete(`${APIURL}/donation/deletedonation/${id}`);
  }
}