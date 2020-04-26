import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
let ItemManagerComponent = class ItemManagerComponent {
    constructor(itemService, router, route, pagination, sort, filter) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.pagination = pagination;
        this.sort = sort;
        this.filter = filter;
        this.isLoading$ = new BehaviorSubject(false);
        this.headers = ['image', 'title', 'description', 'price', 'email'];
        this.openFavoriteModal = false;
        this.maxItemsToShow = 5;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.getItems();
    }
    getItems() {
        this.isLoading$.next(true);
        this.itemService
            .getItems()
            .pipe(finalize(() => this.isLoading$.next(false)))
            .subscribe({
            next: (response) => {
                this.items = response;
                this.initItems();
                this.updatePages();
                this.getSortFromParams();
                this.errorMsg = null;
            },
            error: (err) => {
                debugger;
                this.errorMsg = 'Ha ocorrido un error, por favor vuelva a intentarlo';
            }
        });
    }
    initItems() {
        const filters = this.getFiltersFromParams();
        if (filters) {
            this.onUpdateFilters(filters);
        }
        else {
            this.filteredItems = this.items;
        }
    }
    getFiltersFromParams() {
        if (!this.route.snapshot.queryParams.filter) {
            return null;
        }
        this.filters = JSON.parse(this.route.snapshot.queryParams.filter);
        if (this.filters && this.filters.length) {
            return this.filters;
        }
    }
    getSortFromParams() {
        this.keySelected = this.route.snapshot.queryParams.keySelected;
        this.direction = this.route.snapshot.queryParams.direction;
        if (this.keySelected && this.direction) {
            this.orderby({ keySelected: this.keySelected, direction: this.direction });
        }
    }
    onUpdateFilters(filters) {
        if (filters.length) {
            this.filteredItems = this.filter.getFilteredDate(this.items, filters);
            this.setUrlFilters(JSON.stringify(filters));
        }
        else {
            this.filteredItems = this.items;
            this.setUrlFilters(null);
        }
        this.updatePages();
    }
    setUrlFilters(filter) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { filter },
            queryParamsHandling: 'merge',
        });
    }
    onSortChanged(sort) {
        this.orderby(sort);
    }
    onToggleFav(item) {
        const itemClicked = this.items.find((i) => i === item);
        itemClicked.fav = !itemClicked.fav;
    }
    onShowFavoriteModal(open) {
        this.openFavoriteModal = open;
    }
    getFavoritesAmount() {
        return this.items.filter(items => items.fav).length;
    }
    updatePages() {
        this.setPages();
    }
    setPages() {
        this.itemsPage = this.pagination.getItemsbyPage(this.filteredItems, this.maxItemsToShow);
        this.pages = Object.keys(this.itemsPage).length;
    }
    onChangePage(page) {
        this.currentPage = page;
    }
    orderby(sort) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: sort,
            queryParamsHandling: 'merge',
        });
        this.filteredItems = this.sort.orderBy(this.filteredItems, sort);
        this.setPages();
    }
    getFavoriteItems() {
        return this.items.filter(item => item.fav);
    }
};
ItemManagerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-manager',
        templateUrl: './item-manager.component.html',
        styleUrls: ['./item-manager.component.scss']
    })
], ItemManagerComponent);
export { ItemManagerComponent };
//# sourceMappingURL=item-manager.component.js.map