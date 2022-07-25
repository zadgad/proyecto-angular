import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeHolaMundo'
})
export class HolaMundoPipe implements PipeTransform {
  public transform(value: string, mostrarMsg: boolean = true, upperCase: boolean = false): string {
    let res;
    if (mostrarMsg) {
      res = value + 'Hola Mundo';
    } else {
      res = value;
    }

    if (upperCase) {
      res = res.toUpperCase();
    }

    return res;
  }
}
