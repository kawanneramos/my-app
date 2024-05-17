import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Exemplo_0 from './componentes/exemplo_1';
import Exemplo_2 from './componentes/exemplo_2';
import Exemplo_3 from './componentes/exemplo_3';

import Atividade_1 from './componentes/atividade_1';
import Atividade_2 from './componentes/atividade_2';
import Atividade_3 from './componentes/atividade_3';
export default function App() {
  return (
    <View style={styles.componets}>
      <Atividade_3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
} );

