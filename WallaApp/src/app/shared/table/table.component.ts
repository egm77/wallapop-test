import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() headers;
  @Input() totalItems;
  @Input() maxItemsToShow = 5;
  @Input() order;
  @Input() direction;

  pages
  itemsPage = {}
  number = 1;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.pages = Math.ceil(this.totalItems.length / this.maxItemsToShow);
    this.setPages();
  }

  setPages() {
    this.itemsPage = {}
    this.totalItems.forEach((element, index) => {
      const pageNumber = Math.floor(index / this.maxItemsToShow) + 1;
      if ( this.itemsPage[pageNumber]) {
        this.itemsPage[pageNumber].push(element);
      } else {
        this.itemsPage[pageNumber] = []
        this.itemsPage[pageNumber].push(element);
      }
    });
  }

  onChangePage(page: number) {
    this.number = page;
  }

  onOrderChange(order) {
    if(order === this.order) {
      this.direction = this.direction === 'ASC' ? 'DESC' : 'ASC';

    } else {
      this.order = order;
      this.direction = 'ASC';
    }

    this.orderby();
  }

  orderby() {
    if (this.direction === 'ASC') {
      this.totalItems.sort((a, b) => (a[this.order].toUpperCase() > b[this.order].toUpperCase()) ? 1 : -1)
    } else {
      this.totalItems.sort((a, b) => (a[this.order].toUpperCase() < b[this.order].toUpperCase()) ? 1 : -1)
    }
    this.setPages();
  }



}
