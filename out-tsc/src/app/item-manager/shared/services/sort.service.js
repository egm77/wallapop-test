import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let SortService = class SortService {
    constructor() { }
    orderBy(items, sort) {
        if (sort.direction === "ASC" /* ASC */) {
            return items.sort((a, b) => (a[sort.keySelected].toUpperCase() > b[sort.keySelected].toUpperCase()) ? 1 : -1);
        }
        return items.sort((a, b) => (a[sort.keySelected].toUpperCase() < b[sort.keySelected].toUpperCase()) ? 1 : -1);
    }
};
SortService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SortService);
export { SortService };
//# sourceMappingURL=sort.service.js.map