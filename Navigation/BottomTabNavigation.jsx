import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Settings, Home, Map, Search } from '../Screens'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/styles';
import { useColorScheme } from 'nativewind'

const Tab = createBottomTabNavigator()


// const screenOptions = {
//     tabBarShowLabel: false,
//     headerShown: false,
//     tabBarHideOnKeyboard: true,
//     tabBarStyle: {
//         position: 'absolute',
//         bottom: 0,
//         right: 0,
//         left: 0,
//         height: 80,
//         elevation: 0,
//         backgroundColor: colorScheme == 'dark' ? 'black' : 'white'
//     }
// }


const BottomTabNavigation = () => {

    const { colorScheme } = useColorScheme()

  return (
    <Tab.Navigator screenOptions={{ 
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 80,
            elevation: 0,
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colorScheme === 'dark' ? COLORS.green400 : COLORS.indigo500
    }}>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{ tabBarIcon: ({ focused, color })=> {
                    return <Ionicons name={ focused ? "home" : "home-outline" } size={30} color={ focused ? color : color } />
                }
            }}
        />

        <Tab.Screen 
            name="Search"
            component={Search}
            options={{ tabBarIcon: ({ focused, color }) => {
                return <Ionicons name="search" size={30} color={focused ? color : color} />
            } }}
        />

        <Tab.Screen 
            name="Map" 
            component={Map}
            options={{ tabBarIcon: ({ focused, color }) => {
                return <Ionicons name={focused ? "map" : "map-outline"} size={30} color={focused ? color : color} />
            } }}
        />

        <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{ tabBarIcon: ({ focused, color })=> {
                return <Ionicons name={ focused ? "settings-sharp" : "settings-outline" } size={30} color={focused ? color : color} />
            } }}
         />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation