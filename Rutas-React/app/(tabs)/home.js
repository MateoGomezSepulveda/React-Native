import React, { useState, useEffect } from 'react';
import {  View, ActivityIndicator, FlatList , StyleSheet, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Logo} from '../../components/Logo'
import { GetPlayers, GetTeams } from '../../lib/Statics-NFL';
import { Link } from 'expo-router';
import { AnimatedTeamCard } from '../../components/TeamsCard';
import { AnimatedPlayerCard } from '../../components/PlayerCard';
import { InfoIcon } from '../../components/icons';


export default function Home() {
  const [teams, setTeams] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
      GetTeams().then((teams) =>{
        setTeams(teams);
      })
    }, []);

    const [players, setPlayers] = useState([]);
    useEffect(() => {
      GetPlayers().then((players) =>{
        setPlayers(players);
      })
    }, []);

    return (
      // el insests nos sirve para poder manejar correctamente los tamaños de padding en nuestra pagina
      <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex:1}}>
        <View  style={styles.header}>
          <Logo/>
            <Text style={styles.textHeader}>NFL</Text>
            <Link asChild href="/" style={styles.linkabout}>
              <Pressable>
                {({ pressed }) =><InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />} 
              </Pressable>
            </Link>
        </View>


        {/* Esto nos sirve para poder haer un indicador de carga el podemos poner el color que cqueramos y size es paa el tamaño */}
        {teams.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={"#000"} size={"large"}/>
        </View> 
      ) : (


        // El flaslist nos sirve para renderizar la pagina de mejor manera que el .map y tambien nos ayuda 
        // con el scroll no necesitamos usar ScrollView
          <FlatList
          data={teams}
          keyExtractor={(team) => team.slug}
          renderItem ={({ item, index }) => <AnimatedTeamCard team={item} index={index} />}
          horizontal
          contentContainerStyle={styles.flatList}
          />
      )}
        <FlatList
          data={players.slice(0,10)}
          keyExtractor={(player) => player.slug}
          renderItem ={({ item, index }) => <AnimatedPlayerCard player={item} index={index} />}
          />
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
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  flatList: {
    paddingBottom: 40,
  },
});

