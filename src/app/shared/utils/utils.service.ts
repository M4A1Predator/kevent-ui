import { Injectable } from '@angular/core'
import * as moment from 'moment'
import { Observable, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public convertISODateTimeToCalStr(isoFormat: string): string {
    const performDateM = moment(isoFormat)
    return performDateM.format("D-MMM-YYYY")
  }

  public createImageFromBlob(image: Blob): Observable<any> {
    const reader = new FileReader()
    return new Observable(observable => {
      let arrBuf: ArrayBuffer = null
      reader.addEventListener('load', () => {
        arrBuf = reader.result as ArrayBuffer
        observable.next(arrBuf)
      }, false)

      if (image) {
        reader.readAsDataURL(image)
      }
    }).pipe(mergeMap(v => {
      return of(v)
    }))
  }
}
