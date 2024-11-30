import React, { useState } from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


export default function Principal({ navigation }) {
    return (
      <View>
        <Text>Bem-vindo à Tela Principal!</Text>
        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate('Detalhes')}
          buttonStyle={{ backgroundColor: 'blue', marginTop: 20 }}
        />
      </View>
    );
  }