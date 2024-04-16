import { View, Text } from 'react-native';
import Mensagem from './mensagem';
import styles from './styles';
function Exemplo_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>
   

            <Mensagem nome='kawanne' sobrenome='ramos'/>
            <Mensagem nome='yuma' idade={23} />
            <Mensagem nome='loislenelindara'/>
        </View>
        
    );
}
export default Exemplo_2;