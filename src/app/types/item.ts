import { ItemChild } from './item-child';
import { Decimal } from 'decimal.js';

Decimal.set({ precision: 18 });

export class Item {
  private readonly _id: string;
  private readonly _int: number;
  private readonly _float: Decimal;
  private readonly _color: string;
  private readonly _child: ItemChild;

  constructor(
    id: string,
    int: number,
    float: number | string | Decimal,
    color: string,
    child: ItemChild
  ) {
    this._id = id;
    this._int = Math.floor(int);
    this._float = new Decimal(float);
    this._color = color;
    this._child = child;
  }
  get id(): string {
    return this._id;
  }

  get int(): number {
    return this._int;
  }

  get float(): Decimal {
    return this._float;
  }

  get color(): string {
    return this._color;
  }

  get child(): ItemChild {
    return this._child;
  }
}
