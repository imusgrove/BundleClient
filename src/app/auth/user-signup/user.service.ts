import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

    url = 'http://localhost:3000'

  constructor(private http: HttpClient ) { }



  getAll() {
    return this.http.get<User[]>(`/users`);
}

getById(id: number) {
    return this.http.get(`/users/` + id);
}

register(user: User) {
    return this.http.post(`${this.url}/user/createuser`, user);
}

update(user: User) {
    return this.http.put(`/users/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`/users/` + id);
}

}
