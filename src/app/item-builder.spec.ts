import {ItemBuilder} from './item-builder';
import {Decimal} from "decimal.js";

describe('ItemBuilder', () => {
  const builder = new ItemBuilder()
  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });
  it('should generate new valid item',() => {
    const item = builder.generateItem()
    const s = new Option().style;
    s.color = item.color

    expect(item.id).toBeGreaterThan(0)
    expect(item.int).toBeGreaterThan(0)
    expect(CSS.supports('color',item.color)).toBeTruthy()
    expect(Decimal.isDecimal(item.float)).toBeTruthy()
    expect(item.child.id).toBeGreaterThan(1)
    expect(CSS.supports('color',item.child.color)).toBeTruthy()
  })

});
