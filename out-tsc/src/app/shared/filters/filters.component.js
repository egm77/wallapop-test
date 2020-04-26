import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
let FiltersComponent = class FiltersComponent {
    constructor() {
        this.filtersUpdate = new EventEmitter();
        this.filtersApplied = [];
    }
    ngOnInit() {
        this.filterAvailables = this.filters;
        if (!this.filtersApplied) {
            this.filtersApplied = [];
        }
    }
    onAddFilter() {
        this.currentFilter = {};
    }
    onApplyFilter(filter) {
        this.filtersApplied.push(filter);
        this.currentFilter = null;
        this.filterAvailables = this.filterAvailables
            .filter(filterAvailable => filterAvailable !== filter.type);
        this.filtersUpdate.emit(this.filtersApplied);
    }
    onDeleteCurrentFilter() {
        this.currentFilter = null;
    }
    onDeleteAppliedFilter(index) {
        this.filterAvailables.push(this.filtersApplied[index].type);
        this.filtersApplied.splice(index, 1);
        this.filtersUpdate.emit(this.filtersApplied);
    }
    onClick(targetElement) {
        if (this.filterSelector) {
            const clickedTypeInside = this.filterSelector.nativeElement.contains(targetElement);
            if (!clickedTypeInside) {
                this.onDeleteCurrentFilter();
            }
        }
    }
};
tslib_1.__decorate([
    Input()
], FiltersComponent.prototype, "filters", void 0);
tslib_1.__decorate([
    Output()
], FiltersComponent.prototype, "filtersUpdate", void 0);
tslib_1.__decorate([
    Input()
], FiltersComponent.prototype, "filtersApplied", void 0);
tslib_1.__decorate([
    ViewChild('filterSelector', { static: false })
], FiltersComponent.prototype, "filterSelector", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event.target'])
], FiltersComponent.prototype, "onClick", null);
FiltersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-filters',
        templateUrl: './filters.component.html',
        styleUrls: ['./filters.component.scss']
    })
], FiltersComponent);
export { FiltersComponent };
//# sourceMappingURL=filters.component.js.map