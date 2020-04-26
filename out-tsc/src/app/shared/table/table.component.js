import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let TableComponent = class TableComponent {
    constructor() {
        this.maxItemsToShow = 5;
        this.itemsPage = {};
        this.number = 1;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.pages = Math.ceil(this.totalItems.length / this.maxItemsToShow);
        this.setPages();
    }
    setPages() {
        this.itemsPage = {};
        this.totalItems.forEach((element, index) => {
            const pageNumber = Math.floor(index / this.maxItemsToShow) + 1;
            if (this.itemsPage[pageNumber]) {
                this.itemsPage[pageNumber].push(element);
            }
            else {
                this.itemsPage[pageNumber] = [];
                this.itemsPage[pageNumber].push(element);
            }
        });
    }
    onChangePage(page) {
        this.number = page;
    }
    onOrderChange(order) {
        if (order === this.order) {
            this.direction = this.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            this.order = order;
            this.direction = 'ASC';
        }
        this.orderby();
    }
    orderby() {
        if (this.direction === 'ASC') {
            this.totalItems.sort((a, b) => (a[this.order].toUpperCase() > b[this.order].toUpperCase()) ? 1 : -1);
        }
        else {
            this.totalItems.sort((a, b) => (a[this.order].toUpperCase() < b[this.order].toUpperCase()) ? 1 : -1);
        }
        this.setPages();
    }
};
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "headers", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "totalItems", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "maxItemsToShow", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "order", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "direction", void 0);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.scss']
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map