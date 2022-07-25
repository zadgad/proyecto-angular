import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class LoggeadoGuard implements CanActivate {
  constructor(private _router: Router) {}

  public canActivate(): boolean {
    if (localStorage.getItem('RickAndMortyToken')) {
      return true;
    }
    this._router.navigateByUrl('/auth/login');
    return false;
  }
}
