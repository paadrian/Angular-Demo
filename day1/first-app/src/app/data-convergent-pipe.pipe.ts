import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataConvergentPipe',
  standalone: false
})
export class DataConvergentPipePipe implements PipeTransform {

  transform(value: number, datatype: string='KB'): string {
    return (value / 1024).toFixed(2) + ' ' + datatype;
  }

}
