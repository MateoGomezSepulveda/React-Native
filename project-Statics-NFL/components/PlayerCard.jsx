import { useEffect, useRef } from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export function PlayerCard ({player}){
return(
    <View key={player.slug} style={styles.card}>
        <Text style={styles.gameText}>{player.espnName}</Text>
        <Image
        source={{uri: player.espnHeadshot}}
        style={styles.image}
        />
    </View>
)
}

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
      marginBottom: 20,
      padding: 30,
      borderRadius: 8,
    },
    image:{
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    gameText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
      fontSize: 16,
    }
  });