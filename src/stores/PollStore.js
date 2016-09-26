import { extendObservable, action } from 'mobx';

export class Poll {
  constructor() {
    extendObservable(this, {
      id: null,
      title: '',
      questions: [{id: 0, title: ''}, {id: 1, title: ''}, {id: 2, title: ''}],
      addQuestion: action(function(question) {
        this.questions.push(question);
      })
    });
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

  serialize() {
    let questions = [];

    for(let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].title !== '')
        questions.push(this.questions[i]);
    }

    this.questions = questions;

    return this;
  }
}

export class PollStore {

  constructor() {

    extendObservable(this, {
      polls: [],
      addPoll: action(function(poll) {
        this.polls.push(poll.serialize());
      })
    });
  }
}
