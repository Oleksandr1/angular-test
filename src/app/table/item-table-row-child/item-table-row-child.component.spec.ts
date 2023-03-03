import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableRowChildComponent } from './item-table-row-child.component';

describe('ItemTableRowChildComponent', () => {
  let component: ItemTableRowChildComponent;
  let fixture: ComponentFixture<ItemTableRowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTableRowChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTableRowChildComponent);
    component = fixture.componentInstance;
    component.item = { id: '1', color: 'rgb(204, 204, 204)' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  it('check background-color', () => {
    expect(fixture.nativeElement.querySelector('.item-child--colored').style.backgroundColor).toEqual(component.item.color)
  })
});
