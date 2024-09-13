import React, { useEffect, useState } from "react";
import { View , ActivityIndicator, FlatList} from "react-native";
import { GetPlayers } from "../lib/Statics-NFL"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedPlayerCard } from "./PlayerCard";
import {Logo} from './Logo'

export  function Main() {
  const [players, setPlayers] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    GetPlayers().then(players =>{
      setPlayers(players);
    })
  }, []);

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <Logo />
    {players.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"}/>
    ) : (
        <FlatList
        data={players.slice(0,10)}
        keyExtractor={(player) => player.slug}
        renderItem ={({ item }) => <AnimatedPlayerCard player={item} />}
        />
    )}
    </View>
  );
};


