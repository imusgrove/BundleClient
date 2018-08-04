import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Donor } from './donation';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Donation, CustomDonor } from './donor-dashboard.component';

// import { HttpModule } from '@angular/http'
@Injectable()
export class DonorDashboardService { 

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'currentUser'
    })
  };

  //get all donations by donor id
  getDonations(): Observable<CustomDonor[]> {
    return this.http.get<CustomDonor[]>(`https://tdm-bundleapi.herokuapp.com/donation/`, this.httpOptions);
  }

  createDonation (donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`https://tdm-bundleapi.herokuapp.com/donation/createdonation`, donation,this.httpOptions)
      // .pipe(
      //   catchError(this.handleError('createDonation', donation))
      // );
  }

  //update donation
  updateDonation(donation: CustomDonor): Observable<CustomDonor> {
    return this.http.put<CustomDonor>(`https://tdm-bundleapi.herokuapp.com/donation/editdonation`, donation, this.httpOptions)
  }

  deleteDonation(id:number): Observable<any> {
    return this.http.delete(`https://tdm-bundleapi.herokuapp.com/donation/deletedonation/${id}`, this.httpOptions);
  }
}