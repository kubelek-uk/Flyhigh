//imports
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

//constants
import { COLORS, dummyData, Location } from "../constants";
const { width, height } = Dimensions.get("window");

//components
import SearchItems from "../components/SearchItems";
import LocationItem from "../components/LocationItem";
import { ScrollView } from "react-native-gesture-handler";
import Search from "../components/Search";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 32,
          paddingVertical: 16,
          paddingBottom: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-ExtraBold",
            fontSize: 32,
            color: COLORS.text,

            fontStyle: "normal",
            letterSpacing: -1,
            lineHeight: 40,
          }}
        >
          Where would{`\n`}you like to travel?
        </Text>
      </View>

      <Search />
      <SearchItems />

      <View style={styles.locations}>
        {locationsView(dummyData).left}
        {locationsView(dummyData).right}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  locations: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

const locationsView = ({
  locations,
}: {
  locations: Location[];
}): { left: JSX.Element; right: JSX.Element } => {
  const locationsLeft = locations.filter((_, i) => i % 2 === 0);
  const locationsRight = locations.filter((_, i) => i % 2 !== 0);

  return {
    left: (
      <View>
        {locationsLeft.map((loc, i) => (
          <LocationItem key={i} index={i} location={loc} />
        ))}
      </View>
    ),
    right: (
      <View>
        {locationsRight.map((loc, i) => (
          <LocationItem key={i} index={i} location={loc} />
        ))}
      </View>
    ),
  };
};
