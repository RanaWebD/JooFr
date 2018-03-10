import React, { Component, Image } from 'react';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';

class Application extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <ProfileScreen />;
    } else {
      return <LoginScreen />;
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Application);