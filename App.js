import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import store from './redux';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}