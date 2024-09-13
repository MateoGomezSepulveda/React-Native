import { Tabs } from "expo-router";

export default function TabsLayout() {
    return ( 
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#000" },
            tabBarActiveTintColor: "yellow",
          }}>
            <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
        </Tabs>
    )
}

