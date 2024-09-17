import { useEffect, useRef } from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export function PlayerCard ({player}){
return(
    <View key={player.slug} style={styles.card}>
        <Image
            source={{uri: player.espnHeadshot}}
            style={styles.image}
        />
        <View>
        <Text style={styles.gameText}>{player.espnName}</Text>   
        <Text style={styles.gameText}>{player.school}</Text>
        </View>
    </View>
)
}

// Esta es una animacion para que cada vez que se carge los datos cargen de uno en uno
export function AnimatedPlayerCard({ player, index}){
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 100,
            delay: index * 250,
            useNativeDriver: true,
        }).start()
    }, [opacity, index])

    return(
        <Animated.View style={{opacity: opacity}}>
            <PlayerCard player={player}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#5f5f60",
        flexDirection: 'row',
        flex:1,
        marginBottom: 10,
        padding: 20,
        borderRadius: 20,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    gameText: {
        marginLeft: 10, // Añadir margen para separar el texto de la imagen
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
  });