import {Component, Input} from '@angular/core';
import {Character} from 'src/app/modules/characters/interfaces/getCharactersResponse';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() public contenido?: Character;
}
