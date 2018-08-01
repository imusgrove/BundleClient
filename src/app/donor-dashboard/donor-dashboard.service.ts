import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Donor } from './donation';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { DonorDashboardComponent, Donations } from './donor-dashboard.component';

// import { HttpModule } from '@angular/http'


@Injectable()
export class DonorDashboardService { 

  constructor(private http: HttpClient) {}
  donorUrl = 'http://localhost:3000/donation/createdonation';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'currentUser'
    })
  };
  getDonations() {
    return this.http.get<Donor>(this.donorUrl);
  }
  getDonationById(id: number) {
    return this.http.get<Donor>(this.donorUrl + '/' + id)  ;
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
  createDonation (donation: Donor): Observable<Donations> {
    return this.http.post<Donations>(this.donorUrl, donation, this.httpOptions)
      // .pipe(
      //   catchError(this.handleError('createDonation', donation))
      // );
  }
//////// Save methods //////////

  
  createDonation (donation: Donations): Observable<Donations> {
    return this.http.post<Donations>(this.donorUrl, donation, httpOptions)
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

  
  updateDonation (donation: Donations): Observable<Donations> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Donation>(this.donorUrl, donation, httpOptions)
      .pipe(
        catchError(this.handleError('updateDonation', donation))
      );
      }
 }
      


  
  

  