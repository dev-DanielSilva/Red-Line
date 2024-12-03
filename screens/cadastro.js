import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Input, Icon, Text } from 'react-native-elements';
import { icon } from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';

export default function Cadastro({ navigation }) {
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        });
    };

    const logar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }] // Aqui você pode mudar para a tela de registro, se existir
        });
    };

    return (
        <ScrollView style={{marginTop: 100}}>
            <View style={styles.container}>
                {/* Logo */}
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logoStyle}
                />

                {/* Título */}
                <Text h3 style={styles.titleStyle}>Faça seu Cadastro</Text>

                {/* Inputs */}
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Seu E-mail"
                        keyboardType="email-address"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Seu CPF"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Seu Telefone"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Rua"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Bairro"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Cidade"
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Sua senha"
                        secureTextEntry={true}
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                    <Input
                        placeholder="Confirmar senha"
                        secureTextEntry={true}
                        inputContainerStyle={styles.inputStyle} // Remove a linha separadora
                    />
                </View>

                {/* Botão de Login */}
                <Button
                    icon={
                        <Icon
                            name='user-plus'
                            type='font-awesome'
                            size={20}
                            color="white"
                            style={{paddingRight: 5}}
                        />
                    }
                    title="Cadastrar"
                    onPress={logar}
                    buttonStyle={styles.buttonStyle}
                />

                {/* Botão para Registrar */}
                <TouchableOpacity onPress={logar}>
                    <Text style={styles.accountText}>Já possui conta?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

