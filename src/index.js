import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const customTheme = {
  ...getMuiTheme(darkBaseTheme),
  tabs: {
    backgroundColor: 'inherit',
    textColor: 'inherit',
    selectedTextColor: 'inherit'
  }
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={customTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
