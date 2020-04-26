import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PaginationService = class PaginationService {
    constructor() { }
    getItemsbyPage(items, itemsPerPage) {
        const itemsByPage = {};
        items.forEach((element, index) => {
            const pageNumber = Math.floor(index / itemsPerPage) + 1;
            if (itemsByPage[pageNumber]) {
                itemsByPage[pageNumber].push(element);
            }
            else {
                itemsByPage[pageNumber] = [];
                itemsByPage[pageNumber].push(element);
            }
        });
        return itemsByPage;
    }
};
PaginationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PaginationService);
export { PaginationService };
//# sourceMappingURL=pagination.service.js.map