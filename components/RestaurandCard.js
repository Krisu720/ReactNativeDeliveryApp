import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
const RestaurandCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        className="h-36 w-64 "
        source={{
          uri: imgUrl,
        }}
      />
      <View className="w-full px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-1 items-center">
          <AntDesign name="star" color="#00CCBB" size={18} />
          <Text className="text-xs text-gray-500">
            {rating} • {genre}{" "}
          </Text>
         
        </View>
        <View className="flex-row space-x-1 pt-1 items-center">
          <Entypo name="location-pin" color="#00CCBB" size={18} />
          <Text className="text-xs text-gray-500">Nearby • {address} </Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default RestaurandCard;
