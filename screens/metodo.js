import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Método({ navigation }) {
    const Confirmar = () => {
        navigation.navigate("Pagamento")
    }
    const Adicionar = () => {
        navigation.navigate("Cartão")
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF0000', '#FFAAAA']}
                style={styles.headerServiços}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.headerText}>Selecione o método de pagamento</Text>
            </LinearGradient>
            <ScrollView style={styles.scrollView}>
                <TouchableOpacity style={styles.optionButton} onPress={Confirmar}>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#FF0000" />
                    <Text style={styles.optionText}>Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={Confirmar}>
                    <Icon name="credit-card" type="font-awesome" size={30} color="#FF0000" />
                    <Text style={styles.optionText}>Cartão de Crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={Confirmar}>
                    <Icon name="credit-card" type="font-awesome" size={30} color="#FF0000" />
                    <Text style={styles.optionText}>Cartão de Débito 1</Text>
                </TouchableOpacity>

                {/* Linha acima e abaixo do "ou" */}
                <View style={styles.dividerContainer}>
                    <View style={styles.divider}></View>
                    <Text style={styles.orText}>ou</Text>
                    <View style={styles.divider}></View>
                </View>

                <Button
                    icon={<Icon name="plus" type="font-awesome" size={20} color="white" />}
                    title="Adicionar Outro"
                    onPress={Adicionar}
                    buttonStyle={styles.buttonStyle}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headerServiços: {
        width: '90%',
        height: 120,
        padding: 20,
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        maxWidth: "100%",
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        width: '100%',
        paddingHorizontal: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#333',
    },
    dividerContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',  // Garante que "ou" fique centralizado
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#000000',  // Linha vermelha mais visível
    },
    orText: {
        fontSize: 18,
        color: '#333',
        marginHorizontal: 10,
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E16868',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
});
