import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../redux/basketSlice";
const DishRow = ({ id, name, description, price, image }) => {
  const [pressed, setPressed] = useState(false);
  const [amount, setAmount] = useState(1);
  const selector = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
  
    if (selector.length == 1) {
      dispatch(removeFromBasket({ id }));
      setPressed(false)
    } else {
      dispatch(removeFromBasket({ id }));
    }
  };

  return (
    <TouchableOpacity
      disabled={pressed ? true : false}
      className="bg-white p-4  px-2  border-t-2  border-gray-200"
      onPress={() => setPressed(true)}
    >
      <View className="flex-row justify-between items-center">
        <View className="space-y-2 flex-1">
          <Text className="text-lg font-bold">{name}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="text-lg font-bold">{price}zł</Text>
        </View>
        <Image
          className="h-20 w-20 rounded"
          source={{
            uri: image,
          }}
        />
      </View>
      {pressed ? (
        <View className="flex-row items-center space-x-4 pt-2 mx-2 ">
          <TouchableOpacity
            disabled={selector.length > 0 ? false : true}
            className="rounded-full"
            onPress={() => removeItemFromBasket()}
          >
            <AntDesign
              className={
                selector.length > 0
                  ? "p-1 bg-[#00CCBB] rounded-full"
                  : " p-1 bg-gray-400 rounded-full"
              }
              name="minus"
              size={22}
              color="white"
            />
          </TouchableOpacity>
          <Text className="font-bold text-xl">{selector.length}</Text>
          <TouchableOpacity
            className="rounded-full"
            onPress={() => addItemToBasket()}
          >
            <AntDesign
              className="p-1 bg-[#00CCBB] rounded-full"
              name="plus"
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default DishRow;
