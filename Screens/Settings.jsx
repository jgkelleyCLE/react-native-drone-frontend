import { View, Text, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Settings = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className="flex-1 bg-gray-200 dark:bg-gray-800 items-center justify-center">
      <Text className="text-2xl dark:text-gray-200">Settings</Text>
      <View className="flex-row items-center">
        <Text className="text-lg pr-2 dark:text-gray-200">Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      
    </View>
  )
}

export default Settings