import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ListCardsComponent = class ListCardsComponent {
    constructor() {
        this.clickFav = new EventEmitter();
    }
    ngOnInit() {
    }
    onFavClicked(item) {
        this.clickFav.emit(item);
    }
};
tslib_1.__decorate([
    Input()
], ListCardsComponent.prototype, "items", void 0);
tslib_1.__decorate([
    Output()
], ListCardsComponent.prototype, "clickFav", void 0);
ListCardsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-cards',
        templateUrl: './list-cards.component.html',
        styleUrls: ['./list-cards.component.scss']
    })
], ListCardsComponent);
export { ListCardsComponent };
//# sourceMappingURL=list-cards.component.js.map