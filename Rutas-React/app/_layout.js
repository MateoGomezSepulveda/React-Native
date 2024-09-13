import {View , StyleSheet} from 'react-native'
import {Slot}  from 'expo-router';


export default function Layout(){
    return (
        <View style={styles.container}>
            <Slot/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff", 
      flex: 1,
    }
  });