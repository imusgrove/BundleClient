import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Donor } from './donor';
import { APIURL } from '../../../environments/environment.prod'

@Injectable({
   providedIn: 'root'
})
export class DonorService {
    url = 'http://localhost:3000'


  constructor(private http: HttpClient ) { }

  //nodemailer code
  addNew(usercreds) {
    const emailid = 'email=' + usercreds.email;            
    this.http.post('http://localhost:8888/sendemail', emailid).subscribe((data) => {
        if (data.json().sucess) {
          console.log('mail sent');
          }
     });
  }

    getAll() {
    return this.http.get<Donor[]>(`/donors`);
    }

    getById(id: number) {
        return this.http.get(`/donor/` + id);
    }

    register(donor: Donor) {
        return this.http.post(`${APIURL}/donor/createdonor`, donor);
    }

    update(donor: Donor) {
        return this.http.put(`/donor/` + donor.id, donor);
    }

    delete(id: number) {
        return this.http.delete(`/donor/` + id);
    }
}
