import { Tabs } from "expo-router";
import { HomeIcon, SetttingIcon, UserIcon } from "../../components/icons";

export default function TabsLayout(){
    return(
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#000" },
            tabBarActiveTintColor: "white",
        }}
    >
    <Tabs.Screen
        name="index"
        options={{
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }}
    />
    <Tabs.Screen
        name="settings"
        options={{
            title: "Settings",
            tabBarIcon: ({ color }) => <SetttingIcon color={color} />
        }}
    />

    <Tabs.Screen
        name="perfil"
        options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => <UserIcon color={color} />
        }}
    />
    </Tabs>
    )
}