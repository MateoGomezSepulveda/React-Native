import {useState, useEffect} from 'react';
import {  View, ActivityIndicator, FlatList , StyleSheet, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from '../../components/Logo';
import { InfoIcon } from '../../components/icons';
import { AnimatedMovieCard, MoviesCard } from '../../components/moviesCard';
import { GetMovies } from '../../lib/List-movies';


export default function Index(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        GetMovies().then((movies) =>{
        setMovies(movies);
      })
    }, []);

    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex:1}}>
            <View style={styles.header}>
                <Logo/>
                    <Link asChild href="/about" style={styles.linkabout}>
                        <Pressable>
                            {({ pressed }) =><InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />} 
                        </Pressable>
                    </Link>
                
            </View>

            {/* Esto nos sirve para poder haer un indicador de carga el podemos poner el color que cqueramos y size es paa el tamaño */}
            {movies.length === 0 ? (
            <View style={styles.loadingContainer}>
            <ActivityIndicator color={"#000"} size={"large"}/>
            </View> 
            ) : (
            
            // El flaslist nos sirve para renderizar la pagina de mejor manera que el .map y tambien nos ayuda 
            // con el scroll no necesitamos usar ScrollView
            <FlatList
            data={movies}
            keyExtractor={(movie) => movie.slug}
            renderItem ={({ item, index }) => <AnimatedMovieCard movie={item} index={index} />}
            />
            )} 

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    linkabout: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    },
    header:{
        flexDirection: 'row',
        padding: 10,
    },
});