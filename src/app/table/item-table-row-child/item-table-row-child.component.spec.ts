import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableRowChildComponent } from './item-table-row-child.component';

describe('ItemTableRowChildComponent', () => {
  let component: ItemTableRowChildComponent;
  let fixture: ComponentFixture<ItemTableRowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTableRowChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTableRowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
