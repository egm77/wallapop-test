import { TestBed } from '@angular/core/testing';
import { SortService } from './sort.service';
describe('SortService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should order by title ASC', () => {
        const service = TestBed.get(SortService);
        const items = [
            {
                title: 'A',
                description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.',
                price: '740',
                email: 'iphonemail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png'
            },
            {
                title: 'C',
                description: 'Vendo bolso de piel marrón grande de la marca Hoss.',
                price: '250',
                email: 'bagmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/bag.png'
            },
            {
                title: 'B',
                description: 'Cámara clásica de fotos Polaroid, modelo 635.',
                price: '50',
                email: 'cameramail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/camera.png'
            },
            {
                title: 'D',
                description: 'Reloj de la marca Daniel Wellington usado sólo un mes.',
                price: '100',
                email: 'watchmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/watch.png'
            }
        ];
        const expected = [
            {
                title: 'A',
                description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.',
                price: '740',
                email: 'iphonemail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png'
            },
            {
                title: 'B',
                description: 'Cámara clásica de fotos Polaroid, modelo 635.',
                price: '50',
                email: 'cameramail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/camera.png'
            },
            {
                title: 'C',
                description: 'Vendo bolso de piel marrón grande de la marca Hoss.',
                price: '250',
                email: 'bagmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/bag.png'
            },
            {
                title: 'D',
                description: 'Reloj de la marca Daniel Wellington usado sólo un mes.',
                price: '100',
                email: 'watchmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/watch.png'
            }
        ];
        const order = {
            keySelected: 'title',
            direction: "ASC" /* ASC */
        };
        const result = service.orderBy(items, order);
        expect(result).toEqual(expected);
    });
    it('should order by title Desc', () => {
        const service = TestBed.get(SortService);
        const items = [
            {
                title: 'A',
                description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.',
                price: '740',
                email: 'iphonemail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png'
            },
            {
                title: 'C',
                description: 'Vendo bolso de piel marrón grande de la marca Hoss.',
                price: '250',
                email: 'bagmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/bag.png'
            },
            {
                title: 'B',
                description: 'Cámara clásica de fotos Polaroid, modelo 635.',
                price: '50',
                email: 'cameramail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/camera.png'
            },
            {
                title: 'D',
                description: 'Reloj de la marca Daniel Wellington usado sólo un mes.',
                price: '100',
                email: 'watchmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/watch.png'
            }
        ];
        const expected = [
            {
                title: 'D',
                description: 'Reloj de la marca Daniel Wellington usado sólo un mes.',
                price: '100',
                email: 'watchmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/watch.png'
            },
            {
                title: 'C',
                description: 'Vendo bolso de piel marrón grande de la marca Hoss.',
                price: '250',
                email: 'bagmail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/bag.png'
            },
            {
                title: 'B',
                description: 'Cámara clásica de fotos Polaroid, modelo 635.',
                price: '50',
                email: 'cameramail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/camera.png'
            },
            {
                title: 'A',
                description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.',
                price: '740',
                email: 'iphonemail@wallapop.com',
                image: 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png'
            }
        ];
        const order = {
            keySelected: 'title',
            direction: "DESC" /* DESC */
        };
        const result = service.orderBy(items, order);
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=sort.service.spec.js.map