import React, { useEffect, useState } from "react";
import { View , ActivityIndicator, FlatList} from "react-native";
import { GetPlayers } from "../lib/Statics-NFL"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedPlayerCard } from "./PlayerCard";

export  function Main() {
  const [players, setPlayers] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    GetPlayers().then(players =>{
      setPlayers(players);
    })
  }, []);

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}}>
    {players.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"}/>
    ) : (
        <FlatList
        data={players}
        keyExtractor={(player) => player.slug}
        renderItem ={({ item }) => <AnimatedPlayerCard player={item} />}
        />
    )}
    </View>
  );
};


