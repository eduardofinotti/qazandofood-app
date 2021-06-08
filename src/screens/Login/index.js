import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const axios = require('axios');

const logo = require('../../assets/logo.png')

export default function Login({ navigation }) {

    const [ip, setIp] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function login() {

        await axios.post(`http://${ip}:9999/qazando-login`, {
            username: user,
            password: password
        })
            .then(function (response) {
                console.log(response.status);
                navigation.navigate('Home')
            })
            .catch(function (error) {
                alert(error.response.data.message)
            });
    }

    useEffect(async () => {
        const myIp = await AsyncStorage.getItem('@ip')
        setIp(myIp)
    }, [])

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={logo}></Image>

            <View style={styles.contentInput}>
                <Text style={styles.labelInput}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="contato@qazando.com"
                    value={user}
                    onChangeText={(text) => { setUser(text) }}
                />

                <Text style={[styles.labelInput, { marginTop: 20 }]}>Senha</Text>
                <TextInput style={styles.input}
                    placeholder="********"
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                />

                <TouchableOpacity style={styles.buttonEnter} onPress={() => login()}>
                    <Text style={styles.buttonEnterText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D84559'
    },

    logo: {
        width: 150,
        height: 150
    },

    contentInput: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        width: '80%',
        marginTop: 50
    },

    labelInput: {
        marginBottom: 6,
    },

    input: {
        height: 40,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 8
    },

    buttonEnter: {
        height: 40,
        borderRadius: 8,
        backgroundColor: '#FF8B9B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    buttonEnterText: {
        color: '#fff',
        fontWeight: 'bold'
    }

});

