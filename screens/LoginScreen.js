import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { login } from '../redux/actions/auth';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Login',
            showSignInForm: false,
            showSignUpForm: true,
            fullname: '',
            username: '',
            password: ''
        };
    }

    userLogin(e) {
        this.props.onLogin(this.state.fullname, this.state.username, this.state.password);
        e.preventDefault();
    }


    onSignInOutBtnPress = (e) => {
        if (e === 'singUp') {
            this.setState({ route: 'SIGN UP', showSignUpForm: true, showSignInForm: false })
        } else {
            this.setState({ route: 'SIGN IN', showSignInForm: true, showSignUpForm: false })
        }
    }

    render() {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Image
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                    source={{ uri: 'http://www.joofr.com/assets/images/gallery/image01.jpg' }} />

                <ScrollView
                    contentContainerStyle={{ flex: 1, paddingRight: 20, paddingLeft: 20, backgroundColor: 'rgba(3, 47, 93, 0.9)' }}
                >
                    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                        <Image
                            style={{ width: 110, height: 52 }}
                            source={{ uri: 'http://www.joofr.com/assets/img/logo.png' }} />

                    </View>
                    <View style={{ flex: 2, justifyContent: 'space-around' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity
                                onPress={() => this.onSignInOutBtnPress('singUp')}
                            >
                                <Text style={styles.signupSigninNavigateBtns}>SIGN UP</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.onSignInOutBtnPress('singIn')}
                            >
                                <Text style={styles.signupSigninNavigateBtns}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>

                        {this.state.showSignInForm &&
                            <View>
                                <TextInput
                                    placeholder='email'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoFocus={false}
                                    underlineColorAndroid='transparent'
                                    keyboardType='email-address'
                                    value={this.state.username}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ username: text })} />
                                <Image
                                    style={{ width: 30, height: 40, position: 'absolute', right: 0, top: 15 }}
                                    source={{ uri: 'https://png.icons8.com/metro/1600/secured-letter.png' }} />

                                <View style={styles.hr} />
                                <TextInput
                                    placeholder='password'
                                    autoCapitalize='none'
                                    underlineColorAndroid='transparent'
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ password: text })} />
                                <Image
                                    style={{ width: 30, height: 40, position: 'absolute', right: 0, top: 65 }}
                                    source={{ uri: 'https://png.icons8.com/metro/1600/forgot-password.png' }} />

                                <View style={styles.hr} />
                            </View>
                        }
                        {this.state.showSignUpForm &&
                            <View >
                                <TextInput
                                    placeholder='full name'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    value={this.state.fullname}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ fullname: text })} />
                                <Image
                                    style={{ width: 30, height: 40, position: 'absolute', right: 0, top: 10 }}
                                    source={{ uri: 'http://www.freeiconspng.com/uploads/profile-user-outline-vector-icon--social-icons--icons-download-26.png' }} />

                                <View style={styles.hr} />
                                <TextInput
                                    placeholder='email'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoFocus={false}
                                    underlineColorAndroid='transparent'
                                    keyboardType='email-address'
                                    value={this.state.username}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ username: text })} />
                                <Image
                                    style={{ width: 30, height: 40, position: 'absolute', right: 0, top: 65 }}
                                    source={{ uri: 'https://png.icons8.com/metro/1600/secured-letter.png' }} />

                                <View style={styles.hr} />
                                <TextInput
                                    placeholder='password'
                                    autoCapitalize='none'
                                    underlineColorAndroid='transparent'
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ password: text })} />
                                <Image
                                    style={{ width: 30, height: 40, position: 'absolute', right: 0, top: 120 }}
                                    source={{ uri: 'https://png.icons8.com/metro/1600/forgot-password.png' }} />

                                <View style={styles.hr} />
                            </View>
                        }
                        <View style={{ marginTop: 50 }}>
                            <TouchableOpacity
                                onPress={this.userLogin}
                            >
                                <Text
                                    style={{ textAlign: 'center', backgroundColor: '#22DA93', borderRadius: 25, padding: 15, fontSize: 16, fontWeight: 'bold' }}>
                                    {this.state.route}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>YOU CAN ALSO SIGN UP WITH</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                            <View style={{ backgroundColor: '#3A559F', borderRadius: 25, paddingLeft: 30, paddingRight: 30 }}>
                                <Image
                                    style={{ width: 30, height: 40 }}
                                    source={{ uri: 'http://floatcentershiloh.com/wp-content/uploads/2016/11/white-facebook-icon-png-like-us-on-facebook-to-stay-up-31.png' }} />
                            </View>
                            <View style={{ backgroundColor: '#273B7A', borderRadius: 25, paddingLeft: 30, paddingRight: 30 }}>
                                <Image
                                    style={{ width: 30, height: 40 }}
                                    source={{ uri: 'https://www.seeklogo.net/wp-content/uploads/2015/09/google-favicon-vector.png' }} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
    signupSigninNavigateBtns: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
    },
    input: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 0,
        position: 'relative'
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    }
}



{/* <View style={{ margin: 7 }} />
<Button onPress={(e) => this.userLogin(e)} title={this.state.route} />
<View style={{ margin: 7 }} />
<Button onPress={(e) => this.toggleRoute(e)} title={alt} />
<View style={{ margin: 7 }} />
<Button onPress={(e) => { console.log('f') }} title={'login with facebook'} /> */}
