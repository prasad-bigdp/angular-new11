import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad'
})
export class PrasadPipe implements PipeTransform {
  transform(value: number, val2:number,operation:string): unknown {
    switch (operation)
    {
      case "ADD": return value + val2;
      case "SUB": return value - val2;
      default: return "Enter correct operation"
    }
  }

}
