import { Pipe, PipeTransform } from '@angular/core';
import th from 'date-fns/locale/th'
import { format } from 'date-fns';

@Pipe({
  name: 'dateCustom'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, formatDate: string, locale: Locale = th): unknown { // tipe data, fomat data, bahasa apa
    return format(value,formatDate, { locale }) 
  }

}
