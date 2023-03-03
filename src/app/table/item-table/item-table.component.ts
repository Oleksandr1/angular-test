import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../../item/item.service';
import { Item } from '../../types/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemTableComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  isSearchResult: boolean;
  tableHeader: string[];
  private _subscription: Subscription;
  private _isSearchResult: Subscription;
  constructor(private itemService: ItemService) {
    this.tableHeader = ['id', 'int', 'float', 'color', 'child'];
    this._subscription = Subscription.EMPTY;
    this._isSearchResult = Subscription.EMPTY;
    this.isSearchResult = false;
  }

  getItemsFromWW(): void {
    this._subscription = this.itemService.getItems().subscribe({
      next: (i) => {
        this.items.push(i);
      },
    });
    this._isSearchResult = this.itemService.isSearchResult().subscribe({
      next: (i) => {
        if (i) {
          this.items = [];
        }
      },
    });
  }

  ngOnInit(): void {
    this.getItemsFromWW();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this._isSearchResult.unsubscribe();
  }
}
