import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Store(props) {
    return (
        <View style={styles.container}>


            <View style={styles.storeLogoContent}>
                <Image source={{ uri: props.item.logo }} style={styles.logo} />
            </View>

            <View style={styles.infoContent}>
                <Text style={styles.storeName}>{props.item.name}</Text>
                <Text style={styles.storeDescription}>{props.item.description}</Text>

                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/map-pin.png')} />
                        <Text style={styles.kmText}>{props.item.km}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/star.png')} />
                        <Text style={styles.kmText}>{props.item.stars}</Text>
                    </View>

                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 100,

        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 10,
    },

    storeLogoContent: {
        justifyContent: 'center'
    },

    logo: {
        width: 70,
        height: 70,
        borderRadius: 17
    },

    infoContent: {
        paddingHorizontal: 8,
        width: '80%',
        justifyContent: 'space-between'
    },

    storeName: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    storeDescription: {
        fontSize: 12,
        opacity: 0.6
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    kmText: {
        fontSize: 12,
        opacity: 0.6,
        marginLeft: 3
    }



});
