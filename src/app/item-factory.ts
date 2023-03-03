import { Item } from './types/item';
import { Observable, timer } from 'rxjs';
import { ItemBuilder } from './item-builder';
import { Configuration } from './types/configuration';
import { map, take } from 'rxjs/operators';

export class Factory {
  private _timer: number;
  private _size: number;

  private builder: ItemBuilder;

  constructor(timerMs: number, size: number) {
    this._timer = timerMs;
    this._size = size;
    this.builder = new ItemBuilder();
  }

  setConfiguration(config: Configuration) {
    this._timer = config.timer;
    this._size = config.size;
  }
  generateItems(): Observable<Item> {
    return timer(0, this._timer).pipe(
      take(this._size),
      map<number, Item>(() => this.builder.generateItem())
    );
  }
}
