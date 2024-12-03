import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logoStyle: {
    width: 250, // Ajuste a largura da imagem
  },
  titleStyle: {
    marginBottom: 70,
    color: '#333',
  },
  inputContainer: {
    width: '100%', // Faz os inputs ocuparem toda a largura disponível
    marginBottom: 20,
  },
  inputStyle: {
    borderBottomWidth: 0, // Remove a linha inferior
    borderWidth: 1, // Adiciona uma borda em volta do campo
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15, // Espaçamento entre os inputs
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E16868', // Cor do botão
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  accountText: {
    paddingTop: 10,
    color: 'red'
  }
  });

  export default styles;