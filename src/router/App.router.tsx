import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import { color } from "../styles/globalStyles";
import Buttontab from "../components/buttonTab";
import { Ionicons, Entypo } from '@expo/vector-icons';
import Profile from "../pages/profile";
import PlayList from "../pages/playlist";

const Tab = createBottomTabNavigator();



const AppRouter: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.bg,
          borderColor: color.bg,
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={
          {
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <Buttontab
                Name="Home"
                iconSource={<Ionicons name="library" size={24} color="#444" />}
                iconSourceFocused={<Ionicons name="library" size={24} color="#FFF" />}
                focused={focused}
              />
            )
          }
        }
      />
      <Tab.Screen
        name='Playlist'
        component={PlayList}
        options={
          {
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <Buttontab
                Name="Playlist"
                iconSource={<Entypo name="folder-music" size={24} color="#444" />}
                iconSourceFocused={<Entypo name="folder-music" size={24} color="#FFF" />}
                focused={focused}
              />
            )
          }
        }
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={
          {
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <Buttontab
                Name="Profile"
                iconSource={<Ionicons name="person" size={24} color="#444" />}
                iconSourceFocused={<Ionicons name="person" size={24} color="#FFF" />}
                focused={focused}
              />
            )
          }
        }
      />
    </Tab.Navigator>
  )
}

export default AppRouter;