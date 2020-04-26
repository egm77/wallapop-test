import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pageSelected = 1;
        this.pageChanged = new EventEmitter();
    }
    ngOnInit() {
        this.arrayPages = _.range(1, (this.pagesAmount + 1));
    }
    onChangePage(page) {
        this.pageChanged.emit(page);
    }
};
tslib_1.__decorate([
    Input()
], PaginationComponent.prototype, "pageSelected", void 0);
tslib_1.__decorate([
    Input()
], PaginationComponent.prototype, "pagesAmount", void 0);
tslib_1.__decorate([
    Output()
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss']
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map