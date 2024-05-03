import { View, Text, Pressable} from 'react-native';
import styles from './styles';

export default function Exemplo_3({nome,sobrenome}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo} > Exemplo 3</Text>
            <Pressable onPress={()=>alert('oi')} style={styles.botao}>
                <Text>Ex. botão</Text>
            </Pressable>
        </View>
    );
}