import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeOtro'
})
export class OtroPipe implements PipeTransform {
  public transform(value: number | number[]): number | number[] {
    if (typeof value === 'number') {
      return value * 2;
    } else {
      return value.map<number>(numero => numero * 2);
    }
  }
}
