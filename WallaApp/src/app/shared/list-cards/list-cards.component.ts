import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {

  @Input() items;
  @Output() clickFav = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  onFavClicked(item) {
    this.clickFav.emit(item);
  }

}
