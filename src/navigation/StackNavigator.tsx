import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { RootStackParamList } from "./routes";
import TabsNavigator from "./TabsNavigator";
import FontHandler from "../handlers/useFonts";
import { Location } from "../screens";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const fontsLoaded = new FontHandler().init();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={TabsNavigator} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
