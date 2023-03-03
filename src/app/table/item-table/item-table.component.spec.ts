import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableComponent } from './item-table.component';

describe('ItemTableComponent', () => {
  let component: ItemTableComponent;
  let fixture: ComponentFixture<ItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTableComponent ],
      providers: [  { provide: 'TIMER', useValue: 1000 },
        { provide: 'ARR_SIZE', useValue: 100 },]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    component.ngOnInit()
    expect(component).toBeTruthy();
  });
});
