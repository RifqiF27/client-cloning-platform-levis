import { StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>About Levi's</Text>
          <Text style={styles.description}>
            Levi's is a well-known American clothing brand that was founded in 1853. The company is famous for its denim jeans and other apparel products. Levi's has a rich history and has been a symbol of American culture and fashion for generations.
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
    },
  });