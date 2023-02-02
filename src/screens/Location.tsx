import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS } from "../constants";
import { Icon } from "react-native-elements";
import Ticket from "../components/Ticket";

const { width, height } = Dimensions.get("window");

type LocationScreenRouteType = RouteProp<RootStackParamList, "Location">;
type LocationScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "Location"
>;

const Location = () => {
  const { params } = useRoute<LocationScreenRouteType>();
  const navigation = useNavigation<LocationScreenNavigationType>();

  return (
    <View>
      <Image source={params.image} style={styles.image} />

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 4,
          borderRadius: 32,
          position: "absolute",
          top: 60,
          left: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Icon
          type="ionicon"
          name="chevron-back"
          color={COLORS.text}
          size={24}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 28,
            letterSpacing: -1,
            color: COLORS.text,
          }}
        >
          {params.tickets.length} Tickets
        </Text>

        {params.tickets.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  image: {
    width: width + 100,
    height: height,
    resizeMode: "contain",
    top: -(height / 2.5),
  },

  content: {
    flex: 1,
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    width,
    height: height / 1.2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: `#fefefe`,

    paddingTop: 20,

    alignItems: "center",
  },
});
