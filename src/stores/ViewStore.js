import { extendObservable } from 'mobx';

export class ViewStore {
  constructor() {
    extendObservable(this, {
      activePoll: null
    });
  }
}
