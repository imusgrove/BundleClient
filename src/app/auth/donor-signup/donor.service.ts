import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../../environments/environment.prod'

import { Donor } from './donor';

@Injectable({
   providedIn: 'root'
})
export class DonorService {
    url = APIURL


  constructor(private http: HttpClient ) { }
    getAll() {
    return this.http.get<Donor[]>(`/donors`);
    }

    getById(id: number) {
        return this.http.get(`/donor/${id}`);
    }

    register(donor: Donor) {
        return this.http.post(`https://tdm-bundleapi.herokuapp.com/donor/createdonor`, donor).subscribe(info => {
            let data = Object.values(info);
            localStorage.setItem("token", data[2]);
            localStorage.setItem("username", data[0].donor_username);
            localStorage.setItem("id", data[0].id);
            console.log(data)
        });
    }

    update(donor: Donor) {
        return this.http.put(`/donor/${donor.id}`, donor);
    }

    delete(id: number) {
        return this.http.delete(`/donor/${id}`);
    }
}
