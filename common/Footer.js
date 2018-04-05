import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

class Footer extends Component {
    render() {
        const { hr, footer, footerItem } = styles;
        return (
            <View>
                <View style={hr}></View>
                <View style={footer}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('homeScreen') }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/home.png')}
                        />
                        <Text >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('offerScreen') }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/choices.png')}
                        />
                        <Text >Offer</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('barcodeScreen') }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/barcode.png')}
                        />
                        <Text >Barcode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('locationScreen') }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/placeholder.png')}
                        />
                        <Text >Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('historyScreen') }}
                        style={footerItem}
                    >
                        <Image
                            source={require('../assets/images/history.png')}
                        />
                        <Text >History</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Footer;


const styles = {
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    footer: {
        height: 58,
        elevation: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 2
    },
    footerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}