import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class BusquedaService {
  constructor(private _http: HttpClient) {}

  public buscar(params: HttpParams): Observable<any> {
    return this._http.get('/api/character?', {
      params
    });
  }
}
