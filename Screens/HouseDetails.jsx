import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useGetLocationQuery } from '../redux/locationApi'

const HouseDetails = ({ route }) => {

  const navigation = useNavigation()

  console.log(route.params.item._id)

  const { data: location, isLoading, isSuccess, isError, error } = useGetLocationQuery(route.params.item._id)


  return (
    <View className="bg-gray-200 flex-1 dark:bg-gray-800" >
      <Image className="w-[100%] h-[250px]" source={{ uri: location?.images[0].url }} />

      <View className="pl-4">
        <Text className="text-xl  text-neutral-600 dark:text-gray-200">{location?.address}</Text>

      </View>

      <Pressable className="bg-indigo-500 dark:bg-indigo-800 p-2 rounded-md absolute bottom-8 items-center w-11/12 self-center" onPress={()=> navigation.goBack()}>
        <Text className="text-white text-2xl">Go Back</Text>
      </Pressable>

      
      
    </View>
  )
}

export default HouseDetails