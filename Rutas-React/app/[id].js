import {Text, View} from 'react-native';
import {Link} from 'expo-router';

export default function Detail() {
    return (
        <View>
            <Text>Esta es la pagina de detalle de un jugador</Text>
            <Link  href="/">ir al inicio</Link>
        </View>
    )
}