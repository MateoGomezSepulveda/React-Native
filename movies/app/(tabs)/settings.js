import {useState, useEffect} from 'react';
import {  View, ActivityIndicator, FlatList , StyleSheet, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Home(){
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex:1}}>
            
        </View>
    )
}