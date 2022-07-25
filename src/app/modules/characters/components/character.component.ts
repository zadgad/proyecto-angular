import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map} from 'rxjs';

import {Character} from '../interfaces/getCharactersResponse';
import {CharactersService} from '../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  public personaje?: Character;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _servicio: CharactersService
  ) {
    this.personaje = undefined;
    this._router.params.pipe(map<Params, number>(valor => Number(valor['id']))).subscribe(valor => {
      if (!Number.isNaN(valor) && valor > 0) {
        // this._servicio.getCharacter(valor).subscribe(
        //   personaje => {
        //     this.personaje = personaje;
        //   },
        //   (error: HttpErrorResponse) => {
        //     console.log(error.error.error);
        //     this._route.navigate(['/characters']);
        //   }
        // );
        this._servicio.getCharacter(valor).subscribe({
          next: (personaje: Character) => {
            this.personaje = personaje;
          },
          error: () => {
            // console.log(error.error.error);
            this._route.navigate(['/characters']);
          }
        });
      } else {
        this._route.navigate(['/characters']);
      }
    });
  }
}
