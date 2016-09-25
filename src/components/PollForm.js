import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton} from 'material-ui/RadioButton';
import {RadioButtonGroup} from 'material-ui/RadioButton';

const style = {
  marginTop: 12
};

function PollForm({store, poll}) {

  function onKeyUp(e) {
    let id = parseInt(e.target.id);

    if((poll.questions.length - 1) === id) {
      poll.addQuestion({id, title: ''});
    }

    poll.questions[id].title = e.target.value;
  }

  function onChangeTitle(e) {
    let title = e.target.value;

    poll.title = title;
  }

  function onSavePoll(e) {
    let id = store.polls.length;
    poll.id = id;

    store.addPoll(poll);
  }

  return (
    <div>
      <Card>
        <CardTitle title="Create a new poll" />
        <CardText>
          <TextField hintText="Type your question here..." onChange={onChangeTitle} /> <br/>
          {poll.questions.map((question, key) =>
            <div key={key}>
              <TextField hintText="Enter poll option..." id={key.toString()} onKeyUp={onKeyUp} ref={key} />
              <br/>
            </div>
          )}
          <RaisedButton label="Create Poll" primary={true} onClick={onSavePoll} style={style} />
        </CardText>
      </Card>
    </div>
  );
}

export default observer(PollForm);
