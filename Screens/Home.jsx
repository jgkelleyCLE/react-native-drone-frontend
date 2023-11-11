import { View, Text, ActivityIndicator, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { useGetAllLocationsQuery } from '../redux/locationApi'
import { COLORS } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation()

    const { data: locations, isLoading, isSuccess, isError, error } = useGetAllLocationsQuery()

    let content;

    if(isLoading){
        content = <ActivityIndicator size="large" color="black" />
    }else if(isSuccess){
        content = <FlatList
            data={locations}
            renderItem={({ item }) => {
                return (
                    <Pressable className="w-[100%] rounded-md m-2 bg-white dark:bg-gray-600 self-center" onPress={()=> navigation.navigate("HouseDetails", { item })}>
                        <Image className="w-[100%] h-[200px] rounded-t-md" source={{ uri: item.images[0].url }} />
                        <Text className="p-2 text-lg dark:text-gray-200">{item.address}</Text>
                    </Pressable>
                )
            }}
            contentContainerStyle={{ paddingBottom: 60 }}
        />
    }else if(isError){
        console.log(error)
    }

  return (
    <View className="flex-1 pt-12 px-4 bg-gray-200 dark:bg-gray-800">
      <Text className="text-2xl text-neutral-600 dark:text-gray-200">Locations</Text>
      {content}
    </View>
  )
}

export default Home