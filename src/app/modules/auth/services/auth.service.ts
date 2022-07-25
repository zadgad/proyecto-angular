import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {LoginResponse} from '../interfaces/loginResponse';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<LoginResponse> {
    return this._http.post<LoginResponse>('/reqres/login', {
      email: email,
      password: password
    });
  }
}
