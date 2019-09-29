import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Pageable } from './pageable';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.styl']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageable: Pageable

  @Output()
  clickPage: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n)
  }

  onClickLink(i: number) {
    this.clickPage.emit(i)
  }

}
