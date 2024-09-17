import { ScrollView } from "react-native";
import { Text } from "react-native";
import { Link } from 'expo-router';


export default function About(){
    return(
        <ScrollView>
        <Link asChild href="/">
        </Link>
        <Text >
          Sobre el proyecto
        </Text>

        <Text >
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>

        <Text >
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>
      </ScrollView>
    )
}