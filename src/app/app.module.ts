import {CommonModule, registerLocaleData} from '@angular/common';
import frances from '@angular/common/locales/fr';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from 'src/shared/shared.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './modules/auth/auth.module';
import {CharactersModule} from './modules/characters/characters.module';
import {PipesComponent} from './modules/pipes/pipes.component';

registerLocaleData(frances);

@NgModule({
  declarations: [AppComponent, PipesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AuthModule,
    CharactersModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [AppComponent],
  // AGREGAR UNA CONFIGURACION DE LENGUAJE PARA EL MODULO
  // providers: [
  //   {
  //     provide: LOCALE_ID,
  //     useValue: 'fr'
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}
