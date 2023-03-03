import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [  { provide: 'TIMER', useValue: 1000 },
        { provide: 'ARR_SIZE', useValue: 100 },]

    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
