import { async, TestBed } from '@angular/core/testing';
import { SortItemsComponent } from './sort-items.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('SortItemsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SortItemsComponent],
            schemas: [NO_ERRORS_SCHEMA]
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
//# sourceMappingURL=sort-items.component.spec.js.map