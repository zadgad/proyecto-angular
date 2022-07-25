import {HttpParams} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BusquedaService} from './services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public resultados: any;

  constructor(private _route: ActivatedRoute, private _servicio: BusquedaService) {}

  public ngOnInit(): void {
    this._route.queryParams.subscribe(valor => {
      // const terminos = this._construirTerminos(valor);
      this._servicio.buscar(new HttpParams({fromObject: valor})).subscribe(respuesta => {
        this.resultados = respuesta;
      });
    });
  }

  private _construirTerminos(params: Params): string {
    const entries: [string, any][] = Object.entries(params);

    let resultado = '';

    entries.forEach((valor, i) => {
      if (i > 0) {
        resultado += '&';
      }
      resultado += valor[0] + '=' + valor[1];
    });

    return resultado;
  }
}
