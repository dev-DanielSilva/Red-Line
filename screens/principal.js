import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando o hook
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ServicoCard = ({ nome, preco, unidade, icone }) => (
  <View style={styles.card}>
    <Text style={styles.icon}>{icone}</Text>
    <Text style={styles.nome}>{nome}</Text>
    <Text style={styles.preco}>R${preco}/{unidade}</Text>
    <View style={styles.quantidadeContainer}>
      <Text style={styles.quantidadeLabel}>Quantidade:</Text>
      <View style={styles.botoesQuantidade}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantidade}>0</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

function Header({ title }) {
  return (
    <LinearGradient
      colors={['#FF0000', '#FFAAAA']}
      style={styles.headerServiços}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
}

function Serviços() {
  const navigation = useNavigation(); // Usando o hook para navegação

  const handleConfirmar = () => {
    navigation.navigate('Método'); // Navegando para a tela "Pagamento"
  };

  return (
    <View style={styles.container}>
      <Header title="Selecione o serviço desejado" />
      <ScrollView style={styles.servicosContainer}>
        <ServicoCard nome="Lavagem" preco="25,00" unidade="Unidade" icone="🌊" />
        <ServicoCard nome="Estacionamento Rotativo" preco="5,00" unidade="Hora" icone="🚘" />
        <ServicoCard nome="Abastecimento" preco="Preço Variável" unidade="Tipo" icone="⛽" />
        <ServicoCard nome="Estacionamento Mensal" preco="250,00" unidade="Mês" icone="🅿️" />
      </ScrollView>
      <TouchableOpacity
        style={styles.botaoConfirmar}
        onPress={handleConfirmar} // Adicionando o evento de clique
      >
        <Text style={styles.botaoTextoConfirmar}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}


function Historico() {
  const tabelaDados = [
    { pedido: 'item 1', qtd: 'item 1', valor: 'item 1', total: 'item 1' },
    { pedido: 'item 2', qtd: 'item 2', valor: 'item 2', total: 'item 2' },
  ];

  return (
    <View style={styles.container}>
      <Header title="Bem-vindo ao seu histórico de compra" />
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
        <View style={styles.divisor}></View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {


  return (
    <Tab.Navigator
      initialRouteName="Serviços"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Serviços"
        component={Serviços}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Historico}
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
    maxWidth: 230,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  servicosContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'column',
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  preco: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  quantidadeContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  quantidadeLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  botoesQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantidade: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  botaoConfirmar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E16868', // Cor do botão
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  botaoTextoConfirmar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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

});
