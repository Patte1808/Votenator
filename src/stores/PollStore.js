import { extendObservable } from 'mobx';

export class Poll {
  constructor() {
    extendObservable(this, {
      id: null,
      title: '',
      questions: [{id: 0, title: ''}, {id: 1, title: ''}, {id: 2, title: ''}]
    });
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  toJson() {
    let questions = 'questions:[';

    for(let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].title !== '') {

        if(i > 0) {
          questions += ',';
        }

        questions += `{id: ${this.questions[i].id}, title: '${this.questions[i].title}'}`;
      }
    }

    questions += ']';

    return `{id: ${this.id}, title: '${this.title}', ${questions}}`;
  }
}

export class PollStore {
  constructor() {
    extendObservable(this, {
      polls: []
    });
  }
}
