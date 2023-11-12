import { View, Text, ActivityIndicator, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useGetAllLocationsQuery } from '../redux/locationApi'
import { COLORS } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'

const Map = () => {

  const navigation = useNavigation()

  const { data: locations, isLoading, isFetching, isSuccess, isError, error } = useGetAllLocationsQuery()

  let content;

  console.log(locations);
  

  if(isLoading || isFetching){
    content = <ActivityIndicator size="large" color={COLORS.indigo500} className="pt-14" />
  }else if(isSuccess){
    content = locations?.map((item, index) => (
      <Marker key={item._id}
        coordinate={{ latitude: item.lat, longitude: item.long }}
      >
        <Pressable className="bg-indigo-500 p-[1px] rounded-full" onPress={()=> navigation.navigate("HouseDetails", { item })}>
          <Image className="w-14 h-14 rounded-full" source={{ uri: item.images[0].url }} />
        </Pressable>
      </Marker>
    ))
  }

  return (
    <View className="flex-1">
      <MapView
        className="w-[100%] h-[100%]"
        initialRegion={{
          latitude: 41.4969,
          longitude: -81.6076,
          latitudeDelta: 0.4022,
          longitudeDelta: 0.4022
        }}
      >
        {content}
      </MapView>
    </View>
  )
}

export default Map