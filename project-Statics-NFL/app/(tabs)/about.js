import { ScrollView } from "react-native";
import { Text } from "react-native";

export default function About(){
    return(
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable>
            <HomeIcon />
          </StyledPressable>
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
    </Screen>
    )
}