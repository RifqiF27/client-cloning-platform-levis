import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, Paragraph, Text, Button, ActivityIndicator } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
 query Product($productId: ID!) {
  product(id: $productId) {
    id
    name
    description
    price
    mainImg
    userMongoId
    User {
      username
    }
    Category {
      name
    }
    Images {
      imgUrl
    }
  }
}
`

export default function Detail({ route }) {
  const { id } = route.params;
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   fetch("https://p3.eref.web.id/pub/products/" + id)
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const {loading, error, data} = useQuery(GET_PRODUCT_BY_ID,{
    variables: {
      productId: id
    }
  })
  console.log(error, data)
  if (loading) return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size={"large"} color="gray"/>
    </View>
  )
  if (error) return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Error! Please reload again!!!</Text>
    </View>
  )
  const product = data.product
  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        <Card style={{ gap: 20, marginBottom: 15, paddingBottom: 10 }}>
          <Image
            source={{ uri: product?.mainImg }}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 500,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Card.Content
            style={{
              position: "relative",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Title>{product?.name}</Title>
              <Text style={{ marginBottom: 10 }}>
                Category : {product?.Category?.name}
              </Text>

              <Text>
                Price :{" "}
                {product?.price?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>
              <Paragraph>Description : {product?.description}</Paragraph>
            </View>
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <EvilIcons name="user" size={24} color="black" />
              <Text>{product?.User?.username}</Text>
            </View>
          </Card.Content>
          <Button
            style={{
              justifyContent: "center",
              padding: 0,
              position: "absolute",
              right: 5,
              backgroundColor: "white",
              top: 5,
              borderCurve: "continuous",
            }}
          >
            <AntDesign
              name="shoppingcart"
              size={26}
              color="black"
              style={{ padding: 2 }}
            />
          </Button>
        </Card>
        {product?.Images?.map((el, index) => {
          return (
            
              <View key={index}  style={{ maxHeight: 600, maxWidth: 395, marginBottom: 15 }}>
                <View style={{ height: "100%", width: "100%" }}>
                  <Image
                    style={{
                      borderRadius: 10,
                      height: "100%",
                      width: "100%",
                      marginBottom: 10,
                      padding: 0,
                      justifyContent: "center",
                    }}
                    source={{ uri: el.imgUrl }}
                  />
                </View>
              </View>
            
          );
        })}
      </ScrollView>
    </>
  );
}
