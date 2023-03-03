import {Factory} from './item-factory';
import {Item} from "./types/item";

describe('itemFactory', () => {
  const factory = new Factory(1, 10)
  it('should be created',() => {
    expect(factory).toBeTruthy()
  })
  it('should change config',()=> {


    let items:Item[] = []
    factory.generateItems().subscribe(i => items.push(i))
    setTimeout(()=> {
      expect(items.length).toEqual(10)
    }, 500)

    items = []
    factory.setConfiguration({size:30, timer:1})
    factory.generateItems().subscribe(i => items.push(i))
    setTimeout(()=> {

      expect(items.length).toEqual(30)
    }, 500)

  })
})
