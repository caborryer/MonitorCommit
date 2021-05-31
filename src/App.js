import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import theme from './config/theme';
import './App.css';

// Redux
import {Provider} from 'react-redux';
import store from './store';

// Pages
import AdminPage from './pages/admin-monitoring';




const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline/>
          <Router>
            <Switch>
              <Route exact path='/' component={AdminPage}/>
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
  );
};

export default App;
