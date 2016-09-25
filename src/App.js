import React, { Component } from 'react';
import {observer} from 'mobx-react';
import PollForm from './components/PollForm';

const style = {
  margin: 12
};

function App({route}) {

  const {store, poll} = route;

  return (
    <PollForm store={store} poll={poll} />
  );
};

export default observer(App);
