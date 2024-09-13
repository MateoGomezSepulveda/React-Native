import { Tabs } from "expo-router"

export default function TabsLayout(){
    return<Tabs 
    screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "yellow",
      }}/>
    
}