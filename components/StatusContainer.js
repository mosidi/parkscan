import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const StatusContainer = ({ carImageUrl, propColor }) => {
  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={styles.statusbarIphone13}>
      <Image
        style={[styles.notchIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.leftSide, styles.leftSideLayout]}>
        <View style={[styles.statusbarTime, styles.leftSideLayout]}>
          <Text style={[styles.text, textStyle]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.rightSideIcon, styles.iconPosition]}
        resizeMode="cover"
        source={carImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    height: 32,
    top: 0,
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldBody1_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    height: 20,
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_sm,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13: {
    width: 390,
    height: 47,
    overflow: "hidden",
    left: 0,
    position: "absolute",
    top: 0,
  },
});

export default StatusContainer;
