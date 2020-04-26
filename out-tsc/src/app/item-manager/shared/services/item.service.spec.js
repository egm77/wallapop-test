import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { environment } from 'src/environments/environment';
describe('ItemService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ItemService]
    }));
    it('should be created', () => {
        const service = TestBed.get(ItemService);
        expect(service).toBeTruthy();
    });
    it('should perform login correctly', fakeAsync(inject([ItemService, HttpTestingController], (authService, backend) => {
        const url = `${environment.baseUrl}/items.json`;
        const responseObject = {
            items: [
                {
                    title: 'iPhone 6S Oro',
                    description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.',
                    price: '740',
                    email: 'iphonemail@wallapop.com',
                    image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png'
                },
            ]
        };
        let response = null;
        authService.getItems().subscribe((receivedResponse) => {
            response = receivedResponse;
        }, (error) => { });
        const requestWrapper = backend.expectOne({ url });
        requestWrapper.flush(responseObject);
        tick();
        expect(requestWrapper.request.method).toEqual('GET');
        expect(response).toEqual(responseObject.items);
    })));
});
//# sourceMappingURL=item.service.spec.js.map