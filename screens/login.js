import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, ButtonGroup, Icon, Input, Text } from 'react-native-elements';
import { icon } from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function Login({ navigation }) {
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }]
    })
  }
  return (
    <View style={[styles.container]}>
      {/* Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logoStyle}
      />

      {/* Título */}
      <Text h3 style={styles.titleStyle}>Faça seu Login</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Seu E-mail"
          keyboardType="email-address"
          inputContainerStyle={styles.inputStyle} // Remove a linha separadora
        />
        <Input
          placeholder="Sua senha"
          secureTextEntry={true}
          inputContainerStyle={styles.inputStyle} // Remove a linha separadora
        />
      </View>

      {/* Botão de Login */}
      <Button
        icon={
          <Icon
            name="check"
            size={20}
            color="white"
          />
        }
        title="Entrar"
        onPress={() => entrar()}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}
