import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* <CategoryCard/> */}
      <CategoryCard
        imgUrl="https://ocdn.eu/pulscms-transforms/1/oP-k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STCaYxMDE4ZmUGkwXNBLDNAnbeAAGhMAE/domowa-pizza.jpg"
        title="pizza"
      />
      <CategoryCard
        imgUrl="https://pysznieczyprzepysznie.pl/wp-content/uploads/2018/01/8A78F303-8427-426F-95F0-CF3D10C97DE9.jpeg"
        title="sushi"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
      <CategoryCard
        imgUrl="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
        title="chicken"
      />
    </ScrollView>
  );
};

export default Categories;
