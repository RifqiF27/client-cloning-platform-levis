import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainTabView from "./components/Tab";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apolloClient";

export default function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <MainTabView style={styles.container} />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ApolloProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
