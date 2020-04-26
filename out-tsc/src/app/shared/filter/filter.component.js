import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let FilterComponent = class FilterComponent {
    constructor() {
        this.filterSelected = new EventEmitter();
        this.filterDeleted = new EventEmitter();
        this.filterForm = new FormGroup({
            text: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
        });
    }
    ngOnInit() {
    }
    onFilterSelected() {
        this.filterSelected.emit(this.filterForm.value);
    }
    onFilterDeleted() {
        this.filterDeleted.emit();
    }
};
tslib_1.__decorate([
    Input()
], FilterComponent.prototype, "filtersAvailables", void 0);
tslib_1.__decorate([
    Output()
], FilterComponent.prototype, "filterSelected", void 0);
tslib_1.__decorate([
    Output()
], FilterComponent.prototype, "filterDeleted", void 0);
FilterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-filter',
        templateUrl: './filter.component.html',
        styleUrls: ['./filter.component.scss']
    })
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map