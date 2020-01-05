import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
  name: 'calDateFormat'
})
export class CalDateFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return ''
    }
    const performDateM = moment(value)
    return performDateM.format("D-MMM-YYYY HH:mm")
  }

}
