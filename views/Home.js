import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CardItem from "../components/CardItem";
import { useNavigation } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";
import { ActivityIndicator, Text } from "react-native-paper";

const GET_PRODUCT = gql`
  query {
    products {
      id
      name
      description
      price
      mainImg
    }
  }
`;

export default function Home() {
  const navigation = useNavigation();
  // const [products, setProduct] = useState([]);
  // useEffect(() => {
  //   fetch("https://p3.eref.web.id/pub/products")
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json));
  // }, []);
  const { loading, error, data } = useQuery(GET_PRODUCT);
  console.log(data);
  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="gray" />
      </View>
    );
  if (error)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error! Please reload again!!!</Text>
      </View>
    );
  const products = data.products || [];
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <CardItem product={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
