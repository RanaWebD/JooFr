import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class Header extends Component {
    render() {
        const { header } = styles;
        return (
            <View>
                <View style={{ height: 23, backgroundColor: 'black' }}></View>
                <View style={header}>
                    <View style={{ paddingLeft: 5 }}>
                        <Image
                            style={{ width: 125, height: 60 }}
                            source={{ uri: 'http://www.joofr.com/assets/img/logo.png' }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 90 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('profileScreen')}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/avatar.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('notificationScreen') }}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/bell.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottonBorderwidth: 2,
        borderBottomColor: 'blue',
        backgroundColor: 'white',
        elevation: 2
    }
}
