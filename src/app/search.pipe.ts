import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, term: any): any 
  {
    if (term === undefined) return value;

    return value.filter(function(data) {
        return data.customerName.toLowerCase().includes(term.toLowerCase());
    })
  }

}
