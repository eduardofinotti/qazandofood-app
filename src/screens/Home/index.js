import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');

import { ScrollView } from 'react-native-gesture-handler'
import UserAvatar from 'react-native-user-avatar';

import Types from '../../components/Types'
import Store from '../../components/Store'

const moto = require('../../assets/moto.gif')

export default function Home({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [stores, setStores] = useState([]);
    const [user, setUser] = useState({});

    const renderItem = ({ item }) => (
        <Store item={item} />
    );

    useEffect(async () => {

        setIsLoading(true)

        setTimeout(async function () {
            const myIp = await AsyncStorage.getItem('@ip')

            await axios.get(`http://${myIp}:9999/qazando-user`, {})
                .then(function (response) {
                    setUser(response.data)
                })
                .catch(function (error) {
                    alert(error)
                });

            await axios.get(`http://${myIp}:9999/qazando-store`, {})
                .then(function (response) {
                    console.log(response);
                    setStores(response.data.stores)
                })
                .catch(function (error) {
                    alert(error)
                });

            setIsLoading(false)

        }, 1000)

    }, [])


    return (
        <View style={styles.content}>

            <View style={styles.headerContainer}>

                <UserAvatar borderRadius={25} size={50} name="Eduardo Finotti" bgColor="#D84559" />

                <View style={styles.nameUserContainer}>
                    <Text style={{ opacity: 0.5 }} >Bom dia!</Text>
                    <Text style={{ fontWeight: '500' }}>Olá, {user.name}</Text>
                </View>
            </View>


            <View style={styles.titleContainer}>
                <Text style={styles.title}>O que você quer comer hoje?</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typesContainer}>
                <Types logoType={require('../../assets/lanches.png')} name="Lanches" />
                <Types logoType={require('../../assets/sorvetes.png')} name="Sorvetes" />
                <Types logoType={require('../../assets/saudavel.png')} name="Saudavel" />
                <Types logoType={require('../../assets/pizza.png')} name="Pizza" />
                <Types logoType={require('../../assets/doces.png')} name="Doces" />
                <Types logoType={require('../../assets/lanches.png')} name="Lanches" />
                <Types logoType={require('../../assets/sorvetes.png')} name="Sorvetes" />
                <Types logoType={require('../../assets/saudavel.png')} name="Saudavel" />
                <View style={{ width: 15 }}></View>
            </ScrollView>


            <View style={styles.destaquesContainer}>
                <Text style={styles.destaquesText}>Destaques</Text>
            </View>

            <View style={{ flex: 4 }}>
                {isLoading &&
                    <View style={styles.loadingContent}>
                        <Image style={styles.loadingImage} source={require('../../assets/pizza.gif')} />
                        <Text style={styles.loadingText}>Carregando...</Text>
                    </View>
                }

                {!isLoading &&
                    <FlatList showsVerticalScrollIndicator={false}
                        data={stores}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                }

            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    content: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },

    headerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },

    nameUserContainer: {
        paddingHorizontal: 10
    },

    titleContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '80%'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    typesContainer: {
        marginTop: 10,
        flex: 1,
        // width: '100%',
        paddingLeft: 10,
    },

    destaquesContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    destaquesText: {
        fontSize: 18
    },

    loadingContent: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },

    loadingImage: {
        width: 200,
        height: 200
    },

    loadingText: {
        fontSize: 18,
        fontWeight: '600'
    },

    listStoresContainer: {
        height: '100%',
    }

});