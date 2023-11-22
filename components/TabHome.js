import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator();

export default function TabHome() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
      </View>
    </>
  );
}
