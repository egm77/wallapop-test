import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let ItemMenuComponent = class ItemMenuComponent {
    constructor() {
        this.filtersChanged = new EventEmitter();
        this.openFavoriteItems = new EventEmitter();
        this.sortChanged = new EventEmitter();
        this.favorites = 0;
        this.filters = ['title', 'description', 'price', 'email'];
    }
    ngOnInit() {
    }
    onOpenFavorites() {
        this.openFavoriteItems.emit();
    }
    onApplyFilters(filters) {
        this.filtersChanged.emit(filters);
    }
    onSortChanged(sort) {
        this.sortChanged.emit(sort);
    }
};
tslib_1.__decorate([
    Output()
], ItemMenuComponent.prototype, "filtersChanged", void 0);
tslib_1.__decorate([
    Output()
], ItemMenuComponent.prototype, "openFavoriteItems", void 0);
tslib_1.__decorate([
    Output()
], ItemMenuComponent.prototype, "sortChanged", void 0);
tslib_1.__decorate([
    Input()
], ItemMenuComponent.prototype, "favorites", void 0);
tslib_1.__decorate([
    Input()
], ItemMenuComponent.prototype, "keySelected", void 0);
tslib_1.__decorate([
    Input()
], ItemMenuComponent.prototype, "direction", void 0);
tslib_1.__decorate([
    Input()
], ItemMenuComponent.prototype, "filtersApplied", void 0);
ItemMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-menu',
        templateUrl: './item-menu.component.html',
        styleUrls: ['./item-menu.component.scss']
    })
], ItemMenuComponent);
export { ItemMenuComponent };
//# sourceMappingURL=item-menu.component.js.map