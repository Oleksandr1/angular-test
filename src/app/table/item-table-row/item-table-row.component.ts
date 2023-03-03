import { Component, Input } from '@angular/core';
import { Item } from '../../types/item';

@Component({
  selector: 'tr[app-item-table-row]',
  templateUrl: './item-table-row.component.html',
  styleUrls: ['./item-table-row.component.scss'],
})
export class ItemTableRowComponent {
  @Input() item!: Item;
}
