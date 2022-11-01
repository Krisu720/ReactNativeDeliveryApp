import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Categories from "../components/Categories";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Navbar/> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 p-4 rounded-full bg-gray-300"
          source={{
            uri: "https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current location
            <AntDesign name="down" size={20} color="#00CCBB" />
          </Text>
        </View>
          <AntDesign name="user" size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 p-3 bg-gray-200">
          <AntDesign name="search1" size={20} color="#00CCBB" />
          <TextInput className='w-full' placeholder="Restaurants" keyboardType="default" />
        </View>
        <AntDesign name="filter" size={20} color="#00CCBB" />
      </View>
        {/* Body */}
          <ScrollView className='bg-gray-100'
          
          >
            {/* categories */}
            <Categories/>
            {/* featured row */}
          </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
