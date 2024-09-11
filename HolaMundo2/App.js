import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image fadeDuration={10} source={icon} style={{ 
        width: 200, 
        height: 100,
        resizeMode: 'center'
        }} 
      />
      <Text style={styles.text}>Esto es una locuraaaaaaaaaaaaaaaa</Text>
      {/* Primero Button no se puede estilar no deja para nada */}
      {/* <Button title='pulsa aqui' onPress={() => alert('Hola')}/> */}
      <TouchableHighlight
        onPress={() => alert('HoLA')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          height: 100,
          backgroundColor: 'green',
          borderRadius: 100,
        }} 
      >
        <Text style={styles.text}>Holis</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15  ,
    fontWeight: 'bold',
  },


});
