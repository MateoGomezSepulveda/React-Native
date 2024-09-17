import { StyleSheet, View } from 'react-native';
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
            backgroundColor: '#fff',
            flex: 1,
            paddingHorizontal: 12,
          },
        });
          
