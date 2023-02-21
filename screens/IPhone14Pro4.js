import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusContainer from "../components/StatusContainer";
import ScanContainer from "../components/ScanContainer";
import ParkingDiscContainer from "../components/ParkingDiscContainer";
import ImageContainer from "../components/ImageContainer";
import ParkContainer from "../components/ParkContainer";
import {
  FontFamily,
  Margin,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const IPhone14Pro4 = () => {
  return (
    <View style={styles.iphone14Pro4}>
      <Image
        style={[
          styles.unsplashp5a9mj4vlsIcon,
          styles.iphone14Pro4InnerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls.png")}
      />
      <StatusContainer carImageUrl={require("../assets/right-side1.png")} />
      <LinearGradient
        style={[styles.iphone14Pro4Child, styles.homeindicatorPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
      <Text style={styles.byContinuingYouContainer}>
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeToOur}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing you agree to our `}</Text>
          </Text>
          <Text style={styles.termsOfUsePrivacyPolicy}>
            <Text>Terms of Use</Text>
            <Text>{` & `}</Text>
            <Text style={styles.privacyPolicy}>Privacy Policy</Text>
          </Text>
        </Text>
      </Text>
      <Text style={styles.noMoreFines}>No more fines through AI.</Text>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.iphone14Pro4Item}
        resizeMode="cover"
        source={require("../assets/group-46.png")}
      />
      <ScanContainer
        iconCheckCircle={require("../assets/-icon-check-circle3.png")}
        vector9={require("../assets/vector-9.png")}
      />
      <ParkingDiscContainer
        group59={require("../assets/group-59.png")}
        vector9={require("../assets/vector-91.png")}
      />
      <ImageContainer
        carImageUrl={require("../assets/vector17.png")}
        vehicleImageUrl={require("../assets/vector-92.png")}
      />
      <ParkContainer
        carImageUrl={require("../assets/-icon-check-circle4.png")}
        vehicleImageUrl={require("../assets/vector-93.png")}
      />
      <View
        style={[
          styles.iphone14Pro4Inner,
          styles.googleFlexBox,
          styles.iphone14Pro4InnerPosition,
        ]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
      <Pressable style={[styles.logGoogle, styles.googleFlexBox]}>
        <View style={[styles.googleParent, styles.googleFlexBox]}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text style={[styles.continueWithGoogle, styles.ml9]}>
            Continue with Google
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml9: {
    marginLeft: 9,
  },
  iphone14Pro4InnerPosition: {
    top: "50%",
    position: "absolute",
  },
  homeindicatorPosition: {
    bottom: "0%",
    position: "absolute",
  },
  googleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -423,
    right: -65,
    maxWidth: "100%",
    height: 861,
    left: 0,
    overflow: "hidden",
  },
  iphone14Pro4Child: {
    height: "50.59%",
    top: "49.41%",
    right: -3,
    backgroundColor: "transparent",
    left: 0,
  },
  byContinuingYou: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byContinuingYouAgreeToOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  privacyPolicy: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  termsOfUsePrivacyPolicy: {
    margin: Margin.m_sm,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    height: "4.69%",
    top: "89.2%",
    left: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 11,
    width: 132,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  noMoreFines: {
    height: "4.11%",
    top: "74.88%",
    left: 128,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    width: 132,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  homeIndicator: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: "2.46%",
    top: "97.54%",
    right: 9,
    left: 10,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iphone14Pro4Item: {
    height: "6.5%",
    marginLeft: -27,
    top: "66.64%",
    bottom: "26.86%",
    left: "50%",
    maxHeight: "100%",
    width: 58,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  iphone14Pro4Inner: {
    marginTop: -280,
    right: 121,
    left: 168,
    height: 34,
    alignItems: "center",
  },
  googleIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  continueWithGoogle: {
    fontSize: FontSize.defaultBoldBody1_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  googleParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  logGoogle: {
    height: "5.9%",
    top: "82.43%",
    right: 49,
    bottom: "11.67%",
    left: 54,
    backgroundColor: Color.tomato,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_sm,
    alignItems: "flex-end",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iphone14Pro4: {
    backgroundColor: Color.black,
    height: 846,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default IPhone14Pro4;
