import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageSelected = 1;
  @Input() pagesAmount;
  @Output() pageChanged = new EventEmitter();

  arrayPages: []

  constructor() { }

  ngOnInit() {
    this.arrayPages = _.range(1, (this.pagesAmount + 1));
  }

  onChangePage(page: number) {
    this.pageChanged.emit(page);
  }

}
