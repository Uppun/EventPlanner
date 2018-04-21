import React, { Component } from 'react';
import EventPage from './components/EventPage';
import EventSingle from './components/EventSingle';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={EventPage} />
        <Route path='/Event/:eventinfo' component={EventSingle} />
      </Switch>
    );
  }
}

export default App;
