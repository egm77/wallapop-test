import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let ItemService = class ItemService {
    constructor(http) {
        this.http = http;
    }
    getItems() {
        return this.http
            .get(`${environment.baseUrl}/items.json`)
            .pipe(map(response => response.items));
    }
};
ItemService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ItemService);
export { ItemService };
//# sourceMappingURL=item.service.js.map