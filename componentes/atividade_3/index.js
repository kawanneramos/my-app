import{ useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';


export default function Atividade_3({ nome, sobrenome }) {
    const [numero,setNumero] = useState(0);

    function  incremento () {
        setNumero(numero + 1);
        
    }
    function  menos () {
        setNumero(numero - 1);
    }

    function  zerar () {
        setNumero(numero - numero);
        
    }
    return (
        <View style={styles.container}>
            
                <Text style={styles.txtNumero}>{numero}</Text>
            <Pressable
            onPress={() => incremento()} 
            style={({pressed}) => pressed ?
        [styles.botao, styles.botaoPress]
        :
        styles.botao}
        >
        <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

            
            <Text style={styles.txtNumero}>{numero}</Text>
            <Pressable
            onPress={() => menos()} 
            style={({pressed}) => pressed ?
        [styles.botao, styles.botaoPress]
        :
        styles.botao}
        >
        <Text style={styles.txtBotao}>-1</Text>
            </Pressable>

            
            <Text style={styles.txtNumero}>{numero}</Text>
            <Pressable
            onPress={() => zerar()} 
            style={({pressed}) => pressed ?
        [styles.botao, styles.botaoPress]
        :
        styles.botao}
        >
        <Text style={styles.txtBotao}>zerar</Text>
            </Pressable>
            
        </View>
    );
};