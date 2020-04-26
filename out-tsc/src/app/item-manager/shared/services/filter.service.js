import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let FilterService = class FilterService {
    constructor() { }
    isMatch(item, filters) {
        let match = true;
        filters.forEach(filter => {
            if (!item[filter.type].toUpperCase().includes(filter.text.toUpperCase())) {
                match = false;
                return;
            }
        });
        return match;
    }
    getFilteredDate(items, filters) {
        return items.filter(item => this.isMatch(item, filters));
    }
};
FilterService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FilterService);
export { FilterService };
//# sourceMappingURL=filter.service.js.map