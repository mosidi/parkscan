import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import StatusContainer from "../components/StatusContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhone14Pro1 = () => {
  return (
    <View style={styles.iphone14Pro1}>
      <StatusContainer
        carImageUrl={require("../assets/right-side1.png")}
        propColor="#010101"
      />
      <Text style={[styles.parkscan, styles.parkscanFlexBox]}>parkscan</Text>
      <Image
        style={styles.iphone14Pro1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <View style={[styles.iphone14Pro1Inner, styles.parkscanFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-48.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parkscanFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  parkscan: {
    height: "4.69%",
    top: "89.67%",
    left: 133,
    fontSize: FontSize.size_3xl,
    letterSpacing: -2,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: "#1b0133",
    textAlign: "left",
    display: "flex",
    width: 127,
  },
  iphone14Pro1Child: {
    height: "20.07%",
    width: "43.51%",
    top: "39.91%",
    right: "28.24%",
    bottom: "40.02%",
    left: "28.24%",
    borderRadius: 41,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 80,
    height: 108,
  },
  iphone14Pro1Inner: {
    height: "12.56%",
    width: "18.83%",
    top: "43.26%",
    right: "40.71%",
    bottom: "44.19%",
    left: "40.46%",
    flexDirection: "row",
    justifyContent: "center",
  },
  iphone14Pro1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
  },
});

export default IPhone14Pro1;
