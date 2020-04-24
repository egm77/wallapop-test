import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Item } from './shared/models/item.model';
import { ItemService } from './shared/services/item.service';
import { PaginationService } from './shared/services/pagination.service';
import { SortService, Sort } from './shared/services/sort.service';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  isLoading$ = new BehaviorSubject(false);
  items: Item[];
  filteredItems: Item[];
  headers = ['image', 'title', 'description', 'price', 'email'];
  favItems: Item[];
  openFavoriteModal = false;
  pages: number;
  maxItemsToShow = 5;
  itemsPage
  currentPage = 1;
  direction
  keySelected
  filters
  errorMsg: string;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private pagination: PaginationService,
    private sort: SortService,
  ) { }


  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.isLoading$.next(true);
    this.itemService
      .getItems()
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe(
        {
          next: (response) => {
            this.items = response;
            this.initItems();
            this.updatePages();
            this.getSortFromParams();
            this.errorMsg = null;
          },
          error: (err: HttpErrorResponse) => {
            this.errorMsg = 'Ha ocorrido un error, por favor vuelva a intentarlo';
          }
        }
      );
  }

  initItems() {
    const filters = this.getFiltersFromParams();

    if (filters) {
      this.onUpdateFilters(filters);
    } else {
      this.filteredItems = this.items;
    }
  }

  getFiltersFromParams(): any {
    if (!this.route.snapshot.queryParams.filter) { return null; }
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
      this.filteredItems = null;
      this.filteredItems = this.items.filter(
        item => this.isMatch(item, filters)
      );
      this.setUrlFilters(JSON.stringify(filters));
    } else {
      this.filteredItems = this.items;
      this.setUrlFilters(null);
    }
    this.updatePages();
  }

  setUrlFilters(filter) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { filter },
        queryParamsHandling: 'merge',
      });
  }

  onSortChanged(sort) {
    this.orderby(sort);
  }

  isMatch(item: Item, filters) {
    let match = true;
    filters.forEach(
      filter => {
        if (!item[filter.type].toUpperCase().includes(filter.text.toUpperCase())) {
          match = false;
          return;
        }
      });
    return match;
  }

  onToggleFav(item: Item) {
    const itemClicked = this.items.find((i) => i === item);
    itemClicked.fav = !itemClicked.fav;
  }

  onShowFavoriteModal(open: boolean): void {
    this.openFavoriteModal = open;
  }

  getFavoritesAmount(): number {
    return this.items.filter(items => items.fav).length;
  }

  updatePages() {
    this.setPages();
  }

  setPages(): void {
    this.itemsPage = this.pagination.getItemsbyPage(this.filteredItems, this.maxItemsToShow);
    this.pages = Object.keys(this.itemsPage).length;
  }

  onChangePage(page: number) {
    this.currentPage = page;
  }


  orderby(sort: Sort) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: sort,
        queryParamsHandling: 'merge',
      });

    this.filteredItems = this.sort.orderBy(this.filteredItems, sort);
    this.setPages();
  }

  getFavoriteItems(): Item[] {
    return this.items.filter(item => item.fav);
  }

}
