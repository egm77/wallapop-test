import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItemsComponent } from './sort-items.component';

describe('SortItemsComponent', () => {
  let component: SortItemsComponent;
  let fixture: ComponentFixture<SortItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
