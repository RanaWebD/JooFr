import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SelectQuantityScreen from './SelectQuantityScreen';

class Application extends Component {
  render() {
    return <LoginScreen />;
    // return <HomeScreen navigation={this.props.navigation} />;
    // if (this.props.isLoggedIn) {
    //   return <ProfileScreen />;
    // } else {
    //   return <LoginScreen />;
    // }
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Application);