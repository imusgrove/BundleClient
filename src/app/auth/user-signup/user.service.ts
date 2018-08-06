import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user'
import { APIURL } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    url = APIURL

  constructor(private http: HttpClient ) { }



  getAll() {
    return this.http.get<User[]>(`/users`);
}

getById(id: number) {
    return this.http.get(`/users/` + id);
}

register(user: User) {
    return this.http.post(`${APIURL}/user/createuser`, user);
}

update(user: User) {
    return this.http.put(`/users/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`/users/` + id);
}

}
