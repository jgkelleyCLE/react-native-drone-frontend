import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'

const Search = () => {
  return (
    <View className="flex-1 pt-12 px-4 bg-gray-200 dark:bg-gray-800">
      <SearchBar />
    </View>
  )
}

export default Search