import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {PollStore, Poll} from './stores/PollStore';

injectTapEventPlugin();

const pollStore = new PollStore();
const poll = new Poll();

ReactDOM.render(
  <MuiThemeProvider>
    <App store={pollStore} poll={poll} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
