import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../GlobalStyles";

const ImageContainer = ({ carImageUrl, vehicleImageUrl }) => {
  return (
    <View style={styles.iphone14Pro4Inner}>
      <View style={[styles.vectorParent, styles.youDontNeedFlexBox]}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={carImageUrl}
        />
        <Image
          style={[styles.frameChild, styles.ml13]}
          resizeMode="cover"
          source={vehicleImageUrl}
        />
        <Text
          style={[styles.youDontNeed, styles.ml13, styles.youDontNeedFlexBox]}
        >
          You don’t need to pay
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_lg,
  },
  youDontNeedFlexBox: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 33,
    height: 25,
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  youDontNeed: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.midnightblue_200,
    textAlign: "left",
    display: "flex",
  },
  vectorParent: {
    flexDirection: "row",
    paddingLeft: Padding.p_lg,
    paddingRight: Padding.p_2xs,
  },
  iphone14Pro4Inner: {
    position: "absolute",
    height: "7.28%",
    top: "29.23%",
    right: 80,
    bottom: "63.5%",
    left: 37,
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_200,
    shadowColor: "rgba(11, 49, 50, 0.31)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#0b3132",
    borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
  },
});

export default ImageContainer;
