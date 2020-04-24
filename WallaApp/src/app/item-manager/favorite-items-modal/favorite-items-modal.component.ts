import { getTestBed } from '@angular/core/testing';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-items-modal',
  templateUrl: './favorite-items-modal.component.html',
  styleUrls: ['./favorite-items-modal.component.scss']
})
export class FavoriteItemsModalComponent implements OnInit {
  @Input() items;
  @Output() clickClose = new EventEmitter();
  @Output() clickItem = new EventEmitter();
  itemsShown
  /*   @Output() clickClose = new EventEmitter();
   */
  constructor() { }
  timeout: any = null;

  ngOnInit() {
    this.itemsShown = this.items;
    console.log('teeeest', this.itemsShown)
  }

  onClose() {
    this.clickClose.emit();
  }

  onDeleteFavItem(deleteFav) {
    this.clickItem.emit(deleteFav)
    this.items = this.items.filter(
      item => item !== deleteFav
    )
    this.itemsShown = this.items;

  }

  onTextSearch(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.filterItems(event.target.value);
    }, 250);
  }

  filterItems(text: string) {
    if (text !== '') {
      this.itemsShown = this.items.filter(item => item.title.toUpperCase().includes(text.toUpperCase()));
    } else {
      this.itemsShown = this.items;
    }
  }

  getText() {
    console.log('entra')
    if (this.items.length === 0) return 'NO HAY FAVORITOS'
    if (this.itemsShown.length === 0) return 'NO SE ENCUENTRAN ELEMENTOS CON EL FILTRO ESTE'
  }

}
