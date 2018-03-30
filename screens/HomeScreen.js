import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Home extends Component {
    render() {
        const { textColor } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} />
                <ScrollView>
                    <View style={{ paddingRight: 10, paddingLeft: 10, marginTop: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <LinearGradient
                                colors={['#FF4500', '#FF3333']}
                                style={{ elevation: 10, borderColor: 'gray', display: 'flex', alignItems: 'center', flex: 1, marginRight: 5, padding: 10, backgroundColor: '#FF4500' }}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('profile') }}
                                >
                                    <Text style={textColor} >Buy Now</Text>
                                    <Image
                                        style={{ width: 50, height: 50 }}
                                        source={require('../assets/images/juice.png')}
                                    />
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient
                                colors={['#FF4500', '#FF3333']}
                                style={{ elevation: 10, borderColor: 'gray', display: 'flex', alignItems: 'center', flex: 1, marginLeft: 5, padding: 10, backgroundColor: '#FF4500' }}>
                                <Text style={[textColor, { marginBottom: 11 }]}>Reload Bag</Text>
                                <Image
                                    style={{ width: 40, height: 40 }}
                                    source={require('../assets/images/reload-bag.png')}
                                />
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={{ elevation: 10, paddingRight: 10, paddingLeft: 10, marginTop: 10 }}>
                        <LinearGradient
                            colors={['#FF4500', '#FF3333']}
                            style={{ borderColor: 'gray', backgroundColor: '#FF4500', height: 200 }}>
                            <Text style={textColor}>Rewards</Text>
                        </LinearGradient>
                    </View>
                    <View style={{ paddingRight: 10, paddingLeft: 10, marginTop: 10 }}>
                        <LinearGradient
                            colors={['#FF4500', '#FF3333']}
                            style={{ display: 'flex', alignItems: 'center', width: '100%', paddingTop: 20, paddingBottom: 20, borderColor: 'gray', backgroundColor: '#FF4500', elevation: 10 }}>
                            <Text style={[textColor, { position: 'absolute', zIndex: 1, top: 8, fontSize: 20 }]}>10</Text>
                            <Image
                                style={{ width: 50, height: 50, position: 'relative' }}
                                source={require('../assets/images/bag.png')}
                            />
                        </LinearGradient>
                    </View>
                </ScrollView>
                <Footer navigation={this.props.navigation} />
            </View >
        )
    }
}

export default Home;

const styles = {
    textColor: {
        color: 'white'
    }
}