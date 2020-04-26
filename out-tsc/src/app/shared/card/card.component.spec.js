import { async, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('CardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });
    it('should create', () => {
        /*     fixture.detectChanges();
         */ expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=card.component.spec.js.map