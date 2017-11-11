import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './Routers/AppRouter'

ReactDOM.render((
    <MuiThemeProvider>
        <AppRouter />
    </MuiThemeProvider>
  ), document.getElementById('root'));
registerServiceWorker();