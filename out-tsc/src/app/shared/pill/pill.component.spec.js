import { async, TestBed } from '@angular/core/testing';
import { PillComponent } from './pill.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('PillComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PillComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pill.component.spec.js.map