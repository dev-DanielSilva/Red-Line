import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, ButtonGroup, Icon, Input, Text } from 'react-native-elements';
import { icon } from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function Adicionar({ navigation }) {
  const Método = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Método" }]
    })
  }
  return (
    <View style={[styles.container]}>
      <Text h3>Adicione seu Novo Cartão</Text>
      {/* Logo */}
      <Image
        source={require('../assets/cartao.png')}
        style={styles.logoStyle}
      />


      {/* Inputs */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Número do Banco"
          inputContainerStyle={styles.inputStyle} // Remove a linha separadora
        />
        <Input
          placeholder="Agência"
          inputContainerStyle={styles.inputStyle} // Remove a linha separadora
        />
        <Input
          placeholder="Conta Corrente"
          inputContainerStyle={styles.inputStyle} // Remove a linha separadora
        />
      </View>

      {/* Botão de Login */}
      <Button
        icon={
          <Icon
            name="check"
            type='font-awesome'
            size={20}
            color="white"
            style={{paddingRight: 5}}
          />
        }
        title="Finalizar"
        onPress={() => Método()}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}

