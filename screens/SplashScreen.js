import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import StatusContainer from "../components/StatusContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.iphone14Pro1}>
      <StatusContainer
        carImageUrl={require("../assets/right-side1.png")}
        propColor="#010101"
      />
      <Text style={styles.parkscan}>parkscan</Text>
      <Image
        style={styles.iphone14Pro1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <Image
        style={styles.iphone14Pro1Item}
        resizeMode="cover"
        source={require("../assets/group-48.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parkscan: {
    top: 764,
    left: 133,
    fontSize: FontSize.size_3xl,
    letterSpacing: -2,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: "#1b0133",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 40,
    position: "absolute",
  },
  iphone14Pro1Child: {
    top: 340,
    left: 111,
    borderRadius: 41,
    width: 171,
    height: 171,
    position: "absolute",
  },
  iphone14Pro1Item: {
    top: 372,
    left: 159,
    width: 80,
    height: 108,
    position: "absolute",
  },
  iphone14Pro1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default SplashScreen;
