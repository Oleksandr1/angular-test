import { Component, Input } from '@angular/core';
import { ItemChild } from '../../types/item-child';

@Component({
  selector: 'app-item-table-row-child',
  templateUrl: './item-table-row-child.component.html',
  styleUrls: ['./item-table-row-child.component.scss'],
})
export class ItemTableRowChildComponent {
  @Input() item!: ItemChild;
}
