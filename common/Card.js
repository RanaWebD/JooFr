import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 20
    }
};

export default Card;
