import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let SortItemsComponent = class SortItemsComponent {
    constructor() {
        this.sortChanged = new EventEmitter();
    }
    ngOnInit() {
        if (this.keySelected == null) {
            this.keySelected = '';
        }
    }
    ngOnChanges() {
    }
    onChangeKey() {
        this.direction = 'ASC';
        this.sortChanged.emit({ keySelected: this.keySelected, direction: this.direction });
    }
    onToggleDirection() {
        this.direction = this.direction === 'ASC' ? 'DESC' : 'ASC';
        this.sortChanged.emit({ keySelected: this.keySelected, direction: this.direction });
    }
};
tslib_1.__decorate([
    Input()
], SortItemsComponent.prototype, "keys", void 0);
tslib_1.__decorate([
    Input()
], SortItemsComponent.prototype, "direction", void 0);
tslib_1.__decorate([
    Output()
], SortItemsComponent.prototype, "sortChanged", void 0);
tslib_1.__decorate([
    Input()
], SortItemsComponent.prototype, "keySelected", void 0);
SortItemsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sort-items',
        templateUrl: './sort-items.component.html',
        styleUrls: ['./sort-items.component.scss']
    })
], SortItemsComponent);
export { SortItemsComponent };
//# sourceMappingURL=sort-items.component.js.map