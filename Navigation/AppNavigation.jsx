import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './BottomTabNavigation'
import { HouseDetails } from '../Screens'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} />
            <Stack.Screen name="HouseDetails" component={HouseDetails} />
        </Stack.Navigator>
    )
}


const AppNavigation = () => {
  return (
    <NavigationContainer>

        <Navigator />

    </NavigationContainer>
  )
}

export default AppNavigation