import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cube',
    standalone: false
})
export class CubePipe implements PipeTransform {;
  transform(num: number): number {
    return num * num * num;
  }
}