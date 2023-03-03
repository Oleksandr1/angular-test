/// <reference lib="webworker" />

import { Factory } from './item-factory';
import { MessageType } from './types/messageType';
import { Message } from './types/message';
import { Configuration } from './types/configuration';
import { Subscription } from 'rxjs';
import { Item } from './types/item';

const itemFactory: Factory = new Factory(0, 0);
let subscription: Subscription = new Subscription();
const items: Item[] = [];

addEventListener('message', ({ data }) => {
  const msg = data as Message;
  function runSubscription(config: Configuration) {
    subscription.unsubscribe();
    itemFactory.setConfiguration(config);
    subscription = itemFactory.generateItems().subscribe((item) => {
      items.push(item);
      postMessage(JSON.stringify(item));
    });
  }
  function stopSubscription() {
    subscription.unsubscribe();
  }
  switch (msg.type) {
    case MessageType.Start:
      runSubscription(msg.message as Configuration);
      break;
    case MessageType.Stop:
      stopSubscription();
      break;
    case MessageType.Search:
      stopSubscription();
      if (Array.isArray(msg.message)) {
        let result: Item[];
        if (msg.message.length === 0) {
          result = items.slice(-10);
        } else {
          result = items.filter((item) =>
            Array.isArray(msg.message) ? msg.message.includes(item.id) : item
          );
        }
        for (let i of result) {
          postMessage(JSON.stringify(i));
        }
      }
      break;
    case MessageType.Update:
      runSubscription(msg.message as Configuration);
      break;
  }
});
