import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants";

const options = [
  "All",
  "Flight",
  "Cruise",
  "Train",
  "Hotel",
  "Restaurant",
  "Car",
];

const SearchItems = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 16 }}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            key={`option-${index}`}
            onPress={() => setSelected(index)}
            style={[
              styles.item,
              {
                marginLeft: index == 0 ? 16 : 16,
                marginRight: index == options.length - 1 ? 16 : 0,
                borderRadius: 30,

                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor:
                  selected == index ? COLORS.secondary : COLORS.telemetry,
              },
            ]}
          >
            <Text
              style={{
                color: selected != index ? COLORS.text : COLORS.primary,
                fontFamily: "Poppins-Medium",
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
