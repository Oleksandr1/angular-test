import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableRowComponent } from './item-table-row.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Item} from "../../types/item";

describe('ItemTableRowComponent', () => {
  let component: ItemTableRowComponent;
  let fixture: ComponentFixture<ItemTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTableRowComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTableRowComponent);
    component = fixture.componentInstance;
    component.item = new Item('1',1,'03.03','#ACC',{id:'2', color:"#000"})
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
