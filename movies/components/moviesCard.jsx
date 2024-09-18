import { useEffect, useRef } from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export function MoviesCard(movie){
    return(
        <View>
        <Text style={styles.gameText}>{movie.title}</Text>   
        <Image
            source={{uri: movie.image}}
            style={styles.image}
        />
        <View>
        <Text style={styles.gameText}>{movie.description}</Text>   
        <Text style={styles.gameText}>{movie.year}</Text>
        </View>
        </View>
    )
}

// Esta es una animacion para que cada vez que se carge los datos cargen de uno en uno
export function AnimatedMovieCard({ movie, index}){
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
            <MoviesCard movie={movie}/>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#000",
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