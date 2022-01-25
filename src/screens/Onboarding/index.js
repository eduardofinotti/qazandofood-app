import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('../../assets/logo.png');
const next = require('../../assets/next.png');

export default function Onboarding({navigation}) {
  const [ip, setIp] = useState('192.168.15.40');

  async function goToLogin() {
    if (ip != '' && ip.includes('.')) {
      await AsyncStorage.setItem('@ip', ip);
      navigation.navigate('Login');
    } else {
      alert('Preencha um IP válido.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Por favor, digite o IP da sua rede!</Text>
      </View>

      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          placeholder="192.188.10.8"
          value={ip}
          onChangeText={text => {
            setIp(text);
          }}
        />

        <TouchableOpacity
          style={styles.buttonEnter}
          onPress={() => goToLogin()}>
          <Image source={next} />
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
    backgroundColor: '#D84559',
  },

  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  contentInput: {
    justifyContent: 'center',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  labelInput: {
    marginBottom: 6,
  },

  input: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    width: '60%',
  },

  buttonEnter: {
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  buttonEnterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
