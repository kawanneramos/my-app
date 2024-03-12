import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Exemplo_0 from './componentes/exemplo_1';


import Atividade_1 from './componentes/atividade_1';
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_0 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
