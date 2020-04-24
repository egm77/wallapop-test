import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { every } from 'rxjs/operators';

@Component({
  selector: 'app-sort-items',
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.scss']
})
export class SortItemsComponent implements OnInit, OnChanges{

  @Input() keys
  @Input() direction
  @Output() sortChanged = new EventEmitter();

  @Input() keySelected;

  constructor() { }

  ngOnInit() {
    if (this.keySelected == null) {
      this.keySelected = ''
    }
    console.log('filteers', this.keySelected, this.direction)

  }

  ngOnChanges() {
    console.log('filteers', this.keySelected, this.direction)
  }

  onChangeKey() {
    this.direction = 'ASC';
    this.sortChanged.emit({keySelected: this.keySelected, direction: this.direction })
  }

  onToggleDirection() {
    this.direction = this.direction === 'ASC' ? 'DESC' : 'ASC';
    this.sortChanged.emit({keySelected: this.keySelected, direction: this.direction })
  }





}
