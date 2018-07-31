import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { UserSignupComponent } from './user-signup/user-signup.component'
// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { UserSignup } from './user-signup/user-signup'
import { map } from 'rxjs/operators';
import {UserLoginComponent} from './user-login/user-login.component';
import { AppRoutingModule } from '../../app-routing.module';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: AppRoutingModule) { }

    url = 'http://localhost:3000';

    login(username: string, password: string) {
        return this.http.post<any>(`${this.url}/user/login`, { username: username, password: password })
        .subscribe((res) => {
            localStorage.setItem("token", res.sessionToken)
        },
            err => console.log(err)
        );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Content-Type': 'application/json',
//     'Authorization': 'my-auth-token'
  
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
  // private authUrl = 'https://localhost3000/user/api/createuser';
  // authUrl = 'https://localhost3000/user/api/createuser'
  // private  handleError: HandleError;

  // constructor(
  //   private http: HttpClient,
    //  httpErrorHandler: HttpErrorHandler 
  // ) {
    //   thishandleError = httpErrorHandler.createHandleError('AuthService');
    // }
  // userSignUp(userSignUp: any[]) {
  //   return this.http.post('http://localhost3000/user/api/createuser', userSignUp)
  // }
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }
  /** GET heroes from the server */
  // getHeroes (): Observable<UserSignup[]> {
  //   return this.http.get<UserSignup[]>(this.authUrl)
  //     .pipe(
  //       catchError(this.handleError('getAuth', []))
  //     );
  // }

 

  /** POST: add a new hero to the database */
  // addUser (userSignUp: UserSignup): Observable<UserSignup> {
  //   return this.http.post<UserSignup>(this.authUrl, userSignUp, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addUser', userSignUp))
  //     );
  // }

  /** DELETE: delete the hero from the server */
  // deleteHero (id: number): Observable<{}> {
  //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deleteHero'))
  //     );
  // }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
//   updateHero (hero: Hero): Observable<Hero> {
//     httpOptions.headers =
//       httpOptions.headers.set('Authorization', 'my-new-auth-token');

//     return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('updateHero', hero))
//       );
//   }
// }


    
//  } 
 