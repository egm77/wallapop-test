import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PillComponent } from './pill/pill.component';
import { CardComponent } from './card/card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { SortItemsComponent } from './sort-items/sort-items.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    TableComponent, FiltersComponent, FilterComponent, PillComponent, CardComponent, ListCardsComponent, SortItemsComponent, PaginationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TableComponent, FiltersComponent, FilterComponent, PillComponent, ListCardsComponent, SortItemsComponent, PaginationComponent],
})
export class SharedModule { }
