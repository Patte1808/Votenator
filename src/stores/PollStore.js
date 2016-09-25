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
}

export class PollStore {

  constructor() {
    let mPoll = new Poll();
    mPoll.title = 'Test';
    mPoll.id = 0;
    mPoll.questions = [];
    mPoll.addQuestion({id: 1, title: 'Test123'});
    mPoll.addQuestion({id:2, title:'Muh'});

    extendObservable(this, {
      polls: [mPoll],
      addPoll: action(function(poll) {
        this.polls.push(poll);
      })
    });
  }
}
