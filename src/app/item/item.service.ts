import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Configuration } from '../types/configuration';
import { Message } from '../types/message';
import { MessageType } from '../types/messageType';
import { Decimal } from 'decimal.js';
import { ItemChild } from '../types/item-child';
import { Item } from '../types/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements OnDestroy {
  private _worker: Worker;
  private _items$: Subject<Item>;

  private _isSearchResult$: Subject<boolean>;
  private _message: Message;
  private _configuration: Configuration;
  constructor(
    @Inject('TIMER') timerMs: number,
    @Inject('ARR_SIZE') arrSize: number
  ) {
    this._items$ = new Subject<Item>();
    this._isSearchResult$ = new Subject<boolean>();
    this._worker = new Worker(new URL('../item.worker', import.meta.url));
    this._configuration = { timer: timerMs, size: arrSize };
    this._message = { type: MessageType.Start, message: this._configuration };
    this._worker.onmessage = ({ data }) => {
      this._items$.next(this.itemFromObject(JSON.parse(data)));
    };
    this.send();
  }

  getItems(): Observable<Item> {
    return this._items$;
  }
  isSearchResult() {
    return this._isSearchResult$;
  }
  itemFromObject(item: any): Item {
    return new Item(
      item._id,
      item._int,
      new Decimal(item._float),
      item._color,
      item._child as ItemChild
    );
  }
  send() {
    if (this._message.type === MessageType.Search) {
      this._isSearchResult$.next(true);
    } else {
      this._isSearchResult$.next(false);
    }
    this._worker.postMessage(this._message);
  }
  setConfiguration(config: Configuration) {
    this._message = { type: MessageType.Update, message: config };
    this.send();
  }
  search(arr: string[]) {
    this._message = { type: MessageType.Search, message: arr };
    this.send();
  }

  stopFrequency() {
    this._message = { type: MessageType.Stop };
    this.send();
  }

  ngOnDestroy(): void {
    this._worker.terminate();
  }
}
