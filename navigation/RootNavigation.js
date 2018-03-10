import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Application from '../screens/Application';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: Application,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
