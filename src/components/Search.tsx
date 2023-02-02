import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const { width, height } = Dimensions.get("window");

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={{
          fontFamily: "Poppins-Medium",
          paddingTop: 4,
          flex: 1,
          fontSize: 14,
        }}
        cursorColor={COLORS.secondary}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: width - 32,
    backgroundColor: COLORS.telemetry,

    padding: 16,
    paddingVertical: 12,
    borderRadius: 30,
  },
});
