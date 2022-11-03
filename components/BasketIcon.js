import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const selector = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10  w-full ">
      <TouchableOpacity className="bg-[#00CCBB] flex-row items-center space-x-1  mx-8 rounded-xl  p-3 " onPress={()=>navigation.navigate('Basket')}>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md '>{selector.length}</Text>
        <Text className='text-white font-extrabold  text-lg  text-center  flex-1'>View Basket</Text>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md'>{basketTotal}zł</Text>
      </TouchableOpacity>
    </View> 
  );
};

export default BasketIcon;
