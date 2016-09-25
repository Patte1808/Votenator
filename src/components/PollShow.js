import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton} from 'material-ui/RadioButton';
import {RadioButtonGroup} from 'material-ui/RadioButton';

function PollShow({route, params}) {

  const {store} = route;
  console.log(params);
  console.log(store.polls.peek());
  const poll = store.polls[params.pollId];

  return (
    <div>
      <Card>
        <CardTitle title={poll.title} />
        <CardText>
          <RadioButtonGroup name="questions">
            {poll.questions.map((question, key) =>
              <RadioButton value={question.id} label={question.title} key={key} />
            )}
          </RadioButtonGroup>
          <RaisedButton label="Vote" primary={true} />
        </CardText>
      </Card>
    </div>
  );
};

export default observer(PollShow);
