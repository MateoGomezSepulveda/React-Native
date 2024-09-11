import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
    <Main/>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000", 
    justifyContent: "center",
    flex: 1,
  }
});
