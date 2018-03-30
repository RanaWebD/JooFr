import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Application from '../screens/Application';
import ProfileScreen from '../screens/ProfileScreen';
import SelectQuantityScreen from '../screens/SelectQuantityScreen';
import BarcodeScreen from '../screens/BarcodeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import LocationScreen from '../screens/LoactionScreen';
import OfferScreen from '../screens/OfferScreen';
import NotificationScreen from '../screens/NotificationScreen';

const RootStackNavigator = StackNavigator(
  {
    main: { screen: Application },
    profileScreen: { screen: ProfileScreen },
    selectQuantityScreen: { screen: SelectQuantityScreen },
    barcodeScreen: { screen: BarcodeScreen },
    historyScreen: { screen: HistoryScreen },
    locationScreen: { screen: LocationScreen },
    offerScreen: { screen: OfferScreen },
    notificationScreen: { screen: NotificationScreen }
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
