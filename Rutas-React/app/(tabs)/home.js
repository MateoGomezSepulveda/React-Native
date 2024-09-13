import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Home(){
    return (
        <View style={styles.container}>
        <Text>Este es el home para mi app estoy muy feliz por que ya se hacer rutas</Text>        
        <Link  href="/">ir al inicio</Link>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#4302ad',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});