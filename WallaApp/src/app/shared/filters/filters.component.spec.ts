import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    component.filterAvailables = [];
    component.filters = [];
  });

  it('should create empty filter', () => {
    const filters = ['title', 'description', 'price', 'email'];
    component.filters = filters;
    fixture.detectChanges();
    expect(component.filterAvailables).toEqual(filters);
  });

  it('should create empty filter', () => {
    component.filtersApplied = null;
    fixture.detectChanges();
    expect(component.filtersApplied).toEqual([]);
  });

  it('should add new filter', () => {
    component.onAddFilter();
    expect(component.currentFilter).toEqual({});
  });

  it('should delete new filter', () => {
    component.onDeleteCurrentFilter();
    expect(component.currentFilter).toBeNull();
  });

  it('should apply filter', () => {
    spyOn(component.filtersUpdate, 'emit')
    const filterSelected = { text: 'Pola', type: 'title' };
    component.filterAvailables = ['title', 'description', 'price', 'email']
    component.filtersApplied = [];
    component.onApplyFilter(filterSelected);
    expect(component.filtersApplied).toContain(filterSelected);
    expect(component.filtersUpdate.emit).toHaveBeenCalled();
    expect(component.filtersUpdate.emit).toHaveBeenCalledWith(component.filtersApplied);
    expect(component.filterAvailables).not.toContain(filterSelected.type);

  });

  it('should delete applied filter', () => {
    spyOn(component.filtersUpdate, 'emit');
    const filtersApplied = [{ text: 'Pola', type: 'title' }];
    component.filterAvailables = ['description', 'price', 'email'];
    component.filtersApplied = filtersApplied;
    const index = 0;
    component.onDeleteAppliedFilter(index);
    expect(component.filterAvailables).toContain('title');
    expect(component.filtersUpdate.emit).toHaveBeenCalled();
    expect(component.filtersUpdate.emit).toHaveBeenCalledWith(component.filtersApplied);
    expect(component.filtersApplied).not.toContain(component.filtersApplied[index]);
  });


  it('should click inside', () => {
    const currentFilter = {}
    component.currentFilter = currentFilter;
    fixture.detectChanges();
    component.filterSelector.nativeElement.click();
    expect(component.currentFilter).toEqual(currentFilter);
  });
});
