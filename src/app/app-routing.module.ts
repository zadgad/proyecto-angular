import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoggeadoGuard} from './modules/auth/guards/loggeado.guard';
import {EpisodesComponent} from './modules/episodes/episodes.component';
import {LocationsComponent} from './modules/locations/locations.component';
import {PipesComponent} from './modules/pipes/pipes.component';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./modules/characters/characters.module').then(m => m.CharactersModule),
    canActivate: [LoggeadoGuard]
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./modules/busqueda/busqueda.module').then(m => m.BusquedaModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '**',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggeadoGuard]
})
export class AppRoutingModule {}
