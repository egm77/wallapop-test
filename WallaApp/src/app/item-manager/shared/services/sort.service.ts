import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})

export interface Sort {
  keySelected: string;
  direction: string;
}
export class SortService {

  constructor() { }

  orderBy(items: Item[], sort: Sort): Item[] {
    if (sort.direction === 'ASC') {
      return items.sort((a, b) => (a[sort.keySelected].toUpperCase() > b[sort.keySelected].toUpperCase()) ? 1 : -1);
    }
    return items.sort((a, b) => (a[sort.keySelected].toUpperCase() < b[sort.keySelected].toUpperCase()) ? 1 : -1);
  }
}
