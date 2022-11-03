import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "react-native-vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <>

    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56"
        />
        <TouchableOpacity
          className="inline-block absolute top-14 left-5 bg-white p-2 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1 items-center">
            <AntDesign name="star" color="#00CCBB" size={22}/>
            <Text className="text-xs text-gray-500">
              {rating} • {genre}
            </Text>
            <Entypo name="location-pin" color="#00CCBB" size={22} />
            <Text className="text-xs text-gray-500">Nearby • {address} </Text>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <AntDesign name="questioncircle" color="#00CCBB" size={18} />
          <Text className="flex-1 font-bold text-md">Have a food alergy?</Text>
          <AntDesign name="right" color="#00CCBB" size={18} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 mb-3 pt-6 font-bold text-lg">
          Menu
        </Text>
        {dishes.map((dish)=> { return(
         <DishRow
         key={dish.id}
         id={dish.id}
         name={dish.name}
         description={dish.description}
         price={dish.price}
         image={dish.image}
         />
         )})}
        
      </View>
    </ScrollView>
    <BasketIcon/>

    </>
  );
};

export default RestaurantScreen;
