import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableRowComponent } from './item-table-row.component';

describe('ItemTableRowComponent', () => {
  let component: ItemTableRowComponent;
  let fixture: ComponentFixture<ItemTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTableRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
