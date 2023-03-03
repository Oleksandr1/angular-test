import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(
      new Item('1', 2, 3, '#ccc', { id: '5', color: '#bbb' })
    ).toBeTruthy();
  });
});
