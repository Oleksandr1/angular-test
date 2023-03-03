import { MessageType } from './messageType';
import { Configuration } from './configuration';

export interface Message {
  type: MessageType;
  message?: Configuration | string[];
}
