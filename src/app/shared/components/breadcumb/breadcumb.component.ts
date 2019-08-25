import { Component, OnInit, Input } from '@angular/core';
import { BreadCumbItem } from './breadcumb-item';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.styl']
})
export class BreadcumbComponent implements OnInit {

  @Input()
  items: BreadCumbItem[] = []

  constructor() { }

  ngOnInit() {
  }

}
