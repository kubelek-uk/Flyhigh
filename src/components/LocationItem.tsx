import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from "react-native";
import React, { isValidElement } from "react";
import { RootStackParamList } from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Location, COLORS } from "../constants";
const { width, height } = Dimensions.get("window");

type NavigationProps = StackNavigationProp<RootStackParamList, "Tabs">;
type LocationItemProps = {
  location: Location;
  index: number;
};

const LocationItem = ({ location, index }: LocationItemProps) => {
  const isEven = (num: number): boolean => num % 2 === 0;
  const height = isEven(index + Math.floor(Math.random() * 2)) ? 200 : 256;

  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Location", location)}
      style={{ marginBottom: 12, height, width: width / 2 - 24 }}
    >
      <Image
        source={location.image}
        style={[{ height }, styles.locationImage]}
      />

      <View
        style={[
          styles.locationContent,
          {
            top: height - 40,
          },
        ]}
      >
        <Text style={[styles.locationText, { fontFamily: "Poppins-Bold" }]}>
          {location.name}
        </Text>
        <View style={styles.priceBackground}>
          <Text style={[styles.locationText, { color: "black" }]}>
            £{location.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;

const styles = StyleSheet.create({
  locationImage: {
    width: width / 2 - 24,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 32,
  },
  locationContent: {
    width: width / 2 - 32,
    paddingHorizontal: 16,

    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  locationText: {
    color: COLORS.primary,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  priceBackground: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 10,
    borderRadius: 40,
  },
});
