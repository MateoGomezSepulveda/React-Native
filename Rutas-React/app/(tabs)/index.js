import { StyleSheet, Text, View } from 'react-native';
import Main from '../../components/Main';


export default function Index(){
        return (
            <View style={styles.container}>
              <Main/>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
            container: {
            backgroundColor: '#000000',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
          },
        });
          
