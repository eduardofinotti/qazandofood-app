import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Types(props) {
    return (
        <View style={styles.container}>

            <View style={styles.typeContent}>
                <Image source={props.logoType} style={styles.logo} />
            </View>

            <Text>{props.name}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 70,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
    },

    typeContent: {
        marginTop: 10,
        borderRadius: 10,
    },

    logo: {
        width: 60,
        height: 60,
        borderRadius: 12
    }


});
