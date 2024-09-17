import React, { useState, useEffect } from 'react';
import {  View, ActivityIndicator, FlatList , StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedPlayerCard } from "./PlayerCard";
// import { Link } from 'expo-router';
import {Logo} from './Logo'
import { GetPlayers } from '../lib/Statics-NFL';
import { Link } from 'expo-router';


export default function Main(){
    const [players, setPlayers] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
      GetPlayers().then((players) =>{
        setPlayers(players);
      })
    }, []);

    return (
      // el insests nos sirve para poder manejar correctamente los tamaños de padding en nuestra pagina
      <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}>
        <View  style={styles.header}>
          <Logo/>
          <Text style={styles.textHeader}>NFL</Text>
          <Link href="/about" style={styles.linkabout} >ir al about</Link>
        </View>


        {/* Esto nos sirve para poder haer un indicador de carga el podemos poner el color que cqueramos y size es paa el tamaño */}
        {players.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={"#000"} size={"large"}/>
        </View> 
      ) : (


        // El flaslist nos sirve para renderizar la pagina de mejor manera que el .map y tambien nos ayuda 
        // con el scroll no necesitamos usar ScrollView
          <FlatList
          data={players.slice(0,10)}
          keyExtractor={(player) => player.slug}
          renderItem ={({ item, index }) => <AnimatedPlayerCard player={item} index={index} />}
          />
          
      )}
      </View>
    );
}

const styles = StyleSheet.create({
  loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  linkabout: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  header:{
    flexDirection: 'row',
    padding: 10,
    justifyContent:'space-between',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  }
});


