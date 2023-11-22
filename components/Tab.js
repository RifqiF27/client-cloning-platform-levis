import * as React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AntDesign } from "@expo/vector-icons";
import TabHome from "./TabHome";
import TabAbout from "./TabAbout";

const renderScene = SceneMap({
  home: TabHome,
  about: TabAbout,
});

export default function MainTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "about", title: "About" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderLabel={({ route, focused, color }) => (
            <AntDesign
              name={route.key === "home" ? "home" : "infocirlceo"}
              size={24}
              color={color}
            />
          )}
        />
      )}
    />
  );
}
