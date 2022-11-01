import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image className="h-20 w-20 rounded" source={{uri: imgUrl}}/>

        <LinearGradient
        colors={['transparent','#151515']}
        className="absolute top-0 z-10 h-full w-full rounded">
        </LinearGradient>
        <View className="absolute z-20 p-1 bottom-0">
         <Text className="text-white text-lg font-bold">{title}</Text>

        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard