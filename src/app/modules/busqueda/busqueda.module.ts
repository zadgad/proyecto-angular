import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {BusquedaComponent} from './busqueda.component';
import {BusquedaRoutingModule} from './busqueda-routing.module';
import {BusquedaService} from './services/busqueda.service';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [CommonModule, BusquedaRoutingModule],
  providers: [BusquedaService]
})
export class BusquedaModule {}
