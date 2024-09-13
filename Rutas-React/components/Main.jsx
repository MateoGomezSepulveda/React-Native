import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from 'expo-router';

export default function Main(){

    const insets = useSafeAreaInsets();
    return (
        <View >
          <Text style={styles.text}>Open up App.js to start working on your yujuuuuuuuu chuaploooooooooooooooooo!</Text>      
          <Link style={styles.link}  href="/about">ir al about</Link>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({  
    text: {
      fontSize: 28,
      color: '#ffffff',
    },
    link: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    }
});