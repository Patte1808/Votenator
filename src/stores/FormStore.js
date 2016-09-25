import { extendObservable } from 'mobx';

export class FormStore {
  constructor() {
    extendObservable(this, {
      title: '',
      questions: ['', '', '']
    });
  }
}
