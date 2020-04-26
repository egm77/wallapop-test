import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { every } from 'rxjs/operators';
import { sortDirecction } from 'src/app/item-manager/shared/services/sort.service';

@Component({
  selector: 'app-sort-items',
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.scss']
})
export class SortItemsComponent implements OnInit {

  @Input() keySelected;
  @Input() keys
  @Input() direction: sortDirecction;
  @Output() sortChanged = new EventEmitter();


  constructor() { }

  ngOnInit() {
    if (this.keySelected == null) {
      this.keySelected = '';
    }
  }

  onChangeKey() {
    this.direction = sortDirecction.ASC;
    this.sortChanged.emit({keySelected: this.keySelected, direction: this.direction });
  }

  onToggleDirection() {
    this.direction = this.direction === sortDirecction.ASC ? sortDirecction.DESC : sortDirecction.ASC;
    this.sortChanged.emit({keySelected: this.keySelected, direction: this.direction });
  }
}
