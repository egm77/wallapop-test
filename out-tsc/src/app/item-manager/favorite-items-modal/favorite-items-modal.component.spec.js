import { async, TestBed } from '@angular/core/testing';
import { FavoriteItemsModalComponent } from './favorite-items-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('FavoriteItemsModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavoriteItemsModalComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FavoriteItemsModalComponent);
        component = fixture.componentInstance;
    });
    it('should create', () => {
        component.items = [];
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favorite-items-modal.component.spec.js.map