import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e67a96',
      borderRadius:20,
      width: '100%',
      alignItems: 'center',
    },
    titulo: {
        fontSyze: 30,
        fontWeight: 'bold',
        marginVertical:20,
        color: '#673AB7',
    },
    botao: {
      borderWidth: 3,
      padding: 10,
      width: '80%',
      borderRadius: 20,
      alignItems: 'center',
      borderColor: '#673AB7',
    },
    txtBotao:{
      fontSIze: 25,
      color: '#673AB7',
    },
    botaoPress: {
      backgroundColor: '#673AB7',
    },
    txtNumero: {
      FontSize: 35,
      color: '#673AB7',
      marginVertical: 10,
    }

  } );
  export default styles;