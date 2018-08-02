import { Injectable } from '@angular/core';
import { Donor } from '../auth/donor-signup/donor';
import { Donation } from '../donor-dashboard/donor-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DonorStateServiceService {

  constructor() { }
  donor: Donor;
}
