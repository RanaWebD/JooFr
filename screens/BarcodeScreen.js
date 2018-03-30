import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class BarcodeScreen extends Component {
    render() {
        return (
            <View><Text>Barcode</Text></View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(BarcodeScreen);