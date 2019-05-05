import React, { Component } from 'react';
import 'moment-timezone';
import 'moment/locale/pl';
import './App.css';
import '../../normalize.css';

import Routes from '../../routes';
import MainLayout from '../../components/MainLayout';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Routes />
      </MainLayout>
    );
  }
}

export default App;
