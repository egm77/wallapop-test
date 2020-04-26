import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
let PillComponent = class PillComponent {
    constructor() {
        this.closeClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onClose() {
        this.closeClick.emit();
    }
};
tslib_1.__decorate([
    Input()
], PillComponent.prototype, "primaryText", void 0);
tslib_1.__decorate([
    Input()
], PillComponent.prototype, "secondaryText", void 0);
tslib_1.__decorate([
    Output()
], PillComponent.prototype, "closeClick", void 0);
PillComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pill',
        templateUrl: './pill.component.html',
        styleUrls: ['./pill.component.scss']
    })
], PillComponent);
export { PillComponent };
//# sourceMappingURL=pill.component.js.map