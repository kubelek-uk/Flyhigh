import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

import { LocationTicket } from "../constants/types";
import { COLORS } from "../constants";
import { Icon } from "react-native-elements";
const { width, height } = Dimensions.get("window");

type TicketProps = {
  ticket: LocationTicket;
};

const Ticket = ({ ticket }: TicketProps) => {
  return (
    <View style={styles.ticket}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: 120 }}>
          <View
            style={{
              backgroundColor: COLORS.secondary,
              width: 20,
              height: 20,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 6,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 10,
                height: 10,
                borderRadius: 12,
              }}
            />
          </View>
          <Text style={{ fontFamily: "Poppins-Medium" }}>{ticket.from}</Text>
        </View>

        <View style={{ alignItems: "flex-start" }}>
          <Icon
            size={20}
            name={"airplane"}
            type={"ionicon"}
            color={COLORS.secondary}
            style={{ marginBottom: 6 }}
          />
          <Text style={{ fontFamily: "Poppins-Bold" }}>{ticket.length}</Text>
        </View>

        <View style={{ width: 120 }}>
          <View
            style={{
              backgroundColor: COLORS.text,
              width: 20,
              height: 20,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              marginBottom: 6,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 10,
                height: 10,
                borderRadius: 12,
              }}
            />
          </View>
          <Text style={{ fontFamily: "Poppins-Medium", textAlign: "right" }}>
            {ticket.to}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 60,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}>
            {ticket.start.time}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              color: COLORS.textLight,
            }}
          >
            {ticket.start.day}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 16,
              textAlign: "right",
            }}
          >
            {ticket.end.time}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              color: COLORS.textLight,
              textAlign: "right",
            }}
          >
            {ticket.end.day}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.telemetry,
          marginTop: 32,
          paddingVertical: ticket.provider.logo.toString().includes("20")
            ? 10
            : 0,
          paddingHorizontal: 12,
          borderRadius: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={ticket.provider.logo}
            style={{
              width: ticket.provider.logo.toString().includes("19") ? 48 : 32,
              height: ticket.provider.logo.toString().includes("19") ? 48 : 32,
            }}
          />
          <Text
            style={{
              marginLeft: 12,
              marginTop: 6,
              fontSize: 16,
              fontFamily: "Poppins-Bold",
            }}
          >
            {ticket.provider.name}
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 12,
            top: 2,
            fontSize: 16,
            fontFamily: "Poppins-Bold",
          }}
        >
          £{ticket.price}
        </Text>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  ticket: {
    width: width - 32,
    marginBottom: 40,

    paddingVertical: 16,
    paddingBottom: 32,
    paddingHorizontal: 16,

    borderRadius: 16,
    backgroundColor: `white`,

    elevation: 4,
    shadowColor: `black`,
    shadowOffset: { width: 0, height: 2 },
  },
});
