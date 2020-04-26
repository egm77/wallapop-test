import { async, TestBed } from '@angular/core/testing';
import { ItemMenuComponent } from './item-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('ItemMenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemMenuComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ItemMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=item-menu.component.spec.js.map