import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Donor } from './donor';

@Injectable({
   providedIn: 'root'
})
export class DonorService {
<<<<<<< HEAD
    url = 'https://tdm-bundleapi.herokuapp.com/'
=======
    url = APIURL

>>>>>>> develop

  constructor(private http: HttpClient ) { }
    getAll() {
    return this.http.get<Donor[]>(`/donors`);
    }

    getById(id: number) {
        return this.http.get(`/donor/` + id);
    }

    register(donor: Donor) {
        return this.http.post(`https://tdm-bundleapi.herokuapp.com/donor/createdonor`, donor);
    }

    update(donor: Donor) {
        return this.http.put(`/donor/` + donor.id, donor);
    }

    delete(id: number) {
        return this.http.delete(`/donor/` + id);
    }
}
