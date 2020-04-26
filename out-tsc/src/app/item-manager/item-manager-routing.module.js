import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemManagerComponent } from './item-manager.component';
const routes = [{ path: '', component: ItemManagerComponent }];
let ItemManagerRoutingModule = class ItemManagerRoutingModule {
};
ItemManagerRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ItemManagerRoutingModule);
export { ItemManagerRoutingModule };
//# sourceMappingURL=item-manager-routing.module.js.map