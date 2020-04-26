import { async, TestBed } from '@angular/core/testing';
import { FiltersComponent } from './filters.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('FiltersComponent', () => {
    let component;
    let fixture;
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
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filters.component.spec.js.map