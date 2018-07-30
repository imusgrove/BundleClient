import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Donor} from "./donor-profile"


@Injectable()
export class DonorProfileService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/donor';

  getDonors() {
    return this.http.get<Donor[]>(this.baseUrl);
  }

  getDonorById(id: number) {
    return this.http.get<Donor>(this.baseUrl + '/' + id);
  }

  createDonor(donor: Donor) {
    return this.http.post(this.baseUrl, donor);
  }

  updateDonor(donor: Donor) {
    return this.http.put(this.baseUrl + '/editdonor' + donor.id, donor);
  }

  deleteDonor(id: number) {
    return this.http.delete(this.baseUrl + '/delete' + id);
  }
}
