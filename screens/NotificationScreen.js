import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class NotificationScreen extends Component {
    render() {
        return (
            <View><Text>NotificationScreen</Text></View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(NotificationScreen);