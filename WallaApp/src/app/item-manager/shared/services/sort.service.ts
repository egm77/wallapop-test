import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

export const enum sortDirecction {
  ASC = 'ASC',
  DESC = 'DESC'
}
export interface Sort {
  keySelected: string;
  direction: sortDirecction;
}
@Injectable({
  providedIn: 'root'
})

export class SortService {

  constructor() { }

  orderBy(items: Item[], sort: Sort): Item[] {
    if (sort.direction === sortDirecction.ASC) {
      return items.sort((a, b) => (a[sort.keySelected].toUpperCase() > b[sort.keySelected].toUpperCase()) ? 1 : -1);
    }
    return items.sort((a, b) => (a[sort.keySelected].toUpperCase() < b[sort.keySelected].toUpperCase()) ? 1 : -1);
  }
}
