import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class OfferScreen extends Component {
    render() {
        return (
            <View><Text>OfferScreen</Text></View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(OfferScreen);