import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient} from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../../environments/environment.prod'
>>>>>>> 61405bfd358ef7c461a45e965528f329ba3de664

import { Donor } from './donor';

@Injectable({
   providedIn: 'root'
})
export class DonorService {
    url = APIURL


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
