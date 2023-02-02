import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { Icon } from 'react-native-elements';

const Tabbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {
        state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => !isFocused ? navigation.navigate(route.name) : undefined;

            const renderIcon = (): string => {
                const routeName = route.name.toLowerCase();
                if(routeName == "home")
                    return "home"
                else if(routeName == "liked")
                    return "heart"
                else if (routeName == "tickets")
                    return "airplane"
                else if(routeName == "account")
                    return "person"
                else return "?"
            };

            return (
                <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={styles.tab}
                    key={`tab-${index}`}
                >
                    <Icon 
                        size={24}
                        name={renderIcon()}
                        type={"ionicon"}
                        color={ isFocused ? COLORS.secondary : COLORS.disabled }
                        
                    />
                </TouchableOpacity>
            )
        }
        )
      }
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 34,
      left: "7.5%",
      width: "85%",
      backgroundColor: COLORS.primary,

      height: 56,

      shadowOffset: { width: 4, height: 4 },
      shadowColor: "rgba(0,0,0, 0.15)",
      elevation: 4,
  
      borderRadius: 16,
      flexDirection: "row",
      justifyContent: "space-between",

      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%'
    },
    selectedCircle: {
      position: 'absolute',

      height: 44,
      width: 44,

      justifyContent: 'center',

      backgroundColor: COLORS.primary,
      borderRadius: 32,

      bottom: 24
    }
})
