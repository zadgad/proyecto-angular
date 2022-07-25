import {Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  public upperCaseString: string;
  public lowerCaseString: string;
  public titleCaseString: string;
  public sliceString: string;
  public sliceArray: number[];
  public numberValue: number;
  public fechaHoy: Date;
  public objetoPrueba: {
    nombre: string;
    id: number;
    fechaNac: Date;
  };

  public prueba: string;

  constructor() {
    this.upperCaseString = 'este es un texto escrito en minusculas';
    this.lowerCaseString = 'ESTE ES UN TEXTO ESCRITO EN MAYUSCULAS';
    this.titleCaseString = 'juan pablo amonzabEL';
    this.sliceString = '0123456789';
    this.sliceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.numberValue = 3.1416;
    this.fechaHoy = new Date();
    this.objetoPrueba = {
      nombre: 'Lucas Martinez',
      id: 789,
      fechaNac: new Date()
    };

    this.prueba = 'Este es un texto de prueba';
  }
}
