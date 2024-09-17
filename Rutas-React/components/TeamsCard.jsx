import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export function TeamCard ({team}){
return(
    <Link>
        <View key={team.slug}>
            <View style={styles.card}>
                <Image
                    source={{uri: team.espnLogo1}}
                    style={styles.image}
                />
            </View>
            <Text style={styles.text}>{team.teamName}</Text>
        </View>
    </Link>
    
)
}

// Esta es una animacion para que cada vez que se carge los datos cargen de uno en uno
export function AnimatedTeamCard({ team, index}){
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
            <TeamCard team={team}/>
        </Animated.View>
    )
}



const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        padding: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        marginLeft: 10,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 80,
    },
    text:{
        textAlign: 'center',
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
    }
  });