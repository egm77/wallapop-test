import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters;
  @Output() filtersUpdate = new EventEmitter();

  filterAvailables

  @Input() filtersApplied = [];
  @ViewChild('filterSelector', { static: false }) filterSelector: ElementRef;

  currentFilter

  constructor() { }

  ngOnInit() {
    this.filterAvailables = this.filters;
    if (!this.filtersApplied) {
      this.filtersApplied = []
    }
    console.log('filtesapllied', this.filtersApplied);
  }

  onAddFilter() {
    this.currentFilter = {}
  }

  onApplyFilter(filter) {
    this.filtersApplied.push(filter);
    this.currentFilter = null;
    this.filterAvailables = this.filterAvailables.filter(
      filterAvailable => filterAvailable !== filter.type
    )
    this.filtersUpdate.emit(this.filtersApplied);
  }

  onDeleteCurrentFilter() {
    this.currentFilter = null;
  }

  onDeleteAppliedFilter(index: number) {
    this.filterAvailables.push(this.filtersApplied[index].type);
    this.filtersApplied.splice(index, 1);
    this.filtersUpdate.emit(this.filtersApplied);
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: ElementRef) {
    console.log('click', this.filterSelector)
    if (
      this.filterSelector
    ) {
      const clickedTypeInside = this.filterSelector.nativeElement.contains(targetElement);
      if (!clickedTypeInside) {
        this.onDeleteCurrentFilter();
      }

    }
  }
}
