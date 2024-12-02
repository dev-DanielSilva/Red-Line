import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import Principal from './screens/principal';
import Detalhes from './screens/detalhes';
import Cadastro from './screens/cadastro';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{
          headerBackTitle: 'Principal',
          headerBackTitleStyle: { fontSize: 16 },
        }}
      />
      <Stack.Screen name="Detalhes" component={Detalhes}
      />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  )
}
