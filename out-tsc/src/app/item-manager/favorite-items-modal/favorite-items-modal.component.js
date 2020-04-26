import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FavoriteItemsModalComponent = class FavoriteItemsModalComponent {
    /*   @Output() clickClose = new EventEmitter();
     */
    constructor() {
        this.clickClose = new EventEmitter();
        this.clickItem = new EventEmitter();
        this.timeout = null;
    }
    ngOnInit() {
        this.itemsShown = this.items;
    }
    onClose() {
        this.clickClose.emit();
    }
    onDeleteFavItem(deleteFav) {
        this.clickItem.emit(deleteFav);
        this.items = this.items.filter(item => item !== deleteFav);
        this.itemsShown = this.items;
    }
    onTextSearch(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.filterItems(event.target.value);
        }, 250);
    }
    filterItems(text) {
        if (text !== '') {
            this.itemsShown = this.items.filter(item => item.title.toUpperCase().includes(text.toUpperCase()));
        }
        else {
            this.itemsShown = this.items;
        }
    }
    getText() {
        if (this.items.length === 0) {
            return 'NO HAY FAVORITOS';
        }
        if (this.itemsShown.length === 0) {
            return 'NO SE ENCUENTRAN ELEMENTOS CON EL FILTRO ESTE';
        }
    }
};
tslib_1.__decorate([
    Input()
], FavoriteItemsModalComponent.prototype, "items", void 0);
tslib_1.__decorate([
    Output()
], FavoriteItemsModalComponent.prototype, "clickClose", void 0);
tslib_1.__decorate([
    Output()
], FavoriteItemsModalComponent.prototype, "clickItem", void 0);
FavoriteItemsModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-favorite-items-modal',
        templateUrl: './favorite-items-modal.component.html',
        styleUrls: ['./favorite-items-modal.component.scss']
    })
], FavoriteItemsModalComponent);
export { FavoriteItemsModalComponent };
//# sourceMappingURL=favorite-items-modal.component.js.map