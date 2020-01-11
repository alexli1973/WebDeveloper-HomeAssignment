import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const hours = Math.floor(value / 60);
    const minutes = Math.round((value / 60 - hours) * 60);
    return `${hours}h ${minutes}min`;
  }

}
