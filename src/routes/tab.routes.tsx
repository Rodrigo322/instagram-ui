import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

import { Image } from "react-native";
import House from "../assets/house.svg";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import Union from "../assets/union.svg";

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: "#000",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
        name="Home2"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Union color={color} />,
        }}
        name="Home3"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Store color={color} />,
        }}
        name="Home4"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 50 }}
              source={{ uri: "https://github.com/rodrigo322.png" }}
            />
          ),
        }}
        name="Home5"
        component={Home}
      />
    </Tab.Navigator>
  );
}
