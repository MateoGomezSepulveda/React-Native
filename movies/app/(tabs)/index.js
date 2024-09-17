import {useState, useEffect} from 'react';
import {  View, ActivityIndicator, FlatList , StyleSheet, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from '../../components/Logo';
import { InfoIcon } from '../../components/icons';


export default function Index(){
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex:1}}>
            <View style={styles.header}>
                <Logo/>
                    <Text style={styles.textHeader}>Movies</Text>
                    <Link asChild href="/about" style={styles.linkabout}>
                    <Pressable>
                        {({ pressed }) =><InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />} 
                    </Pressable>
                    </Link>
            </View>        
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