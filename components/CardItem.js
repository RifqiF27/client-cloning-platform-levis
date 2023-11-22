import { Image, Pressable, View } from "react-native";
import { Card, Title, Paragraph, Text, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CardItem({ product }) {
  const navigation = useNavigation();
  return (
    <>
      <Card style={{ gap: 20, marginBottom: 20 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Details", { id: product?.id });
          }}
        >
          <Image
            source={{ uri: product.mainImg }}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 500,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </Pressable>
        <Card.Content style={{ position: "relative" }}>
          <View>
            <Title>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <Text style={{ fontWeight: "bold" }}>
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Text>
          </View>
          <Button
            style={{
              justifyContent: "center",
              padding: 0,
              position: "absolute",
              right: 0,
              top: 6,
            }}
          >
            <AntDesign
              name="shoppingcart"
              size={40}
              color="black"
              style={{ padding: 20 }}
            />
          </Button>
        </Card.Content>
      </Card>
      
    </>
  );
}
