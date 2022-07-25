import {Component, OnInit} from '@angular/core';

// import {map, tap} from 'rxjs';
import {Character, GetCharactersResponse} from './interfaces/getCharactersResponse';
import {CharactersService} from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public personajes: Character[];

  constructor(private _servicio: CharactersService) {
    this.personajes = [];
  }

  public ngOnInit(): void {
    this._servicio
      .getCharacters()
      .pipe
      // tap(contenido => {
      //   console.log(contenido);
      // }),
      // map<GetCharactersResponse, Character[]>(value => {
      //   return value.results;
      // }),
      // tap(contenido => {
      //   console.log(contenido);
      // }),
      // map<Character[], string[]>(value => {
      //   return value.map<string>(personaje => personaje.name);
      // })
      ()
      .subscribe((resultado: GetCharactersResponse) => {
        this.personajes = resultado.results;
      });
  }
}
