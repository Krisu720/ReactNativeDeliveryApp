import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import RestaurandCard from "./RestaurandCard";
const FeaturedRow = ({ title, desc }) => {

  const disheeee = [
    {
      id: "4",
      name: "Classic Sushi",
      description: "Classic Japanesse sushi made by Japan ingredients",
      price: 25,
      image:
        "https://time4sushi.pl/wp-content/uploads/2021/10/desc_hoho_old.jpg",
    },
    {
      id: "1",
      name: "Sushi Hot",
      description: "Hot Japanesse sushi made with wasabi pepper",
      price: 31,
      image:
        "https://img.freepik.com/darmowe-zdjecie/zestaw-sushi-hot-rolls-awokado-california-i-roladki-z-lososia_141793-1279.jpg",
    },
    {
      id: "2",
      name: "Sushi Hot",
      description: "Hot Japanesse sushi made with wasabi pepper",
      price: 31,
      image:
        "https://img.freepik.com/darmowe-zdjecie/zestaw-sushi-hot-rolls-awokado-california-i-roladki-z-lososia_141793-1279.jpg",
    },
    {
      id: "3",
      name: "Sushi Hot",
      description: "Hot Japanesse sushi made with wasabi pepper",
      price: 31,
      image:
        "https://img.freepik.com/darmowe-zdjecie/zestaw-sushi-hot-rolls-awokado-california-i-roladki-z-lososia_141793-1279.jpg",
    },
  ]

  return (
    <View>
      <View className="mt-4 mx-4 flex-row justify-between items-center">
        <Text className="font-bold text-xl">{title}</Text>
        <AntDesign name="arrowright" color="#00CCBB" size={20} />
      </View>
      <Text className="text-gray-500 font-semibold text-md mx-4">{desc}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <RestaurandCard
          id="1"
          imgUrl="https://pysznieczyprzepysznie.pl/wp-content/uploads/2018/01/8A78F303-8427-426F-95F0-CF3D10C97DE9.jpeg"
          title="Yo! Sushi"
          rating={5}
          genre="Japanesse"
          address="123 Main St"
          short_description="Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold."
          dishes={disheeee}
          long={20}
          lat={0}
        />
        <RestaurandCard
          id="1"
          imgUrl="https://pysznieczyprzepysznie.pl/wp-content/uploads/2018/01/8A78F303-8427-426F-95F0-CF3D10C97DE9.jpeg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanesse"
          address="123 Main St"
          short_description="Delicious sushi from east"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurandCard
          id="1"
          imgUrl="https://pysznieczyprzepysznie.pl/wp-content/uploads/2018/01/8A78F303-8427-426F-95F0-CF3D10C97DE9.jpeg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanesse"
          address="123 Main St"
          short_description="Delicious sushi from east"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
