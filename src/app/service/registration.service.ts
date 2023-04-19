import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = 'http://localhost:4000/register';

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!mytoken);
  }
  registeruser(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          console.log("@response after register ",response)
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }
}
