import React from "react";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

const App = () => {
  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontLoaded) return <AppLoading />;

  return <Routes />;
};

export default App;
