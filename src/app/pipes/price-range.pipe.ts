import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    switch(value) {
      case 0:
        return "€";
      case 1:
        return "€€";
      case 2:
        return "€€€";
      default:
        return "Unknown";
    }
  }
}
