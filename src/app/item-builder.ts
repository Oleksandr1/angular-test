import { Item } from './types/item';
import { Decimal } from 'decimal.js';
import { ItemChild } from './types/item-child';

export class ItemBuilder {
  private _id: number;
  constructor() {
    this._id = 1;
  }

  generateItem(): Item {
    const id = this._id.toString();
    this._id += 1;
    const integer = Math.floor(Math.random() * 100000);
    const float = Decimal.random(18); //.random(18).toString()

    const childId = this._id.toString();
    this._id += 1;
    const child: ItemChild = { id: childId, color: this.generateColor() };

    return new Item(
      id,
      integer,
      float.toString(),
      this.generateColor(),
      child
    );
  }
  private generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
