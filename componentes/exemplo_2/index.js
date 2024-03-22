import { View, Text } from 'react-native';
import styles from './styles';
function Exemplo_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>
            <Text style={styles.mensagem}>Olá kakaw</Text>
            <Text style={styles.mensagem}>Olá outra pessoa</Text>

            <View style={styles.viewmensagem}>
                <Text style={styles.mensagem}>Olá Kawanne</Text>
            </View>
        </View>
    );
}
export default Exemplo_2;