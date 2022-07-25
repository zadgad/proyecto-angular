import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/shared/shared.module';

import {CharactersComponent} from './characters.component';
import {CharactersRoutingModule} from './characters-routing.module';
import {CharacterComponent} from './components/character.component';
import {CharactersService} from './services/characters.service';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, HttpClientModule, CharactersRoutingModule, SharedModule],
  providers: [CharactersService]
})
export class CharactersModule {}
