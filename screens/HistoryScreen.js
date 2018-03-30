import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class HistoryScreen extends Component {
    render() {
        return (
            <View><Text>HistoryScreen</Text></View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(HistoryScreen);