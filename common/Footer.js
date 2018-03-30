import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

class Footer extends Component {
    render() {
        const { footer, footerItem, footerText } = styles;
        return (
            <View style={footer}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('homeScreen') }}
                    style={footerItem}
                >
                    <Image
                        source={require('../assets/images/home.png')}
                    />
                    <Text style={footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('offerScreen') }}
                    style={footerItem}
                >
                    <Image
                        source={require('../assets/images/discount.png')}
                    />
                    <Text style={footerText}>Offer</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('barcodeScreen') }}
                    style={footerItem}
                >
                    <Image
                        source={require('../assets/images/barcode.png')}
                    />
                    <Text style={footerText}>Barcode</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('locationScreen') }}
                    style={footerItem}
                >
                    <Image
                        source={require('../assets/images/placeholder.png')}
                    />
                    <Text style={footerText}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('historyScreen') }}
                    style={footerItem}
                >
                    <Image
                        source={require('../assets/images/history.png')}
                    />
                    <Text style={footerText}>History</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Footer;


const styles = {
    footer: {
        height: 58,
        elevation: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#496C32',
    },
    footerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: 'white'
    }
}