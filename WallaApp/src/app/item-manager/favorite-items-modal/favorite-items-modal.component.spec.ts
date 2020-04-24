import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemsModalComponent } from './favorite-items-modal.component';

describe('FavoriteItemsModalComponent', () => {
  let component: FavoriteItemsModalComponent;
  let fixture: ComponentFixture<FavoriteItemsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteItemsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
