import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#eb34b4',
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        width: '40%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#eb34b4',
        marginHorizontal:20,

    },
    txtBotao: {
        fontSize: 25,
        color: '#eb34b4',
    },
    botaoPress: {
        backgroundColor: '3c1752',
    },
    txtNumero: {
        fontSize: 60,
        color: '#eb34b4',
        marginVertical: 10,
    },
    numeroconteiner :{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
});
export default styles;