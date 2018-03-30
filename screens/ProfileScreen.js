import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Card from '../common/Card';
import { LinearGradient } from 'expo';
import Header from '../common/Header';
import Footer from '../common/Footer';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#496C32', '#32CD32']}
                    style={{ height: 24 }}
                >
                </LinearGradient>
                <Header navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={{ display: 'flex', flex: 1, marginTop: 20 }}>
                    <Card>
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={require('../assets/images/avatar.png')}
                            />
                        </View>
                    </Card>


                    <Card>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            <Text>User Name</Text>
                            <Text>Gender</Text>
                            <Text>email</Text>

                            <Image
                                style={{ width: 20, height: 20, position: 'absolute', right: 0, bottom: 0 }}
                                source={require('../assets/images/pencil-edit-button.png')}
                            />
                        </View>
                    </Card>
                    <Card>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <LinearGradient
                                colors={['#FF4500', '#FF3333']}
                                style={{ position: 'relative', flex: 1, marginRight: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text style={{ position: 'absolute', top: 1, zIndex: 1, fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                                    0
                                    </Text>
                                <Image
                                    style={{ width: 64, height: 64, right: 0, bottom: 0 }}
                                    source={require('../assets/images/bag.png')}
                                />
                            </LinearGradient>

                            <LinearGradient
                                colors={['#FF4500', '#FF3333']}
                                style={{ flex: 1, marginLeft: 5, height: 100, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
                            >
                                <Text></Text>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>0</Text>
                                <Text style={{ color: 'lightgray' }}>Total purchased until now.</Text>
                            </LinearGradient>
                        </View>
                    </Card>
                </ScrollView>
                <Footer />
            </View>
        )
    }
}

export default ProfileScreen;