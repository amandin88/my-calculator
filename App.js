import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MainScreen from "./screens/MainScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  // load the date and wait it finishes first
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MainScreen />;
}
