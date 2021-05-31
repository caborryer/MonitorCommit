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
import AdminOptions from './pages/admin-options';
import CommitSection from './pages/commit-history';




const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline/>
          <Router>
            <Switch>
              <Route exact path='/' component={AdminPage}/>
              <Route exact path='/admin-options' component={AdminOptions}/>
                <Route exact path='/commit-history' component={CommitSection}/>
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
  );
};

export default App;
