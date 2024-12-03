import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, Icon, Input, Text } from 'react-native-elements';

export default function Pagamento({navigation}) {
    const Confirmar = () => {
        navigation.navigate("Principal")
      }
    const tabelaDados = [
        { pedido: 'item', qtd: 'item', valor: 'item', total: 'item' },
        { pedido: 'item', qtd: 'item', valor: 'item', total: 'item' },
        { pedido: 'item', qtd: 'item', valor: 'item', total: 'item' },
        { pedido: 'item', qtd: 'item', valor: 'item', total: 'item' },
        { pedido: 'item', qtd: 'item', valor: 'item', total: 'item' }

    ];

    return (
        <View style={styles.container}>
            <View style={styles.tabela}>
                <View style={styles.linha}>
                    <Text style={styles.cabecalho}>Serviço</Text>
                    <Text style={styles.cabecalho}>Qtd</Text>
                    <Text style={styles.cabecalho}>Valor</Text>
                    <Text style={styles.cabecalho}>Total</Text>
                </View>
                {tabelaDados.map((item, index) => (
                    <View key={index} style={styles.linha}>
                        <Text style={styles.coluna}>{item.pedido}</Text>
                        <Text style={styles.coluna}>{item.qtd}</Text>
                        <Text style={styles.coluna}>{item.valor}</Text>
                        <Text style={styles.coluna}>{item.total}</Text>
                    </View>
                ))}
                <View style={[styles.divisor, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={styles.textValor}>
                        Valor Total:
                    </Text>
                    <Text style={styles.textValor}>
                        Total
                    </Text>
                </View>
            </View>
            <Button
                icon={
                    <Icon
                        name="check"
                        type='font-awesome'
                        size={20}
                        color="white"
                        style={{ paddingRight: 5 }}
                    />
                }
                title="Finalizar"
                onPress={() => Confirmar()}
                buttonStyle={styles.buttonStyle}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabela: {
        width: '90%',
        marginTop: 20,
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cabecalho: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        flex: 1,
    },
    coluna: {
        fontSize: 14,
        textAlign: 'center',
        flex: 1,
    },
    divisor: {
        borderTopWidth: 1,
        borderTopColor: '#000',
        marginTop: 10,
    },
    textValor: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,  // Garante que eles ocupem o mesmo espaço
        textAlign: 'center',  // Alinha os textos no centro, caso necessário
    },
    buttonStyle: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E16868', // Cor do botão
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }

});