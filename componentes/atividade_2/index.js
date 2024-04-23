import{ View,Text }from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Mensagem ingrediente= 'Batata-'   comida='Batata recheada'/>
            <Mensagem ingrediente= 'Carne-'   comida='Bife acebolado'/>
            <Mensagem ingrediente= 'presunto-'   comida=' Lasanha'/>
            <Mensagem ingrediente= 'Queijo-'   comida='Pizza quatro queijos'/>
   
        </View> 
    );
}
export default Atividade_2;