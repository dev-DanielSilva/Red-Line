import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import Principal from './screens/principal';
import Pagamento from './screens/pagamento';
import Cadastro from './screens/cadastro';
import Método from './screens/metodo';
import Cartão from './screens/cartao';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false,
      }}></Stack.Screen>
      <Stack.Screen name="Cadastro" component={Cadastro} options={{
        headerShown: false,
      }}></Stack.Screen>
      <Stack.Screen name="Método" component={Método}></Stack.Screen>
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Pagamento" component={Pagamento}
      />
      <Stack.Screen name="Cartão" component={Cartão}
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
