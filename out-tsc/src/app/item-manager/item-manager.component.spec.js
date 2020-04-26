import { ItemService } from './shared/services/item.service';
import { Router } from '@angular/router';
import { async, TestBed } from '@angular/core/testing';
import { ItemManagerComponent } from './item-manager.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
describe('ItemManagerComponent', () => {
    let component;
    let fixture;
    let router;
    let itemService;
    /*   const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
     */
    beforeEach(async(() => {
        const spyItemService = jasmine.createSpyObj('ItemService', ['getItems']);
        TestBed.configureTestingModule({
            declarations: [ItemManagerComponent],
            imports: [RouterTestingModule.withRoutes([])],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ItemService, useValue: spyItemService },
            ]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ItemManagerComponent);
        router = TestBed.get(Router);
        itemService = TestBed.get(ItemService);
        component = fixture.componentInstance;
    });
    it('should create', () => {
        itemService.getItems.and.returnValue(of([]));
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
    it('should set errorMsg when request fail', () => {
        itemService.getItems.and.returnValue(throwError(''));
        fixture.detectChanges();
        expect(component.errorMsg).toBeTruthy('Ha ocorrido un error, por favor vuelva a intentarlo');
    });
});
//# sourceMappingURL=item-manager.component.spec.js.map