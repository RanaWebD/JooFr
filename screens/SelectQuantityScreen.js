import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Card from '../common/Card';
import { LinearGradient } from 'expo';

class SelectQuantityScreen extends Component {
    render() {
        return (
            <View>
                <Card>
                    <LinearGradient
                        colors={['#FF4500', '#FF3333']}
                        style={{ backgroundColor: '#FF3333', height: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    ><TextInput
                            style={{ height: 35, width: 100, backgroundColor: 'white', borderRadius: 5, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}
                            onChangeText={e => { }}
                        />
                    </LinearGradient>
                </Card>
                <Card>
                    <LinearGradient
                        colors={['#FF4500', '#FF3333']}
                        style={{ backgroundColor: '#FF4500', height: 70, flexDirection: 'column', justifyContent: 'space-around' }}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
                            <Text>Quantity</Text>
                            <Text>0</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
                            <Text>Amount</Text>
                            <Text>0</Text>
                        </View>
                    </LinearGradient>
                </Card>
                <Card>
                    <LinearGradient
                        colors={['#FF4500', '#FF3333']}
                        style={{ height: 120, padding: 10 }}
                    >
                        <Text>Paymetn Method</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image
                                style={{ width: 64, height: 64 }}
                                source={require('../assets/images/paytm.png')} />
                            <Image
                                style={{ width: 64, height: 64 }}
                                source={require('../assets/images/card.png')} />
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={require('../assets/images/bag.png')} />
                        </View>
                    </LinearGradient>
                </Card>
            </View>
        )
    }
}


export default SelectQuantityScreen;