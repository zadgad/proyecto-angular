import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Character, GetCharactersResponse} from '../interfaces/getCharactersResponse';

@Injectable()
export class CharactersService {
  constructor(private _http: HttpClient) {}

  public getCharacters(): Observable<GetCharactersResponse> {
    return this._http.get<GetCharactersResponse>('/api/character');
  }

  public getCharacter(id: number): Observable<Character> {
    return this._http.get<Character>('/api/character/' + id);
  }
}
