import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PollShow from './components/PollShow';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {PollStore, Poll} from './stores/PollStore';

import { Router, Route, Link, browserHistory } from 'react-router'

injectTapEventPlugin();

const pollStore = new PollStore();
const poll = new Poll();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App} store={pollStore} poll={poll} />
      <Route path=":pollId" component={PollShow} store={pollStore} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
