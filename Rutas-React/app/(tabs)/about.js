import {View, Text} from 'react-native';
import { Link } from 'expo-router';


export default function About(){
    return (
        <View>
        <Text>para poder hacer que toco se vea uniformemente bien desde el header hasta el footer tendriamos tambien que instalar una dependencia de reac-native con el siguiente codigo  npx expo install react-native-safe-area-context</Text>        
        <Link  href="/">ir al inicio</Link>
        </View>
    )   
}