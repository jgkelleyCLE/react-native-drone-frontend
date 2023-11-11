import { View, Text, TextInput, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useSearchLocationsQuery } from '../redux/locationApi'
import { useColorScheme } from 'nativewind'
import { COLORS } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {

    const navigation = useNavigation()

    const [searchKey, setSearchKey] = useState("")

    const {colorScheme} = useColorScheme()

    const { data: searchResults, isLoading, isFetching, isSuccess, isError, error } = useSearchLocationsQuery(searchKey)

    let content

    if(isLoading || isFetching){
        content = <ActivityIndicator size="large" color={colorScheme === 'dark' ? COLORS.green400 : COLORS.indigo500} />
    }else if(isSuccess){
        content = <FlatList 
            data={searchResults}
            renderItem={({ item })=> {
                return (
                    <TouchableOpacity className="bg-gray-300 dark:bg-gray-600 w-full self-center rounded-md m-2" onPress={()=> navigation.navigate("HouseDetails", { item })}>
                        <ImageBackground imageStyle={{ borderRadius: 8 }} className="w-[100%] h-[170px] justify-end" source={{ uri: item.images[0].url }}>
                            <View className="bg-gray-900/60 rounded-b-md p-1">
                                <Text className="text-gray-200 text-lg">{item.address}</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}
            contentContainerStyle={{ paddingBottom: 150 }}
            keyExtractor={(item) => item._id}
        />
    }

  return (
    <View>
      <TextInput 
        placeholder='Search locations...'
        className="border-2 border-gray-400 bg-gray-300 dark:bg-gray-600 p-2 w-full self-center text-xl dark:text-gray-200 rounded-md my-2"
        placeholderTextColor={colorScheme === 'dark' ? COLORS.gray200 : COLORS.gray400}
        value={searchKey}
        onChangeText={setSearchKey}
      />
      {content}
    </View>
  )
}

export default SearchBar