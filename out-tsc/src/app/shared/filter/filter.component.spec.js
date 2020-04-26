import { async, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('FilterComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FilterComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filter.component.spec.js.map