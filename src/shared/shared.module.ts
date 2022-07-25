import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './components/navbar/navbar.component';
import {TarjetaComponent} from './components/tarjeta/tarjeta.component';
import {CambiarFuenteDirective} from './directives/cambiar-fuente.directive';
import {DelayDirective} from './directives/delay.directive';
import {HolaMundoPipe} from './pipes/holaMundo.pipe';
import {OtroPipe} from './pipes/otro.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    HolaMundoPipe,
    OtroPipe,
    TarjetaComponent,
    CambiarFuenteDirective,
    DelayDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatCardModule],
  exports: [
    NavbarComponent,
    TarjetaComponent,
    HolaMundoPipe,
    OtroPipe,
    CambiarFuenteDirective,
    DelayDirective
  ]
})
export class SharedModule {}
