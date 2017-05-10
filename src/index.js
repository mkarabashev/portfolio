import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const customTheme = {
  ...getMuiTheme(lightBaseTheme),
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
